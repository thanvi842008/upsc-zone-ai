/**
 * UPSC ZONE AI - Core Data Repository
 * Contains sample current affairs stories, PYQ questions, revision notes, and editorial correspondence.
 * All content is clearly marked as academic practice material / simulated content.
 */

const UPSC_DATA = {
  // 8 Sample Current Affairs Stories (2 Polity, 2 Economy, 2 Environment, 2 History)
  stories: [
    {
      id: "story-polity-1",
      subject: "Polity",
      subjectCode: "GS-II",
      headline: "Supreme Court Reiterates Constitutional Morality in Delhi Services Ordinance Dispute",
      subhead: "A Constitution Bench analyzes the contours of Article 239AA and federal balance in union administration.",
      date: "October 10, 2026",
      source: "The Hindu Editorial Analysis (Sample Content)",
      readingTime: "4 min read",
      tags: ["Article 239AA", "Federalism", "Separation of Powers", "Civil Services"],
      summary: "In a nuanced reading of cooperative federalism, the Constitution Bench observed that an elected government in a representative democracy must possess democratic accountability over permanent civil services. The ruling dissects parliamentary legislative competence versus executive governance under the Government of National Capital Territory of Delhi (GNCTD) framework.",
      body: `The Supreme Court of India, through a five-judge Constitution Bench, has re-examined the limits of Article 239AA, emphasizing that the triple chain of accountability—civil servants accountable to cabinet, cabinet accountable to the legislature, and legislature accountable to the electorate—cannot be severed without impairing democratic legitimacy.\n\nThe Court observed that while Parliament retains overriding legislative competence over the Union Territory of Delhi under Article 239AA(3)(b), the executive power of the Government of NCT of Delhi must remain co-extensive with its legislative powers under State and Concurrent lists, barring Police, Public Order, and Land.\n\nFrom a UPSC perspective, this judgment enriches the discourse on asymmetrical federalism, the doctrine of pith and substance, and the constitutional limits of ordinance-making power under Article 123.`,
      mcq: {
        id: "mcq-polity-1",
        question: "With reference to the constitutional status of the National Capital Territory of Delhi under Article 239AA, consider the following statements:\n1. The Legislative Assembly of Delhi can make laws on all matters enumerated in the State List except Police, Public Order, and Land.\n2. Parliament has no competence to make laws on matters enumerated in the State List with respect to the NCT of Delhi.\n3. The Council of Ministers of Delhi is headed by a Chief Minister who is appointed directly by the Lieutenant Governor.\nWhich of the statements given above is/are correct?",
        options: [
          "1 only",
          "1 and 2 only",
          "2 and 3 only",
          "1, 2 and 3"
        ],
        correctAnswer: 0,
        explanation: "Statement 1 is correct: Under Article 239AA(3)(a), the Legislative Assembly has power to make laws for the NCT of Delhi with respect to any matters in the State List or Concurrent List, except entries 1 (Public Order), 2 (Police), and 18 (Land) of the State List.\n\nStatement 2 is incorrect: Under Article 239AA(3)(b), Parliament retains the overriding power to make laws on ANY matter for a Union Territory, including subjects in the State List.\n\nStatement 3 is incorrect: Under Article 239AA(5), the Chief Minister is appointed by the President (not the LG), and other Ministers are appointed by the President on the advice of the Chief Minister.",
        syllabusTopic: "Structure, organization and functioning of the Executive and the Judiciary; Federal Issues."
      }
    },
    {
      id: "story-polity-2",
      subject: "Polity",
      subjectCode: "GS-II",
      headline: "Inter-State Water Disputes and the Efficacy of Permanent Tribunals",
      subhead: "Parliamentary committee reviews pending tribunal awards under Article 262.",
      date: "October 08, 2026",
      source: "Indian Express Explained (Sample Content)",
      readingTime: "3 min read",
      tags: ["Article 262", "River Boards Act", "Inter-State Council", "Tribunals"],
      summary: "Decades of delays in adjudicating river water conflicts have prompted renewed legislative interest in creating a single, permanent Inter-State River Water Disputes Tribunal with time-bound dispute resolution benches and institutionalized dispute resolution mechanisms.",
      body: `Water governance in India is constitutionally distributed across Union and State jurisdictions. While Entry 17 of the State List deals with water supplies, irrigation, and canals, it is subject to Entry 56 of the Union List, empowering Parliament to regulate inter-state rivers in public interest.\n\nArticle 262 bars the jurisdiction of the Supreme Court and other courts in respect of inter-state water disputes, conferring exclusive adjudication power upon statutory tribunals set up under the Inter-State River Water Disputes Act, 1956.\n\nAspirants should observe the structural bottleneck: awards are frequently delayed for over a decade, and states repeatedly invoke Article 136 (Special Leave Petitions) to reopen tribunal decisions before the Supreme Court.`,
      mcq: {
        id: "mcq-polity-2",
        question: "Regarding Article 262 of the Constitution of India and Inter-State River Water Disputes, which of the following statements is INCORRECT?",
        options: [
          "Parliament may by law provide for the adjudication of any dispute relating to the use, distribution or control of waters of an inter-state river.",
          "Parliament may by law exclude the jurisdiction of the Supreme Court in respect of such disputes.",
          "The Inter-State River Water Disputes Act, 1956 empowers the President alone to pronounce final awards binding on riparian states.",
          "Water is primarily a State subject under Entry 17 of the State List, subject to Entry 56 of the Union List."
        ],
        correctAnswer: 2,
        explanation: "Statement C is incorrect: The Inter-State River Water Disputes Act, 1956 provides for the constitution of an ad-hoc or permanent Tribunal upon request from a state government. The Tribunal's award, once published in the official gazette by the Central Government, has the same force as an order of the Supreme Court. The President does not pronounce the awards independently.",
        syllabusTopic: "Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure."
      }
    },
    {
      id: "story-economy-1",
      subject: "Economy",
      subjectCode: "GS-III",
      headline: "RBI's Calibrated Stance: Balancing Liquidity Deficit and Inflation Targeting",
      subhead: "Standing Deposit Facility and variable repo operations stabilize money market rates.",
      date: "October 09, 2026",
      source: "Mint Editorial Columns (Sample Content)",
      readingTime: "4 min read",
      tags: ["Monetary Policy Committee", "SDF", "LAF Corridor", "Headline Inflation"],
      summary: "The Monetary Policy Committee (MPC) maintains a vigilant stance against volatile food prices while fine-tuning banking system liquidity. The shift towards frictional liquidity management highlights the growing operational significance of the Standing Deposit Facility (SDF).",
      body: `The Liquidity Adjustment Facility (LAF) corridor has evolved significantly since the formal adoption of flexible inflation targeting (FIT) with a target of 4% (+/- 2%). With the operationalization of the Standing Deposit Facility (SDF) as the floor of the LAF without requiring collateral absorption, the central bank possesses a non-disruptive tool to drain excess durable liquidity.\n\nEconomists point out that persistent divergence between CPI food inflation and core inflation (excluding food and fuel) complicates transmission. When food inflation stays elevated due to erratic weather, unanchored household inflation expectations risk spilling into generalized wage pressures.\n\nFor UPSC candidates, mastering the relationship between policy rates, yield curves, open market operations (OMO), and the monetary transmission mechanism is crucial.`,
      mcq: {
        id: "mcq-economy-1",
        question: "Consider the following statements regarding the Standing Deposit Facility (SDF) introduced by the Reserve Bank of India:\n1. It allows banks to park surplus funds with the RBI without the RBI having to provide government securities as collateral.\n2. The SDF rate serves as the upper ceiling of the Liquidity Adjustment Facility (LAF) corridor.\n3. The introduction of SDF was recommended by the Urjit Patel Committee on monetary policy framework.\nWhich of the statements given above are correct?",
        options: [
          "1 and 2 only",
          "1 and 3 only",
          "2 and 3 only",
          "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statements 1 and 3 are correct: The SDF allows the RBI to absorb liquidity without pledging G-Secs as collateral, thereby preserving the RBI's collateral flexibility. Its adoption was first recommended by the Urjit Patel Committee in 2014.\n\nStatement 2 is incorrect: The SDF rate serves as the lower floor (not upper ceiling) of the LAF corridor, while the Marginal Standing Facility (MSF) rate serves as the upper ceiling.",
        syllabusTopic: "Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment."
      }
    },
    {
      id: "story-economy-2",
      subject: "Economy",
      subjectCode: "GS-III",
      headline: "Insolvency and Bankruptcy Code (IBC) After a Decade: Resolution vs Liquidation",
      subhead: "Average recovery rates and the pre-packaged insolvency regime for MSMEs reviewed.",
      date: "October 07, 2026",
      source: "Business Standard Policy Review (Sample Content)",
      readingTime: "3 min read",
      tags: ["IBC 2016", "NCLT", "Haircuts", "Pre-pack Insolvency"],
      summary: "Ten years since the enactment of the Insolvency and Bankruptcy Code, 2016, empirical data demonstrates a shift in debtor behavior towards prompt settlement, although operational hurdles at the National Company Law Tribunal (NCLT) continue to exceed the statutory 330-day timeline.",
      body: `Prior to the IBC, India's debt recovery regime was fragmented across SICA, SARFAESI, and Debt Recovery Tribunals (DRTs), resulting in prolonged capital lock-in and high non-performing assets (NPAs). The IBC shifted the paradigm from 'debtor-in-possession' to 'creditor-in-control'.\n\nRecent reforms focus on expanding the Pre-packaged Insolvency Resolution Process (PPIRP) beyond Micro, Small, and Medium Enterprises (MSMEs). Unlike the standard Corporate Insolvency Resolution Process (CIRP), a pre-pack enables existing promoters to remain in charge while negotiating a restructuring plan with financial creditors.\n\nKey evaluative criteria for GS-III include haircut percentages, resolution speed, liquidation biases for older stressed assets, and cross-border insolvency frameworks.`,
      mcq: {
        id: "mcq-economy-2",
        question: "With reference to the Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code, 2016, consider the following:\n1. A resolution plan must be approved by a vote of not less than 66% of voting share of financial creditors.\n2. The Committee of Creditors (CoC) comprises both secured financial creditors and operational creditors with equal voting rights.\n3. The statutory timeline for completion of CIRP, including extensions and legal proceedings, is capped at 330 days.\nWhich of the statements given above is/are correct?",
        options: [
          "1 and 2 only",
          "1 and 3 only",
          "3 only",
          "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statements 1 and 3 are correct: Resolution plans require at least 66% approval of voting shares of financial creditors. The 2019 amendment established a mandatory 330-day cap for the entire CIRP process including litigation time.\n\nStatement 2 is incorrect: The Committee of Creditors (CoC) consists exclusively of financial creditors. Operational creditors do not have voting rights in the CoC unless the corporate debtor has no financial creditors.",
        syllabusTopic: "Effects of liberalization on the economy, changes in industrial policy and their effects on industrial growth."
      }
    },
    {
      id: "story-environment-1",
      subject: "Environment",
      subjectCode: "GS-III",
      headline: "National Biodiversity Strategy Aligns with Kunming-Montreal 30x30 Framework",
      subhead: "Other Effective Area-Based Conservation Measures (OECMs) lead India's conservation push.",
      date: "October 09, 2026",
      source: "Down To Earth In-Depth (Sample Content)",
      readingTime: "4 min read",
      tags: ["CBD COP15", "OECMs", "30x30 Target", "Wildlife Protection Act"],
      summary: "India has updated its National Biodiversity Strategy and Action Plan (NBSAP) to implement the 23 targets of the Kunming-Montreal Global Biodiversity Framework (KMGBF), emphasizing the formal recognition of community forest rights and sacred groves as OECMs.",
      body: `The Kunming-Montreal Global Biodiversity Framework (KMGBF), adopted at CBD COP15, sets the ambitious Target 3: ensuring that at least 30 percent of terrestrial, inland water, and coastal areas are effectively conserved by 2030 ('30x30').\n\nGiven India's high population density and agrarian land footprint, expanding formal National Parks and Wildlife Sanctuaries alone is ecologically and socially constrained. Therefore, India's strategy leverages Other Effective Area-Based Conservation Measures (OECMs)—geographically defined areas not governed as traditional protected areas, but delivering sustained long-term in-situ biodiversity conservation.\n\nExamples include sacred groves, agricultural biodiversity heritage sites, military cantonments preserving natural flora, and community reserves notified under the Wildlife (Protection) Act, 1972.`,
      mcq: {
        id: "mcq-environment-1",
        question: "Regarding 'Other Effective Area-Based Conservation Measures (OECMs)' recognized under the Convention on Biological Diversity (CBD), which of the following is correct?",
        options: [
          "They must be legally notified as National Parks or Wildlife Sanctuaries under national wildlife laws.",
          "They are areas where human activity and indigenous community livelihoods are completely prohibited.",
          "They are geographically delineated areas managed in ways that achieve positive long-term biodiversity outcomes, even if conservation is not their primary objective.",
          "They are designated exclusively by the UNESCO World Heritage Committee."
        ],
        correctAnswer: 2,
        explanation: "Option C is correct: An OECM is a geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive, sustained long-term outcomes for the in-situ conservation of biodiversity, along with associated ecosystem functions and cultural values. Unlike protected areas, primary management objectives may include cultural preservation, municipal water catchment, or low-impact community usage.",
        syllabusTopic: "Conservation, environmental pollution and degradation, environmental impact assessment."
      }
    },
    {
      id: "story-environment-2",
      subject: "Environment",
      subjectCode: "GS-III",
      headline: "Critical Aquifer Mapping Exposes Over-Exploitation in the Indo-Gangetic Basin",
      subhead: "Central Ground Water Board links paddy-wheat crop cycles to subterranean depletion.",
      date: "October 06, 2026",
      source: "The Hindu Science & Environment (Sample Content)",
      readingTime: "3 min read",
      tags: ["Dynamic Ground Water", "Atal Bhujal Yojana", "Micro-Irrigation", "Paddy MSP"],
      summary: "High-resolution heli-borne geophysical surveys under the National Aquifer Mapping Programme (NAQUIM) indicate accelerating depletion of deep paleochannel aquifers across northwest India, highlighting urgent need for crop diversification.",
      body: `India is the world's largest extractor of groundwater, withdrawing more than the United States and China combined. Around 85% of rural domestic water and 60% of irrigated agriculture depend on underground aquifers.\n\nThe Central Ground Water Board's (CGWB) annual assessment classifies assessment units into 'Safe', 'Semi-Critical', 'Critical', and 'Over-Exploited'. In northwestern states, free agricultural electricity subsidies combined with open-ended procurement of water-intensive paddy have uncoupled farmers from water scarcity signals.\n\nThe policy remedy demands a convergence of demand-side measures (Atal Bhujal Yojana community water budgeting, solarized micro-irrigation under PM-KUSUM) and supply-side artificial recharge techniques.`,
      mcq: {
        id: "mcq-environment-2",
        question: "Consider the following statements regarding groundwater regulation in India:\n1. The Central Ground Water Authority (CGWA) was constituted under the Environment (Protection) Act, 1986.\n2. Groundwater extraction in India is primarily regulated by the Central Government, as water is exclusively listed under the Union List in the Seventh Schedule.\n3. The Atal Bhujal Yojana is a community-led groundwater management scheme supported by the World Bank.\nWhich of the statements given above are correct?",
        options: [
          "1 and 2 only",
          "1 and 3 only",
          "2 and 3 only",
          "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statements 1 and 3 are correct: The CGWA was constituted under Section 3(3) of the Environment (Protection) Act, 1986 for the purposes of regulation and control of groundwater management and development. Atal Bhujal Yojana is a central sector scheme with 50% World Bank funding focusing on community-led sustainable groundwater management.\n\nStatement 2 is incorrect: Water is primarily a State subject under Entry 17 of the State List in the Seventh Schedule.",
        syllabusTopic: "Conservation, environmental pollution and degradation, water resources."
      }
    },
    {
      id: "story-history-1",
      subject: "History",
      subjectCode: "GS-I",
      headline: "Keeladi Excavations and Sangam Urbanism: Reassessing South Asian Chronology",
      subhead: "Carbon-dated potsherds with Tamil-Brahmi script trace urban literacy to 6th century BCE.",
      date: "October 05, 2026",
      source: "Frontline Archaeological Dossier (Sample Content)",
      readingTime: "4 min read",
      tags: ["Sangam Era", "Tamil-Brahmi", "Vaigai Valley", "Second Urbanization"],
      summary: "Archaeological excavations at Keeladi near Madurai have unearthed brick structures, bead workshops, drainage systems, and inscribed pottery dating back to 580 BCE, providing empirical backing for contemporary urbanization in the Vaigai river valley alongside the Gangetic plains.",
      body: `For decades, the standard historiography posited the 'Second Urbanization' of India primarily in the mid-first millennium BCE across the Gangetic plains (Mahajanapadas), while South India was treated as transitioning to urbanism much later (circa 3rd century BCE).\n\nKeeladi excavations by the Tamil Nadu State Department of Archaeology and the ASI have challenged this asymmetry. Findings indicate an advanced civil society engaged in maritime trade, textile weaving, dye vats, and iron smelting.\n\nCrucially, the widespread occurrence of Tamil-Brahmi graffiti on mundane domestic potsherds suggests that literacy was not restricted to an elite priestly class, shedding new light on social mobility and craft specialization during the Sangam epoch.`,
      mcq: {
        id: "mcq-history-1",
        question: "In the context of ancient Indian history and Sangam literature, consider the following statements:\n1. The Sangam poems are broadly divided into two genres: Akam (love/interior) and Puram (war/heroism/exterior).\n2. The Tolkappiyam is the earliest extant Tamil grammatical treatise and provides sociological insight into the 'Tinai' (five ecological landscapes) concept.\n3. Roman coins of Augustus and Tiberius discovered at Arikamedu point to vibrant maritime trade with the Mediterranean world.\nWhich of the statements given above are correct?",
        options: [
          "1 and 2 only",
          "2 and 3 only",
          "1 and 3 only",
          "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "All three statements are correct: Sangam literature is categorized into Akam (internal emotions/love) and Puram (public heroism/warfare). Tolkappiyam outlines the five distinct ecological landscapes (Tinai: Kurinji, Mullai, Marutham, Neithal, Palai) and their associated human behaviors. Archaeological sites like Arikamedu have yielded amphorae, Arretine ware, and Roman coins confirming extensive Indo-Roman trade.",
        syllabusTopic: "Indian Culture: Salient aspects of Art Forms, Literature and Architecture from ancient to modern times."
      }
    },
    {
      id: "story-history-2",
      subject: "History",
      subjectCode: "GS-I",
      headline: "The 1928 Nehru Report: The First Blueprint for Fundamental Rights and Universal Suffrage",
      subhead: "A retrospective on the all-parties response to the Simon Commission's racist challenge.",
      date: "October 04, 2026",
      source: "The Hindu History Retrospective (Sample Content)",
      readingTime: "3 min read",
      tags: ["Nehru Report 1928", "Motilal Nehru", "Fundamental Rights", "Joint Electorates"],
      summary: "Drafted in response to Lord Birkenhead's assertion that Indians could not frame a consensus constitution, the Nehru Report of 1928 remains a landmark document outlining fundamental rights, secular statehood, adult franchise, and provincial linguistic redistribution.",
      body: `The appointment of the all-British Simon Commission in 1927 provoked nationwide boycotts. Birkenhead challenged Indian leadership to produce a constitution that commanded broad political agreement.\n\nThe committee chaired by Motilal Nehru included representatives across the political spectrum. The resulting 1928 Nehru Report advocated Dominion Status as the immediate constitutional goal (which was soon superseded by the Lahore Congress 1929 demand for Purna Swaraj).\n\nMore fundamentally, the report anticipated modern constitutionalism: it incorporated a comprehensive Bill of Rights (including gender equality, freedom of conscience, and trade union rights) and proposed joint electorates with reserved seats for minorities instead of separate communal electorates.`,
      mcq: {
        id: "mcq-history-2",
        question: "Which of the following was NOT among the major recommendations of the Nehru Report (1928)?",
        options: [
          "Dominion Status on the lines of self-governing dominions within the British Commonwealth.",
          "Complete independence (Purna Swaraj) as the immediate and unconditional objective.",
          "Rejection of separate communal electorates in favor of joint electorates with reservation of seats for minorities.",
          "Universal adult suffrage and equal rights for men and women."
        ],
        correctAnswer: 1,
        explanation: "Option B is correct (it was NOT in the report): The Nehru Report recommended 'Dominion Status' on the model of Canada and Australia, which led younger leaders like Jawaharlal Nehru and Subhas Chandra Bose to form the Independence for India League demanding Purna Swaraj (Complete Independence). Purna Swaraj was officially adopted at the Lahore Session in December 1929.",
        syllabusTopic: "The Freedom Struggle — its various stages and important contributors/contributions from different parts of the country."
      }
    }
  ],

  // 20 Demo PYQ Questions (5 per Subject: Polity, Economy, Environment, History)
  pyqQuestions: [
    // POLITY (5)
    {
      id: "pyq-polity-1",
      subject: "Polity",
      topic: "Preamble & Constitutional Philosophy",
      year: "2024 Simulation",
      difficulty: "Prelims Moderate",
      question: "Which one of the following statements best reflects the mind of the makers of the Constitution of India regarding the Preamble?",
      options: [
        "It is not a part of the Constitution and has no legal effect whatsoever.",
        "It is a part of the Constitution and has the same legal effect as any other enforceable part.",
        "It is a part of the Constitution but has no legal effect independently of other parts.",
        "It is not a part of the Constitution but confers substantive powers and limitations on Parliament."
      ],
      correctAnswer: 2,
      explanation: "In the Kesavananda Bharati case (1973), the Supreme Court ruled that the Preamble IS a part of the Constitution. However, in LIC of India (1995), the Court affirmed that while it is an integral part, it is non-justiciable and cannot confer substantive powers or impose limitations on organs of State independently of specific constitutional provisions.",
      status: "unattempted"
    },
    {
      id: "pyq-polity-2",
      subject: "Polity",
      topic: "Money Bills & Legislative Procedure",
      year: "2023 Simulation",
      difficulty: "Prelims Hard",
      question: "With reference to the Parliament of India, consider the following statements:\n1. A Money Bill cannot be introduced in the Rajya Sabha.\n2. The Rajya Sabha has no power to amend or reject a Money Bill.\n3. If the Rajya Sabha takes no action on a Money Bill within 14 days, it is deemed to have been passed by both Houses.\nWhich of the statements given above are correct?",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 3,
      explanation: "All three statements are correct under Article 109: Money Bills originate only in the Lok Sabha with prior recommendation of the President. Rajya Sabha can only make recommendations within 14 days and cannot reject or amend the Bill. If 14 days elapse without action, the bill is deemed passed.",
      status: "unattempted"
    },
    {
      id: "pyq-polity-3",
      subject: "Polity",
      topic: "Writs & Judicial Review",
      year: "2022 Simulation",
      difficulty: "Prelims Moderate",
      question: "With reference to the writ of 'Mandamus' in India, consider the following:\n1. It can be issued against a private individual or body to enforce a purely private contractual obligation.\n2. It cannot be issued against the President of India or State Governors for the exercise of their official duties.\n3. It cannot be issued to enforce a non-statutory departmental instruction that does not possess the force of law.\nWhich of the statements given above are correct?",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 1,
      explanation: "Statement 1 is incorrect: Mandamus lies to compel the performance of a public duty, not purely private contractual disputes. Statements 2 and 3 are correct: Article 361 provides constitutional immunity to the President and Governors, and Mandamus does not lie for purely non-statutory executive guidelines.",
      status: "unattempted"
    },
    {
      id: "pyq-polity-4",
      subject: "Polity",
      topic: "Emergency Provisions",
      year: "2021 Simulation",
      difficulty: "Prelims Hard",
      question: "Under Article 352 of the Constitution of India, a proclamation of National Emergency can be issued on the grounds of:",
      options: [
        "War, External Aggression, or Internal Disturbance",
        "War, External Aggression, or Armed Rebellion",
        "War, Armed Rebellion, or Breakdown of Constitutional Machinery",
        "Armed Rebellion, Financial Instability, or External Threat"
      ],
      correctAnswer: 1,
      explanation: "The 44th Constitutional Amendment Act, 1978 substituted the vague term 'internal disturbance' with 'armed rebellion'. Hence, National Emergency under Article 352 can be declared only on grounds of War, External Aggression, or Armed Rebellion.",
      status: "unattempted"
    },
    {
      id: "pyq-polity-5",
      subject: "Polity",
      topic: "Anti-Defection Law (Tenth Schedule)",
      year: "2020 Simulation",
      difficulty: "Prelims Moderate",
      question: "With reference to the Anti-Defection Law under the Tenth Schedule, consider the following statements:\n1. An independent member of a House becomes disqualified if they join any political party after election.\n2. A nominated member of a House can join any political party within six months of taking their seat without attracting disqualification.\nWhich of the statements given above is/are correct?",
      options: [
        "1 only",
        "2 only",
        "Both 1 and 2",
        "Neither 1 nor 2"
      ],
      correctAnswer: 2,
      explanation: "Both statements are correct: Under paragraph 2(2) of the Tenth Schedule, an independent member cannot join any party at all after election. Under paragraph 2(3), a nominated member is permitted to join a political party within six months of taking their seat.",
      status: "unattempted"
    },

    // ECONOMY (5)
    {
      id: "pyq-economy-1",
      subject: "Economy",
      topic: "National Income & GDP",
      year: "2024 Simulation",
      difficulty: "Prelims Moderate",
      question: "Which of the following is NOT included in the calculation of Gross Domestic Product (GDP) by expenditure method?",
      options: [
        "Gross Capital Formation (Investment)",
        "Government Final Consumption Expenditure",
        "Transfer payments made by the Government such as old-age pensions",
        "Net Exports (Exports minus Imports)"
      ],
      correctAnswer: 2,
      explanation: "Transfer payments (like pensions, unemployment relief, scholarships) are unilateral transactions with no corresponding production of goods or services. They are excluded from GDP calculations to avoid double counting.",
      status: "unattempted"
    },
    {
      id: "pyq-economy-2",
      subject: "Economy",
      topic: "External Sector & Current Account Deficit",
      year: "2023 Simulation",
      difficulty: "Prelims Hard",
      question: "Which of the following transactions will directly improve the Current Account balance of India's Balance of Payments?",
      options: [
        "Inflow of Foreign Direct Investment (FDI) into renewable energy",
        "Inward remittances sent home by Non-Resident Indians (NRIs)",
        "Disbursement of a sovereign loan from the World Bank",
        "Purchase of Indian government bonds by Foreign Portfolio Investors (FPI)"
      ],
      correctAnswer: 1,
      explanation: "Inward remittances fall under 'Secondary Income / Invisible Transfers' in the Current Account. FDI, sovereign loans, and FPI investments are recorded in the Capital Account, not the Current Account.",
      status: "unattempted"
    },
    {
      id: "pyq-economy-3",
      subject: "Economy",
      topic: "Banking & Priority Sector Lending",
      year: "2022 Simulation",
      difficulty: "Prelims Moderate",
      question: "Which of the following categories are eligible for Priority Sector Lending (PSL) classification by scheduled commercial banks in India?\n1. Agriculture and allied activities\n2. Micro, Small and Medium Enterprises (MSMEs)\n3. Export Credit\n4. Renewable Energy\nSelect the correct answer using the code given below:",
      options: [
        "1 and 2 only",
        "1, 2 and 3 only",
        "2, 3 and 4 only",
        "1, 2, 3 and 4"
      ],
      correctAnswer: 3,
      explanation: "Under RBI guidelines, the eight eligible PSL categories are: Agriculture, MSMEs, Export Credit, Education, Housing, Social Infrastructure, Renewable Energy, and Others (including weaker sections).",
      status: "unattempted"
    },
    {
      id: "pyq-economy-4",
      subject: "Economy",
      topic: "Inflation & Price Indices",
      year: "2021 Simulation",
      difficulty: "Prelims Moderate",
      question: "Consider the differences between the Consumer Price Index (CPI) and the Wholesale Price Index (WPI) in India:\n1. WPI does not capture price movements of services, whereas CPI captures both goods and services.\n2. The Reserve Bank of India uses WPI as its key policy measure of inflation for setting repo rates.\nWhich of the statements given above is/are correct?",
      options: [
        "1 only",
        "2 only",
        "Both 1 and 2",
        "Neither 1 nor 2"
      ],
      correctAnswer: 0,
      explanation: "Statement 1 is correct: WPI measures prices of commodities at the wholesale stage and excludes services. CPI captures both goods and services. Statement 2 is incorrect: Since 2014, based on the Urjit Patel Committee recommendations, RBI uses CPI Combined as the headline inflation anchor.",
      status: "unattempted"
    },
    {
      id: "pyq-economy-5",
      subject: "Economy",
      topic: "Fiscal Policy & FRBM",
      year: "2020 Simulation",
      difficulty: "Prelims Hard",
      question: "Under the Fiscal Responsibility and Budget Management (FRBM) Act, what is the 'Escape Clause' used for?",
      options: [
        "Permits the Central Bank to directly monetize entire government deficits during general elections",
        "Allows a relaxation of up to 0.5% of GDP in the fiscal deficit target under extraordinary conditions like war, national calamity, or severe agricultural collapse",
        "Exempts state governments from presenting annual financial statements to legislatures",
        "Permits the Finance Ministry to borrow unconditionally from foreign private commercial banks"
      ],
      correctAnswer: 1,
      explanation: "Section 4(2) of the amended FRBM Act (NK Singh Committee recommendations) contains the Escape Clause, which permits the government to breach the annual fiscal deficit target by up to 0.5% of GDP in cases of war, national security, breakdown of agriculture, or structural economic collapse.",
      status: "unattempted"
    },

    // ENVIRONMENT (5)
    {
      id: "pyq-environment-1",
      subject: "Environment",
      topic: "Protected Areas & Wildlife Protection Act",
      year: "2024 Simulation",
      difficulty: "Prelims Moderate",
      question: "In India, which one of the following categories of protected areas allows the highest degree of traditional human activities and livestock grazing without requiring prior permits?",
      options: [
        "National Parks",
        "Wildlife Sanctuaries",
        "Community Reserves",
        "Biosphere Reserves (Core Zone)"
      ],
      correctAnswer: 2,
      explanation: "Under the Wildlife (Protection) Act, 1972, Community Reserves are established on private or community lands where local communities actively conserve wildlife. Traditional rights, farming, and grazing are managed collaboratively through a Community Reserve Management Committee. In National Parks, all private rights and grazing are prohibited.",
      status: "unattempted"
    },
    {
      id: "pyq-environment-2",
      subject: "Environment",
      topic: "Wetlands & Ramsar Convention",
      year: "2023 Simulation",
      difficulty: "Prelims Hard",
      question: "If a wetland of international importance is brought under the 'Montreux Record', what does it imply?",
      options: [
        "Changes in ecological character have occurred, are occurring, or are likely to occur in the wetland as a result of technological developments, pollution or other human interference.",
        "The wetland has been designated as an eco-sensitive zone where no tourism is permitted.",
        "The wetland is completely exempt from the purview of the Ramsar Convention.",
        "The wetland has been completely restored to its pristine pre-industrial ecological balance."
      ],
      correctAnswer: 0,
      explanation: "The Montreux Record is a register of wetland sites on the Ramsar List where adverse ecological changes have occurred, are occurring, or are likely to occur due to pollution or human encroachment. In India, Loktak Lake (Manipur) and Keoladeo National Park (Rajasthan) are currently on the Montreux Record.",
      status: "unattempted"
    },
    {
      id: "pyq-environment-3",
      subject: "Environment",
      topic: "Climate Change & UNFCCC",
      year: "2022 Simulation",
      difficulty: "Prelims Moderate",
      question: "Which of the following statements about the 'Common but Differentiated Responsibilities and Respective Capabilities' (CBDR-RC) principle is correct?",
      options: [
        "It imposes identical emission reduction targets on all sovereign states regardless of historical cumulative emissions.",
        "It acknowledges that while all countries must address global environmental degradation, developed countries bear primary responsibility due to historical emissions and greater technological resources.",
        "It applies exclusively to ozone-depleting substances under the Montreal Protocol and not to the UNFCCC.",
        "It requires developing nations to contribute 50% of the Green Climate Fund."
      ],
      correctAnswer: 1,
      explanation: "Formalized at the 1992 Rio Earth Summit (Principle 7) and embedded in the UNFCCC, CBDR-RC recognizes that all states share responsibility for global commons, but developed countries have contributed disproportionately to cumulative greenhouse gas stocks and possess greater financial capacity.",
      status: "unattempted"
    },
    {
      id: "pyq-environment-4",
      subject: "Environment",
      topic: "Pollution & Biomagnification",
      year: "2021 Simulation",
      difficulty: "Prelims Moderate",
      question: "Which of the following characteristics makes a pollutant most susceptible to biological magnification across trophic levels?",
      options: [
        "High water solubility and short biological half-life",
        "High fat solubility, persistence in the environment, and low rate of metabolic breakdown",
        "Biodegradability by soil aerobic bacteria within 48 hours",
        "Volatility at room temperature allowing rapid atmospheric dispersion"
      ],
      correctAnswer: 1,
      explanation: "Biomagnification requires three key traits: persistence (resistance to environmental degradation), lipophilicity/fat solubility (accumulation in fatty tissue rather than excretion in water), and slow metabolic breakdown (e.g. DDT, PCBs, methylmercury).",
      status: "unattempted"
    },
    {
      id: "pyq-environment-5",
      subject: "Environment",
      topic: "Biodiversity Hotspots",
      year: "2020 Simulation",
      difficulty: "Prelims Moderate",
      question: "To qualify as a 'Biodiversity Hotspot' according to Conservation International, a region must meet which two strict criteria?",
      options: [
        "Contain at least 1,500 species of vascular plants as endemics and have lost at least 70% of its primary native vegetation",
        "Contain at least 500 mammal species and have an average annual rainfall exceeding 2,500 mm",
        "Be designated as a UNESCO Man and Biosphere Reserve and have zero human habitations",
        "Have at least 5,000 invertebrate species and contain coral reef formations"
      ],
      correctAnswer: 0,
      explanation: "A region must contain at least 1,500 endemic vascular plant species (> 0.5% of world total) and must have lost at least 70% of its original primary habitat. India hosts 4 hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, and Sundaland (Nicobar Islands).",
      status: "unattempted"
    },

    // HISTORY (5)
    {
      id: "pyq-history-1",
      subject: "History",
      topic: "Indus Valley Civilization & Urban Planning",
      year: "2024 Simulation",
      difficulty: "Prelims Moderate",
      question: "Which of the following Harappan sites is renowned for its sophisticated water harvesting system comprising a series of rock-cut reservoirs connected by stone conduits?",
      options: [
        "Kalibangan",
        "Dholavira",
        "Banawali",
        "Lothal"
      ],
      correctAnswer: 1,
      explanation: "Dholavira in the Rann of Kutch (Gujarat) is celebrated for its monumental water management engineering. Excavations revealed at least 16 massive reservoirs cut into rock, check dams across streams (Manhar and Mansar), and an elaborate storm water drainage network.",
      status: "unattempted"
    },
    {
      id: "pyq-history-2",
      subject: "History",
      topic: "Buddhism & Philosophy",
      year: "2023 Simulation",
      difficulty: "Prelims Hard",
      question: "With reference to the religious history of ancient India, consider the following statements regarding the Chaityas and Viharas:\n1. A Chaitya is a prayer hall or shrine with a stupa at one end, whereas a Vihara is a residential dwelling for monks.\n2. Viharas are exclusively constructed out of wood, while Chaityas are always rock-cut.\nWhich of the statements given above is/are correct?",
      options: [
        "1 only",
        "2 only",
        "Both 1 and 2",
        "Neither 1 nor 2"
      ],
      correctAnswer: 0,
      explanation: "Statement 1 is correct: Chaityas were places of congregation and worship usually housing a votive stupa, while Viharas served as monastic residential complexes with cells around a central courtyard. Statement 2 is incorrect: Both Chaityas and Viharas were extensively carved out of living rock (e.g. Karle, Bhaja, Ajanta, Kanheri).",
      status: "unattempted"
    },
    {
      id: "pyq-history-3",
      subject: "History",
      topic: "Mughal Administration & Mansabdari",
      year: "2022 Simulation",
      difficulty: "Prelims Hard",
      question: "In the Mansabdari system introduced by Akbar, what did the dual rank indicators 'Zat' and 'Sawar' signify?",
      options: [
        "Zat indicated the military contingent to be maintained, while Sawar indicated personal salary and court protocol.",
        "Zat indicated the noble's personal status, rank, and salary, while Sawar indicated the number of cavalrymen and horses they were obliged to maintain.",
        "Zat indicated revenue collected from Jagirs, while Sawar indicated customs dues from ports.",
        "Zat indicated imperial title, while Sawar indicated loyalty index during campaigns."
      ],
      correctAnswer: 1,
      explanation: "Under the Mansabdari system, 'Zat' fixed the personal rank and status of the noble in the imperial hierarchy and determined their personal salary. 'Sawar' designated the specific number of armed horsemen (sawars) the mansabdar had to maintain for military service.",
      status: "unattempted"
    },
    {
      id: "pyq-history-4",
      subject: "History",
      topic: "Modern Indian History & 1857 Revolt",
      year: "2021 Simulation",
      difficulty: "Prelims Moderate",
      question: "Which of the following was an immediate consequence of the Government of India Act, 1858 following the Revolt of 1857?",
      options: [
        "Abolition of the East India Company's rule and direct assumption of government by the British Crown",
        "Introduction of separate electorates for religious communities in provincial councils",
        "Grant of complete fiscal autonomy to provincial governors",
        "Abolition of the office of Governor-General of India"
      ],
      correctAnswer: 0,
      explanation: "The Government of India Act, 1858 (Act for the Better Government of India) liquidated the East India Company and transferred powers of government, territories, and revenues directly to the British Crown. The Governor-General was designated Viceroy of India, acting as the Crown's direct representative.",
      status: "unattempted"
    },
    {
      id: "pyq-history-5",
      subject: "History",
      topic: "Freedom Struggle & Non-Cooperation Movement",
      year: "2020 Simulation",
      difficulty: "Prelims Moderate",
      question: "What was the principal reason for Mahatma Gandhi's sudden suspension of the Non-Cooperation Movement in February 1922?",
      options: [
        "The arrest and deportation of Bal Gangadhar Tilak",
        "The violent incident at Chauri Chaura in Gorakhpur where a police station was torched",
        "The British Government's concession to all demands regarding the Khilafat issue",
        "The passage of the Government of India Act, 1919"
      ],
      correctAnswer: 1,
      explanation: "On February 4, 1922, a clash at Chauri Chaura resulted in protestors burning down a police station, killing 22 policemen. Committed to absolute non-violence (Ahimsa), Gandhi concluded that the masses were not yet adequately disciplined for satyagraha and persuaded the Congress Working Committee at Bardoli to suspend the movement.",
      status: "unattempted"
    }
  ],

  // Curated Revision Notes (linked with subjects for Clippings & Notes panel)
  revisionNotes: [
    {
      id: "note-polity-1",
      subject: "Polity",
      title: "Core Constitutional Doctrines",
      items: [
        "Basic Structure Doctrine: Kesavananda Bharati (1973) — Parliament cannot alter the essential identity of the Constitution under Art. 368.",
        "Doctrine of Pith and Substance: Examines the true nature and character of legislation when legislative competence overlaps across lists.",
        "Triple Chain of Accountability: Civil servants -> Cabinet -> Legislature -> Electorate (Govt of NCT of Delhi vs Union of India, 2023)."
      ]
    },
    {
      id: "note-economy-1",
      subject: "Economy",
      title: "Monetary Framework & Policy Corridor",
      items: [
        "LAF Corridor: Floor = Standing Deposit Facility (SDF, non-collateralized), Policy Anchor = Repo Rate, Ceiling = Marginal Standing Facility (MSF).",
        "Flexible Inflation Targeting (FIT): 4% Headline CPI target with +/- 2% tolerance band under Section 45ZA of RBI Act, 1934.",
        "Transmission Lag: Changes in policy rates typically take 2-3 quarters to permeate commercial bank lending rates (EBLR regime)."
      ]
    },
    {
      id: "note-environment-1",
      subject: "Environment",
      title: "Global Conservation Paradigms",
      items: [
        "KMGBF Target 3 (30x30): Conserve 30% of degraded land/marine ecosystems by 2030 via Protected Areas and OECMs.",
        "OECMs: Geographic zones achieving sustained biodiversity conservation outside formal national park status (e.g. sacred groves, military reserves).",
        "Wetland Categorization: Central Ground Water Board assessment criteria (Safe <70%, Semi-Critical 70-90%, Critical 90-100%, Over-exploited >100%)."
      ]
    },
    {
      id: "note-history-1",
      subject: "History",
      title: "Ancient Urbanism & Freedom Milestones",
      items: [
        "Keeladi (Vaigai Valley): 6th c. BCE urban settlement demonstrating iron metallurgy, Tamil-Brahmi script literacy, and maritime trade links.",
        "Nehru Report (1928): First indigenous constitutional blueprint demanding Dominion status, joint electorates, and universal adult franchise.",
        "Second Urbanization: 6th c. BCE Mahajanapadas in Gangetic plains characterized by NBPW pottery, punch-marked coins, and heterodox sects."
      ]
    }
  ],

  // Letters to the Editor (Reader Correspondence)
  readerLetters: [
    {
      author: "Aditi S. Rao",
      city: "Mukherjee Nagar, New Delhi",
      attempt: "2nd Attempt Aspirant",
      featureUsed: "Today's Paper MCQ Conversion",
      quote: "Turning the morning editorial directly into statement-based questions transformed my static notes. Instead of copying passive summaries, I now confront the editorial the way a paper-setter does.",
      avatar: "AR"
    },
    {
      author: "K. Karthikeyan",
      city: "Anna Nagar, Chennai",
      attempt: "Prelims Cleared 2025",
      featureUsed: "Mistake Notebook Auto-Capture",
      quote: "The automatic logging of incorrect statements into the Mistake Notebook cured my habit of repeating silly factual traps. The 'Got it' review mechanic keeps revision honest.",
      avatar: "KK"
    },
    {
      author: "Dr. Saurabh Mishra",
      city: "Prayagraj, Uttar Pradesh",
      attempt: "Working Professional",
      featureUsed: "15-Minute Mock Test Press",
      quote: "As a working aspirant, 15 focused minutes answering the daily 10-question press gave me consistent pacing without getting bogged down by 100-page monthly compendiums.",
      avatar: "SM"
    }
  ]
};

// Export globally for browser
window.UPSC_DATA = UPSC_DATA;
