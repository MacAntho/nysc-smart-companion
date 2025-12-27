import { KnowledgeArticle } from "@shared/types";
export const NIGERIAN_STATES = [
  'Lagos', 'Abuja', 'Oyo', 'Rivers', 'Kano', 'Kaduna', 'Enugu', 'Edo',
  'Cross River', 'Delta', 'Anambra', 'Plateau', 'Kwara', 'Imo', 'Akwa Ibom'
];
export const JOURNEY_STAGES = [
  {
    id: 'prospective',
    title: 'Prospective Stage',
    description: 'Final year in school or recently graduated.',
    tasks: [
      { id: 'p1', title: 'Verify Senate List', description: 'Ensure your name is on the NYSC senate list.' },
      { id: 'p2', title: 'Final Clearance', description: 'Complete your university final clearance.' },
      { id: 'p3', title: 'Check Exemption Eligibility', description: 'Determine if you qualify for Exemption (Age > 30) or Exclusion.' },
    ]
  },
  {
    id: 'mobilization',
    title: 'Mobilization & Registration',
    description: 'The period of online registration and call-up letters.',
    tasks: [
      { id: 'm1', title: 'Online Registration', description: 'Register on the portal. Refer to the Complete Registration Guide.' },
      { id: 'm2', title: 'Print Call-up Letter', description: 'Download your deployment letter from the portal.' },
      { id: 'm3', title: 'Medical Certificate', description: 'Obtain a valid medical fitness certificate from a govt hospital.' },
    ]
  },
  {
    id: 'camp',
    title: 'Orientation Camp',
    description: '21 days of intensive training and induction.',
    tasks: [
      { id: 'c1', title: 'Registration at Camp', description: 'Initial file verification and kit collection.' },
      { id: 'c2', title: 'Swearing-in Ceremony', description: 'Official oath-taking ceremony.' },
      { id: 'c3', title: 'Collect Posting Letter', description: 'Last day of camp posting to PPA.' },
    ]
  },
  {
    id: 'ppa',
    title: 'Primary Assignment (PPA)',
    description: 'Working at your assigned place of primary assignment.',
    tasks: [
      { id: 'pa1', title: 'Acceptance/Rejection', description: 'Submit posting letter to PPA for response.' },
      { id: 'pa2', title: 'Monthly Clearance', description: 'Get monthly signature for allowance.' },
    ]
  },
  {
    id: 'cds',
    title: 'CDS Project Lifecycle',
    description: 'Impacting your host community through sustainable projects and weekly meetings.',
    tasks: [
      { id: 'cd1', title: 'Identify Community Need', description: 'Perform a needs assessment in your PPA locality. (Milestone 1)' },
      { id: 'cd2', title: 'Submit Project Proposal', description: 'Get official approval from the LGI for your project. (Milestone 2)' },
      { id: 'cd3', title: 'Implementation & Commissioning', description: 'Execute the project and submit the final completion report. (Milestone 3)' },
    ]
  },
  {
    id: 'pop',
    title: 'Passing Out Parade (POP)',
    description: 'Congratulations! You have served your nation with honor. It is time to step into your future with confidence.',
    tasks: [
      { id: 'po1', title: 'Final Clearance Submission', description: 'Complete the LGI and Employer clearance chain for the final month.' },
      { id: 'po2', title: 'Collect Discharge Certificate', description: 'The official proof of your national service completion.' },
      { id: 'po3', title: 'Career Transition Briefing', description: 'Attend the final exit briefing by the state coordinator.' },
    ]
  }
];
export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'k-registration',
    category: 'Official',
    title: 'Online Registration Roadmap',
    summary: 'Step-by-step guide to the NYSC portal registration: biometrics, Senate list verification, and payment protocols.',
    content: `Online registration is the first critical step in your service year.
1. SENATE LIST VERIFICATION: Your name must be uploaded by your institution. Check the portal using your Matric Number.
2. BIOMETRIC CAPTURE: Use the official NYSC desktop scanner tool. Ensure your background is plain white.
3. PAYMENTS: Pay for your call-up letter online to receive it via SMS/Dashboard. Do not pay to individuals.
4. DOCUMENT UPLOAD: Scan original documents for medical certificates and school IDs.`,
    metadata: { stage: 'prospective', risk: 'medium', source: 'NYSC ICT Dept', featured: true }
  },
  {
    id: 'k-foreign',
    category: 'Official',
    title: 'NYSC for Foreign-Trained Graduates',
    summary: 'Essential roadmap for graduates from international institutions: evaluation protocols, document chains, and physical verification.',
    content: `For graduates of international institutions, the NYSC mobilization process involves evaluation.
1. THE EVALUATION PROTOCOL: Personally upload and later physically present your credentials.
2. MANDATORY DOCUMENT CHAIN: Degree Certificate, Academic Transcript, Int. Passport (with entry/exit stamps), O-Level results.
3. PHYSICAL VERIFICATION: You MUST appear in person at your assigned center with all original documents.`,
    metadata: { stage: 'prospective', risk: 'medium', source: 'NYSC Evaluation Dept', featured: true }
  },
  {
    id: 'k-redeployment',
    category: 'Official/Advisory',
    title: 'NYSC Redeployment & Relocation Guide',
    summary: 'Comprehensive guide on valid relocation grounds (Marital, Medical, Security), the digital application process, and mandatory documentation.',
    content: `Relocation is a privilege granted based on verifiable grounds.
1. MARITAL: Married females must provide marriage cert, change of name (newspaper), and husband's utility bill in the target state.
2. MEDICAL: Chronic conditions requiring specialized care. Must provide a report from a Govt hospital.
3. THE PROCESS: Apply via the dashboard immediately after camp opens. Check status daily.`,
    metadata: { stage: 'camp', risk: 'high', source: 'NYSC Bye-laws', featured: true }
  },
  {
    id: 'k-pregnancy',
    category: 'Advisory/Health',
    title: 'NYSC Provisions for Pregnant Corps Members',
    summary: 'Official roadmap for maternity rights: Concessionary posting, camp exemptions, and the 12-week maternity leave protocol.',
    content: `NYSC policy provides specific concessions for pregnant members and nursing mothers.
1. CONCESSIONARY POSTING: Eligible for deployment to state of spouse/family residence.
2. CAMP EXEMPTIONS: Exempted from strenuous drills. May be allowed to reside off-camp.
3. MATERNITY LEAVE: 12-week (3 months) leave. Apply via PPA and LGI. Allowance is usually sustained.`,
    metadata: { stage: 'mobilization', risk: 'low', source: 'NYSC Policy Handbook', featured: true }
  },
  {
    id: 'k-disqualification',
    category: 'Official',
    title: 'Disqualification & Remobilization Protocol',
    summary: 'Critical Risk: Understand the grounds for service cancellation and the legal implications of disciplinary disqualification.',
    content: `Disqualification is the ultimate administrative penalty.
1. ABSCONDMENT: Missing more than 3 months of service without approval results in remobilization (restarting from scratch).
2. FORGED DOCUMENTS: Discovery of forged degrees leads to immediate handover to security agencies.
3. DESERTION: Leaving camp without permission can lead to "Remobilization with half-pay" or total cancellation.`,
    metadata: { stage: 'camp', risk: 'high', source: 'NYSC Legal Unit', featured: true }
  },
  {
    id: 'k-sanctions',
    category: 'Official',
    title: 'NYSC Violations & Penalties Guide',
    summary: 'Critical Advisory: Learn how to avoid Service Extensions and administrative sanctions through compliance.',
    content: `The NYSC Bye-laws specify clear penalties for infractions.
1. EXTENSION OF SERVICE: Usually for 1 month to 4 months based on the gravity of the absence from CDS or PPA.
2. LOSS OF ALLOWANCE: Failure to sign monthly clearance results in forfeiture of that month's payment.
3. REPRIMAND: Issued for minor misconduct. Three reprimands can lead to a formal Extension.`,
    metadata: { stage: 'ppa', risk: 'high', source: 'NYSC Discipline Dept', featured: true }
  },
  {
    id: 'k-clearance-issues',
    category: 'Advisory/Official',
    title: 'Clearance Troubleshooting',
    summary: 'Official Protocol: Know the LGI reporting chain for sign-off refusals and biometric failures.',
    content: `Clearance is your ticket to monthly payment.
1. BIOMETRIC FAILURE: If the thumbprint scanner fails, report to the Zonal Inspector (ZI) for manual capture.
2. PPA REJECTION: If your PPA refuses to sign your clearance, obtain a "Letter of Rejection" and report to the LGI within 24 hours.
3. PORTAL ERRORS: If your clearance status doesn't update, visit the state secretariat ICT office.`,
    metadata: { stage: 'ppa', risk: 'high', source: 'NYSC Finance Unit', featured: true }
  },
  {
    id: 'k-pop',
    category: 'Official',
    title: 'Passing Out Parade (POP) Protocol',
    summary: 'Winding Up: Ensure your final release letter and kit return slip are verified for discharge.',
    content: `The POP is the final phase of your service.
1. FINAL CLEARANCE: Get signatures from LGI, ZI, and State Coordinator.
2. KIT RETURN: Some states require the return of specific kit items. Get a slip.
3. DISCHARGE CERTIFICATE: Issued only after successful final clearance and 12 monthly clearances.`,
    metadata: { stage: 'pop', risk: 'high', source: 'NYSC Operations', featured: true }
  },
  {
    id: 'k-execution',
    category: 'CDS',
    title: 'CDS Project Execution Blueprint',
    summary: 'Procedural integrity: From identification to commissioning your community project.',
    content: `Executing a Personal CDS project requires strict adherence to protocol.
1. NEEDS ASSESSMENT: Conduct a survey. Document the gap you want to fill.
2. PROPOSAL: Submit to LGI. Must include budget, timeline, and location.
3. APPROVAL: Wait for the formal letter from the State Coordinator before starting.
4. COMMISSIONING: Invite NYSC officials for the official opening.`,
    metadata: { stage: 'cds', risk: 'medium', source: 'NYSC CDS Dept', featured: true }
  },
  {
    id: 'k-ppa-rejection',
    category: 'Advisory',
    title: 'Handling PPA Rejection',
    summary: 'Strategic response when a PPA refuses to accept you: Letters, reporting timelines, and reposting protocols.',
    content: `Getting rejected by a PPA is not a disaster; it's a common occurrence.
1. THE LETTER: Ensure the PPA writes "Rejected" on your posting letter with a reason and official stamp.
2. THE CLOCK: You have 48 hours to report this rejection to your LGI.
3. REPOSTING: The LGI will issue you a new posting letter. Do not wander about or go home.`,
    metadata: { stage: 'ppa', risk: 'medium', source: 'NYSC Admin', featured: true }
  }
];
export const STATE_DATA: Record<string, any> = {
  'Lagos': {
    camp: 'Iyana-Ipaja Orientation Camp. Facilities are decent but crowded. Expect high discipline.',
    cost: 'High. Lagos is expensive. Rent averages ₦280k+, transport is a significant expense.',
    metrics: { rent: 280000, food: 45000, transport: 35000 },
    ppa: 'Strong opportunities in Tech, Finance, and Media.',
    pro_tip: 'Apply for PPA in Ikorodu if you want a lower cost of living while staying in Lagos.'
  },
  'Abuja': {
    camp: 'Kubwa Orientation Camp. Modern facilities, good water supply, very competitive.',
    cost: 'Very High. Abuja rent is steep. Average ₦350k+ in satellite towns, millions in city center.',
    metrics: { rent: 350000, food: 50000, transport: 40000 },
    ppa: 'Govt Agencies, NGOs, and Professional Firms.',
    pro_tip: 'Look for accommodation in Kubwa or Lugbe to save on housing costs.'
  },
  'Rivers': {
    camp: 'Nonwa Gbam Tai Camp. Large grounds, hot weather. Security is tight.',
    cost: 'High. Port Harcourt is an oil city. Rent is around ₦200k-₦300k.',
    metrics: { rent: 250000, food: 40000, transport: 30000 },
    ppa: 'Engineering firms, Schools, and Civil Service.',
    pro_tip: 'Always stay within well-lit areas in PH and avoid late night solo movements.'
  },
  'Oyo': {
    camp: 'Iseyin Orientation Camp. Known for its cool weather and hills. Relaxed atmosphere.',
    cost: 'Low. Ibadan is very affordable. Rent ₦80k-₦150k. Food is cheap.',
    metrics: { rent: 100000, food: 20000, transport: 10000 },
    ppa: 'Educational institutions, Agriculture, and Research.',
    pro_tip: 'Ibadan is vast; choose a PPA close to your residence to avoid long commutes.'
  },
  'DEFAULT': {
    camp: 'Standard NYSC Orientation facilities. Registration usually starts at 4:00 AM.',
    cost: 'Moderate. Aligns with national averages.',
    metrics: { rent: 120000, food: 25000, transport: 15000 },
    ppa: 'Schools, Local Government Secretariats, Health Clinics.',
    pro_tip: 'Always report to your LGI within 48 hours of camp exit.'
  }
};
export const DEADLINES = [
  { id: 'd1', title: 'Batch A Online Registration', date: '2025-02-15', stage: 'mobilization' },
  { id: 'd2', title: 'Medical Fitness Upload', date: '2025-01-30', stage: 'prospective' },
  { id: 'd3', title: 'Camp Portal Closure', date: '2025-03-10', stage: 'camp' },
  { id: 'd4', title: 'Monthly Biometric Window', date: '2025-05-30', stage: 'ppa' },
  { id: 'd5', title: 'Project Proposal Deadline', date: '2025-07-15', stage: 'cds' },
  { id: 'd6', title: 'Final Clearance Phase', date: '2025-11-01', stage: 'pop' },
];
export const CDS_RESOURCES = {
  categories: [
    { id: 'Education', name: 'Education', icon: 'Book' },
    { id: 'Health', name: 'Health', icon: 'HeartPulse' },
    { id: 'Environment', name: 'Environment', icon: 'Leaf' },
    { id: 'Infrastructure', name: 'Infrastructure', icon: 'Construction' },
    { id: 'Social', name: 'Social Welfare', icon: 'Users' },
  ],
  projects: [
    {
      id: 'edu-1',
      category: 'Education',
      title: 'Rural Library Initiative',
      description: 'Establishing a community library with donated books to improve literacy.',
      budget: '₦80,000 - ₦200,000',
      duration: '4 Months',
      requirements: ['Community Space', 'Book Donations', 'LGI Approval'],
      challenges: ['Security', 'Maintenance'],
      metrics: ['1,000+ Books Collected']
    },
    {
      id: 'infra-1',
      category: 'Infrastructure',
      title: 'Solar Streetlight Project',
      description: 'Installing solar-powered streetlights in high-risk community zones.',
      budget: '₦150,000 - ₦400,000',
      duration: '3 Months',
      requirements: ['Technical Partner', 'Security Guard', 'LGI Approval'],
      challenges: ['Theft of batteries', 'Import delays'],
      metrics: ['10 Lights Installed']
    },
    {
      id: 'social-1',
      category: 'Social',
      title: 'Women’s Literacy Workshop',
      description: 'Weekly vocational and basic literacy training for community women.',
      budget: '₦40,000 - ₦90,000',
      duration: '6 Months',
      requirements: ['Classroom Space', 'Volunteer Teachers'],
      challenges: ['Cultural barriers', 'Attendance consistency'],
      metrics: ['50 Women Trained']
    },
    {
      id: 'env-2',
      category: 'Environment',
      title: 'Clean Water Well',
      description: 'Drilling or rehabilitating a manual borehole for a community primary school.',
      budget: '₦200,000 - ₦500,000',
      duration: '2 Months',
      requirements: ['Geophysical survey', 'Borehole Contractor'],
      challenges: ['Dry season water table', 'Pumping mechanism failure'],
      metrics: ['300 Students Served']
    },
    {
      id: 'tech-1',
      category: 'Education',
      title: 'IT Skills Workshop',
      description: 'Basic computer training (Word/Excel) for local high school students.',
      budget: '₦30,000 - ₦70,000',
      duration: '3 Months',
      requirements: ['Laptop access', 'School laboratory access'],
      challenges: ['Power supply', 'Instructor availability'],
      metrics: ['100 Students Certified']
    }
  ],
  templates: [
    { id: 't1', title: 'Project Proposal Letter', type: 'Word', size: '24KB' },
    { id: 't2', title: 'Request for Funds (Sponsorship)', type: 'Word', size: '30KB' },
    { id: 't3', title: 'Completion Report Form', type: 'PDF', size: '150KB' }
  ]
};