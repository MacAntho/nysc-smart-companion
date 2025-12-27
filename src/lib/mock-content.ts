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
    id: 'k-foreign',
    category: 'Official',
    title: 'NYSC for Foreign-Trained Graduates',
    summary: 'Essential roadmap for graduates from international institutions: evaluation protocols, document chains, and physical verification.',
    content: `For graduates of international institutions, the NYSC mobilization process involves an additional layer of administrative scrutiny known as "Evaluation."
1. THE EVALUATION PROTOCOL:
Unlike local graduates whose names are sent via a Senate List, foreign-trained graduates must personally upload and later physically present their credentials for evaluation.
2. MANDATORY DOCUMENT CHAIN:
You must possess original copies and clear scans of the following:
• DEGREE CERTIFICATE: Issued by the institution.
• ACADEMIC TRANSCRIPT: Complete breakdown of grades.
• INTERNATIONAL PASSPORT: Data page and entry/exit stamps.
• O-LEVEL/HIGH SCHOOL RESULTS: Original WAEC/NECO or equivalent.
3. PHYSICAL VERIFICATION PROCESS:
You will be assigned a date and center for physical verification. You MUST appear in person with all original documents.`,
    metadata: { stage: 'prospective', risk: 'medium', source: 'NYSC Evaluation Dept', featured: true }
  },
  {
    id: 'k-redeployment',
    category: 'Official/Advisory',
    title: 'NYSC Redeployment & Relocation Guide',
    summary: 'Comprehensive guide on valid relocation grounds (Marital, Medical, Security), the digital application process, and mandatory documentation.',
    content: `Relocation is a privilege granted based on verifiable and compassionate grounds.
1. VALID REASONS:
• MARITAL: For married female corps members to join their husbands.
• MEDICAL: For chronic conditions requiring specialized care.
• SECURITY: In cases of extreme instability in the deployment area.
2. THE PROCESS:
Applications are strictly digital via the NYSC portal. Ensure all documents are scanned as high-quality PDFs.`,
    metadata: { stage: 'camp', risk: 'high', source: 'NYSC Bye-laws', featured: true }
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