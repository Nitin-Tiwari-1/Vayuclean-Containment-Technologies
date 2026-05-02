export const blogs = [
  {
    id: 1,
    slug: "what-is-oeb-classification",
    category: "Education",
    tag: "OEB Guide",
    icon: "flask",
    title:
      "What is OEB Classification? A Complete Guide for Pharma Manufacturers",
    excerpt:
      "Occupational Exposure Bands (OEB) are the foundation of pharmaceutical containment design. Learn how OEB 1–5 are classified, what they mean for your facility, and which containment systems are required at each level.",
    date: "April 18, 2026",
    readTime: "7 min read",
    author: {
      name: "Vayuclean Engineering Team",
      role: "Containment Engineers",
      initial: "VE",
    },
    content: [
      {
        type: "intro",
        text: "Occupational Exposure Bands (OEB) are a standardised classification system that determines how much of a pharmaceutical compound a worker can safely be exposed to during an 8-hour shift. The higher the OEB level, the more hazardous the compound — and the more sophisticated the containment system required.",
      },
      {
        type: "heading",
        text: "Why OEB Classification Matters",
      },
      {
        type: "text",
        text: "Before designing or procuring any containment system, the OEB level of the active pharmaceutical ingredient (API) being handled must be established. This classification determines everything — from the type of booth or isolator required to the ventilation parameters, filtration grade, and validation requirements.",
      },
      {
        type: "heading",
        text: "OEB 1 & 2 — Low to Moderate Potency",
      },
      {
        type: "text",
        text: "OEB 1 compounds have an occupational exposure limit (OEL) above 1,000 µg/m³. Standard engineering controls such as local exhaust ventilation (LEV) are usually sufficient. OEB 2 compounds (OEL: 100–1,000 µg/m³) typically require a basic downflow booth with HEPA filtration to protect operators during open weighing and dispensing.",
      },
      {
        type: "heading",
        text: "OEB 3 — High Potency (10–100 µg/m³)",
      },
      {
        type: "text",
        text: "At OEB 3, more robust containment is needed. A contained downflow booth with improved aerodynamic design, HEPA H14 filtration, and laminar airflow management is standard. These booths are engineered to achieve containment performance verified by SMEPAC testing, typically demonstrating < 100 µg/m³ exposure at breathing zone.",
      },
      {
        type: "heading",
        text: "OEB 4 — Very High Potency (1–10 µg/m³)",
      },
      {
        type: "text",
        text: "OEB 4 requires a fully closed containment system — a containment isolator with glove ports, HEPA/ULPA dual-stage filtration, and contained material transfer via Split Butterfly Valves (SBV) or Rapid Transfer Ports (RTP). Pressure monitoring and interlocked door systems are mandatory.",
      },
      {
        type: "heading",
        text: "OEB 5 — Ultra High Potency (< 1 µg/m³)",
      },
      {
        type: "text",
        text: "The highest containment band — OEB 5 — is required for oncology drugs, cytotoxics, and HPAPIs with extreme potency. Negative-pressure glove box isolators with SMEPAC-verified performance below 1 µg/m³ are mandatory. These systems require rigorous DQ, IQ, OQ, and PQ qualification before use.",
      },
      {
        type: "heading",
        text: "Choosing the Right System",
      },
      {
        type: "text",
        text: "At Vayuclean Containment Technologies, our engineers assess your API's OEB classification, batch size, process type, and facility layout to recommend the optimal containment system — from standard downflow booths to fully enclosed OEB 5 glove box isolators. Contact us for a free containment audit.",
      },
    ],
    tags: ["OEB", "Containment", "GMP", "API", "Pharma Safety"],
  },
  {
    id: 2,
    slug: "downflow-booth-vs-containment-isolator",
    category: "Product Guide",
    tag: "Comparison",
    icon: "flask",
    title: "Downflow Booth vs. Containment Isolator — Which One Do You Need?",
    excerpt:
      "Both downflow booths and containment isolators protect operators from potent compounds — but they serve very different containment levels. This guide breaks down the key differences, applications, and selection criteria.",
    date: "April 10, 2026",
    readTime: "6 min read",
    author: {
      name: "Vayuclean Engineering Team",
      role: "Containment Engineers",
      initial: "VE",
    },
    content: [
      {
        type: "intro",
        text: "Choosing between a downflow booth and a containment isolator is one of the most common decisions pharma engineers face. The answer depends primarily on the OEB level of your compound, your process type, and the required containment performance.",
      },
      {
        type: "heading",
        text: "What is a Downflow Booth?",
      },
      {
        type: "text",
        text: "A downflow booth is an open-front containment system that uses a vertical laminar airflow (top-to-bottom) to carry airborne particles away from the operator's breathing zone, through HEPA filters, and either recirculated or exhausted. The operator works with arms inside the booth but the front is open. This is suitable for OEB 1–3 compounds.",
      },
      {
        type: "heading",
        text: "What is a Containment Isolator?",
      },
      {
        type: "text",
        text: "A containment isolator is a fully enclosed workspace where the operator manipulates materials via fixed glove ports sealed into the isolator wall. The interior is maintained at negative pressure relative to the room. Material is transferred in and out via Split Butterfly Valves (SBV) or Rapid Transfer Ports (RTP). Required for OEB 4–5 compounds.",
      },
      {
        type: "heading",
        text: "Key Differences at a Glance",
      },
      {
        type: "text",
        text: "Downflow booths offer open-front access with good ergonomics and lower capital cost. They are easier to clean and qualify. Containment isolators provide the highest containment performance (< 1 µg/m³) but require more floor space, higher investment, and more complex validation (DQ/IQ/OQ/PQ + SMEPAC). For OEB 3 borderline cases, risk assessment and SMEPAC testing are recommended to confirm the right choice.",
      },
      {
        type: "heading",
        text: "When to Choose a Downflow Booth",
      },
      {
        type: "text",
        text: "Choose a downflow booth when: your API is OEB 1–3, you handle moderate quantities, open weighing and dispensing are your primary processes, and your OEL is above 10 µg/m³. Downflow booths are cost-effective, GMP-compliant, and quick to commission.",
      },
      {
        type: "heading",
        text: "When to Choose a Containment Isolator",
      },
      {
        type: "text",
        text: "Choose a containment isolator when: your API is OEB 4 or 5, your OEL is below 10 µg/m³, you handle HPAPIs, oncology drugs, or cytotoxics, or regulatory requirements (FDA, EMA) mandate closed processing. Containment isolators are the gold standard for high-potency compound handling.",
      },
    ],
    tags: [
      "Downflow Booth",
      "Isolator",
      "OEB",
      "Selection Guide",
      "Containment",
    ],
  },
  {
    id: 3,
    slug: "gmp-compliance-pharma-containment",
    category: "Compliance",
    tag: "GMP",
    icon: "medal",
    title:
      "GMP Compliance in Pharmaceutical Containment: What You Need to Know",
    excerpt:
      "Good Manufacturing Practice (GMP) compliance is non-negotiable in pharmaceutical containment. This article covers the key GMP requirements for containment systems — from material selection to validation documentation.",
    date: "March 28, 2026",
    readTime: "8 min read",
    author: {
      name: "Vayuclean QA Team",
      role: "Quality & Compliance",
      initial: "QA",
    },
    content: [
      {
        type: "intro",
        text: "GMP (Good Manufacturing Practice) guidelines govern every aspect of pharmaceutical manufacturing — including the design, construction, installation, and qualification of containment systems. Whether you are installing a downflow booth or an OEB 5 isolator, GMP compliance is mandatory.",
      },
      {
        type: "heading",
        text: "Material of Construction",
      },
      {
        type: "text",
        text: "GMP guidelines require that all product-contact surfaces be constructed from inert, non-shedding, non-reactive materials. SS 316L stainless steel is the standard for pharmaceutical containment systems. Electropolished internal surfaces (Ra ≤ 0.5 µm) are required for isolators handling sterile products. All gaskets must be FDA-compliant silicone or EPDM.",
      },
      {
        type: "heading",
        text: "HEPA Filtration Requirements",
      },
      {
        type: "text",
        text: "All containment systems handling potent compounds must be fitted with HEPA H14 filters (minimum 99.995% efficiency at MPPS). For OEB 5 systems, ULPA U15 or U16 filtration is recommended. Filter integrity testing (DOP/PAO aerosol challenge) must be performed during IQ and at each OQ/PQ cycle.",
      },
      {
        type: "heading",
        text: "Validation Requirements — DQ, IQ, OQ, PQ",
      },
      {
        type: "text",
        text: "GMP requires a complete validation lifecycle for all containment systems. Design Qualification (DQ) confirms the system design meets URS requirements. Installation Qualification (IQ) verifies correct installation. Operational Qualification (OQ) confirms the system operates within specified parameters across its full operating range. Performance Qualification (PQ) demonstrates consistent containment performance under real process conditions.",
      },
      {
        type: "heading",
        text: "SMEPAC Testing",
      },
      {
        type: "text",
        text: "SMEPAC (Standardised Measurement of Equipment Particulate Airborne Concentration) is the internationally accepted test method for verifying the containment performance of pharmaceutical equipment. Vayuclean provides full SMEPAC testing support and documentation as part of our commissioning and qualification service.",
      },
      {
        type: "heading",
        text: "Change Control & Ongoing Compliance",
      },
      {
        type: "text",
        text: "Any modification to a GMP-validated containment system — including filter replacement, gasket change, or control system upgrade — must go through a formal change control process. Annual re-qualification (including HEPA integrity testing) is required to maintain validated status. Vayuclean offers Annual Maintenance Contracts (AMC) that include re-qualification support.",
      },
    ],
    tags: ["GMP", "Compliance", "Validation", "DQ IQ OQ PQ", "SMEPAC"],
  },
  {
    id: 4,
    slug: "smepac-testing-explained",
    category: "Technical",
    tag: "Testing",
    icon: "chart-bar",
    title: "SMEPAC Testing Explained: How We Verify Containment Performance",
    excerpt:
      "SMEPAC is the gold standard for measuring pharmaceutical containment system performance. Learn what SMEPAC testing involves, how results are interpreted, and what levels of containment performance to expect from different system types.",
    date: "March 15, 2026",
    readTime: "5 min read",
    author: {
      name: "Vayuclean Engineering Team",
      role: "Containment Engineers",
      initial: "VE",
    },
    content: [
      {
        type: "intro",
        text: 'SMEPAC stands for "Standardised Measurement of Equipment Particulate Airborne Concentration." It is the internationally recognised benchmark test for verifying the containment performance of pharmaceutical equipment — from downflow booths to OEB 5 glove box isolators.',
      },
      {
        type: "heading",
        text: "Why SMEPAC Testing is Required",
      },
      {
        type: "text",
        text: "Regulators (FDA, EMA, MHRA) and pharmaceutical companies require SMEPAC test data to confirm that containment equipment achieves the claimed occupational exposure levels. Without SMEPAC data, a containment system cannot be formally validated or used to handle potent compounds in a GMP environment.",
      },
      {
        type: "heading",
        text: "What the Test Involves",
      },
      {
        type: "text",
        text: "SMEPAC testing uses a surrogate powder (typically lactose or mannitol) at a defined particle size as a substitute for the actual API. Operators perform representative tasks — scooping, weighing, transferring — while air samples are collected at the breathing zone. The concentration of surrogate powder in the breathing zone air is measured and reported as µg/m³.",
      },
      {
        type: "heading",
        text: "Interpreting Results",
      },
      {
        type: "text",
        text: "A containment system's SMEPAC performance is compared against the OEL of the API it will handle. For example, an OEB 4 system must demonstrate breathing zone concentrations below 10 µg/m³. Vayuclean containment isolators are designed and verified to achieve < 1 µg/m³ for OEB 5 applications, and < 10 µg/m³ for OEB 4 systems.",
      },
      {
        type: "heading",
        text: "SMEPAC at Vayuclean",
      },
      {
        type: "text",
        text: "Every Vayuclean containment system comes with factory SMEPAC test data as standard. On-site SMEPAC testing after installation is available as part of our commissioning service. We also provide full PQ documentation including SMEPAC reports, breathing zone sample results, and statistical analysis.",
      },
    ],
    tags: ["SMEPAC", "Testing", "Validation", "OEB", "Performance"],
  },
  {
    id: 5,
    slug: "rabs-vs-isolator-aseptic-manufacturing",
    category: "Product Guide",
    tag: "RABS vs Isolator",
    icon: "shield",
    title:
      "RABS vs. Isolator for Aseptic Manufacturing — Which is Right for Your Fill-Finish Line?",
    excerpt:
      "For sterile drug product manufacturing, the choice between RABS (Restricted Access Barrier System) and an isolator is a critical decision. This guide compares both approaches against EU Annex 1 requirements.",
    date: "March 5, 2026",
    readTime: "9 min read",
    author: {
      name: "Vayuclean Engineering Team",
      role: "Containment Engineers",
      initial: "VE",
    },
    content: [
      {
        type: "intro",
        text: "The revised EU GMP Annex 1 (2022) significantly elevated the requirements for sterile manufacturing environments. Both RABS and isolators are accepted technologies — but they have fundamentally different risk profiles, operational complexities, and capital requirements.",
      },
      {
        type: "heading",
        text: "What is RABS?",
      },
      {
        type: "text",
        text: "Restricted Access Barrier Systems (RABS) are rigid barrier systems that physically separate operators from the critical aseptic zone around a filling line. Open RABS use filtered air supply without a fully closed enclosure, while Closed RABS use interlocked doors and a positive pressure air supply to maintain Grade A (ISO 5) conditions throughout operations.",
      },
      {
        type: "heading",
        text: "What is an Aseptic Isolator?",
      },
      {
        type: "text",
        text: "An aseptic isolator is a fully enclosed, pressure-controlled environment that completely separates the critical zone from the surrounding cleanroom. Access is exclusively via glove ports. The isolator interior is bio-decontaminated using VHP (Vaporised Hydrogen Peroxide) before each production campaign. EU Annex 1 considers isolators the preferred technology for new installations.",
      },
      {
        type: "heading",
        text: "EU Annex 1 Requirements",
      },
      {
        type: "text",
        text: "The 2022 revision of EU GMP Annex 1 requires a Contamination Control Strategy (CCS) for all sterile manufacturing operations. Isolators are described as the preferred option for new facilities, while RABS remain acceptable with enhanced procedural controls. Both must achieve Grade A (ISO 5) conditions and be validated for viable and non-viable particle counts.",
      },
      {
        type: "heading",
        text: "Key Differences: Operational Considerations",
      },
      {
        type: "text",
        text: "RABS offer faster line access for interventions — which is advantageous for high-speed filling operations with frequent adjustments. Isolators require all interventions to be performed through glove ports, which is slower but significantly reduces contamination risk. Isolators typically require a background cleanroom of Grade C or D, reducing facility construction costs compared to Grade B rooms required for RABS.",
      },
      {
        type: "heading",
        text: "Recommendation",
      },
      {
        type: "text",
        text: "For new fill-finish lines, especially those handling biologics, vaccines, or oncology injectables, isolators are strongly recommended and align with EU Annex 1 intent. For existing RABS installations or lines requiring frequent interventions, Closed RABS with robust procedural controls remain viable. Vayuclean provides both Open RABS, Closed RABS, and aseptic isolator systems. Contact us for a technology selection consultation.",
      },
    ],
    tags: [
      "RABS",
      "Isolator",
      "Aseptic",
      "EU Annex 1",
      "Sterile Manufacturing",
    ],
  },
  {
    id: 6,
    slug: "oncology-containment-india",
    category: "Industry Insight",
    tag: "Oncology",
    icon: "dna",
    title:
      "Oncology Drug Manufacturing in India: Containment Challenges & Solutions",
    excerpt:
      "India is rapidly expanding its oncology and HPAPI manufacturing capabilities. This article examines the unique containment challenges faced by oncology drug manufacturers and the systems designed to address them.",
    date: "February 20, 2026",
    readTime: "7 min read",
    author: {
      name: "Vayuclean QA Team",
      role: "Quality & Compliance",
      initial: "QA",
    },
    content: [
      {
        type: "intro",
        text: "India's pharmaceutical sector is undergoing a major transformation, with rapid growth in oncology API manufacturing, HPAPI synthesis, and cytotoxic drug formulation. This growth brings significant containment engineering challenges that require specialised expertise and purpose-built equipment.",
      },
      {
        type: "heading",
        text: "The Scale of the Challenge",
      },
      {
        type: "text",
        text: "Oncology compounds and high-potency APIs (HPAPIs) can cause serious harm to operators at extremely low exposure concentrations — often below 1 µg/m³ (OEB 5). A single gram of some cytotoxic compounds is toxic enough to require full contained handling. Standard pharma containment designed for OEB 1–3 products is wholly inadequate for these materials.",
      },
      {
        type: "heading",
        text: "Common Containment Failures",
      },
      {
        type: "text",
        text: "Many Indian pharma manufacturers upgrading to HPAPI or oncology production underestimate the containment requirements. Common issues include using OEB 2/3 downflow booths for OEB 4/5 compounds, inadequate negative pressure in process rooms, insufficient filter change containment procedures, and lack of validated contained transfer systems between equipment.",
      },
      {
        type: "heading",
        text: "The Required Solution Stack",
      },
      {
        type: "text",
        text: "A complete oncology containment solution requires: OEB 5 glove box isolators for weighing and dispensing, negative-pressure manufacturing suites with cascading pressure differentials, Split Butterfly Valves (SBV) or Rapid Transfer Ports (RTP) for contained material transfer, dedicated HEPA-filtered material airlocks and personnel change rooms, and a comprehensive validation package including SMEPAC testing.",
      },
      {
        type: "heading",
        text: "Regulatory Expectations",
      },
      {
        type: "text",
        text: "The US FDA's guidance on containment of potent compounds, ISPE's Risk-MaPP guide, and ICH Q9 risk management principles all demand that manufacturers formally assess and document their containment strategy. USFDA inspections of Indian HPAPI facilities have increasingly cited inadequate containment as a major GMP observation.",
      },
      {
        type: "heading",
        text: "Vayuclean's Oncology Solutions",
      },
      {
        type: "text",
        text: "Vayuclean has supplied complete containment systems to oncology API manufacturers and cytotoxic formulation facilities across India. Our OEB 5 glove box isolators, negative pressure rooms, and contained transfer systems are SMEPAC-validated and meet USFDA and EU GMP requirements. Contact us to discuss your oncology containment project.",
      },
    ],
    tags: ["Oncology", "HPAPI", "OEB 5", "Cytotoxic", "India Pharma"],
  },
];
