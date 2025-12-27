import { KnowledgeArticle } from "@shared/types";
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
    id: 'k-camp-life',
    category: 'Survival',
    title: 'NYSC Orientation Camp: Daily Schedule & Activities',
    summary: 'A comprehensive breakdown of the 21-day regimented life, from the 4:00 AM bugle to 10:00 PM lights out.',
    content: `Orientation camp is a highly structured environment governed by military-style discipline. To survive and thrive, you must master the daily routine.
1. THE MORNING SURGE (04:00 - 07:30)
- 04:00 AM: The Bugle. This is the wake-up call. You have 30-45 minutes to use the restroom, dress in your white kit, and head to the parade ground.
- 04:45 AM: Fall-in. Platoons gather on the parade ground for morning meditation, national anthem, and prayers.
- 05:00 AM - 07:00 AM: Morning Drills. Physical training (PT) or parade rehearsals led by military instructors.
- 07:00 AM - 07:30 AM: Inspection. Soldiers inspect the hostels for cleanliness.
2. REFUEL & LECTURES (07:30 - 14:00)
- 07:30 AM - 08:30 AM: Breakfast. Queue at the kitchen with your meal ticket.
- 09:00 AM - 01:00 PM: SAED Lectures. Skill Acquisition and Entrepreneurship Development lectures in the multi-purpose hall. Attendance is mandatory.
- 01:00 PM - 02:00 PM: Lunch Break.
3. EVENING RECREATION & DRILLS (14:00 - 18:00)
- 02:00 PM - 04:00 PM: Rest or continued SAED practicals.
- 04:00 PM - 06:00 PM: Evening Parade/Sports. Inter-platoon football, volleyball, or drill competitions.
- 06:00 PM: Retreat. The bugle sounds for the lowering of the flag. You must stand at attention wherever you are until the bugle finishes.
4. SOCIALS & LIGHTS OUT (19:00 - 22:00)
- 07:00 PM - 08:00 PM: Dinner.
- 08:00 PM - 10:00 PM: Social Activities. Drama, dance competitions, pageantry (Miss NYSC/Mr Macho), and talent shows at the pavilion.
- 10:00 PM: Lights Out. The final bugle. Hostels must be dark and silent. All corps members must be in bed.
SPECIAL ACTIVITIES:
- Platoon Duty Day: One day a week, your platoon will be responsible for camp sanitation and kitchen duties.
- Man-O-War Drills: Usually a 1-2 day intensive obstacle course training.
- Swearing-in & POP: The two ceremonial days with full 6/6 dress code.
Pro-Tip: Use your "SAED time" to network. While the hall can be hot, the connections made during these 21 days often last a lifetime.`,
    metadata: {
      stage: 'camp',
      risk: 'medium',
      source: 'NYSC Official',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-camp-packing',
    category: 'Survival',
    title: 'NYSC Orientation Camp: Official Documents & Packing List',
    summary: 'The ultimate checklist of required documents, white-kit items, and prohibited materials for the 21-day orientation period.',
    content: `Survival at the NYSC Orientation Camp begins with proper preparation. Below is the verified checklist for every prospective corps member.
1. MANDATORY OFFICIAL DOCUMENTS (The "File Documents"):
- Original Statement of Result/Degree (+ 4 photocopies).
- Call-up Letter (Color + 4 photocopies). DO NOT LAMINATE.
- Green Card (Color + 4 photocopies). This is printed from your portal after registration.
- Medical Fitness Certificate from a Government/General Hospital (+ 4 photocopies).
- Institutional ID Card.
- Passport Photographs: At least 24 copies with a white background.
2. CAMP KIT (The '7-in-7' Clothing):
- White Round-neck T-shirts (6-12 copies): You will live in these.
- White Shorts (6-12 copies): Essential for drills and morning exercises.
- White Socks (6-12 pairs): Ensure they are plain white.
- White Sneakers (1-2 pairs): Quality matters for 21 days of marching.
- Rubber Tennis Shoes (1 pair): Extremely useful for rain or muddy conditions.
- Sturdy Waist Bag: To keep your phone, cash, and documents safe at all times.
3. PERSONAL ESSENTIALS:
- Bedding: At least 2 bedsheets and a pillowcase.
- Mosquito Net: Malaria is a real risk; bring a net and ropes to tie it.
- Toiletries: Bucket, bailer, soap, sponge, toothpaste, and sufficient tissue.
- Laundry Gear: Detergent and a small pack of clothes pegs.
- Padlocks: At least 2 small ones to secure your box and locker.
4. PROHIBITED ITEMS (Do NOT bring these):
- Sharp Objects: Knives, forks, or metal cutlery (use plastic instead).
- Electrical Appliances: Irons, boiling rings, and extension boxes are strictly banned.
- Vehicles: Corps members are not allowed to bring cars or bikes to camp.
- Laptops: Generally discouraged unless you are posted to the ICT or Press sub-unit.
- Weapons of any kind.
Pro-Tip: Arrive at camp early (Day 1) to get the best bunk positions and avoid long registration queues.`,
    metadata: {
      stage: 'camp',
      risk: 'low',
      source: 'NYSC Official',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-ppa-clearance',
    category: 'Official',
    title: 'The Monthly Clearance Protocol: Allowance & Attendance',
    summary: 'Step-by-step guide to securing your monthly signature, LGI reporting, and ensuring your allowance is paid on time.',
    content: `The monthly clearance is the most vital administrative task during your service year. It confirms you are still at your post and eligible for allowance.
1. THE CYCLE (1st - 25th):
- 1st to 15th: Discharge your duties faithfully at your PPA.
- 15th to 20th: Obtain your Monthly Clearance Letter from your Employer/Head of Organization. It must be signed and stamped.
- 21st to 25th: Visit your Local Government Secretariat for physical clearance by the Local Government Inspector (LGI).
2. DOCUMENTATION:
- Present your ID Card.
- Submit the signed letter from your employer.
- Sign the official attendance register (The "Book").
3. CONSEQUENCES OF FAILURE:
- Missing a signature without official leave results in "Extension of Service" and forfeiture of that month's allowance.
- Two consecutive missed clearances may result in being declared an absconder.
4. LGI REPORTING:
- Always be respectful to the LGI. They are your primary link to the NYSC state headquarters.
- Ensure your CDS attendance is also recorded during this period.`,
    metadata: {
      stage: 'ppa',
      risk: 'medium',
      source: 'NYSC Bye-laws',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-pop-clearance',
    category: 'Official',
    title: 'Final Winding-Up & POP: The Exit Checklist',
    summary: 'Navigating the final month of service, from final PPA clearance to the physical collection of your NYSC Discharge Certificate.',
    content: `Passing Out Parade (POP) is the culmination of your service year. Follow these steps to ensure you leave with your certificate in hand.
1. FINAL PPA CLEARANCE:
- Request a final letter of commendation/clearance from your employer.
- Ensure all official property (keys, books, etc.) are returned to the PPA.
2. THE WINDING-UP WEEK:
- Attend the mandatory winding-up briefings organized by the LGI.
- Complete the "Final Clearance Form" which requires signatures from the LGI, Zonal Inspector (ZI), and sometimes the State Coordinator.
3. ID CARD RETURN:
- You must return your NYSC Identity Card to collect your Certificate of National Service.
- If lost, you must present a Police Report and a sworn Affidavit.
4. THE POP DAY:
- Dress in full 6/6 ceremonial uniform (Crested vest, Khaki jacket/trousers, Jungle boots, Belt, Face cap, Socks).
- Arrive at the designated parade ground or secretariat by 7:00 AM.
- Certificates are issued physically after the parade/briefing.`,
    metadata: {
      stage: 'pop',
      risk: 'high',
      source: 'NYSC Official',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-exemptions',
    category: 'Official',
    title: 'Guide to NYSC Exemptions and Exclusions',
    summary: 'Understanding the difference between Certificate of Exemption and Letter of Exclusion, qualification criteria, and application process.',
    content: `The NYSC Act specifies who must serve and who is legally excused.
1. CERTIFICATE OF EXEMPTION:
Issued to graduates of regular programs who:
- Are over 30 years of age at the date of graduation.
- Have served in the Nigerian Armed Forces or Police for more than 9 months.
- Have been conferred with national honors.
2. LETTER OF EXCLUSION:
Issued to graduates who are not eligible for national service but are not technically "exempted" under the criteria above. This primarily applies to:
- Part-time graduates.
- Sandwich program graduates.
- Distance learning graduates (including NOUN).
3. APPLICATION PROCESS:
- Register on the NYSC portal during a mobilization window.
- Select the appropriate category (Part-time or Regular).
- Upload required documents: Degree/HND Statement of Result, Institutional ID card, and O'Level results.
- For foreign-trained graduates, physical verification of documents at NYSC HQ Abuja is mandatory.
4. COLLECTION:
- Certificates of Exemption are usually sent to your institution for collection.
- Letters of Exclusion can often be printed directly from your dashboard after successful portal verification.`,
    metadata: {
      stage: 'prospective',
      risk: 'low',
      source: 'NYSC Act/Portal',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-callup',
    category: 'Official',
    title: 'NYSC Call-up Letter: Verification, Corrections, and Reprint Procedures',
    summary: 'Authenticity checks, print specs, error fixes, and lost letter process.',
    content: `The Call-up Letter is your official deployment document. Follow these strict procedures to ensure its validity:
1. VERIFICATION:
- Every authentic Call-up Letter contains a unique QR code.
- Scan the code using the NYSC portal scanner to verify your deployment details.
- Ensure the name and state on the portal match the physical document.
2. PRINT SPECIFICATIONS:
- High-quality COLOR printing is mandatory. Black and white prints may be rejected at camp.
- DO NOT LAMINATE your Call-up Letter. Lamination makes it impossible to stamp and sign during registration.
- Print at least 3 photocopies for file documentation.
3. CORRECTIONS (Name/DOB Mismatch):
- If you notice a name error, login to your dashboard and click "Apply for Correction of Name".
- For Date of Birth (DOB) issues, use the "Link with JAMB" feature to pull correct data.
- Corrections must be initiated before reporting to camp.
4. LOST LETTER PROTOCOL:
- If lost, obtain a Police Report immediately.
- Swear an Affidavit of loss at a High Court.
- Contact your State Coordinator or ICT unit for a reprint authorization.`,
    metadata: {
      stage: 'mobilization',
      risk: 'low',
      source: 'NYSC Official',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-registration',
    category: 'Official',
    title: 'Complete Guide to NYSC Online Registration Process',
    summary: 'Step-by-step from prerequisites to printing call-up letter, errors, and deadlines.',
    content: `Online registration is the most critical phase of your service journey.
1. PREREQUISITES:
- Ensure your name is on the Senate List of your institution.
- Ensure you have a valid JAMB registration number.
- Ensure your date of birth is correct on your school record.
2. BIOMETRIC CAPTURING:
- Fingerprint capturing is mandatory. Use a high-quality scanner.
- Do not use proxy fingers; this will lead to disqualification.
3. DOCUMENT UPLOADS:
- Upload a clear passport photograph with a white background.
- Upload your Statement of Result or Degree Certificate.
- For foreign-trained graduates, upload your evaluation letter and international passport.
4. CALL-UP PRINTING:
- Once processed, you will be notified via SMS/Email.
- Login to the dashboard to download and print your Call-up Letter.
- Do not laminate your Call-up Letter as it may be invalidated.
5. COMMON ERRORS:
- Name Mismatch: If your name on the portal differs from your ID, apply for a name correction immediately.
- Institution Not Found: Contact your school's Student Affairs Unit.`,
    metadata: {
      stage: 'mobilization',
      risk: 'low',
      source: 'NYSC Official (2025)',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k1',
    category: 'Official',
    title: 'The NYSC Act',
    summary: 'Understanding the legal framework of your service year.',
    content: 'The National Youth Service Corps (NYSC) Act is the enabling law for the scheme. It mandates that every Nigerian graduate under the age of 30 at graduation must serve for one year. The act covers discipline, allowance, and the four cardinal programs of the NYSC.',
    metadata: { source: 'NYSC Act 1993', last_updated: '2024' }
  },
  {
    id: 'k3',
    category: 'CDS',
    title: 'Project Ideas',
    summary: 'How to start a meaningful community project.',
    content: 'A Community Development Service (CDS) project is successful when it meets a felt need in the community. Steps include: Needs assessment, Proposal writing, Seeking approval from the Local Government Inspector (LGI), Execution, and Commissioning.',
    metadata: { source: 'CDS Handbook', last_updated: '2024' }
  },
];
export const STATE_DATA: Record<string, any> = {
  'Lagos': {
    camp: 'Iyana Ipaja Orientation Camp',
    cost: 'High cost of living, transport heavy.',
    metrics: { rent: 250000, food: 45000, transport: 30000 },
    ppa: 'Corporate firms, tech hubs in Yaba/Island, schools in suburbs.',
  },
  'Abuja': {
    camp: 'Kubwa Orientation Camp',
    cost: 'Moderate to High. Good roads.',
    metrics: { rent: 300000, food: 40000, transport: 20000 },
    ppa: 'Government MDAs, International NGOs, Law firms.',
  },
  'Oyo': {
    camp: 'Iseyin Orientation Camp',
    cost: 'Relatively low cost of living. Large state.',
    metrics: { rent: 120000, food: 25000, transport: 15000 },
    ppa: 'University of Ibadan research institutes, agribusiness, private colleges.',
  },
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