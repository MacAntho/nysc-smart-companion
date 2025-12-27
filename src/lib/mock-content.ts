import { KnowledgeArticle, CDSProject } from "@shared/types";
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
    id: 'k-cds',
    category: 'Official',
    title: 'Community Development Service (CDS): Groups & Lifecycle',
    summary: 'Comprehensive guide on group types, weekly attendance, project timelines, and clearance protocols.',
    content: `Community Development Service (CDS) is a mandatory component of the NYSC scheme designed to impact host communities through sustainable projects.
1. CDS GROUP TYPES
- Editorial, ICT, Medical, Road Safety, Anti-Corruption, Environment, Charity/SDGs.
2. WEEKLY MEETING MANDATE
- Meetings are held weekly (usually Thursdays). 75% attendance is required for clearance.
3. THE PROJECT LIFECYCLE
- Identify, Propose, Approve, Implement, Report.`,
    metadata: {
      stage: 'cds',
      risk: 'low',
      source: 'NYSC Official',
      last_updated: '2025',
      featured: true
    }
  }
];
export const STATE_DATA: Record<string, any> = {
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
    // --- EDUCATION (6) ---
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
      id: 'edu-2',
      category: 'Education',
      title: 'Digital Literacy for Teachers',
      description: 'Training rural school teachers on basic computer operations and digital teaching tools.',
      budget: '₦40,000 - ₦100,000',
      duration: '2 Months',
      requirements: ['Laptops', 'Training Manual', 'Venue'],
      challenges: ['Power Supply', 'Varying Tech Backgrounds'],
      metrics: ['50 Teachers Certified', '10 Schools Impacted']
    },
    {
      id: 'edu-3',
      category: 'Education',
      title: 'Inter-School Debate Trophy',
      description: 'Organizing a LGA-wide debate competition to foster intellectual growth.',
      budget: '₦30,000 - ₦70,000',
      duration: '6 Weeks',
      requirements: ['Judges', 'Medals/Trophies', 'Participating Schools'],
      challenges: ['Transport for Students', 'Judging Fairness'],
      metrics: ['12 Schools Participating', '500+ Audience']
    },
    {
      id: 'edu-4',
      category: 'Education',
      title: 'School Desk Refurbishment',
      description: 'Repairing broken desks in dilapidated community schools.',
      budget: '₦60,000 - ₦150,000',
      duration: '3 Months',
      requirements: ['Carpenter', 'Materials', 'School Permission'],
      challenges: ['Lumber Costs', 'Logistics of Moving Desks'],
      metrics: ['200 Desks Repaired', '400 Students Seated']
    },
    {
      id: 'edu-5',
      category: 'Education',
      title: 'Career Guidance Seminar',
      description: 'Providing professional counseling to SS3 students for university selection.',
      budget: '₦20,000 - ₦40,000',
      duration: '1 Month',
      requirements: ['Resource Persons', 'Handouts'],
      challenges: ['Student Attendance', 'Venue Size'],
      metrics: ['300 Students Reached', '10 Career Paths Explained']
    },
    {
      id: 'edu-6',
      category: 'Education',
      title: 'Adult Literacy Classes',
      description: 'Evening classes for local artisans and market women to learn basic reading.',
      budget: '₦15,000 - ₦50,000',
      duration: '6 Months',
      requirements: ['Venue', 'Teaching Aids'],
      challenges: ['Market Timings', 'Cultural Barriers'],
      metrics: ['40 Adults Literate', 'Weekly Sessions']
    },
    // --- HEALTH (6) ---
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
      id: 'health-2',
      category: 'Health',
      title: 'Rural Health Sensitization',
      description: 'Door-to-door awareness on hygiene, Lassa fever, and Malaria prevention.',
      budget: '₦10,000 - ₦30,000',
      duration: '3 Months',
      requirements: ['Fliers', 'Megaphone'],
      challenges: ['Language Barrier', 'Terrain'],
      metrics: ['500 Households Reached']
    },
    {
      id: 'health-3',
      category: 'Health',
      title: 'Blood Donation Drive',
      description: 'Partnering with the National Blood Service to organize a donation clinic.',
      budget: '₦25,000 - ₦60,000',
      duration: '1 Month',
      requirements: ['Hospital Partnership', 'Post-donation snacks'],
      challenges: ['Myths about Blood Donation', 'Eligibility'],
      metrics: ['100 Pints of Blood Collected']
    },
    {
      id: 'health-4',
      category: 'Health',
      title: 'First Aid Kit Distribution',
      description: 'Donating equipped first aid boxes to remote schools and police posts.',
      budget: '₦40,000 - ₦90,000',
      duration: '2 Months',
      requirements: ['Kits', 'Basic Training Manuals'],
      challenges: ['Refill Sustainability'],
      metrics: ['20 Centers Equipped']
    },
    {
      id: 'health-5',
      category: 'Health',
      title: 'Maternal Nutrition Workshop',
      description: 'Teaching pregnant women about affordable local nutrition.',
      budget: '₦30,000 - ₦70,000',
      duration: '3 Months',
      requirements: ['Nutritionist', 'Samples'],
      challenges: ['Cultural Taboos', 'Affordability'],
      metrics: ['150 Women Trained']
    },
    {
      id: 'health-6',
      category: 'Health',
      title: 'Free Eye Screening',
      description: 'Partnering with optometrists for free community vision tests.',
      budget: '₦50,000 - ₦150,000',
      duration: '2 Months',
      requirements: ['Optometrist', 'Basic Equipment'],
      challenges: ['Crowd Management', 'Referral Costs'],
      metrics: ['200 Patients Screened']
    },
    // --- ENVIRONMENT (6) ---
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
      id: 'env-2',
      category: 'Environment',
      title: 'Waste Bin Distribution',
      description: 'Placing color-coded waste bins in public markets.',
      budget: '₦70,000 - ₦150,000',
      duration: '3 Months',
      requirements: ['Bins', 'Waste Agency Partnership'],
      challenges: ['Vandalism', 'Regular Evacuation'],
      metrics: ['50 Bins Deployed']
    },
    {
      id: 'env-3',
      category: 'Environment',
      title: 'Drainage Clearing Drive',
      description: 'Leading community youth to clear blocked gutters before rainy season.',
      budget: '₦10,000 - ₦25,000',
      duration: '2 Months',
      requirements: ['Tools', 'Local Youth Mobilization'],
      challenges: ['Solid Waste Volume', 'Odor/Health Risks'],
      metrics: ['2km Drainage Cleared']
    },
    {
      id: 'env-4',
      category: 'Environment',
      title: 'Climate Change Awareness',
      description: 'Workshops for local farmers on sustainable agricultural practices.',
      budget: '₦20,000 - ₦50,000',
      duration: '3 Months',
      requirements: ['Expert Speakers', 'Demonstration Plot'],
      challenges: ['Traditional Mindsets'],
      metrics: ['100 Farmers Reached']
    },
    {
      id: 'env-5',
      category: 'Environment',
      title: 'Anti-Erosion Barriers',
      description: 'Building sandbag or tire barriers in erosion-prone hilly areas.',
      budget: '₦30,000 - ₦90,000',
      duration: '4 Months',
      requirements: ['Tires/Sandbags', 'Labor'],
      challenges: ['Physical Exhaustion', 'Material Supply'],
      metrics: ['5 Critical Spots Secured']
    },
    {
      id: 'env-6',
      category: 'Environment',
      title: 'Community Orchard',
      description: 'Converting a wasteland into a fruit orchard for community use.',
      budget: '₦60,000 - ₦120,000',
      duration: '6 Months',
      requirements: ['Fenced Land', 'Seedlings'],
      challenges: ['Land Ownership Disputes'],
      metrics: ['1 Acre Restored']
    },
    // --- INFRASTRUCTURE (6) ---
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
      id: 'inf-2',
      category: 'Infrastructure',
      title: 'Solar Street Lights',
      description: 'Installing solar-powered lamps at dark community junctions.',
      budget: '₦150,000 - ₦400,000',
      duration: '4 Months',
      requirements: ['Solar Kits', 'Technician', 'Approval'],
      challenges: ['High Capital', 'Battery Theft'],
      metrics: ['5 Critical Junctions Lit']
    },
    {
      id: 'inf-3',
      category: 'Infrastructure',
      title: 'Market Shed Construction',
      description: 'Building simple wooden/iron sheds for rural market women.',
      budget: '₦100,000 - ₦300,000',
      duration: '5 Months',
      requirements: ['Land Space', 'Construction Materials'],
      challenges: ['High Material Cost'],
      metrics: ['10 Sheds Built']
    },
    {
      id: 'inf-4',
      category: 'Infrastructure',
      title: 'Culvert Repair',
      description: 'Fixing minor road culverts to prevent seasonal cut-offs.',
      budget: '₦80,000 - ₦250,000',
      duration: '4 Months',
      requirements: ['Engineer', 'Cement/Stone'],
      challenges: ['Heavy Traffic', 'Material Transport'],
      metrics: ['2 Key Access Roads Saved']
    },
    {
      id: 'inf-5',
      category: 'Infrastructure',
      title: 'Signage & Directions',
      description: 'Erecting permanent direction signs for hospitals and government offices.',
      budget: '₦30,000 - ₦70,000',
      duration: '2 Months',
      requirements: ['Metal Sheets', 'Paint', 'Welder'],
      challenges: ['Durability/Rust'],
      metrics: ['15 Signs Installed']
    },
    {
      id: 'inf-6',
      category: 'Infrastructure',
      title: 'Public Toilet Renovation',
      description: 'Repairing doors and plumbing of public/school latrines.',
      budget: '₦60,000 - ₦180,000',
      duration: '3 Months',
      requirements: ['Plumber', 'Tiles/Doors'],
      challenges: ['Hygiene Standards', 'Water Connection'],
      metrics: ['4 Toilets Restored']
    },
    // --- SOCIAL (6) ---
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
    },
    {
      id: 'soc-2',
      category: 'Social',
      title: 'Orphanage Visitation Program',
      description: 'Coordinated monthly visits with food and educational supplies.',
      budget: '₦20,000 - ₦60,000',
      duration: 'Continuous',
      requirements: ['Sponsorship', 'Transport'],
      challenges: ['Donation Consistency'],
      metrics: ['50 Children Supported']
    },
    {
      id: 'soc-3',
      category: 'Social',
      title: 'Drug Abuse Sensitization',
      description: 'Rallies and seminars in secondary schools on the dangers of drug abuse.',
      budget: '₦15,000 - ₦40,000',
      duration: '2 Months',
      requirements: ['Police/NDLEA Speakers'],
      challenges: ['Sensitive Audience'],
      metrics: ['10 Schools Covered']
    },
    {
      id: 'soc-4',
      category: 'Social',
      title: 'Women Empowerment (Tailoring)',
      description: 'Donating sewing machines to top-performing women in vocational training.',
      budget: '₦100,000 - ₦250,000',
      duration: '4 Months',
      requirements: ['Machines', 'Selection Criteria'],
      challenges: ['Selection Fairness'],
      metrics: ['5 Women Empowered']
    },
    {
      id: 'soc-5',
      category: 'Social',
      title: 'Community Sports Tournament',
      description: 'Organizing a "Peace Cup" to unite conflicting local youth groups.',
      budget: '₦40,000 - ₦100,000',
      duration: '2 Months',
      requirements: ['Jerseys', 'Pitch', 'Community Leaders'],
      challenges: ['Security during Finals'],
      metrics: ['8 Teams Participated']
    },
    {
      id: 'soc-6',
      category: 'Social',
      title: 'Prisoners Welfare Drive',
      description: 'Donating toiletries and basic reading materials to local correctional centers.',
      budget: '₦30,000 - ₦80,000',
      duration: '3 Months',
      requirements: ['Correctional Clearance', 'Items'],
      challenges: ['Access Restrictions'],
      metrics: ['200 Inmates Reached']
    }
  ],
  templates: [
    { id: 't1', title: 'Project Proposal Letter', type: 'Word', size: '24KB' },
    { id: 't2', title: 'Request for Funds (Sponsorship)', type: 'Word', size: '30KB' },
    { id: 't3', title: 'Completion Report Form', type: 'PDF', size: '150KB' }
  ]
};