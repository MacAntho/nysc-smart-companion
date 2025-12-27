export const JOURNEY_STAGES = [
  {
    id: 'prospective',
    title: 'Prospective Stage',
    description: 'Final year in school or recently graduated.',
    tasks: [
      { id: 'p1', title: 'Verify Senate List', description: 'Ensure your name is on the NYSC senate list.' },
      { id: 'p2', title: 'Final Clearance', description: 'Complete your university final clearance.' },
    ]
  },
  {
    id: 'mobilization',
    title: 'Mobilization & Registration',
    description: 'The period of online registration and call-up letters.',
    tasks: [
      { id: 'm1', title: 'Online Registration', description: 'Register on the portal with thumbprint.' },
      { id: 'm2', title: 'Print Call-up Letter', description: 'Download your deployment letter.' },
      { id: 'm3', title: 'Medical Certificate', description: 'Obtain a valid medical fitness certificate.' },
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
  }
];
export const KNOWLEDGE_ARTICLES = [
  {
    id: 'k1',
    category: 'Official',
    title: 'The NYSC Act',
    summary: 'Understanding the legal framework of your service year.',
    content: 'The National Youth Service Corps (NYSC) Act is the enabling law for the scheme. It mandates that every Nigerian graduate under the age of 30 at graduation must serve for one year. The act covers discipline, allowance, and the four cardinal programs of the NYSC.'
  },
  {
    id: 'k2',
    category: 'Survival',
    title: 'Camp Packing List',
    summary: 'Everything you need to bring to the orientation camp.',
    content: 'Essential items for camp include: White t-shirts (4-6), White shorts (4-6), White socks (6 pairs), White sneakers, Toiletries, Mosquito net, Waist bag, and original documents (Statement of Result, Call-up Letter, Medical Fitness Certificate).'
  },
  {
    id: 'k3',
    category: 'CDS',
    title: 'Project Ideas',
    summary: 'How to start a meaningful community project.',
    content: 'A Community Development Service (CDS) project is successful when it meets a felt need in the community. Steps include: Needs assessment, Proposal writing, Seeking approval from the Local Government Inspector (LGI), Execution, and Commissioning.'
  },
];
export const STATE_DATA: Record<string, any> = {
  'Lagos': {
    camp: 'Iyana Ipaja Orientation Camp',
    cost: 'High cost of living, transport heavy.',
    costScale: 5,
    ppa: 'Corporate firms, tech hubs in Yaba/Island, schools in suburbs.',
  },
  'Abuja': {
    camp: 'Kubwa Orientation Camp',
    cost: 'Moderate to High. Good roads.',
    costScale: 4,
    ppa: 'Government MDAs, International NGOs, Law firms.',
  },
  'Rivers': {
    camp: 'Nonwa Gbam Tai Orientation Camp',
    cost: 'Moderate to High. Security conscious.',
    costScale: 4,
    ppa: 'Oil & Gas services, private schools, maritime agencies.',
  },
  'Oyo': {
    camp: 'Iseyin Orientation Camp',
    cost: 'Relatively low cost of living. Large state.',
    costScale: 2,
    ppa: 'University of Ibadan research institutes, agribusiness, private colleges.',
  },
  'Enugu': {
    camp: 'Awgu Orientation Camp',
    cost: 'Moderate. Friendly environment.',
    costScale: 3,
    ppa: 'Hospitals, government secretariat, private tech startups.',
  },
  'Kano': {
    camp: 'Kusalla Dam Orientation Camp',
    cost: 'Low to Moderate. Commercial hub.',
    costScale: 2,
    ppa: 'Manufacturing firms, trading companies, islamic studies centers.',
  }
};
export const DEADLINES = [
  { id: 'd1', title: 'Online Registration Ends', date: '2025-10-15', stage: 'mobilization' },
  { id: 'd2', title: 'Camp Portal Closure', date: '2025-11-01', stage: 'camp' },
  { id: 'd3', title: 'Upload Medical Certificate', date: '2025-06-30', stage: 'prospective' },
];
export const CDS_RESOURCES = {
  categories: [
    { id: 'edu', name: 'Education', icon: 'Book' },
    { id: 'health', name: 'Health', icon: 'HeartPulse' },
    { id: 'environ', name: 'Environment', icon: 'Leaf' },
    { id: 'ict', name: 'ICT/Literacy', icon: 'Cpu' },
  ],
  projects: [
    {
      id: 'cp1',
      category: 'Education',
      title: 'Free Vacation Lessons',
      description: 'Organize free tutoring for students during their break period.',
      requirements: ['Permission from School Principal', 'Curriculum Guide']
    },
    {
      id: 'cp2',
      category: 'Health',
      title: 'Deworming Exercise',
      description: 'Partner with local clinics to provide deworming medication for school children.',
      requirements: ['Medical Supervisor', 'LGI Approval']
    },
    {
      id: 'cp3',
      category: 'Environment',
      title: 'Clean-up Campaign',
      description: 'Monthly sanitation sensitization and drainage clearing exercise.',
      requirements: ['Community Head Consent', 'Basic Tools']
    }
  ],
  templates: [
    { id: 't1', title: 'Project Proposal Letter', type: 'Word', size: '24KB' },
    { id: 't2', title: 'Request for Funds (Sponsorship)', type: 'Word', size: '30KB' },
    { id: 't3', title: 'Completion Report Form', type: 'PDF', size: '150KB' }
  ]
};