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
    id: 'k-sanctions',
    category: 'Official/Advisory',
    title: 'NYSC Violations & Penalties Guide',
    summary: 'Absence, AWOL, uniform, forgery sanctions. Know the official disciplinary protocols.',
    content: `Think of your NYSC service year as a National Professional Contract. You have signed an agreement with the Nigerian state to serve for 365 days. In this context, "Extensions" (extra days or months of service) are essentially penalties for "Breach of Contract."
Compliance is not just about rules; it is about protecting your time and securing your future discharge certificate.
1. AWOL & ABSENCE FROM DUTY:
Absence from your Place of Primary Assignment (PPA) for up to 7 consecutive days without permission is classified as AWOL (Absent Without Leave).
PROTOCOL: If you are absent for 1 to 7 days, you face a 1-month service extension. If you are absent for more than 7 days, your allowance will be suspended and you may be mandated to repeat the entire service year (Remobilization).
2. UNIFORM & DECORUM VIOLATIONS:
The NYSC uniform is a legal kit. Wearing it improperly (e.g., wearing the Khaki with non-white sneakers, or "slimming" the kit excessively) is a policy violation.
PROTOCOL: Corpers caught improperly dressed can be sent out of official gatherings, face disciplinary reports from the ZI/LGI, or in extreme cases (during camp), face expulsion from the orientation program.
3. FORGERY & DOCUMENT FALSIFICATION:
Presenting fake medical reports for redeployment or falsifying PPA clearance signatures is a high-risk criminal offense.
PROTOCOL: NYSC operates a zero-tolerance policy for forgery. Discovery leads to immediate cancellation of the service year, withholding of the Discharge Certificate, and potential criminal prosecution under the NYSC Act.
4. CONDUCT AT PPA:
Serious misconduct at your PPA (theft, insubordination, or gross negligence) can lead to a formal "Letter of Committal" to the state secretariat.
PROTOCOL: If found guilty, the State Disciplinary Committee may recommend a service extension of 2 weeks to 4 months depending on the severity of the act.
5. TRAVEL PERMISSION:
Leaving your state of service without a written "Travel Permit" signed by the State Coordinator is a violation.
PROTOCOL: If involved in an accident or emergency while outside your state without a permit, you forfeit all official insurance and support, and will face a service extension for being "Outside Station" without authority.`,
    metadata: { stage: 'all', risk: 'high', source: 'NYSC Act/Bye-laws', featured: true }
  },
  {
    id: 'k-clearance-issues',
    category: 'Official/Troubleshooting',
    title: 'Common NYSC Clearance Issues and Solutions',
    summary: 'PPA sign refusal, CDS absence, lost docs, and biometric failure protocols.',
    content: `Navigating the NYSC administrative structure can be challenging when friction occurs. This guide provides official protocols for the most common clearance issues.
1. PPA EMPLOYER REFUSAL TO SIGN CLEARANCE:
If your PPA employer refuses to sign your monthly clearance without a valid disciplinary reason (e.g., absenteeism), do NOT wait until the window closes.
PROTOCOL: Report immediately to your Local Government Inspector (LGI) within 24 hours. The LGI has the authority to intervene or sign your clearance after an independent investigation.
2. CDS ABSENCES & THE 75% THRESHOLD:
The NYSC Bye-laws mandate a minimum of 75% attendance at weekly CDS meetings.
PROTOCOL: If you miss a meeting due to illness, you must present a medical report from a government hospital to the LGI within 48 hours of the meeting. Retrospective excuses are generally not accepted.
3. LOST ID CARD PROTOCOL:
Your NYSC ID card is a legal document. Losing it is a serious policy violation that can lead to service extension.
PROTOCOL:
a) Obtain a Police Report immediately.
b) Get a Sworn Affidavit of Loss from a High Court.
c) Present these to the State Secretariat to apply for a replacement. Do not attempt to use a "photocopy" for biometric clearance.
4. BIOMETRIC CAPTURE FAILURES:
In cases where the portal fails to recognize your thumbprints during monthly clearance.
PROTOCOL: Request the LGI to enter your details in the "Exceptional Register" or "Manual Clearance Log." This ensures your record is flagged for manual processing so your allowance is not suspended.
5. LOST CALL-UP LETTER OR GREEN CARD:
These are required for camp registration and POP.
PROTOCOL: Print "Duplicate" copies directly from your dashboard. If the portal is closed, you must visit the ICT department at the State Secretariat with a formal application letter.`,
    metadata: { stage: 'ppa', risk: 'high', source: 'NYSC Official', featured: true }
  },
  {
    id: 'k-pop',
    category: 'Official',
    title: 'Passing Out Parade (POP) & Certificate Guide',
    summary: 'CNS details, clearance, verification, exemptions.',
    content: `The Passing Out Parade (POP) marks the official end of your service year. To receive your Certificate of National Service (CNS), you must complete the final clearance chain.
1. FINAL RELEASE & CLEARANCE:
Obtain your Final Release Letter from your PPA. This letter must state that you have completed your primary assignment and have no outstanding liabilities. Take this to your Local Government Inspector (LGI) along with your updated ID card and CDS clearance.
2. KIT RETURN PROTOCOL:
You are required to return specific items issued at camp, typically the Khaki Tunic and sometimes the Jungle Boots. Ensure you receive a "Kit Return Slip" or verbal clearance from the designated store officer.
3. CNS NAME VERIFICATION:
Before the final day, check the "CNS Master List" at the secretariat. Ensure your name is spelled correctly as it appears on your Degree Certificate. Corrections after the certificate is printed are extremely difficult and often require an affidavit.
4. THE ZI & LGI SIGNATURE CHAIN:
The "Green Card" or Final Clearance Form must be signed by your PPA Employer, the LGI, and finally the Zonal Inspector (ZI). This verified document is what you present on the parade ground to receive your physical certificate.
5. EXEMPTIONS & EXCLUSIONS:
If you are an Exemption or Exclusion candidate, your process is strictly digital. Ensure you have printed your certificate from the portal and taken it to the state secretariat for official stamping if required.`,
    metadata: { stage: 'pop', risk: 'high', source: 'NYSC Official', featured: true }
  },
  {
    id: 'k-clearance',
    category: 'Official',
    title: 'NYSC Clearance Process: Monthly & Final Protocols',
    summary: 'A guide to PPA/CDS documentation, LGI verification steps, and avoiding allowance delays.',
    content: `Clearance is the lifeblood of the NYSC service year. Failure to complete it correctly results in "No Pay" status or service extension.
MONTHLY CLEARANCE (The 3-Step Chain):
1. PPA CLEARANCE LETTER: Every month-end (usually from the 20th), obtain a signed and stamped letter from your PPA employer confirming your diligent service and presence.
2. CDS CLEARANCE: Ensure your CDS Vice President or Secretary signs your green card/attendance register during weekly meetings.
3. LGI VERIFICATION: Take your PPA letter and CDS card to the Local Government Inspector (LGI). The LGI performs a digital "face-match" or thumbprint verification on the portal. Once the LGI "clears" you online, your allowance is triggered for that month.
CRITICAL DEADLINE: Monthly clearance usually happens between the 25th and last day of the month. Missing this window means you won't be paid for that month until the next cycle.
FINAL CLEARANCE (Winding-Up/POP):
1. KIT RETURN: You must return specified NYSC gear (usually the boots and tunic) as directed by the state secretariat.
2. SIGNATURE CHAIN: Obtain final signatures from your PPA employer (Final Release Letter), the Zonal Inspector (ZI), and finally the LGI.
3. CLEARANCE SLIP: Present all signed documents to receive your "Discharge Certificate" on POP day.`,
    metadata: { stage: 'ppa', risk: 'high', source: 'NYSC Official', featured: true }
  },
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
  'Oyo': {
    camp: 'Iseyin Orientation Camp. Located in a serene, hilly environment. Very cold at night.',
    cost: 'Moderate-Low. Ibadan is one of the most affordable major cities in Nigeria.',
    metrics: { rent: 110000, food: 25000, transport: 15000 },
    ppa: 'Agriculture, Research Institutes (IITA), and Education sectors are dominant.',
    pro_tip: 'Ibadan is vast; stay in Bodija or Samonda for proximity to social hubs.'
  },
  'Kwara': {
    camp: 'Yikpata Orientation Camp. Known for its large grounds. Bring extra water containers.',
    cost: 'Low. Very affordable food and housing.',
    metrics: { rent: 85000, food: 18000, transport: 10000 },
    ppa: 'Civil Service, Manufacturing, and Higher Education (Unilorin axis).',
    pro_tip: 'The "Harmony State" is peaceful; use Ilorin as your base for the best experience.'
  },
  'Anambra': {
    camp: 'Umuawulu/Mbaukwu Orientation Camp. Modern facilities, recently commissioned.',
    cost: 'Moderate. Onitsha is pricey for business hubs; Awka is standard.',
    metrics: { rent: 160000, food: 32000, transport: 18000 },
    ppa: 'Commerce, Small Scale Industries, and Education.',
    pro_tip: 'Business is the lifeblood here. Networking in Onitsha can lead to great post-NYSC roles.'
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
    }
  ],
  templates: [
    { id: 't1', title: 'Project Proposal Letter', type: 'Word', size: '24KB' },
    { id: 't2', title: 'Request for Funds (Sponsorship)', type: 'Word', size: '30KB' },
    { id: 't3', title: 'Completion Report Form', type: 'PDF', size: '150KB' }
  ]
};