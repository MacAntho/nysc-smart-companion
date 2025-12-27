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
    id: 'k-marital-redeploy',
    category: 'Official',
    title: 'Marital Redeployment Guide',
    summary: 'Official relocation protocol for married female corps members wishing to serve in their husband’s state of residence.',
    content: `Marital Redeployment is a specific provision granted to married female corps members to ensure family stability during the service year.
1. ELIGIBILITY
- This provision applies exclusively to married female corps members.
- The request must be to move to the state where the husband officially resides and works.
2. MANDATORY DOCUMENTATION
To apply, you must upload or present the following legal documents:
- Marriage Certificate: A valid certificate from a recognized Marriage Registry (Court Marriage).
- Newspaper Change of Name: A publication in a national daily newspaper announcing your change of surname.
- Sworn Affidavit: An affidavit from a High Court confirming the marriage and change of name.
- Husband’s Employer Letter: A formal letter from the husband's workplace confirming his employment status and residential address in the target state.
- Husband’s Identity: A copy of the husband's valid ID (Work ID, Driver’s License, or International Passport).
3. APPLICATION WINDOWS
- During Registration: You can indicate your marital status and upload documents during the online mobilization phase.
- In-Camp: If your status changed after registration, you can apply during the first week of orientation camp using the relocation forms provided.
- Post-Camp (In-Service): You can apply via your dashboard 3 months after camp exit if you recently got married.
4. IMPORTANT NOTES
- Verification: NYSC officials strictly verify all submitted documents. Forgery leads to disciplinary action.
- Timing: Relocation is not instantaneous; you must remain at your current station until the official Relocation Letter is issued.`,
    metadata: {
      stage: 'mobilization/ppa',
      risk: 'low',
      source: 'NYSC',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-medical-redeploy',
    category: 'Official',
    title: 'Medical Redeployment (Health Relocation) Guide',
    summary: 'Qualifying conditions, documentation requirements from government hospitals, and the official board review process for health-based relocations.',
    content: `Medical Redeployment is an official provision for corps members with chronic or life-threatening health conditions that require specialized monitoring or treatment available only in specific geographical locations.
1. QUALIFYING CHRONIC CONDITIONS
NYSC typically considers applications for conditions such as:
- Sickle Cell Anemia (HB SS/SC)
- Chronic Kidney Disease (CKD)
- Severe Cardiovascular/Heart Diseases
- HIV/AIDS (Requiring specific antiretroviral therapy)
- Epilepsy/Severe Neurological Disorders
- Post-Major Surgical Recovery (within 6 months)
2. MANDATORY DOCUMENTATION
Documentation is the most scrutinized part of the process. Reports must be:
- From a Government, Military, or University Teaching Hospital.
- Signed by a Consultant in the relevant field.
- Stamped by the Hospital Medical Director or CMD.
- IMPORTANT: Reports from private clinics, diagnostic centers, or pharmacies are STRICTLY PROHIBITED and will result in immediate rejection.
3. THE MEDICAL BOARD REVIEW
Applications are not automatically granted.
- Verification: The NYSC Medical Board will verify the authenticity of the hospital report.
- Interview: You may be summoned for a physical interview or assessment by the camp medical team or state secretariat health officers.
- Decision: Relocation is granted based on the availability of the required medical facilities in the destination state.
4. APPLICATION WINDOWS
- Camp Window: Apply within the first 10 days of the orientation camp.
- In-Service Window: Apply through your dashboard or State Secretariat after the 3rd month of service if the condition develops or worsens during PPA.
5. WARNINGS
- Forgery: Presenting a forged medical report is a criminal offense under the NYSC Act and leads to immediate decamping and prosecution.
- Self-Relocation: Never leave your post without the official Relocation Letter, even if you have submitted a medical report.`,
    metadata: {
      stage: 'mobilization/camp',
      risk: 'medium',
      source: 'NYSC',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-cds-approval',
    category: 'CDS',
    title: 'The CDS Project Approval Lifecycle',
    summary: 'Step-by-step instructions on identifying community needs, writing proposals, and getting official LGI clearance.',
    content: `The Community Development Service (CDS) project is the primary way a corps member leaves a lasting legacy.
1. NEEDS ASSESSMENT
- Visit your host community (schools, markets, clinics).
- Interview locals to find a 'felt need' (e.g., lack of clean water, school desks, or health awareness).
2. WRITING THE PROPOSAL
- Title: Clear and descriptive.
- Objectives: What will this solve?
- Budget: Itemized and realistic.
- Implementation Plan: How long will it take?
3. THE APPROVAL CHAIN
- Step 1: Submit to your Local Government Inspector (LGI).
- Step 2: LGI reviews and forwards to the Zonal Inspector (ZI) if the budget exceeds certain limits.
- Step 3: Receive 'Letter of Approval' BEFORE spending any money or starting work.
4. FUNDING RULES
- Personal funds are allowed but restricted.
- Public solicitation (donations) must be approved in writing.
- 'Payment for Posting' or using project funds for personal gain is a disciplinary offense.`,
    metadata: {
      stage: 'cds',
      risk: 'low',
      source: 'NYSC CDS Handbook',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-redeployment',
    category: 'Official',
    title: 'Guide to NYSC Redeployment (Relocation)',
    summary: 'A definitive manual on relocation grounds (Health, Marital, Security), the official application process, and mandatory documentation.',
    content: `Redeployment (officially called Relocation) is the administrative process of moving a corps member from one state to another. It is not a right, but a privilege granted based on strict humanitarian and security grounds.
1. VALID GROUNDS FOR REDEPLOYMENT
NYSC recognizes three primary reasons for relocation:
- Marital Grounds (Women Only): Married female corps members who wish to serve in the state where their husband resides.
- Health/Medical Grounds: For those with chronic or life-threatening conditions requiring specialized care available only in a specific location.
- Security Grounds: In cases of extreme instability or personal threat in the assigned state.
2. THE APPLICATION PROCESS
There are two main windows for application:
- During Orientation Camp: Relocation forms are usually distributed within the first 10 days of camp. Applications are processed before camp ends.
- Post-Camp (In-Service): After reporting to your PPA, you can apply via your dashboard (online) or through the State Secretariat. This usually opens 3 months after the orientation camp.
3. MANDATORY DOCUMENTATION
Documentation must be authentic. Forgery leads to immediate disciplinary action.
- Marital: Marriage Certificate, Change of Name (published in a national daily), Letter of Identification from husband's employer, and Husband's utility bill/ID.
- Medical: A comprehensive Medical Report from a Government/Military Hospital. Reports from private clinics are strictly prohibited and will be rejected.
- Security: Official police report or intelligence brief (if personal threat).
4. OFFICIAL TIMELINES
- Camp Applications: Processed within the 21-day period. Results are typically announced 2-3 days before the end of camp.
- Post-Camp Applications: Can take 4-8 weeks to process. You must remain at your current PPA until your relocation is approved and you receive your "Relocation Letter."
5. WARNINGS & POLICIES
- No "Payment for Posting": Any official or civilian asking for money to "facilitate" relocation is committing a crime.
- Self-Relocation Offense: Moving to another state without an approved relocation letter is treated as "Absconding" and leads to an extension of service.
- Reposting: Once relocated to a new state, you must report to the new State Secretariat within 48 hours.`,
    metadata: {
      stage: 'mobilization/camp',
      risk: 'medium',
      source: 'NYSC Official',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-ppa-repost',
    category: 'Official',
    title: 'Handling PPA Rejection & Reposting Process',
    summary: 'A critical survival guide for when your assigned PPA cannot accept you. Learn the official 24-hour reporting mandate and how to avoid the "Absconding" penalty.',
    content: `Being rejected by a Primary Place of Assignment (PPA) is not a failure; it is a common administrative occurrence. However, how you handle it determines whether your service year remains smooth or results in a disciplinary extension.
1. VALID REASONS FOR REJECTION
An employer may reject your posting for specific official reasons:
- Lack of Vacancy/Overstaffing: They already have the maximum number of corps members they can supervise.
- Lack of Specialized Role: For example, an engineer posted to a school with no technical department.
- Safety & Security: The organization cannot guarantee your safety in a specific volatile area.
- Lack of Logistics: Inability to provide the mandatory accommodation or transport assistance.
2. THE OFFICIAL REJECTION WORKFLOW
If the employer cannot accept you, follow these steps immediately:
- Get the Formal Letter: The organization MUST issue a "Letter of Rejection" on their official letterhead, signed and stamped.
- DO NOT SELF-POST: Never go looking for another PPA on your own. This is a serious offense.
- Report within 24 Hours: Take the rejection letter directly to your Local Government Inspector (LGI) or Zonal Inspector (ZI).
- The Reposting Mandate: The NYSC office will review the rejection and issue you a new "Reposting Letter" to a different organization.
3. THE 48-HOUR REPORTING RULE & ABSCONDING
- You have 48 hours from the day you leave camp to report to your PPA.
- If rejected, you have 24 hours to return to the NYSC office.
- Failure to report back to the LGI after a rejection can lead to you being declared as "Absconding" (missing from service), which results in a minimum of 3 months extension of service without pay.
4. CRITICAL TIPS & WARNINGS
- Platoon Officer Communication: Inform your camp platoon officer or platoon leader about the rejection via phone as a backup record.
- Avoid "Payment for Posting": It is illegal to pay any official for a "better" PPA. All reposting due to rejection is free of charge.
- Maintain Professionalism: Even if rejected, remain polite. The rejection letter is a neutral document required for your files.`,
    metadata: {
      stage: 'ppa',
      risk: 'high',
      source: 'NYSC Official Policy',
      last_updated: '2025',
      featured: true
    }
  }
];
export const STATE_DATA: Record<string, any> = {
  'Lagos': {
    camp: 'Iyana Ipaja Orientation Camp. Very crowded, strict discipline. Mami market is expensive.',
    cost: 'Extremely high. Transport is a major budget item.',
    metrics: { rent: 280000, food: 55000, transport: 35000 },
    ppa: 'Corporate firms, tech hubs, private schools.',
    pro_tip: 'Learn the bus routes early to avoid excessive Uber spending.'
  },
  'Abuja': {
    camp: 'Kubwa Orientation Camp. Relatively modern facilities. Cold at night during harmattan.',
    cost: 'High but manageable with sharing. Good infrastructure.',
    metrics: { rent: 350000, food: 45000, transport: 20000 },
    ppa: 'MDAs, NGOs, International agencies.',
    pro_tip: 'Networking in the city is key; dress corporate even for casual meetups.'
  },
  'Rivers': {
    camp: 'Nonwa Gbam Tai Orientation Camp. Spacious with decent water supply. Military presence is high.',
    cost: 'Moderate to High. Security consciousness is required.',
    metrics: { rent: 180000, food: 40000, transport: 25000 },
    ppa: 'Oil & Gas logistics firms, schools, Port Authority.',
    pro_tip: 'Always carry your NYSC ID; it helps with movement through checkpoints.'
  },
  'Kano': {
    camp: 'Karaye Orientation Camp. Large and dry. Culture is very conservative.',
    cost: 'Low cost of living. Food is very cheap.',
    metrics: { rent: 90000, food: 20000, transport: 12000 },
    ppa: 'Public schools, industrial firms in Bompai, health centers.',
    pro_tip: 'Respect local traditions and dress modestly to build community trust.'
  },
  'Enugu': {
    camp: 'Awgu Orientation Camp. Located in a hilly region. Very beautiful but requires hiking.',
    cost: 'Moderate. Peaceful environment.',
    metrics: { rent: 140000, food: 30000, transport: 15000 },
    ppa: 'State ministries, Coal City startups, schools.',
    pro_tip: 'The hilly terrain makes the camp cold; bring a thick blanket.'
  },
  'Delta': {
    camp: 'Isele-Uku Orientation Camp. Generally friendly and social. Mami market is lively.',
    cost: 'Moderate. High energy sector influence.',
    metrics: { rent: 160000, food: 35000, transport: 18000 },
    ppa: 'Agribusiness, Oil support services, educational institutions.',
    pro_tip: 'The cost of living in Asaba is higher than in the outskirts; plan accordingly.'
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
    }
  ],
  templates: [
    { id: 't1', title: 'Project Proposal Letter', type: 'Word', size: '24KB' },
    { id: 't2', title: 'Request for Funds (Sponsorship)', type: 'Word', size: '30KB' },
    { id: 't3', title: 'Completion Report Form', type: 'PDF', size: '150KB' }
  ]
};