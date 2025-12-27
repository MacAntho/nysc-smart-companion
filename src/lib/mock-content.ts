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
    id: 'k-mistakes',
    category: 'Advisory/Risk',
    title: 'Top 10 Critical NYSC Mistakes (Penalties/Extensions/Disqual)',
    summary: 'High Risk Intelligence: A definitive guide to avoiding service extensions, disqualification, or criminal prosecution based on NYSC bye-laws.',
    content: `I. FAKE CREDENTIALS & IDENTITY
Presentation of forged degree certificates or results leads to immediate disqualification and handover to the Nigerian Police for criminal prosecution. NYSC verifies results with all awarding institutions.
II. ABSCONDING / AWOL
Leaving your place of primary assignment (PPA) for more than 3 months without official permission results in "Abscondment." You will be declared wanted and forced to remobilize (start from Day 1) in a future batch.
III. UNAUTHORIZED TRAVEL
Traveling outside your state of deployment without a written approval letter from the State Coordinator is a serious disciplinary offense. If an accident occurs during such travel, NYSC insurance and support are nullified.
IV. UNIFORM MISUSE
Wearing the NYSC uniform in unauthorized places (like political rallies, protests, or night clubs) or "re-styling" the khaki (slimming/tapering) is a breach of the code of conduct.
V. CDS ABSENTEEISM
Missing weekly Community Development Service meetings or your monthly clearance without valid medical proof leads to the withholding of your monthly allowance (Allawee).
VI. POLITICAL INVOLVEMENT
Corps members are strictly forbidden from participating in partisan politics or serving as agents for political parties, except for official INEC electoral duties.
VII. DISOBEYING OFFICIALS
Insubordination to Camp Officials, Soldiers, LGIs, or ZIs can result in immediate "Decampment" (eviction from orientation) or an extension of service (1-4 months).
VIII. ILLEGAL PPA CHANGE
Leaving your assigned PPA to work elsewhere without a formal "Letter of Release" and official approval from the NYSC Secretariat is "Ghosting" and leads to cancellation of the service year.
IX. FINANCIAL FRAUD & EXTORTION
Collecting money from other corps members under the guise of "NYSC official fees" or attempting to bribe officials for postings is a criminal offense under the NYSC Act.
X. IMMORAL CONDUCT
Engaging in acts deemed scandalous or immoral while in uniform or within NYSC premises can lead to disciplinary trials and service extension.`,
    metadata: { stage: 'all', risk: 'high', source: 'NYSC Bye-laws', featured: true, last_updated: '2025-02-28' }
  },
  {
    id: 'k-batch-schedule',
    category: 'Official/Mobilization',
    title: 'NYSC Official Batch Schedule & Streams',
    summary: 'Understanding the Senate List, Stream I vs. Stream II, and the revalidation process for missed batches.',
    content: `I. THE SENATE LIST VERIFICATION
The journey begins with your name appearing on the Senate List uploaded by your Institution.
1. VERIFICATION: Visit the NYSC Portal and use the "Check Senate List" link. You need your Matriculation Number and Surname.
2. DISCREPANCIES: If your name is missing, contact your school's Student Affairs Officer (SAO). NYSC cannot add you manually; the school must upload the data.
II. BATCHES AND STREAMS
NYSC mobilizes in three Batches (A, B, and C) annually, further divided into Streams.
1. STREAM I: Typically departs for camp immediately after the registration window closes.
2. STREAM II: Departs roughly 4-6 weeks after Stream I. If you are in Stream II, you do not need to register again; your call-up letter will simply be delayed.
III. THE REVALIDATION PROCESS
If you were mobilized in a previous batch but failed to report to camp:
1. PROCESS: You must "Revalidate" on the portal during the next registration window.
2. WINDOW: Revalidation is available for up to 2 years after your initial mobilization. After this, you may need to visit the headquarters for regularisation.`,
    metadata: { stage: 'mobilization', risk: 'low', source: 'NYSC ICT Directorate', featured: true, last_updated: '2025-02-25' }
  },
  {
    id: 'k-stats',
    category: 'Official/Stats',
    title: 'NYSC Key Statistics: Mobilization, Deployment & Outcomes',
    summary: 'Annual mobilization numbers, age exemption ratios, and post-service employment metrics for recent batches.',
    content: `Understanding the scale of the NYSC program helps Corps Members contextualize their service within the national framework.
I. MOBILIZATION VOLUMES
1. ANNUAL INTAKE: Approximately 350,000 to 400,000 graduates are mobilized annually across Batches A, B, and C.
2. BATCH DISTRIBUTION: Batch B typically sees the highest volume of mobilization (approx. 40%), followed by Batch A (35%) and Batch C (25%).
II. THE 30-YEAR AGE RULE
1. EXEMPTION RATIO: Statistics show that roughly 12-15% of eligible graduates receive Certificates of Exemption because they graduated over the age of 30 or served in the armed forces/police for over nine months.
2. ELIGIBILITY: Eligibility is determined by the age at the time of graduation, not the age at the time of mobilization.
III. PPA SECTOR DISTRIBUTION
1. EDUCATION (65%): The majority of Corps Members are deployed to primary and secondary schools to support the national education system.
2. RURAL HEALTH (15%): Medical and health-related graduates are prioritized for rural health centers.
3. PRIVATE SECTOR & GOVT (20%): Distributed among MDAs and verified private firms.
IV. POST-SERVICE OUTCOMES
1. EMPLOYMENT RATE: Survey data indicates that 25% of Corps Members are retained by their PPA post-service.
2. ENTREPRENEURSHIP: Through the SAED program, approximately 10% of participants launch registered micro-businesses within 6 months of POP.`,
    metadata: { stage: 'all', risk: 'low', source: 'NYSC Annual Reports', featured: true, last_updated: '2025-02-10' }
  },
  {
    id: 'k-allawee',
    category: 'Financial/Official',
    title: 'NYSC Allawee Guide: ₦77k Payments & State Stipends',
    summary: 'Comprehensive operational breakdown: Understanding the ₦77k federal allowance, payment windows, state stipends, and protocols for the final POP payment.',
    content: `Effective October 2024, the Federal Government of Nigeria officially increased the monthly allowance for Corps Members to ₦77,000.
I. THE FEDERAL ALLOWANCE (ALLAWEE)
1. PAYMENT AMOUNT: ₦77,000 per month.
2. PAYMENT WINDOW: Alerts typically drop between the 25th of the current month and the 5th of the following month.
3. THE CLEARANCE FACTOR: Payment is strictly tied to monthly clearance. If your LGI does not upload your biometric data before the state deadline, your payment will be delayed until the 'backlog' cycle (usually mid-month).
II. BANKING PROTOCOLS
1. MANDATORY ACCOUNTS: Most states use specific banks (Access, FirstBank, Zenith, UBA).
2. STABILITY RULE: Never attempt to change your NYSC-linked bank account mid-service. This is the #1 cause of 'unpaid' months and requires a complex manual rectification at the state headquarters.
III. STATE-SPECIFIC STIPENDS (APPROXIMATIVE)
Some states pay additional stipends on top of the Federal ₦77k:
- Lagos: ₦10,000 - ₦15,000 (Ministry/Agencies)
- Rivers: ₦10,000 - ₦15,000
- Abuja (FCT): Usually ₦0 (No state allowee, but high PPA bonuses)
- Oyo: ₦5,000
IV. PPA BONUSES & PERKS
1. PRIVATE SECTOR: Many firms pay between ₦20,000 and ₦100,000 extra.
2. SCHOOLS: Often provide free accommodation and a monthly 'transport' stipend (₦5k - ₦10k).
V. THE FINAL POP PAYMENT
Your last allowance is processed differently. It is typically paid alongside your 'transportation' allowance for returning home. You must complete the 'Final Clearance' chain to trigger this payment. No Final Clearance = No Final Allawee.`,
    metadata: { stage: 'ppa', risk: 'medium', source: 'Federal Govt', featured: true, last_updated: '2025-01-20' }
  },
  {
    id: 'k-pop-certificate',
    category: 'Official',
    title: 'NYSC Certificate: Jobs, Recognition & Loss Procedure',
    summary: 'The ultimate proof of service: Mandatory requirements for employment, educational transitions, and the official protocol for handling lost or damaged certificates.',
    content: `The NYSC Discharge Certificate (or Certificate of National Service) is a high-security document and the only legal proof of your participation in the scheme. Under the NYSC Act, it carries significant legal weight.
I. LEGAL MANDATE & JOB MARKET RECOGNITION
1. MANDATORY PRESENTATION (Section 12): By law, every employer in Nigeria (Public or Private) is required to demand your NYSC Discharge Certificate or Exemption/Exclusion Certificate before offering permanent employment.
2. PROFESSIONAL BODIES: Membership in many professional bodies (ICAN, COREN, NBA, etc.) and post-graduate university admissions in Nigeria require proof of national service.
II. PROCEDURE FOR LOST OR DAMAGED CERTIFICATES
NYSC Policy is strict: THE DISCHARGE CERTIFICATE IS NEVER RE-ISSUED IF LOST.
1. IMMEDIATE ACTION:
   a. Police Report: File a report at the nearest station to the location of loss.
   b. Sworn Affidavit: Obtain a court affidavit stating the circumstances of the loss.
2. CONFIRMATION OF SERVICE:
   - If approved, the Directorate Headquarters will issue a "Letter of Confirmation of Service." This letter is legally equivalent to the original certificate.`,
    metadata: { stage: 'pop', risk: 'low', source: 'NYSC Act / Directorate Headquarters', featured: true, last_updated: '2024-12-01' }
  },
  {
    id: 'k-insider-tips',
    category: 'Survival',
    title: '100 Practical NYSC Survival Tips',
    summary: 'Expert Intelligence: Battle-tested advice for orientation camp, financial management, and PPA survival derived from 20+ batches of experience.',
    content: `Mastering the service year requires more than just following the rules; it requires understanding the "unwritten" code of survival.
I. ORIENTATION CAMP SURVIVAL
1. THE 4AM RULE: To avoid long bathroom queues, wake up at 3:30 AM. Soldiers start whistling by 4:00 AM.
2. DOCUMENT COPIES: Carry at least 10 photocopies of every document. You will need them for opening accounts, file registrations, and kit collection.
3. WHITE GEAR: Buy extra white shorts and socks. The camp-issued ones are often poor quality and transparent.
II. PPA & COMMUNITY INTEGRATION
1. LOCAL LANGUAGE: Learn basic greetings in the local dialect. It drastically improves your safety and bargaining power at markets.
2. THE LGI FACTOR: Your Local Government Inspector is the most important person in your service year. Be respectful, be punctual, and never argue with them in public.
3. ALLOWANCE BUFFERS: Always assume your allowance will be 3-5 days late. Never spend your last ₦5,000 before the alert drops.`,
    metadata: { stage: 'all', risk: 'low', source: 'NYSC Smart Companion Alumni', featured: true, last_updated: '2025-01-10' }
  },
  {
    id: 'k-relocation',
    category: 'Official',
    title: 'NYSC Redeployment & Relocation Guide',
    summary: 'Official Protocol: Understanding the valid grounds for relocation (Marital, Medical, Security) and the portal-based application process.',
    content: `Relocation is a privilege, not a right. It is granted based on specific, verifiable grounds.
I. VALID GROUNDS FOR RELOCATION
1. MARITAL STATUS (Female Corps Members Only): Requires Marriage Certificate, Change of Name in a national newspaper, and a letter from the husband's employer.
2. MEDICAL GROUNDS: Requires a comprehensive medical report from a Federal or State Government Hospital. Reports from private clinics are strictly rejected.
3. SECURITY: Granted in cases of active communal crisis or direct threats in the state of deployment, as determined by the NYSC security unit.
II. APPLICATION TIMELINE
1. CAMP RELOCATION: Applied for during the first week of orientation via the camp officials.
2. POST-CAMP RELOCATION: Done through the online dashboard during specific windows.
III. CAUTION: PORTAL SCAMS
- Do not pay anyone for "relocation slots." NYSC relocation is handled electronically through the headquarters in Abuja based on the quota of the destination state.`,
    metadata: { stage: 'camp', risk: 'medium', source: 'NYSC Handbook', featured: false, last_updated: '2024-11-15' }
  },
  {
    id: 'k-clearance',
    category: 'Official',
    title: 'Monthly & Final Clearance Protocol',
    summary: 'Operational Requirement: Mastering the LGI signature chain and biometric verification process for consistent allowance payment.',
    content: `Clearance is the mechanism by which NYSC verifies you are still at your post.
I. THE MONTHLY CHAIN
1. PPA SIGNATURE: Your employer must sign and stamp your monthly clearance letter, confirming your performance.
2. LGI SUBMISSION: You must physically present this letter at the Local Government Secretariat during the "Clearance Week" (usually the first week of the month).
3. BIOMETRIC CAPTURE: Your thumbprint must be captured on the NYSC digital device. No fingerprint = No allowance.
II. FINAL CLEARANCE (POP)
- Final clearance involves returning all kit items (except boots and vest) and obtaining signatures from the Employer, LGI, ZI, and finally the State Coordinator.`,
    metadata: { stage: 'ppa', risk: 'medium', source: 'NYSC Operations Manual', featured: true, last_updated: '2024-12-05' }
  },
  {
    id: 'k-camp-packing',
    category: 'Survival',
    title: 'Orientation Camp Packing List',
    summary: 'Strategic Preparation: Essential documents and survival gear for the 21-day induction phase.',
    content: `Success at camp starts with your bag. If you forget critical documents, you may be sent home.
I. MANDATORY DOCUMENTS (The "Do or Die" Folder)
1. Call-up Letter (Original + 5 copies). Do not laminate the original.
2. Statement of Result / Degree Certificate.
3. Medical Fitness Certificate (From Govt Hospital).
4. Institutional ID Card.
5. Passport Photographs (at least 20 copies with white background).
II. GEAR & SURVIVAL
- 2 pairs of white sneakers (Camp-issued ones are often uncomfortable).
- 3-5 pairs of white socks and shorts.
- Mosquito net and disinfectant.
- Power bank (charging ports in camp are scarce and paid).
- Enough cash in small denominations for the "Mammy Market."`,
    metadata: { stage: 'mobilization', risk: 'high', source: 'NYSC Protocols', featured: true, last_updated: '2025-01-05' }
  },
  {
    id: 'k-financial-survival',
    category: 'Survival/Financial',
    title: 'NYSC Financial Survival Guide: Allowance, Budgets & Side Hustles',
    summary: 'Strategic Financial Roadmap: Mastering the updated ₦77k allowance, PPA perks, and SAED business development.',
    content: `Effective October 2024, the federal allowance is ₦77,000.
I. THE ₦77,000 ALLOWANCE STRUCTURE
1. PAYMENT CYCLE: Usually arrives between the 25th and 30th of each month.
2. STATE ALLOWEE: Some states provide an additional stipend.
II. THE 50/30/20 BUDGETING MATRIX
1. NEEDS (50% - ₦38,500): Prioritize food and transport.
2. SAVINGS (30% - ₦23,100): Start building your 'Post-NYSC Buffer'.
3. PERSONAL (20% - ₦15,400): Hygiene and social activities.`,
    metadata: { stage: 'all', risk: 'medium', source: 'NYSC/SAED', featured: true, last_updated: '2024-10-25' }
  },
  {
    id: 'k-emergency',
    category: 'Advisory/Safety',
    title: 'NYSC Emergency Response Guide',
    summary: 'Strategic Safety Roadmap: Official protocols for medical, security, and document loss emergencies.',
    content: `I. MEDICAL EMERGENCIES: Visit the nearest Government hospital. Inform your LGI and ZI within 24 hours.
II. SECURITY THREATS: Save the numbers of your LGI and the State NYSC Security Officer.
III. TRAVEL SAFETY: Never travel outside your state of deployment without written permission from the State Coordinator.`,
    metadata: { stage: 'all', risk: 'high', source: 'NYSC Protocols', featured: true, last_updated: '2024-11-01' }
  },
  {
    id: 'k-disqualification',
    category: 'Official',
    title: 'Disqualification & Remobilization Protocol',
    summary: 'Critical Risk: Understand the grounds for service cancellation and the legal implications of disciplinary disqualification.',
    content: `Disqualification is the ultimate administrative penalty.
1. ABSCONDMENT: Missing more than 3 months results in remobilization (restarting).
2. FORGED DOCUMENTS: Discovery of forged degrees leads to immediate handover to security.
3. DESERTION: Leaving camp without permission can lead to "Remobilization with half-pay".`,
    metadata: { stage: 'camp', risk: 'high', source: 'NYSC Legal Unit', featured: true, last_updated: '2024-09-15' }
  },
  {
    id: 'k-career-leverage',
    category: 'Career/POP',
    title: 'Leveraging NYSC for Career Transition',
    summary: 'Strategic Roadmap: Mastering your transition from service to the labor market.',
    content: `National service is a strategic launchpad.
I. SKILL MONETIZATION: Collect your SAED certificates.
II. NETWORKING: Your PPA is your first professional network.
III. DIGITAL BRANDING: Update LinkedIn profile.`,
    metadata: { stage: 'pop', risk: 'low', source: 'NYSC Smart Companion', featured: true, last_updated: '2024-10-20' }
  }
];
export const STATE_DATA: Record<string, any> = {
  'Lagos': {
    camp: 'Iyana-Ipaja Orientation Camp. Facilities are decent but crowded.',
    cost: 'High. Lagos is expensive. Rent averages ₦280k+, transport is significant.',
    metrics: { rent: 280000, food: 45000, transport: 35000 },
    ppa: 'Strong opportunities in Tech, Finance, and Media.',
    pro_tip: 'Apply for PPA in Ikorodu if you want a lower cost of living while staying in Lagos.'
  },
  'Abuja': {
    camp: 'Kubwa Orientation Camp. Modern facilities, grid water supply.',
    cost: 'Very High. Abuja rent is steep. Average ₦350k+ in satellite towns.',
    metrics: { rent: 350000, food: 50000, transport: 40000 },
    ppa: 'Govt Agencies, NGOs, and Professional Firms.',
    pro_tip: 'Look for accommodation in Kubwa or Lugbe to save on housing costs.'
  },
  'Oyo': {
    camp: 'Iseyin Orientation Camp. Known for its cool weather and hills.',
    cost: 'Low. Ibadan is very affordable. Rent ₦80k-₦150k. Food is cheap.',
    metrics: { rent: 100000, food: 20000, transport: 10000 },
    ppa: 'Educational institutions, Agriculture, and Research.',
    pro_tip: 'Ibadan is vast; choose a PPA close to your residence to avoid long commutes.'
  },
  'DEFAULT': {
    camp: 'Standard NYSC Orientation facilities. Registration starts at 4:00 AM.',
    cost: 'Moderate. Aligns with national averages.',
    metrics: { rent: 120000, food: 25000, transport: 15000 },
    ppa: 'Schools, Local Government Secretariats, Health Clinics.',
    pro_tip: 'Always report to your LGI within 48 hours of camp exit.'
  }
};
export const DEADLINES = [
  { id: 'd1', title: 'Batch A Online Registration', date: '2025-02-15', stage: 'mobilization', importance: 'high' },
  { id: 'd2', title: 'Medical Fitness Upload', date: '2025-01-30', stage: 'prospective', importance: 'medium' },
  { id: 'd3', title: 'Camp Portal Closure', date: '2025-03-10', stage: 'camp', importance: 'high' },
  { id: 'd4', title: 'Monthly Biometric Window', date: '2025-05-30', stage: 'ppa', importance: 'high' },
  { id: 'd5', title: 'Project Proposal Deadline', date: '2025-07-15', stage: 'cds', importance: 'medium' },
  { id: 'd6', title: 'Final Clearance Phase', date: '2025-11-01', stage: 'pop', importance: 'high' },
];
export const CDS_RESOURCES = {
  categories: [
    { id: 'Education', name: 'Education', icon: 'Book' },
    { id: 'Health', name: 'Health', icon: 'HeartPulse' },
    { id: 'Environment', name: 'Environment', icon: 'Leaf' },
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
    },
    {
      id: 'infra-1',
      category: 'Infrastructure',
      title: 'Solar Streetlight Project',
      description: 'Installing solar-powered streetlights in high-risk community zones.',
      budget: '₦150,000 - ₦400,000',
      duration: '3 Months',
      requirements: ['Technical Partner', 'Security Guard', 'LGI Approval'],
    }
  ],
  templates: [
    { id: 't1', title: 'Project Proposal Letter', type: 'Word', size: '24KB' },
    { id: 't2', title: 'Request for Funds (Sponsorship)', type: 'Word', size: '30KB' },
    { id: 't3', title: 'Completion Report Form', type: 'PDF', size: '150KB' }
  ]
};