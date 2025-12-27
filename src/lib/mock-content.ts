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
      { id: 'cd1', title: 'Identify Community Need', description: 'Perform a needs assessment in your PPA locality.' },
      { id: 'cd2', title: 'Submit Project Proposal', description: 'Get approval from the LGI for your personal or group project.' },
      { id: 'cd3', title: 'Weekly Meeting Attendance', description: 'Consistent presence at CDS group meetings.' },
    ]
  },
  {
    id: 'pop',
    title: 'Passing Out Parade (POP)',
    description: 'The final stretch. Winding up and receiving your certificate.',
    tasks: [
      { id: 'po1', title: 'Final Clearance', description: 'LGI and Employer clearance for the final month.' },
      { id: 'po2', title: 'Collect Discharge Certificate', description: 'Physical collection of your NYSC certificate.' },
      { id: 'po3', title: 'Exit Interview', description: 'Briefing by the state coordinator.' },
    ]
  }
];
export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'k-cds-execution',
    category: 'Official',
    title: 'CDS Project Execution Process: From Proposal to Completion',
    summary: 'A step-by-step roadmap covering needs assessment, proposal writing, funding strategies, official approvals, and implementation.',
    content: `Executing a personal or group Community Development Service (CDS) project is the highest form of service in the NYSC scheme. Follow this 5-pillar roadmap to ensure your project is recognized and impactful.
1. NEEDS ASSESSMENT: Do not start with what you want to build; start with what the community lacks. Speak with local leaders, school principals, or clinic heads to identify critical gaps (e.g., lack of clean water, dilapidated classrooms, or health awareness).
2. PROJECT SELECTION: Align the community need with your skills, budget, and timeline. A project that remains 50% completed at the end of your service year is a liability, not a legacy.
3. THE PROPOSAL: Write a formal proposal addressed to the State Coordinator through your Local Government Inspector (LGI). It must include: Project Title, Objectives, Justification, Budget Estimate, and Implementation Timeline.
4. APPROVALS (CRITICAL): NEVER spend personal or donated funds before receiving a written "Letter of Approval" from the NYSC State Secretariat. Projects executed without prior approval will not be commissioned, and the Corper will not receive a commendation certificate.
5. IMPLEMENTATION & REPORTING: Execute the project transparently. Upon completion, submit a "Completion Report" with "Before" and "After" photographs. Request a formal commissioning ceremony involving the LGI and community stakeholders.`,
    metadata: { stage: 'cds', risk: 'low', source: 'NYSC Guidelines', featured: true }
  },
  {
    id: 'k-registration',
    category: 'Official',
    title: 'Complete Mobilization & Registration Guide',
    summary: 'Step-by-step instructions for Senate List verification and portal registration.',
    content: `Online registration is the first official step of your NYSC journey.
1. SENATE LIST: Check your name on the NYSC portal under "Check Senate List". If not found, contact your institution's Student Affairs.
2. ACCOUNT CREATION: Use a functional email. Keep your password safe.
3. BIOMETRICS: Thumbprint capture is mandatory and cannot be done by proxy.
4. CALL-UP NUMBER: Generated after successful registration.`,
    metadata: { stage: 'mobilization', risk: 'medium', source: 'NYSC Official', featured: true }
  },
  {
    id: 'k-camp-packing',
    category: 'Survival',
    title: 'The Ultimate Camp Packing List',
    summary: 'Essentials for the 21-day orientation: Documents, clothing, and survival gear.',
    content: `Don't be caught off-guard. Pack these essentials:
DOCUMENTS: Original and 5 copies of Statement of Result, Call-up Letter, Green Card, Medical Fitness Certificate, and Passport photos.
CLOTHING: White round-neck tees, white shorts, white socks, white sneakers. NYSC provides a set, but extras are necessary.
OTHERS: Toiletries, mosquito net (white), power bank, waist bag (for valuables).`,
    metadata: { stage: 'camp', risk: 'low', source: 'Ex-Corper Insight', featured: true }
  },
  {
    id: 'k-ppa-rejection',
    category: 'Official',
    title: 'PPA Rejection & Acceptance Protocols',
    summary: 'What to do if your assigned PPA rejects you or if you seek a change.',
    content: `REJECTION: If a PPA rejects you, they must write a formal rejection letter. Take this back to the Zonal/Local Government Inspector (LGI) for a new posting.
ACCEPTANCE: Submit your posting letter; if accepted, fill the acceptance form and return it to the LGI within 48 hours.
SELF-REJECTION: Corpers cannot reject a PPA. Doing so without valid LGI approval is a policy violation.`,
    metadata: { stage: 'ppa', risk: 'high', source: 'NYSC Bye-laws' }
  },
  {
    id: 'k-cds',
    category: 'Official',
    title: 'Community Development Service (CDS): Groups & Lifecycle',
    summary: 'Comprehensive guide on group types, weekly attendance, and project timelines.',
    content: `CDS is a mandatory component of the NYSC scheme.
1. CDS GROUP TYPES: Editorial, ICT, Medical, Road Safety, Anti-Corruption, Environment, Charity/SDGs.
2. WEEKLY MEETING: Meetings are held weekly. 75% attendance is required for clearance.
3. THE PROJECT LIFECYCLE: Identify community needs, propose to LGI, get approval, implement, and report.`,
    metadata: { stage: 'cds', risk: 'medium', source: 'NYSC Official', featured: true }
  },
  {
    id: 'k-redeployment',
    category: 'Survival',
    title: 'Redeployment (Relocation) Guide',
    summary: 'Procedures for relocation based on health, marital, or security reasons.',
    content: `Redeployment is not guaranteed but possible for:
1. MARITAL GROUNDS: For married women (Marriage certificate, newspaper change of name).
2. HEALTH GROUNDS: Valid medical reports from govt/military hospitals.
3. SECURITY: In regions with high-risk advisory.
Submit your application during the orientation camp or through the state coordinator.`,
    metadata: { stage: 'mobilization', risk: 'medium', source: 'Official Policy' }
  },
  {
    id: 'k-pop-guide',
    category: 'Official',
    title: 'Passing Out Parade (POP) & Final Clearance',
    summary: 'Ensuring your certificate is ready and your records are clear for discharge.',
    content: `Winding up is the final phase.
1. FINAL CLEARANCE: Get signatures from your PPA and LGI for the final month.
2. DISCHARGE CERTIFICATE: Issued only after successful final clearance.
3. EXIT INTERVIEW: Mandatory briefing before the final parade.
Ensure no outstanding dues or disciplinary cases are against you.`,
    metadata: { stage: 'pop', risk: 'high', source: 'NYSC HQ', featured: true }
  }
];
export const STATE_DATA: Record<string, any> = {
  'Lagos': {
    camp: 'Iyana-Ipaja Orientation Camp. Facilities are decent but crowded. Expect high discipline and early mornings.',
    cost: 'High. Lagos is expensive. Rent averages ₦250k+, transport is a significant expense.',
    metrics: { rent: 280000, food: 45000, transport: 35000 },
    ppa: 'Strong opportunities in Tech, Finance, and Media. Many private firms offer high stipends.',
    pro_tip: 'Apply for PPA at the Ikorodu or Epe axis if you want a lower cost of living while staying in Lagos.'
  },
  'Abuja': {
    camp: 'Kubwa Orientation Camp. Generally well-maintained. Close to the city center.',
    cost: 'High. Rent in the city center is exorbitant. Suburbs are more manageable.',
    metrics: { rent: 350000, food: 40000, transport: 25000 },
    ppa: 'Federal Ministries, NGOs, and International Agencies are primary options.',
    pro_tip: 'Look for accommodation in Kubwa, Lugbe, or Karu to save significantly on rent.'
  },
  'Rivers': {
    camp: 'Nonwa Gbam Tai Orientation Camp. Large and breezy. Registration is strictly enforced.',
    cost: 'Moderate-High. Port Harcourt city is pricey, outskirts are affordable.',
    metrics: { rent: 180000, food: 35000, transport: 20000 },
    ppa: 'Oil & Gas support firms, Marine logistics, and Education sectors.',
    pro_tip: 'Always carry your NYSC ID card; security checkpoints are common in the delta region.'
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
  { id: 'd1', title: 'Online Registration Ends', date: '2025-10-15', stage: 'mobilization' },
  { id: 'd2', title: 'Camp Portal Closure', date: '2025-11-01', stage: 'camp' },
  { id: 'd3', title: 'Upload Medical Certificate', date: '2025-06-30', stage: 'prospective' },
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
      challenges: ['Theft/Security', 'Maintenance', 'Space Allocation'],
      metrics: ['1,000+ Books Collected', '200 Weekly Users']
    },
    {
      id: 'health-1',
      category: 'Health',
      title: 'Community De-worming Campaign',
      description: 'Providing de-worming medications to children in primary schools.',
      budget: '₦50,000 - ₦120,000',
      duration: '2 Months',
      requirements: ['Medical Personnel', 'Drugs', 'Ministry Approval'],
      challenges: ['Parental Consent', 'Drug Storage'],
      metrics: ['1,000 Children Treated']
    },
    {
      id: 'env-1',
      category: 'Environment',
      title: 'The Green School Project',
      description: 'Planting economic trees in schools to combat erosion and provide shade.',
      budget: '₦40,000 - ₦80,000',
      duration: '5 Months',
      requirements: ['Seedlings', 'Water Source'],
      challenges: ['Stray Animals', 'Water Scarcity'],
      metrics: ['100 Trees Planted', 'Survival Rate Tracking']
    },
    {
      id: 'inf-1',
      category: 'Infrastructure',
      title: 'Community Well Restoration',
      description: 'Repairing and cleaning abandoned community wells.',
      budget: '₦50,000 - ₦130,000',
      duration: '3 Months',
      requirements: ['Expert Well Cleaner', 'Cement/Lids'],
      challenges: ['Depth Risks', 'Water Purity'],
      metrics: ['3 Wells Functional']
    },
    {
      id: 'soc-1',
      category: 'Social',
      title: 'Artisan Skills Hub',
      description: 'Setting up a weekend training center for vocational skills.',
      budget: '₦50,000 - ₦150,000',
      duration: '6 Months',
      requirements: ['Skill Tutors', 'Basic Tools'],
      challenges: ['Equipment Costs'],
      metrics: ['30 Youths Trained']
    }
  ],
  templates: [
    { id: 't1', title: 'Project Proposal Letter', type: 'Word', size: '24KB' },
    { id: 't2', title: 'Request for Funds (Sponsorship)', type: 'Word', size: '30KB' },
    { id: 't3', title: 'Completion Report Form', type: 'PDF', size: '150KB' }
  ]
};