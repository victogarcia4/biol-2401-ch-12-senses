/* ==========================================================================
   Chapter 12: Nervous System III — General & Special Senses
   Structured strictly around the Chapter 12 Lecture Outline (Hole's Human A&P 15e)
   8 Student Learning Objectives (SLOs) + 8 Bloom's Taxonomy (Analysis) MCQs
   1 Anatomical Image per Slide (12 Senses Collection + Nano Banana 2.0)
   ========================================================================== */

window.SLOS = [
  {
    id: 1,
    short: "SLO 1",
    topic: "Receptors & Perception",
    statement: "Distinguish general from special senses, classify the five sensory receptor types, and analyze sensory transduction, projection, and sensory adaptation."
  },
  {
    id: 2,
    short: "SLO 2",
    topic: "General Senses",
    statement: "Categorize exteroceptive, interoceptive, and proprioceptive senses, and differentiate cutaneous mechanoreceptors, thermoreceptors, muscle spindles, and Golgi tendon organs."
  },
  {
    id: 3,
    short: "SLO 3",
    topic: "Pain Pathways",
    statement: "Analyze somatic and visceral referred pain mechanisms, contrast fast (A-delta) versus slow (C) pain fibers, and evaluate endogenous and clinical pain regulation."
  },
  {
    id: 4,
    short: "SLO 4",
    topic: "Smell & Taste",
    statement: "Describe olfactory and gustatory receptor anatomy, trace their distinct cranial nerve pathways to the cerebral cortex, and analyze their functional integration."
  },
  {
    id: 5,
    short: "SLO 5",
    topic: "Hearing Mechanics",
    statement: "Trace sound wave transmission through the outer, middle, and inner ear, explain the tympanic reflex and auditory tube, and analyze spiral organ pitch transduction."
  },
  {
    id: 6,
    short: "SLO 6",
    topic: "Equilibrium",
    statement: "Differentiate static from dynamic equilibrium by comparing utricle/saccule maculae (otoliths) with semicircular canal cristae ampullares (cupula deflection)."
  },
  {
    id: 7,
    short: "SLO 7",
    topic: "Eye Anatomy & Optics",
    statement: "Describe visual accessory organs, distinguish the three ocular tunics and humors, and analyze pupillary control, light refraction, and lens accommodation."
  },
  {
    id: 8,
    short: "SLO 8",
    topic: "Photoreception & Aging",
    statement: "Compare rods and cones and their visual pigments, trace central visual pathways to the occipital lobe, and analyze life-span changes across sensory systems."
  }
];

window.SLIDES = [
  /* ========================================================================
     SLIDE 0: COVER SLIDE
     ======================================================================== */
  {
    id: "cover",
    type: "cover",
    sloId: null,
    section: "Chapter 12 Overview",
    title: "Nervous System III: General & Special Senses",
    subtitle: "An interactive lecture module derived from Hole's Human Anatomy & Physiology (15th Edition), structured by Student Learning Objectives with Bloom's Taxonomy Analysis checks after every SLO.",
    image: "assets/images/hero-senses.jpg",
    imageCaption: "Overview of Human General and Special Sensory Organs & Neural Pathways",
    imageSource: "Nano Banana 2.0",
    isNano: true
  },

  /* ========================================================================
     SLO 1: SENSORY RECEPTORS, SENSATION, PERCEPTION & ADAPTATION
     ======================================================================== */
  {
    id: "slo1-1",
    type: "content",
    sloId: 1,
    section: "12.1 Introduction & Receptor Types",
    title: "Sensory Function & Five Receptor Classes",
    image: "assets/images/slo1-receptors.jpg",
    imageCaption: "The five functional classes of sensory receptors: chemoreceptors, nociceptors, thermoreceptors, mechanoreceptors, and photoreceptors.",
    imageSource: "Nano Banana 2.0",
    isNano: true,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "General vs. Special Senses",
            bullets: [
              "<strong>General Senses:</strong> Small, widely distributed receptors in skin, muscles, joints, and viscera.",
              "<strong>Special Senses:</strong> Specialized receptors confined to complex head organs (eyes, ears, nose, mouth).",
              "Both maintain <strong>homeostasis</strong> by linking environmental changes to the CNS."
            ]
          },
          {
            title: "Receptor Specificity",
            accent: "red",
            bullets: [
              "<strong>Chemoreceptors:</strong> Changes in chemical concentration (smell, taste, blood O₂).",
              "<strong>Pain Receptors (Nociceptors):</strong> Tissue damage (mechanical, electrical, thermal).",
              "<strong>Thermoreceptors:</strong> Moderate temperature changes.",
              "<strong>Mechanoreceptors:</strong> Mechanical distortion (touch, tension, blood pressure, stretch).",
              "<strong>Photoreceptors:</strong> Light energy in the retina."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo1-2",
    type: "content",
    sloId: 1,
    section: "12.1 Impulses, Perception & Adaptation",
    title: "Transduction, Projection & Sensory Adaptation",
    image: "assets/images/slo1-transduction.jpg",
    imageCaption: "Information flow from environmental stimulus (apple) to graded receptor potential, action potential, CNS sensation, and cortical perception.",
    imageSource: "Nano Banana 2.0",
    isNano: true,
    blocks: [
      {
        type: "pathway",
        steps: [
          "Environmental Stimulus",
          "Receptor Graded Potential",
          "Action Potential (Sensory Fiber)",
          "CNS Awareness (Sensation)",
          "Cortical Interpretation (Perception)"
        ]
      },
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Sensation, Perception & Projection",
            bullets: [
              "<strong>Sensation:</strong> Feeling when action potentials make the brain aware of a sensory event.",
              "<strong>Perception:</strong> Brain's interpretation of sensory impulses (e.g., recognizing the sight, smell, and crunch of an apple).",
              "<strong>Projection:</strong> Cerebral cortex projects the sensation back to its apparent receptor source so you can pinpoint stimulation."
            ]
          },
          {
            title: "Sensory Adaptation",
            accent: "tan",
            bullets: [
              "Ability to ignore unimportant or continuous stimuli via <strong>peripheral</strong> (receptor) or <strong>central</strong> (CNS) decreased response.",
              "Impulses slow or cease; a stronger stimulus is needed to re-trigger firing.",
              "Best accomplished by <strong>thermoreceptors</strong> and <strong>olfactory receptors</strong> (least by nociceptors)."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo1-quiz",
    type: "quiz",
    sloId: 1,
    section: "SLO 1 Knowledge Check",
    title: "SLO 1 Mastery Check: Transduction & Adaptation",
    image: "assets/images/slo1-transduction.jpg",
    imageCaption: "Reference: Sensory information flow and cortical projection pathway.",
    imageSource: "Nano Banana 2.0",
    isNano: true,
    bloomSkill: "Differentiating receptor mechanisms and analyzing why sensory signals persist or diminish over time.",
    vignette: "A student walks into a warm bakery smelling fresh cinnamon rolls. Within two minutes, she barely notices the cinnamon aroma or the warm room air, yet when she accidentally presses her hand onto a hot baking tray (55°C), the sharp pain intensifies rather than fading.",
    question: "Which neurophysiological analysis best explains the contrast between these two sensory experiences?",
    options: [
      "Olfactory receptors and thermoreceptors undergo rapid sensory adaptation by decreasing impulse frequency to continuous stimuli, whereas nociceptors adapt very little to protect tissues from ongoing damage.",
      "Olfactory and thermal stimuli fail to generate graded receptor potentials after two minutes, whereas hot metal directly stimulates the cerebral cortex without peripheral sensory fibers.",
      "The cerebral cortex stops projecting olfactory sensations to the nose, while thermoreceptors above 45°C convert into mechanoreceptors that amplify action potentials.",
      "Central adaptation occurs exclusively in general senses, while special senses like olfaction cannot undergo peripheral adaptation."
    ],
    correctIndex: 0,
    rationale: "Correct! Thermoreceptors and olfactory chemoreceptors exhibit rapid peripheral and central sensory adaptation, causing impulse frequency to drop during continuous, non-threatening stimulation. In contrast, pain receptors (nociceptors) triggered above 45°C adapt minimally—if at all—so the CNS continues to receive urgent warning signals of tissue damage."
  },

  /* ========================================================================
     SLO 2: GENERAL SENSES — TOUCH, PRESSURE, TEMPERATURE & PROPRIOCEPTION
     ======================================================================== */
  {
    id: "slo2-1",
    type: "content",
    sloId: 2,
    section: "12.2 Exteroceptive Cutaneous Senses",
    title: "Touch, Pressure & Temperature Receptors",
    image: "assets/images/slo2-skin-receptors.jpg",
    imageCaption: "Cutaneous general sense receptors across epidermis, dermis, and subcutaneous tissue: free nerve endings, Meissner's tactile corpuscles, and Pacinian lamellated corpuscles.",
    imageSource: "Nano Banana 2.0",
    isNano: true,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Three Touch & Pressure Mechanoreceptors",
            bullets: [
              "<strong>Free Nerve Endings:</strong> Simplest receptors in epithelial tissues; detect itching and light touch.",
              "<strong>Tactile (Meissner's) Corpuscles:</strong> Abundant in hairless skin and lips; detect fine touch, texture, and two-point discrimination.",
              "<strong>Lamellated (Pacinian) Corpuscles:</strong> Large ellipsoidal structures in deeper subcutaneous tissues, tendons, and ligaments; detect heavy pressure and vibrations."
            ]
          },
          {
            title: "Thermoreceptors & Thermal Extremes",
            accent: "red",
            bullets: [
              "<strong>Warm Receptors:</strong> Free nerve endings active above <strong>25°C (77°F)</strong>; unresponsive above 45°C.",
              "<strong>Cold Receptors:</strong> Active between <strong>10°C (50°F)</strong> and <strong>20°C (68°F)</strong>.",
              "<strong>Pain (Nociceptors):</strong> Below 10°C produces <em>freezing</em> pain; above 45°C produces <em>burning</em> pain."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo2-2",
    type: "content",
    sloId: 2,
    section: "12.2 Proprioception & Visceral Senses",
    title: "Proprioceptors & Interoceptive Senses",
    image: "assets/images/slo2-proprioceptors.jpg",
    imageCaption: "Skeletal muscle proprioceptors: intrafusal muscle spindle detecting length/stretch and Golgi tendon organ detecting tendon tension.",
    imageSource: "Nano Banana 2.0",
    isNano: true,
    blocks: [
      {
        type: "table",
        headers: ["General Sense Group", "Primary Receptors", "Physiological Role"],
        rows: [
          ["<strong>Exteroceptive</strong>", "Free nerve endings, Meissner's, Pacinian", "Body surface touch, pressure, temperature, and somatic pain."],
          ["<strong>Proprioceptive</strong>", "Muscle spindles, Golgi tendon organs, joint Pacinian", "Body position, skeletal muscle length and tension (unconscious reflex control)."],
          ["<strong>Interoceptive (Visceral)</strong>", "Visceral Pacinian corpuscles & free nerve endings", "Internal organ fullness, blood vessel stretch, intestinal gas, visceral pain."]
        ]
      },
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Muscle Spindles (Length)",
            bullets: [
              "Stretch receptors embedded in skeletal muscle.",
              "Initiate <strong>stretch reflexes</strong>: spindle stretch triggers reflex muscle contraction to maintain posture."
            ]
          },
          {
            title: "Golgi Tendon Organs (Tension)",
            accent: "tan",
            bullets: [
              "Stretch receptors located in tendons.",
              "Trigger reflexes that <strong>oppose stretch reflexes</strong>, preventing excessive tension from pulling muscle attachments loose."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo2-quiz",
    type: "quiz",
    sloId: 2,
    section: "SLO 2 Knowledge Check",
    title: "SLO 2 Mastery Check: Cutaneous & Proprioceptive Analysis",
    image: "assets/images/slo2-skin-receptors.jpg",
    imageCaption: "Reference: Superficial dermal vs. deep subcutaneous cutaneous receptors.",
    imageSource: "Nano Banana 2.0",
    isNano: true,
    bloomSkill: "Analyzing neurological deficits to distinguish receptor depth, modality, and functional specialization.",
    vignette: "During a neurological exam of the fingertips, a patient cannot distinguish whether one or two closely spaced pins are touching her skin and cannot identify fine fabric textures, yet she accurately perceives deep vibrating tuning-fork pressure and withdraws promptly from 48°C water.",
    question: "Which receptor population is most selectively impaired in this patient?",
    options: [
      "Tactile (Meissner's) corpuscles in the superficial hairless dermis, while deep lamellated (Pacinian) corpuscles and nociceptors remain functional.",
      "Lamellated (Pacinian) corpuscles in subcutaneous tissue, while warm thermoreceptors are mediating the 48°C response.",
      "Golgi tendon organs in the digital tendons, which normally mediate fine two-point texture discrimination.",
      "Warm thermoreceptors alone, because they are responsible for both two-point discrimination and temperatures above 45°C."
    ],
    correctIndex: 0,
    rationale: "Correct! Tactile (Meissner's) corpuscles are concentrated in hairless skin (like fingertips and lips) specifically to detect fine touch, texture, and two-point discrimination. Preserved vibration/deep pressure confirms intact Pacinian corpuscles, and withdrawal from 48°C water confirms intact nociceptors (since warm receptors become unresponsive above 45°C)."
  },

  /* ========================================================================
     SLO 3: PAIN PATHWAYS, REFERRED PAIN & PAIN REGULATION
     ======================================================================== */
  {
    id: "slo3-1",
    type: "content",
    sloId: 3,
    section: "12.2 Nociception & Visceral Pain",
    title: "Sense of Pain & Visceral Referred Pain",
    image: "assets/images/slo3-referred-pain.jpg",
    imageCaption: "Referred pain mechanism: visceral afferents from the heart and somatic afferents from the left shoulder/arm converge on a common spinal pathway.",
    imageSource: "Nano Banana 2.0",
    isNano: true,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Nociceptor Characteristics",
            bullets: [
              "Consist of widely distributed <strong>free nerve endings</strong> (absent in brain nervous tissue itself).",
              "Triggered by tissue damage, chemical release, mechanical trauma, or extreme temperatures.",
              "<strong>Adapt very little, if at all</strong>, ensuring persistent protective signaling."
            ]
          },
          {
            title: "Mechanism of Referred Pain",
            accent: "red",
            bullets: [
              "Pain receptors are the <strong>only visceral receptors</strong> whose stimulation produces conscious sensation.",
              "<strong>Common Nerve Pathways:</strong> Sensory fibers from a visceral organ and a specific skin region synapse on the <strong>same CNS neuron</strong>.",
              "Classic example: Myocardial ischemia (heart) is perceived in the <strong>left shoulder and medial left arm</strong>."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo3-2",
    type: "content",
    sloId: 3,
    section: "12.2 Pain Fibers & Modulation",
    title: "A-Delta vs. C Fibers & Pain Regulation",
    image: "assets/images/slo3-pain-pathway.jpg",
    imageCaption: "Ascending fast (A-delta) and slow (C) pain tracts to thalamus, cortex, and limbic system, modulated by descending brainstem pathways.",
    imageSource: "Nano Banana 2.0",
    isNano: true,
    blocks: [
      {
        type: "table",
        headers: ["Feature", "Fast Pain (A-delta) Fibers", "Slow Pain (C) Fibers"],
        rows: [
          ["<strong>Myelination & Speed</strong>", "Myelinated; rapid (up to <strong>30 m/sec</strong>)", "Unmyelinated; slow (up to <strong>2 m/sec</strong>)"],
          ["<strong>Quality & Location</strong>", "Sharp, acute, well-localized skin pain", "Dull, aching, chronic, hard to localize"],
          ["<strong>Duration</strong>", "Usually stops when stimulus stops", "Often continues after stimulus stops"]
        ]
      },
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "CNS Processing & Endogenous Control",
            bullets: [
              "<strong>Thalamus:</strong> Begins conscious sensation of pain.",
              "<strong>Cerebral Cortex:</strong> Judges intensity, locates source, initiates motor response; <strong>Limbic system</strong> drives emotional response.",
              "<strong>Brainstem Gray Matter:</strong> Suppresses spinal pain flow using <strong>enkephalins, serotonin, and endorphins</strong>."
            ]
          },
          {
            title: "Clinical App 12.1: Treating Pain",
            accent: "tan",
            bullets: [
              "<strong>NSAIDs</strong> (aspirin, ibuprofen): effective, risk GI irritation.",
              "<strong>Acetaminophen:</strong> non-addicting, no GI irritation, risk liver toxicity.",
              "<strong>Opiates:</strong> potent, high addiction risk. Chronic options: exercise, TENS, antidepressants, nerve blocks."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo3-quiz",
    type: "quiz",
    sloId: 3,
    section: "SLO 3 Knowledge Check",
    title: "SLO 3 Mastery Check: Pain Fiber & Referred Pain Analysis",
    image: "assets/images/slo3-referred-pain.jpg",
    imageCaption: "Reference: Visceral-somatic convergence in referred cardiac pain.",
    imageSource: "Nano Banana 2.0",
    isNano: true,
    bloomSkill: "Deconstructing biphasic pain timing and convergence pathways in a clinical scenario.",
    vignette: "A carpenter accidentally strikes his thumb with a hammer. He feels an immediate, piercing, pinpoint pain that fades briefly, followed one second later by a diffuse, throbbing ache that lingers for minutes. Later that week, his older brother presents to the ER with dull pain radiating down his medial left arm despite normal arm x-rays and an abnormal ECG.",
    question: "Which pairing accurately analyzes the neuroanatomy behind BOTH patients' symptoms?",
    options: [
      "The carpenter's immediate sharp pain travels via myelinated A-delta fibers while the lingering ache travels via unmyelinated C fibers; the brother's arm pain arises because cardiac and left-arm afferents synapse on shared CNS neurons.",
      "The carpenter's immediate pain travels via unmyelinated C fibers while the lingering ache travels via myelinated A-delta fibers; the brother's arm pain arises because the heart lacks nociceptors.",
      "Both phases of the carpenter's pain are mediated by Pacinian corpuscles; the brother's arm pain is caused by excessive endorphin release in the brainstem gray matter.",
      "The carpenter's thalamus localizes the thumb injury while his cerebral cortex blocks C fibers; the brother's arm pain results from direct visceral-to-skin electrical conduction."
    ],
    correctIndex: 0,
    rationale: "Correct! Myelinated A-delta fibers conduct up to 30 m/sec, producing immediate, sharp, localized pain, whereas unmyelinated C fibers conduct at ~2 m/sec, producing delayed, dull, lingering pain. In referred cardiac pain, visceral nociceptors from the heart share spinal cord/CNS projection neurons with cutaneous afferents from the left shoulder and medial left arm."
  },

  /* ========================================================================
     SLO 4: SPECIAL SENSES — OLFACTION (SMELL) & GUSTATION (TASTE)
     ======================================================================== */
  {
    id: "slo4-1",
    type: "content",
    sloId: 4,
    section: "12.3 Sense of Smell (Olfaction)",
    title: "Olfactory Organs, Coding & Neural Pathways",
    image: "assets/images/slo4-olfaction-nasal.webp",
    imageCaption: "Anatomical sagittal section of the nasal cavity, superior nasal conchae, and ethmoid cribriform plate region.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "pathway",
        steps: [
          "Odorants in Mucus",
          "Olfactory Bipolar Neurons (Cilia)",
          "Cribriform Plate (Ethmoid)",
          "Olfactory Bulbs & Tracts",
          "Limbic System & Olfactory Cortex"
        ]
      },
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Olfactory Receptor Mechanics",
            bullets: [
              "<strong>Chemoreceptors:</strong> Bipolar neurons with ciliated dendritic knobs in the upper nasal cavity & superior conchae.",
              "~<strong>400 types</strong> of membrane receptors encode complex scents via an <strong>olfactory code</strong>.",
              "<strong>Rapid Adaptation:</strong> Smell sensitivity drops <strong>50% within 1 second</strong>.",
              "Rare adult neural regeneration: damaged olfactory neurons are replaced regularly."
            ]
          },
          {
            title: "Emotion, Flavor & Synesthesia",
            accent: "tan",
            bullets: [
              "Direct routing to the <strong>limbic system</strong> links odors strongly to emotion and memory.",
              "Smell provides <strong>75–80%</strong> of the perceived sense of taste.",
              "<strong>Clinical App 12.2 (Synesthesia):</strong> Cross-modal interpretation (e.g., grapheme-color or lexical-gustatory) affecting ~1 in 2,000 people."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo4-2",
    type: "content",
    sloId: 4,
    section: "12.4 Sense of Taste (Gustation)",
    title: "Taste Buds, Five Primary Tastes & Pathways",
    image: "assets/images/slo4-gustation-taste-bud.webp",
    imageCaption: "Microscopic anatomical model of lingual papillae and taste bud showing taste cells, supporting cells, and taste hairs (microvilli).",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Taste Bud Structure",
            bullets: [
              "~<strong>10,000 taste buds</strong> on lingual papillae, roof of mouth, cheeks, and pharynx (50–150 taste cells each).",
              "<strong>Taste Cells:</strong> Modified epithelial chemoreceptors with <strong>taste hairs (microvilli)</strong> protruding through taste pores.",
              "High turnover: taste cells are replaced every <strong>3 days</strong> and adapt rapidly."
            ]
          },
          {
            title: "Five Primary Taste Sensations",
            accent: "red",
            bullets: [
              "<strong>Sweet:</strong> Carbohydrates.",
              "<strong>Sour:</strong> Acids (H⁺).",
              "<strong>Salty:</strong> Inorganic salts.",
              "<strong>Bitter:</strong> Organic compounds, Mg²⁺ and Ca²⁺ salts.",
              "<strong>Umami:</strong> Amino acids (e.g., MSG). <em>(Spicy foods stimulate pain receptors!)</em>"
            ]
          }
        ]
      },
      {
        type: "pathway",
        steps: [
          "Taste Cells",
          "Facial (VII) / Glossopharyngeal (IX) / Vagus (X)",
          "Medulla Oblongata",
          "Thalamus",
          "Gustatory Cortex (Insula)"
        ]
      }
    ]
  },
  {
    id: "slo4-quiz",
    type: "quiz",
    sloId: 4,
    section: "SLO 4 Knowledge Check",
    title: "SLO 4 Mastery Check: Olfactory vs. Gustatory Pathways",
    image: "assets/images/slo4-gustation-taste-bud.webp",
    imageCaption: "Reference: Taste bud chemoreceptors vs. olfactory pathway contributions to flavor.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    bloomSkill: "Analyzing cranial nerve anatomy and cross-sensory integration in a traumatic injury case.",
    vignette: "After a bicycle accident causing a fracture across the cribriform plate of the ethmoid bone, a patient reports that 'all food tastes completely bland and flat.' However, blinded testing confirms he can still accurately distinguish sugar water (sweet), lemon juice (sour), and brine (salty) placed on his tongue.",
    question: "Which anatomical analysis best accounts for this clinical presentation?",
    options: [
      "Olfactory nerve fibers passing through the cribriform plate were sheared, eliminating the 75–80% olfactory contribution to flavor while leaving cranial nerves VII, IX, and X intact for primary taste.",
      "The cribriform plate fracture severed the facial (VII) and glossopharyngeal (IX) nerves, preventing impulses from reaching the insula while preserving olfactory bulbs.",
      "Taste cells stopped regenerating every 3 days due to thalamic shock, leaving only nociceptors functional on the lingual papillae.",
      "Damage to the limbic system eliminated sweet and salty perception while sparing bitter and umami receptors."
    ],
    correctIndex: 0,
    rationale: "Correct! Olfactory receptor axons pass directly through the cribriform plate of the ethmoid bone to reach the olfactory bulbs; shearing them causes anosmia. Because olfaction provides 75–80% of perceived flavor, food seems bland even though true gustation—carried via CN VII, IX, and X to the medulla, thalamus, and insula—remains completely intact."
  },

  /* ========================================================================
     SLO 5: SPECIAL SENSES — HEARING (OUTER, MIDDLE & INNER EAR)
     ======================================================================== */
  {
    id: "slo5-1",
    type: "content",
    sloId: 5,
    section: "12.5 Outer & Middle Ear Mechanics",
    title: "Sound Conduction, Ossicles & Tympanic Reflex",
    image: "assets/images/slo5-outer-middle-ear.webp",
    imageCaption: "Sectional anatomical model of the external acoustic meatus, tympanic membrane, middle ear ossicles, and auditory tube.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Outer (External) Ear",
            bullets: [
              "<strong>Auricle (Pinna):</strong> Funnel-shaped structure that collects sound waves.",
              "<strong>External Acoustic Meatus:</strong> S-shaped canal lined with ceruminous glands.",
              "<strong>Tympanic Membrane (Eardrum):</strong> Vibrates in direct response to incoming sound waves."
            ]
          },
          {
            title: "Middle Ear & Protection",
            accent: "red",
            bullets: [
              "<strong>Auditory Ossicles:</strong> <em>Malleus</em> (hammer), <em>Incus</em> (anvil), and <em>Stapes</em> (stirrup) amplify force and transmit vibrations to the <strong>oval window</strong>.",
              "<strong>Tympanic Reflex:</strong> <em>Tensor tympani</em> and <em>stapedius</em> muscles contract during loud sounds to protect inner-ear hair cells.",
              "<strong>Auditory (Eustachian) Tube:</strong> Connects tympanic cavity to throat to equalize pressure across the eardrum."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo5-2",
    type: "content",
    sloId: 5,
    section: "12.5 Inner Ear & Cochlear Anatomy",
    title: "Bony & Membranous Labyrinths of the Cochlea",
    image: "assets/images/slo5-inner-ear-labyrinth.webp",
    imageCaption: "Sectional model of the inner ear showing the coiled cochlea, osseous and membranous labyrinths, and vestibule.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Labyrinths & Fluids",
            bullets: [
              "<strong>Osseous (Bony) Labyrinth:</strong> Temporal bone canal filled with <strong>perilymph</strong>.",
              "<strong>Membranous Labyrinth:</strong> Inner tube of similar shape filled with <strong>endolymph</strong>.",
              "Three functional regions: <strong>Cochlea</strong> (hearing), <strong>Vestibule</strong> (static equilibrium), and <strong>Semicircular Canals</strong> (dynamic equilibrium)."
            ]
          },
          {
            title: "Cochlear Compartments & Windows",
            accent: "tan",
            bullets: [
              "<strong>Scala Vestibuli:</strong> Upper bony compartment from <strong>oval window</strong> to apex (perilymph).",
              "<strong>Cochlear Duct:</strong> Middle membranous compartment (endolymph) between <em>vestibular</em> and <em>basilar</em> membranes.",
              "<strong>Scala Tympani:</strong> Lower compartment extending from apex to <strong>round window</strong> (dissipates excess vibrations)."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo5-3",
    type: "content",
    sloId: 5,
    section: "12.5 Spiral Organ & Auditory Pathways",
    title: "Organ of Corti, Frequency Coding & Deafness",
    image: "assets/images/slo5-spiral-organ.webp",
    imageCaption: "Cross-sectional model of the cochlea illustrating the scala vestibuli, cochlear duct, basilar membrane, tectorial membrane, and spiral organ (Organ of Corti).",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "pathway",
        steps: [
          "Stapes → Oval Window",
          "Perilymph → Endolymph",
          "Basilar Membrane Vibrates",
          "Hair Cell Stereocilia Bend vs. Tectorial Membrane",
          "CN VIII → Medulla → Midbrain → Thalamus → Temporal Lobe"
        ]
      },
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Spiral Organ (Organ of Corti)",
            bullets: [
              "Rests on the <strong>basilar membrane</strong>; different sound frequencies vibrate distinct regions along the cochlear duct.",
              "Bending stereocilia depolarizes hair cells → Ca²⁺ influx → neurotransmitter release onto cochlear nerve fibers."
            ]
          },
          {
            title: "Clinical Apps 12.4 & 12.5: Hearing Loss",
            accent: "red",
            bullets: [
              "<strong>Conductive Deafness (~95%):</strong> Blocked mechanical conduction (earwax, damaged eardrum, ossicle injury, otosclerosis). Diagnosed with Rinne/Weber tests.",
              "<strong>Sensorineural Deafness:</strong> Damage to cochlea, CN VIII, or CNS pathways (loud noise, drugs, stroke).",
              "<strong>Cochlear Implants:</strong> Directly stimulate the auditory nerve (most effective before age 3)."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo5-quiz",
    type: "quiz",
    sloId: 5,
    section: "SLO 5 Knowledge Check",
    title: "SLO 5 Mastery Check: Conductive vs. Sensorineural Analysis",
    image: "assets/images/kc5-ossicles.webp",
    imageCaption: "Reference: Middle ear auditory ossicles (malleus, incus, and stapes).",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    bloomSkill: "Comparing pathophysiological mechanisms of hearing loss and matching them to targeted interventions.",
    vignette: "Patient A has otosclerosis fusing the footplate of the stapes to the oval window. Patient B worked for 20 years around jet engines without ear protection and suffered irreversible destruction of hair cells in the spiral organ, though her vestibulocochlear nerve fibers remain viable.",
    question: "Which comparative analysis of these two patients is physiologically accurate?",
    options: [
      "Patient A has conductive hearing loss because ossicular amplification to perilymph is impaired; Patient B has sensorineural hearing loss and is the better candidate for a cochlear implant that directly stimulates the auditory nerve.",
      "Patient A has sensorineural hearing loss affecting the tectorial membrane; Patient B has conductive hearing loss that can be cured by clearing the auditory (Eustachian) tube.",
      "Both patients have conductive deafness because the tympanic reflex failed to contract the stapedius muscle, and neither would benefit from a cochlear implant.",
      "Patient B's hair cells will regenerate every 3 days like taste cells, whereas Patient A requires direct stimulation of the temporal lobe."
    ],
    correctIndex: 0,
    rationale: "Correct! Otosclerosis immobilizes the stapes at the oval window, interfering with mechanical sound wave transmission into the scala vestibuli (conductive deafness). Jet-engine noise destroys cochlear hair cells (sensorineural deafness); because Patient B's auditory nerve fibers remain viable, a cochlear implant can bypass the damaged hair cells and stimulate CN VIII directly."
  },

  /* ========================================================================
     SLO 6: SPECIAL SENSES — EQUILIBRIUM (STATIC & DYNAMIC BALANCE)
     ======================================================================== */
  {
    id: "slo6-1",
    type: "content",
    sloId: 6,
    section: "12.5 Static Equilibrium",
    title: "Vestibule, Utricle, Saccule & Maculae",
    image: "assets/images/slo6-static-equilibrium.webp",
    imageCaption: "Oblique anatomical model of the inner ear membranous labyrinth showing the vestibule (utricle and saccule) and semicircular canals.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Static Equilibrium Structures",
            bullets: [
              "Senses the <strong>position of the head</strong> when the body is not moving (plus linear gravity shifts).",
              "Located in the <strong>vestibule</strong> of the inner ear, inside two expanded membranous chambers: the <strong>utricle</strong> and <strong>saccule</strong>.",
              "Each chamber contains a <strong>macula</strong>—a sensory patch of hair cells and supporting cells."
            ]
          },
          {
            title: "Otolith Gravitational Mechanism",
            accent: "tan",
            bullets: [
              "Hair cell cilia project into a gelatinous mass topped with calcium carbonate crystals called <strong>otoliths</strong>.",
              "When head posture tilts, gravity pulls on the dense otoliths, shifting the gelatinous mass.",
              "Bending of cilia triggers impulses along the <strong>vestibular branch of CN VIII</strong>."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo6-2",
    type: "content",
    sloId: 6,
    section: "12.5 Dynamic Equilibrium",
    title: "Semicircular Canals & Crista Ampullaris",
    image: "assets/images/slo6-dynamic-equilibrium.webp",
    imageCaption: "Anatomical model of the three mutually perpendicular semicircular canals, ampullae, vestibule, and cochlea.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Dynamic Equilibrium Anatomy",
            bullets: [
              "Senses <strong>rotation and angular movement</strong> of the head and body.",
              "Three <strong>semicircular canals</strong> arranged at right angles to one another (3D planes).",
              "Each canal widens into an <strong>ampulla</strong> housing the sensory organ: the <strong>crista ampullaris</strong>."
            ]
          },
          {
            title: "Cupula Deflection Mechanism",
            accent: "red",
            bullets: [
              "Hair cell cilia extend upward into a dome-shaped gelatinous mass called the <strong>cupula</strong> (no otoliths).",
              "When the head rotates, endolymph inertia lags behind, bending the cupula in the opposite direction.",
              "Hair cell depolarization sends signals via the <strong>vestibular branch of CN VIII</strong> to maintain balance."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo6-quiz",
    type: "quiz",
    sloId: 6,
    section: "SLO 6 Knowledge Check",
    title: "SLO 6 Mastery Check: Static vs. Dynamic Equilibrium Analysis",
    image: "assets/images/kc6-semicircular.webp",
    imageCaption: "Reference: Semicircular canals and vestibular apparatus orientation.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    bloomSkill: "Distinguishing gravitational otolith mechanics from rotational endolymph/cupula mechanics.",
    vignette: "An astronaut-in-training performs two tests in the dark: (1) sitting completely still while her chair tilts backward 40 degrees, and (2) spinning rapidly clockwise in a swivel chair that then suddenly stops, causing a brief sensation of spinning counter-clockwise.",
    question: "Which analysis correctly matches the inner-ear receptor organs and physical forces driving Test 1 versus Test 2?",
    options: [
      "Test 1 is detected by the maculae in the utricle and saccule as gravity pulls calcium carbonate otoliths across hair cells; Test 2 is detected by the cristae ampullares in the semicircular canals as moving endolymph deflects the cupula.",
      "Test 1 is detected by the cristae ampullares via cupula inertia; Test 2 is detected by the cochlear spiral organ via tectorial membrane bending.",
      "Both Test 1 and Test 2 rely exclusively on calcium carbonate otoliths shifting inside the three semicircular canals.",
      "Test 1 stimulates the cochlear branch of CN VIII, whereas Test 2 stimulates the facial nerve (CN VII)."
    ],
    correctIndex: 0,
    rationale: "Correct! Tilting the head while stationary changes gravitational pull on the dense calcium carbonate otoliths resting atop the maculae in the utricle and saccule (static equilibrium). Rapid rotation and sudden stopping cause endolymph inertia to bend the dome-shaped cupula of each crista ampullaris inside the semicircular canal ampullae (dynamic equilibrium)."
  },

  /* ========================================================================
     SLO 7: SPECIAL SENSES — EYE ACCESSORY STRUCTURES, TUNICS & OPTICS
     ======================================================================== */
  {
    id: "slo7-1",
    type: "content",
    sloId: 7,
    section: "12.6 Visual Accessory Organs",
    title: "Eyelids, Lacrimal Apparatus & Eye Muscles",
    image: "assets/images/slo7-eye-accessory.webp",
    imageCaption: "Lateral anatomical model of the eyeball and extrinsic eye muscles (rectus and oblique groups).",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Eyelids & Lacrimal Apparatus",
            bullets: [
              "<strong>Palpebrae (4 layers):</strong> Skin, muscle (<em>orbicularis oculi</em> closes; <em>levator palpebrae superioris</em> opens), connective tissue, and mucous <strong>conjunctiva</strong>. Tarsal glands oil eyelashes.",
              "<strong>Tear Pathway:</strong> Lacrimal gland (lateral orbit) → <strong>canaliculi</strong> → <strong>lacrimal sac</strong> → <strong>nasolacrimal duct</strong> → nasal cavity.",
              "Tears contain antibacterial <strong>lysozyme</strong>."
            ]
          },
          {
            title: "Six Extrinsic Eye Muscles",
            accent: "tan",
            bullets: [
              "<strong>Superior Rectus:</strong> Rotates eye up & medially.",
              "<strong>Inferior Rectus:</strong> Rotates eye down & medially.",
              "<strong>Medial / Lateral Rectus:</strong> Medially / laterally.",
              "<strong>Superior Oblique:</strong> Down & laterally.",
              "<strong>Inferior Oblique:</strong> Up & laterally."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo7-2",
    type: "content",
    sloId: 7,
    section: "12.6 Structure of the Eye",
    title: "Three Tunics of the Eyeball & Ocular Humors",
    image: "assets/images/slo7-eye-tunics.webp",
    imageCaption: "Internal sagittal section model of the eye highlighting the fibrous, vascular, and nervous tunics plus anterior and posterior cavities.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "table",
        headers: ["Tunic (Layer)", "Posterior Portion", "Anterior Portion", "Primary Functions"],
        rows: [
          ["<strong>Outer (Fibrous)</strong>", "Sclera (5/6, white, opaque)", "Cornea (1/6, transparent)", "Protection, muscle attachment; light transmission & refraction."],
          ["<strong>Middle (Vascular)</strong>", "Choroid coat (blood + melanin)", "Ciliary body & Iris", "Nourishment, absorbs stray light; accommodation & light control."],
          ["<strong>Inner (Nervous)</strong>", "Retina (macula lutea, fovea centralis, optic disc)", "None (ends behind ciliary body)", "Photoreception & neural impulse conduction."]
        ]
      },
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Anterior Cavity & Aqueous Humor",
            bullets: [
              "Watery fluid secreted by ciliary body epithelium; nourishes cornea/lens and maintains anterior shape.",
              "Drains through the <strong>scleral venous sinus</strong>."
            ]
          },
          {
            title: "Posterior Cavity & Vitreous Humor",
            accent: "red",
            bullets: [
              "Thick gel behind the lens that holds the retina flat against the choroid coat.",
              "<strong>Optic Disc:</strong> Blind spot lacking photoreceptors where optic nerve exits."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo7-3",
    type: "content",
    sloId: 7,
    section: "12.6 Pupillary Control, Accommodation & Optics",
    title: "Iris Reflexes, Lens Accommodation & Refraction",
    image: "assets/images/slo7-lens-accommodation.webp",
    imageCaption: "Open orbital model displaying the iris, pupil, biconvex crystalline lens, and ciliary body/suspensory ligament region.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Iris & Pupillary Light Control",
            bullets: [
              "<strong>Dim Light:</strong> Stimulates <strong>radial</strong> smooth muscles → pupil <strong>dilates</strong>.",
              "<strong>Bright Light:</strong> Stimulates <strong>circular</strong> smooth muscles → pupil <strong>constricts</strong>.",
              "Melanin amount and distribution determine iris color."
            ]
          },
          {
            title: "Lens Accommodation (Near vs. Far)",
            accent: "red",
            bullets: [
              "<strong>Near Objects:</strong> Ciliary muscle <strong>contracts</strong> → suspensory ligaments <strong>relax</strong> → elastic lens <strong>thickens (more convex)</strong> to converge light sharply.",
              "<strong>Distant Objects:</strong> Ciliary muscle relaxes → suspensory ligaments pull taut → lens flattens."
            ]
          }
        ]
      },
      {
        type: "clinical",
        title: "Clinical App 12.6: Refraction & Corrective Lenses",
        text: "Light is refracted by the convex cornea and lens to form an inverted, left-right reversed image on the fovea centralis (corrected by the visual cortex). Nearsightedness (myopia) is corrected with a diverging concave lens; farsightedness (hyperopia) is corrected with a converging convex lens."
      }
    ]
  },
  {
    id: "slo7-quiz",
    type: "quiz",
    sloId: 7,
    section: "SLO 7 Knowledge Check",
    title: "SLO 7 Mastery Check: Accommodation & Refraction Analysis",
    image: "assets/images/kc7-eye-optics.webp",
    imageCaption: "Reference: Internal anterior-posterior optical axis of the human eyeball.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    bloomSkill: "Analyzing the biomechanical chain of lens accommodation and matching optical defects to lens geometry.",
    vignette: "A biology student shifts her gaze from a distant mountain peak down to fine print in her anatomy textbook held 25 cm away in a brightly lit lab. Her classmate next to her has myopia (nearsightedness), causing distant light rays to converge in front of his retina.",
    question: "Which optical and muscular analysis accurately describes BOTH students' eyes?",
    options: [
      "To read the textbook, her ciliary muscles contract to relax the suspensory ligaments so the lens thickens (becomes more convex) while circular iris muscles constrict the pupil; her myopic classmate needs a concave lens to diverge light slightly onto the retina.",
      "To read the textbook, her ciliary muscles relax to tighten the suspensory ligaments so the lens flattens while radial iris muscles constrict the pupil; her myopic classmate needs a convex lens.",
      "To read the textbook, her cornea flattens via orbicularis oculi contraction while aqueous humor drains faster; her myopic classmate needs a convex lens to converge light earlier.",
      "To read the textbook, her lens becomes concave to diverge light rays; her myopic classmate needs a thicker vitreous humor to shorten the eye."
    ],
    correctIndex: 0,
    rationale: "Correct! Viewing a near object triggers accommodation: ciliary muscle contraction relieves tension on the suspensory ligaments, allowing the elastic lens to bulge (become more convex and increase refractive power). Bright light simultaneously stimulates circular iris muscles to constrict the pupil. For myopia, where light converges too early (anterior to the retina), a concave lens diverges incoming rays so they focus cleanly on the fovea centralis."
  },

  /* ========================================================================
     SLO 8: PHOTORECEPTION, VISUAL PATHWAYS & LIFE-SPAN CHANGES
     ======================================================================== */
  {
    id: "slo8-1",
    type: "content",
    sloId: 8,
    section: "12.6 Photoreceptors & Visual Pigments",
    title: "Retinal Neurons, Rods vs. Cones & Pigments",
    image: "assets/images/slo8-retina-photoreceptors.webp",
    imageCaption: "High-magnification anatomical model of the retinal layers showing rods, cones, bipolar cells, and ganglion cells.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "table",
        headers: ["Feature", "Rods", "Cones"],
        rows: [
          ["<strong>Shape & Sensitivity</strong>", "Long, thin; hundreds of times more light-sensitive", "Short, blunt; require bright light"],
          ["<strong>Visual Pigment</strong>", "<strong>Rhodopsin</strong> (decomposes into opsin + retinal)", "<strong>Iodopsins:</strong> erythrolabe (red), chlorolabe (green), cyanolabe (blue)"],
          ["<strong>Visual Quality & Site</strong>", "Dim light, shades of gray, object outlines (peripheral)", "Sharp acuity, full color vision; <strong>fovea centralis has only cones</strong>"]
        ]
      },
      {
        type: "pathway",
        steps: [
          "Photoreceptors (Rods & Cones)",
          "Bipolar Cells",
          "Ganglion Cells",
          "Optic Nerve (CN II)"
        ]
      },
      {
        type: "clinical",
        title: "Retinal Signal Integration",
        text: "While photoreceptors, bipolar cells, and ganglion cells form the direct vertical impulse pathway to the optic nerve, horizontal cells and amacrine cells laterally modify and integrate visual signals before they leave the retina."
      }
    ]
  },
  {
    id: "slo8-2",
    type: "content",
    sloId: 8,
    section: "12.6 Visual Pathways & 12.7 Life-Span Changes",
    title: "Central Visual Pathways & Sensory Aging",
    image: "assets/images/slo8-visual-pathways.webp",
    imageCaption: "Open orbital anatomical model displaying the retina, optic disc, and optic nerve exiting toward the optic chiasma.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    blocks: [
      {
        type: "pathway",
        steps: [
          "Retinal Ganglion Cells",
          "Optic Nerve",
          "Optic Chiasma",
          "Optic Tracts",
          "Thalamus",
          "Optic Radiations",
          "Occipital Visual Cortex"
        ]
      },
      {
        type: "cards",
        columns: 2,
        items: [
          {
            title: "Stereoscopic Vision & Reflexes",
            bullets: [
              "<strong>Stereoscopic Vision:</strong> Two slightly different retinal images yield depth, distance, height, and width perception.",
              "A subset of fibers branches off before the thalamus to enter nuclei for <strong>visual reflexes</strong>."
            ]
          },
          {
            title: "Life-Span Sensory Changes",
            accent: "red",
            bullets: [
              "<strong>Vision:</strong> Presbyopia (loss of lens elasticity), dry eyes, floaters (vitreous crystals), cataracts, glaucoma, macular degeneration.",
              "<strong>Hearing:</strong> Hair cell loss, neural degeneration, tinnitus.",
              "<strong>Smell & Taste:</strong> Loss of olfactory receptors (<strong>anosmia</strong>)."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "slo8-quiz",
    type: "quiz",
    sloId: 8,
    section: "SLO 8 Knowledge Check",
    title: "SLO 8 Mastery Check: Photoreceptor & Aging Analysis",
    image: "assets/images/kc8-retina.webp",
    imageCaption: "Reference: Histological cross-section of retinal photoreceptors and pigmented layer.",
    imageSource: "12 Senses Lab Model",
    isNano: false,
    bloomSkill: "Analyzing retinal regional specialization (fovea vs. periphery) and age-related ocular pathology.",
    vignette: "A 72-year-old patient develops localized degeneration of the macula lutea and fovea centralis, along with age-related stiffening of the crystalline lens. He notices he can still navigate a dimly lit hallway using peripheral vision, but cannot read sharp color text directly in front of him.",
    question: "Which physiological analysis best explains this pattern of preserved versus lost visual abilities?",
    options: [
      "The fovea centralis contains exclusively cones responsible for sharp central color vision, whereas peripheral rods containing rhodopsin remain intact for dim-light navigation; lens stiffening additionally causes presbyopia.",
      "The fovea centralis contains exclusively rods with rhodopsin, so macular degeneration destroys dim-light peripheral navigation while sparing erythrolabe and chlorolabe cones.",
      "Macular degeneration destroys the optic disc (blind spot), blocking all horizontal and amacrine cells from transmitting signals to the temporal lobe.",
      "Stiffening of the vitreous humor eliminates cyanolabe pigments while preserving aqueous humor drainage through the fovea."
    ],
    correctIndex: 0,
    rationale: "Correct! The fovea centralis at the center of the macula lutea contains only cones (with erythrolabe, chlorolabe, and cyanolabe pigments) for high-acuity color vision; damaging it impairs central sharp/color reading. Because rods (with highly sensitive rhodopsin) populate the peripheral retina, dim-light peripheral navigation persists. Concurrent loss of lens elasticity reduces near accommodation (presbyopia)."
  },

  /* ========================================================================
     FINAL SLIDE: MASTERY SCORECARD
     ======================================================================== */
  {
    id: "summary",
    type: "summary",
    sloId: null,
    section: "Chapter 12 Mastery Report",
    title: "Chapter 12 SLO Mastery Scorecard",
    image: "assets/images/summary-senses.webp",
    imageCaption: "Anterior anatomical model of the human eye — Chapter 12 General & Special Senses complete.",
    imageSource: "12 Senses Lab Model",
    isNano: false
  }
];
