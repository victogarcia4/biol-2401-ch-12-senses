/* ==========================================================================
   Chapter 12 Interactive Presentation & Bloom's Analysis Quiz Engine
   Uses GSAP 3 for fluid transitions and staggered reveals
   ========================================================================== */

(() => {
  "use strict";

  const sourceSlides = window.SLIDES || [];
  const slos = window.SLOS || [];
  const optionLetters = ["A", "B", "C", "D"];
  let slides = shuffleQuizChoices(sourceSlides);

  const state = {
    currentIndex: 0,
    // Map of sloId -> { selectedIndex, isCorrect, attempts }
    quizResults: {}
  };

  // DOM references
  const els = {
    stage: document.getElementById("slideStage"),
    sloRail: document.getElementById("sloRail"),
    scoreText: document.getElementById("scoreText"),
    progressFill: document.getElementById("progressFill"),
    slideCounter: document.getElementById("slideCounter"),
    slideSectionLabel: document.getElementById("slideSectionLabel"),
    btnPrev: document.getElementById("btnPrev"),
    btnNext: document.getElementById("btnNext"),
    btnOverview: document.getElementById("btnOverview"),
    btnFullscreen: document.getElementById("btnFullscreen"),
    overviewModal: document.getElementById("overviewModal"),
    overviewGrid: document.getElementById("overviewGrid"),
    closeOverview: document.getElementById("closeOverview"),
    lightboxModal: document.getElementById("lightboxModal"),
    lightboxImg: document.getElementById("lightboxImg"),
    lightboxCaption: document.getElementById("lightboxCaption"),
    lightboxSource: document.getElementById("lightboxSource"),
    closeLightbox: document.getElementById("closeLightbox")
  };

  /* ------------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------------ */
  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  function shuffleQuizChoices(deck) {
    const quizzes = deck.filter((slide) => slide.type === "quiz");
    const positions = shuffle(optionLetters.map((_, index) => index));
    const correctPositions = shuffle(quizzes.map((_, index) => positions[index % positions.length]));

    return deck.map((slide) => {
      if (slide.type !== "quiz") return slide;

      const correctIndex = correctPositions.pop();
      const distractors = slide.options.filter((_, index) => index !== slide.correctIndex);
      const options = shuffle(distractors);
      options.splice(correctIndex, 0, slide.options[slide.correctIndex]);
      return { ...slide, options, correctIndex };
    });
  }

  function getSloById(id) {
    return slos.find((s) => s.id === id) || null;
  }

  function getFirstSlideIndexForSlo(sloId) {
    return slides.findIndex((s) => s.sloId === sloId);
  }

  function getQuizSlideIndexForSlo(sloId) {
    return slides.findIndex((s) => s.sloId === sloId && s.type === "quiz");
  }

  function getMasteredCount() {
    return Object.values(state.quizResults).filter((r) => r && r.isCorrect).length;
  }

  function updateScoreBadge() {
    const mastered = getMasteredCount();
    els.scoreText.textContent = `${mastered} / ${slos.length} SLOs`;
  }

  /* ------------------------------------------------------------------------
     Top SLO Rail
     ------------------------------------------------------------------------ */
  function renderSloRail() {
    const currentSlide = slides[state.currentIndex];
    const items = [];

    // Home pill
    items.push(`
      <button type="button" class="slo-pill ${currentSlide.type === "cover" ? "active" : ""}" data-jump="0" title="Chapter 12 Cover">
        Home
      </button>
    `);

    // SLO 1-8 pills
    slos.forEach((slo) => {
      const idx = getFirstSlideIndexForSlo(slo.id);
      const res = state.quizResults[slo.id];
      const isMastered = Boolean(res && res.isCorrect);
      const isActive = currentSlide.sloId === slo.id;
      items.push(`
        <button type="button"
                class="slo-pill ${isActive ? "active" : ""} ${isMastered ? "mastered" : ""}"
                data-jump="${idx}"
                title="${slo.short}: ${slo.topic}">
          <span>${slo.short}</span>
          ${isMastered ? '<span class="pill-check" aria-label="Mastered">&#10003;</span>' : ""}
        </button>
      `);
    });

    // Scorecard pill
    const summaryIdx = slides.length - 1;
    items.push(`
      <button type="button" class="slo-pill ${currentSlide.type === "summary" ? "active" : ""}" data-jump="${summaryIdx}" title="Mastery Scorecard">
        Scorecard
      </button>
    `);

    els.sloRail.innerHTML = items.join("");
    els.sloRail.querySelectorAll("[data-jump]").forEach((btn) => {
      btn.addEventListener("click", () => {
        goToSlide(Number(btn.dataset.jump));
      });
    });
  }

  /* ------------------------------------------------------------------------
     Renderers by Slide Type
     ------------------------------------------------------------------------ */
  function renderFigureCard(slide) {
    const badgeClass = slide.isNano ? "img-source-badge nano" : "img-source-badge";
    return `
      <figure class="figure-card anim-item">
        <div class="figure-img-wrap" data-lightbox="true" role="button" tabindex="0" aria-label="Enlarge anatomical figure">
          <img src="${slide.image}" alt="${slide.imageCaption}" loading="eager" />
          <span class="zoom-chip">Click to Zoom</span>
        </div>
        <figcaption class="figure-caption">${slide.imageCaption}</figcaption>
        <div class="figure-meta-row">
          <span class="${badgeClass}">${slide.imageSource}</span>
          <span style="font-size:0.72rem;color:var(--ink-muted);">1 Visual / Slide</span>
        </div>
      </figure>
    `;
  }

  function renderContentBlocks(blocks) {
    return blocks
      .map((block) => {
        if (block.type === "pathway") {
          const stepsHtml = block.steps
            .map((step, i) => {
              const arrow = i < block.steps.length - 1 ? '<span class="pathway-arrow" aria-hidden="true">&rarr;</span>' : "";
              return `<span class="pathway-step">${step}</span>${arrow}`;
            })
            .join("");
          return `<div class="pathway-strip anim-item">${stepsHtml}</div>`;
        }

        if (block.type === "table") {
          const head = block.headers.map((h) => `<th>${h}</th>`).join("");
          const body = block.rows
            .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
            .join("");
          return `
            <table class="data-table anim-item">
              <thead><tr>${head}</tr></thead>
              <tbody>${body}</tbody>
            </table>
          `;
        }

        if (block.type === "clinical") {
          return `
            <div class="clinical-box anim-item">
              <div class="clinical-box-title">${block.title}</div>
              <p>${block.text}</p>
            </div>
          `;
        }

        if (block.type === "cards") {
          const colClass = block.columns === 1 ? "concept-grid single-col" : "concept-grid";
          const cardsHtml = block.items
            .map((item) => {
              const accentClass = item.accent ? `accent-${item.accent}` : "";
              const listHtml = item.bullets
                ? `<ul>${item.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`
                : `<p>${item.text || ""}</p>`;
              return `
                <section class="concept-card ${accentClass} anim-item">
                  <h3>${item.title}</h3>
                  ${listHtml}
                </section>
              `;
            })
            .join("");
          return `<div class="${colClass}">${cardsHtml}</div>`;
        }

        return "";
      })
      .join("");
  }

  function renderCoverSlide(slide) {
    const roadmapHtml = slos
      .map(
        (slo) => `
        <div class="roadmap-item anim-item">
          <span class="roadmap-num">${slo.id}</span>
          <span>${slo.topic}</span>
        </div>
      `
      )
      .join("");

    return `
      <div class="slide-cover">
        <div class="cover-left">
          <span class="cover-kicker anim-item">Hole's Human A&amp;P 15e &bull; Interactive Lecture</span>
          <h2 class="cover-title anim-item">${slide.title}</h2>
          <p class="cover-subtitle anim-item">${slide.subtitle}</p>
          <div class="cover-roadmap">${roadmapHtml}</div>
          <div class="cover-cta-row anim-item">
            <button type="button" class="btn-hero" id="btnStartLecture">
              Start Chapter 12 Lecture &rarr;
            </button>
            <span class="cover-meta">8 SLOs &bull; 8 Bloom's Analysis Checks &bull; ${slides.length} Slides</span>
          </div>
        </div>
        <div class="cover-right">
          <figure class="cover-figure anim-item" data-lightbox="true" role="button" tabindex="0" aria-label="Enlarge cover illustration">
            <img src="${slide.image}" alt="${slide.imageCaption}" />
            <figcaption>
              <span>${slide.imageCaption}</span>
              <span class="img-source-badge nano">${slide.imageSource}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    `;
  }

  function renderContentSlide(slide) {
    const slo = getSloById(slide.sloId);
    return `
      <div class="slide-accent-stripe"></div>
      <div class="slide-content-layout">
        <div class="slide-header">
          <div class="slide-badges anim-item">
            <span class="badge badge-slo">${slo.short}: ${slo.topic}</span>
            <span class="badge badge-section">${slide.section}</span>
          </div>
          <h2 class="slide-title anim-item">${slide.title}</h2>
          <div class="slo-objective-bar anim-item">
            <strong>Learning Objective:</strong>${slo.statement}
          </div>
        </div>
        <div class="slide-body">
          <div class="slide-text-col">
            ${renderContentBlocks(slide.blocks)}
          </div>
          <div class="slide-media-col">
            ${renderFigureCard(slide)}
          </div>
        </div>
      </div>
    `;
  }

  function renderQuizSlide(slide) {
    const slo = getSloById(slide.sloId);
    const saved = state.quizResults[slide.sloId];
    const optionsHtml = slide.options
      .map((opt, idx) => {
        let extraClass = "";
        let disabledAttr = "";
        if (saved) {
          disabledAttr = "disabled";
          if (idx === slide.correctIndex) {
            extraClass = "correct";
          } else if (idx === saved.selectedIndex && !saved.isCorrect) {
            extraClass = "incorrect";
          } else {
            extraClass = "dimmed";
          }
        }
        return `
          <button type="button" class="quiz-option anim-item ${extraClass}" data-option="${idx}" ${disabledAttr}>
            <span class="option-letter">${optionLetters[idx]}</span>
            <span>${opt}</span>
          </button>
        `;
      })
      .join("");

    let feedbackHtml = "";
    if (saved) {
      const fbClass = saved.isCorrect ? "is-correct" : "is-incorrect";
      const fbTitle = saved.isCorrect
        ? "SLO Mastered — Accurate Bloom's Analysis!"
        : "Not Quite — Review the Physiological Analysis";
      const nextLabel = state.currentIndex < slides.length - 1 ? "Continue to Next Section &rarr;" : "View Scorecard &rarr;";
      feedbackHtml = `
        <div class="quiz-feedback ${fbClass} anim-item">
          <div class="feedback-heading">${fbTitle}</div>
          <p class="feedback-rationale">${slide.rationale}</p>
          <div class="quiz-actions">
            ${!saved.isCorrect ? '<button type="button" class="btn-secondary-sm" id="btnRetryQuiz">Try Again</button>' : ""}
            <button type="button" class="btn-red-sm" id="btnQuizContinue">${nextLabel}</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="slide-accent-stripe"></div>
      <div class="slide-content-layout">
        <div class="slide-header">
          <div class="slide-badges anim-item">
            <span class="badge badge-bloom">Knowledge Check &bull; Bloom's Taxonomy: Analysis</span>
            <span class="badge badge-slo">${slo.short}: ${slo.topic}</span>
          </div>
          <h2 class="slide-title anim-item">${slide.title}</h2>
        </div>
        <div class="quiz-body">
          <div class="quiz-left">
            <div class="quiz-vignette anim-item">
              <div class="quiz-vignette-label">Clinical / Experimental Scenario</div>
              <p class="quiz-question">${slide.vignette}</p>
              <p style="margin-top:0.5rem;font-weight:700;font-size:0.92rem;color:var(--lsc-blue);">${slide.question}</p>
            </div>
            <div class="quiz-options" id="quizOptions">
              ${optionsHtml}
            </div>
            ${feedbackHtml}
          </div>
          <div class="slide-media-col">
            ${renderFigureCard(slide)}
            <div class="bloom-tag-card anim-item">
              <strong>Bloom's Level 4 — Analysis Focus</strong>
              ${slide.bloomSkill}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderSummarySlide(slide) {
    const mastered = getMasteredCount();
    const total = slos.length;
    const pct = Math.round((mastered / total) * 100);

    const statusMsg =
      mastered === total
        ? "Outstanding! You have mastered all 8 Chapter 12 Student Learning Objectives at the Bloom's Analysis level."
        : mastered >= 6
          ? "Strong command of General & Special Senses! Review any remaining SLOs below to reach 100% mastery."
          : "Keep building mastery—click any SLO card below to review its lecture slides or retake its Bloom's Analysis check.";

    const cardsHtml = slos
      .map((slo) => {
        const res = state.quizResults[slo.id];
        let chipClass = "pending";
        let chipText = "Not Attempted";
        if (res) {
          chipClass = res.isCorrect ? "pass" : "fail";
          chipText = res.isCorrect ? "Mastered" : "Needs Review";
        }
        const quizIdx = getQuizSlideIndexForSlo(slo.id);
        return `
          <button type="button" class="slo-result-card anim-item" data-jump-quiz="${quizIdx}">
            <div style="text-align:left;">
              <div class="sr-title">${slo.short}: ${slo.topic}</div>
              <div class="sr-sub">Click to open SLO Knowledge Check</div>
            </div>
            <span class="status-chip ${chipClass}">${chipText}</span>
          </button>
        `;
      })
      .join("");

    return `
      <div class="slide-accent-stripe"></div>
      <div class="slide-content-layout">
        <div class="slide-header">
          <div class="slide-badges anim-item">
            <span class="badge badge-tan">Chapter 12 Assessment Summary</span>
            <span class="badge badge-bloom">Bloom's Taxonomy: Analysis</span>
          </div>
          <h2 class="slide-title anim-item">${slide.title}</h2>
        </div>
        <div class="summary-body">
          <div>
            <div class="score-banner anim-item">
              <div class="score-circle">
                <span class="pct">${pct}%</span>
                <span class="sub">${mastered}/${total} SLOs</span>
              </div>
              <div>
                <h3 style="font-family:var(--font-display);font-size:1.05rem;letter-spacing:0.05em;margin-bottom:0.25rem;">LEARNING OUTCOME MASTERY</h3>
                <p style="font-size:0.88rem;line-height:1.45;color:var(--lsc-light-blue);">${statusMsg}</p>
              </div>
            </div>
            <div class="slo-results-grid">${cardsHtml}</div>
            <div class="quiz-actions anim-item" style="margin-top:1rem;">
              <button type="button" class="btn-red-sm" id="btnPrintReport">Print / Save Study Report</button>
              <button type="button" class="btn-secondary-sm" id="btnResetAll">Reset All Quizzes</button>
              <button type="button" class="btn-secondary-sm" id="btnRestartDeck">Return to Cover</button>
            </div>
          </div>
          <div class="slide-media-col">
            ${renderFigureCard(slide)}
          </div>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     Main Render + GSAP Animations
     ------------------------------------------------------------------------ */
  function renderSlide() {
    const slide = slides[state.currentIndex];
    if (!slide) return;

    if (slide.type === "cover") {
      els.stage.innerHTML = renderCoverSlide(slide);
    } else if (slide.type === "content") {
      els.stage.innerHTML = renderContentSlide(slide);
    } else if (slide.type === "quiz") {
      els.stage.innerHTML = renderQuizSlide(slide);
    } else if (slide.type === "summary") {
      els.stage.innerHTML = renderSummarySlide(slide);
    }

    // Update chrome
    const pct = ((state.currentIndex + 1) / slides.length) * 100;
    els.progressFill.style.width = `${pct}%`;
    els.slideCounter.textContent = `Slide ${state.currentIndex + 1} / ${slides.length}`;
    els.slideSectionLabel.textContent = slide.section;
    els.btnPrev.disabled = state.currentIndex === 0;
    els.btnNext.disabled = state.currentIndex === slides.length - 1;

    renderSloRail();
    updateScoreBadge();
    bindSlideEvents(slide);
    animateStage();
  }

  function animateStage() {
    if (typeof window.gsap === "undefined") return;
    const items = els.stage.querySelectorAll(".anim-item");
    window.gsap.killTweensOf(items);
    window.gsap.fromTo(
      items,
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 0.42,
        stagger: 0.055,
        ease: "power2.out",
        clearProps: "transform"
      }
    );
  }

  function bindSlideEvents(slide) {
    // Cover CTA
    const btnStart = document.getElementById("btnStartLecture");
    if (btnStart) {
      btnStart.addEventListener("click", () => goToSlide(1));
    }

    // Lightbox trigger
    els.stage.querySelectorAll('[data-lightbox="true"]').forEach((el) => {
      const open = () => openLightbox(slide.image, slide.imageCaption, slide.imageSource, slide.isNano);
      el.addEventListener("click", open);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });

    // Quiz interactions
    if (slide.type === "quiz") {
      els.stage.querySelectorAll(".quiz-option").forEach((btn) => {
        btn.addEventListener("click", () => handleQuizAnswer(slide, Number(btn.dataset.option)));
      });

      const btnRetry = document.getElementById("btnRetryQuiz");
      if (btnRetry) {
        btnRetry.addEventListener("click", () => {
          delete state.quizResults[slide.sloId];
          renderSlide();
        });
      }

      const btnContinue = document.getElementById("btnQuizContinue");
      if (btnContinue) {
        btnContinue.addEventListener("click", () => goToSlide(state.currentIndex + 1));
      }
    }

    // Summary interactions
    if (slide.type === "summary") {
      els.stage.querySelectorAll("[data-jump-quiz]").forEach((btn) => {
        btn.addEventListener("click", () => goToSlide(Number(btn.dataset.jumpQuiz)));
      });
      const btnPrint = document.getElementById("btnPrintReport");
      if (btnPrint) btnPrint.addEventListener("click", () => window.print());

      const btnReset = document.getElementById("btnResetAll");
      if (btnReset) {
        btnReset.addEventListener("click", () => {
          state.quizResults = {};
          slides = shuffleQuizChoices(sourceSlides);
          renderSlide();
        });
      }

      const btnRestart = document.getElementById("btnRestartDeck");
      if (btnRestart) btnRestart.addEventListener("click", () => goToSlide(0));
    }
  }

  function handleQuizAnswer(slide, selectedIndex) {
    if (state.quizResults[slide.sloId]) return;
    const isCorrect = selectedIndex === slide.correctIndex;
    state.quizResults[slide.sloId] = {
      selectedIndex,
      isCorrect
    };
    renderSlide();
  }

  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    state.currentIndex = index;
    renderSlide();
  }

  /* ------------------------------------------------------------------------
     Modals: Overview & Lightbox
     ------------------------------------------------------------------------ */
  function openOverview() {
    els.overviewGrid.innerHTML = slides
      .map((s, i) => {
        const isCurrent = i === state.currentIndex;
        const typeLabel =
          s.type === "quiz"
            ? "Bloom's Analysis MCQ"
            : s.type === "cover"
              ? "Title Slide"
              : s.type === "summary"
                ? "Mastery Scorecard"
                : s.section;
        return `
          <button type="button" class="overview-tile ${isCurrent ? "current" : ""}" data-ov-jump="${i}">
            <span class="ot-num">Slide ${i + 1} ${s.sloId ? "&bull; SLO " + s.sloId : ""}</span>
            <span class="ot-title">${s.title}</span>
            <span class="ot-type">${typeLabel}</span>
          </button>
        `;
      })
      .join("");

    els.overviewGrid.querySelectorAll("[data-ov-jump]").forEach((tile) => {
      tile.addEventListener("click", () => {
        closeOverview();
        goToSlide(Number(tile.dataset.ovJump));
      });
    });

    els.overviewModal.hidden = false;
  }

  function closeOverview() {
    els.overviewModal.hidden = true;
  }

  function openLightbox(src, caption, source, isNano) {
    els.lightboxImg.src = src;
    els.lightboxImg.alt = caption;
    els.lightboxCaption.textContent = caption;
    els.lightboxSource.textContent = source;
    els.lightboxSource.className = isNano ? "img-source-badge nano" : "img-source-badge";
    els.lightboxModal.hidden = false;
  }

  function closeLightbox() {
    els.lightboxModal.hidden = true;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }

  /* ------------------------------------------------------------------------
     Global Event Listeners
     ------------------------------------------------------------------------ */
  els.btnPrev.addEventListener("click", () => goToSlide(state.currentIndex - 1));
  els.btnNext.addEventListener("click", () => goToSlide(state.currentIndex + 1));
  els.btnOverview.addEventListener("click", openOverview);
  els.closeOverview.addEventListener("click", closeOverview);
  els.closeLightbox.addEventListener("click", closeLightbox);
  els.btnFullscreen.addEventListener("click", toggleFullscreen);

  els.overviewModal.addEventListener("click", (e) => {
    if (e.target === els.overviewModal) closeOverview();
  });
  els.lightboxModal.addEventListener("click", (e) => {
    if (e.target === els.lightboxModal) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    // Escape closes modals
    if (e.key === "Escape") {
      if (!els.lightboxModal.hidden) closeLightbox();
      else if (!els.overviewModal.hidden) closeOverview();
      return;
    }

    // Ignore shortcuts when modal is open
    if (!els.overviewModal.hidden || !els.lightboxModal.hidden) return;

    if (e.key === "ArrowRight" || e.key === "PageDown") {
      e.preventDefault();
      goToSlide(state.currentIndex + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      goToSlide(state.currentIndex - 1);
    } else if (e.key.toLowerCase() === "o") {
      openOverview();
    } else if (e.key.toLowerCase() === "f") {
      toggleFullscreen();
    } else if (["1", "2", "3", "4"].includes(e.key)) {
      const current = slides[state.currentIndex];
      if (current && current.type === "quiz" && !state.quizResults[current.sloId]) {
        handleQuizAnswer(current, Number(e.key) - 1);
      }
    }
  });

  // Boot
  renderSlide();
})();
