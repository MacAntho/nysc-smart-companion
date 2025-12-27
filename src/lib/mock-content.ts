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
  { id: 'k1', category: 'Official', title: 'The NYSC Act', summary: 'Understanding the legal framework of your service year.' },
  { id: 'k2', category: 'Survival', title: 'Camp Packing List', summary: 'Everything you need to bring to the orientation camp.' },
  { id: 'k3', category: 'CDS', title: 'Project Ideas', summary: 'How to start a meaningful community project.' },
];
export const STATE_DATA: Record<string, any> = {
  'Lagos': {
    camp: 'Iyana Ipaja Orientation Camp',
    cost: 'High cost of living, transport heavy.',
    ppa: 'Plenty of corporate opportunities in Ikeja/Island.',
  },
  'Abuja': {
    camp: 'Kubwa Orientation Camp',
    cost: 'Moderate to High. Good roads.',
    ppa: 'Mainly Government Agencies and NGOs.',
  }
};
export const DEADLINES = [
  { id: 'd1', title: 'Online Registration Ends', date: '2024-10-15', stage: 'mobilization' },
  { id: 'd2', title: 'Camp Portal Closure', date: '2024-11-01', stage: 'camp' },
];