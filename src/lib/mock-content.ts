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
    id: 'k-pop-certificate',
    category: 'Official',
    title: 'NYSC Certificate: Jobs, Recognition & Loss Procedure',
    summary: 'The ultimate proof of service: Mandatory requirements for employment, educational transitions, and the official protocol for handling lost or damaged certificates.',
    content: `The NYSC Discharge Certificate (or Certificate of National Service) is a high-security document and the only legal proof of your participation in the scheme. Under the NYSC Act, it carries significant legal weight.
I. LEGAL MANDATE & JOB MARKET RECOGNITION
1. MANDATORY PRESENTATION (Section 12): By law, every employer in Nigeria (Public or Private) is required to demand your NYSC Discharge Certificate or Exemption/Exclusion Certificate before offering permanent employment.
2. PROFESSIONAL BODIES: Membership in many professional bodies (ICAN, COREN, NBA, etc.) and post-graduate university admissions in Nigeria require proof of national service.
3. PUBLIC OFFICE: Eligibility for many elective or appointive public offices is contingent upon having served or being legally exempted.
II. SAFEGUARDING YOUR CERTIFICATE
1. SCANNED BACKUP: Immediately upon collection, create a high-resolution digital scan. Save it to a secure cloud vault (Google Drive, iCloud) and email a copy to yourself.
2. LAMINATION: While common, some agencies advise against heavy lamination that might interfere with verifying security features (holograms/watermarks). Consider a high-quality protective sleeve instead.
III. PROCEDURE FOR LOST OR DAMAGED CERTIFICATES
NYSC Policy is strict: THE DISCHARGE CERTIFICATE IS NEVER RE-ISSUED IF LOST. However, the legal alternative is the "Confirmation of Service" letter.
1. IMMEDIATE ACTION:
   a. Police Report: File a report at the nearest station to the location of loss.
   b. Sworn Affidavit: Obtain a court affidavit stating the circumstances of the loss and the certificate number (if known).
2. FORMAL APPLICATION:
   - Write a formal letter addressed to the Director-General of NYSC.
   - Route the letter through your State Coordinator (the state where you served).
   - Attach the Police Report and Sworn Affidavit.
3. CONFIRMATION OF SERVICE:
   - If approved, the Directorate Headquarters will issue a "Letter of Confirmation of Service." This letter is legally equivalent to the original certificate for all official purposes.
IV. CORRECTION OF DATA ON CERTIFICATE
If you notice an error in your name or date of birth on the day of collection:
1. DO NOT ACCEPT: Point out the error to the distribution official immediately.
2. CORRECTION WINDOW: Errors reported after the POP date are significantly harder to fix and often require a trip to the National Headquarters in Abuja with supporting documents (WAEC/Degree/Birth Certificate).`,
    metadata: { stage: 'pop', risk: 'low', source: 'NYSC Act / Directorate Headquarters', featured: true, last_updated: '2024-12-01' }
  },
  {
    id: 'k-financial-survival',
    category: 'Survival/Financial',
    title: 'NYSC Financial Survival Guide: Allowance, Budgets & Side Hustles',
    summary: 'Strategic Financial Roadmap: Mastering the updated ₦77k allowance, PPA perks, SAED business development, and avoiding common scams.',
    content: `Effective October 2024, the federal allowance (allowee) has been updated to ₦77,000. While a significant increase, the current economic climate requires disciplined management.
I. THE ₦77,000 ALLOWANCE STRUCTURE
1. PAYMENT CYCLE: The federal allowance usually arrives between the 25th and 30th of each month. Note that your first "double" payment (Camp + 1st Month) often faces processing delays.
2. DEDUCTIONS: Aside from minor bank maintenance fees, no official deductions should be made from your federal allowance by any NYSC official.
3. STATE ALLOWEE: Some states (e.g., Lagos, Anambra, Rivers) provide an additional stipend. Verify your registration status with the State Secretariat to ensure you are on the payroll.
II. THE 50/30/20 BUDGETING MATRIX
1. NEEDS (50% - ₦38,500): Prioritize food staples, essential transport to your PPA, and basic data/communication.
2. SAVINGS & TRANSITION (30% - ₦23,100): Start building your 'Post-NYSC Buffer'. Saving ₦20k monthly results in ₦240k by the end of service—a critical safety net for job hunting.
3. PERSONAL/CDS (20% - ₦15,400): Use this for personal hygiene, occasional social activities, and minor CDS project expenses.
III. MAXIMIZING PPA PERKS
1. ACCOMMODATION: If your PPA provides housing, you save approximately 35% of your total living costs. If not, legally request "Housing Allowance in Lieu."
2. FEEDING/TRANSPORT: Many schools and government agencies provide lunch or staff bus access. Utilize these religiously to preserve your allowance.
3. RETENTION PROSPECTS: View your PPA work as an investment. Corps members who show exceptional value are often retained with salaries far exceeding the allowance.
IV. SAED & SIDE HUSTLES (MONETIZING DOWNTIME)
1. SKILL ACQUISITION: Use your weekly CDS days and PPA afternoons to master high-income skills (Data Analysis, Graphic Design, Content Writing).
2. LOCAL ARBITRAGE: Identify items cheaper in your state of deployment (e.g., Agricultural products in the North) and connect with buyers in urban centers.
3. TUTORING: If posted to a school, private home lessons for students in your community can double your monthly income.
V. EMERGENCY BUFFERS & SCAMS
1. EMERGENCY FUND: Always keep at least ₦20,000 in a separate, high-interest savings app (like PiggyVest or Cowrywise) for medical or travel emergencies.
2. PORTAL SCAMS: Never pay anyone to "fast-track" your allowance or change your PPA. All official financial updates happen through your dashboard.
3. DEBT TRAPS: Avoid taking "quick loans" from apps that charge high interest. If your allowance is delayed, report to the LGI for official status rather than borrowing.`,
    metadata: { stage: 'all', risk: 'medium', source: 'NYSC/SAED', featured: true, last_updated: '2024-10-25' }
  },
  {
    id: 'k-emergency',
    category: 'Advisory/Safety',
    title: 'NYSC Emergency Response Guide',
    summary: 'Strategic Safety Roadmap: Official protocols for medical, security, document loss, and PPA-related emergencies.',
    content: `This guide outlines the mandatory steps to take during critical emergencies during your service year.
I. MEDICAL EMERGENCIES
1. ORIENTATION CAMP: Report immediately to the Camp Clinic. In severe cases, the NYSC medical team will coordinate a referral to a Military or Specialist hospital.
2. POST-CAMP (PPA): Visit the nearest Government/General hospital. Inform your Local Government Inspector (LGI) and Zonal Inspector (ZI) within 24 hours.
II. SECURITY & PERSONAL THREATS
1. DISTRESS CALLS: Save the numbers of your LGI, ZI, and the State NYSC Security Officer.
2. HARASSMENT: Reporting sexual or physical harassment at your PPA is mandatory. NYSC has a zero-tolerance policy.
3. TRAVEL SAFETY: Never travel outside your state of deployment without written permission from the State Coordinator. Unauthorized travel voids your security coverage.
III. DOCUMENT EMERGENCIES
1. LOST ID CARD: Obtain a Police Report and Sworn Affidavit. Apply for replacement via dashboard.
IV. PPA & CDS CONFLICTS
1. ACCOMMODATION ISSUES: If PPA housing becomes uninhabitable, report to the LGI. You are entitled to housing allowance in lieu.`,
    metadata: { stage: 'all', risk: 'high', source: 'NYSC Protocols', featured: true, last_updated: '2024-11-01' }
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
    metadata: { stage: 'camp', risk: 'high', source: 'NYSC Legal Unit', featured: true, last_updated: '2024-09-15' }
  },
  {
    id: 'k-career-leverage',
    category: 'Career/POP',
    title: 'Leveraging NYSC for Career Transition',
    summary: 'Strategic Roadmap: Mastering your transition from service to the labor market through skills, networking, and digital presence.',
    content: `National service is a strategic launchpad.
I. SKILL MONETIZATION: Collect your SAED certificates. They are recognized for start-up loans.
II. NETWORKING: Your PPA is your first professional network. Get a "Recommendation Letter".
III. DIGITAL BRANDING: Update LinkedIn profile. Change headline from "Serving Corps Member" to "Graduate [Your Major]".
IV. TRANSITION FUND: Save 20% of final 3 months' allowance as a "Job Hunt Fund".`,
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
  { id: 'd7', title: 'Senate List Verification', date: '2025-01-15', stage: 'prospective', importance: 'high' },
  { id: 'd8', title: 'Call-up Printing Window', date: '2025-02-25', stage: 'mobilization', importance: 'high' },
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