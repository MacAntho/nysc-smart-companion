import { KnowledgeArticle } from "@shared/types";
export const NIGERIAN_STATES = [
  'Lagos',
  'Abuja',
  'Oyo',
  'Rivers',
  'Kano',
  'Kaduna',
  'Enugu',
  'Edo',
  'Cross River',
  'Delta',
  'Anambra',
  'Plateau',
  'Kwara'
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
  },
  {
    id: 'k-ppa-clearance',
    category: 'Official',
    title: 'The Monthly Clearance Protocol: Allowance & Attendance',
    summary: 'Clearance steps, registers, rejection handling.',
    content: `The monthly clearance is the most vital administrative task during your service year. It confirms you are still at your post and eligible for allowance.
1. THE CYCLE (1st - 25th):
- 1st to 15th: Discharge your duties faithfully at your PPA.
- 15th to 20th: Obtain your Monthly Clearance Letter from your Employer/Head of Organization. It must be signed and stamped.
- 21st to 25th: Visit your Local Government Secretariat for physical clearance by the Local Government Inspector (LGI).
2. DOCUMENTATION & "THE BOOK":
- Present your ID Card.
- Submit the signed letter from your employer.
- Sign the Official Attendance Register (The "Book"). This is the legal proof of your presence. Failure to sign the book is treated as an unauthorized absence.
3. INTEGRATED REJECTION HANDLING:
- If you are currently in the process of being rejected, you must still report to the LGI within the clearance window. 
- Ensure your rejection letter is filed with the LGI before the 25th to ensure your allowance for the active part of the month is processed correctly.
4. CONSEQUENCES OF FAILURE:
- Missing a signature without official leave results in "Extension of Service" and forfeiture of that month's allowance.
- Two consecutive missed clearances may result in being declared an absconder.
5. LGI REPORTING:
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
    id: 'k-ppa',
    category: 'Official',
    title: 'Primary Assignment (PPA): Posting, Reporting, Expectations',
    summary: 'The complete roadmap for your first days at your workplace: Posting letters, reporting protocols, employer acceptance, and professional expectations.',
    content: `Your Primary Place of Assignment (PPA) is where you will spend the majority of your service year. Navigating the transition from the regimented camp life to a professional environment is critical for a successful year.
1. RECEIVING THE POSTING LETTER
On the final day of the orientation camp, every corps member receives a posting letter. This document is official and contains the name and address of the organization where you have been deployed.
- Check the Address: Immediately verify the location. If the address is vague, consult with your Platoon Officer or the camp's posting desk before leaving the gate.
- Photocopy: Make at least 3 photocopies of this letter immediately. You will need them for your employer and the Local Government Inspector (LGI).
2. THE 48-HOUR REPORTING RULE
You are required by NYSC regulations to report to your PPA within 48 hours of leaving the orientation camp.
- Documentation of Arrival: When you arrive, present your original posting letter to the head of the organization or the Human Resources manager.
- Professionalism: Arrive in your full 6/6 uniform or official white-on-white. First impressions matter.
- Why Promptness Matters: Delays in reporting can be interpreted as "absconding," which is a serious disciplinary offense that can lead to an extension of service.
3. ACCEPTANCE VS. REJECTION
Your employer has the right to either accept or reject your posting based on their current needs and capacity.
- Acceptance: If accepted, the employer will sign and stamp your posting letter. You must then take this signed letter to the Local Government Secretariat to "dock" your file with the LGI.
- Rejection: If the organization cannot accommodate you, they must issue a formal "Letter of Rejection" stating the reason. You must take this rejection letter back to the NYSC Zonal or Local Office. The NYSC will then issue a "Relocation/Reposting" letter to a new organization. Never look for a PPA yourself without official NYSC approval.
4. FIRST DAY PROTOCOLS & EXPECTATIONS
- Dress Code: Unless specified otherwise (e.g., if you are a medical doctor or in a specialized field), you are expected to be in your NYSC uniform on Mondays and as directed by the organization on other days.
- Introductions: Familiarize yourself with the hierarchy. Know your supervisor and the head of the establishment.
- Office Hours: Adhere strictly to the organization's working hours. If the office opens at 8:00 AM, ensure you are present by 7:50 AM.
5. BALANCING WORK AND CDS
Your primary duty is to your PPA, but you have a mandatory weekly Community Development Service (CDS) meeting.
- Communication: Inform your employer of your specific CDS day (usually one day between Tuesday and Thursday).
- Reliability: Ensure that your absence for CDS does not negatively impact your professional responsibilities. Plan your workload ahead of your CDS day.
- Leave of Absence: Any travel or extended absence from your PPA must be approved in writing by both your Employer and the NYSC State Coordinator through your LGI.`,
    metadata: {
      stage: 'ppa',
      risk: 'medium',
      source: 'NYSC Official',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-camp-survival',
    category: 'Survival',
    title: 'Surviving the 21-Day NYSC Orientation Camp',
    summary: 'A comprehensive guide on accommodation, food, health, security, and social navigation within the camp.',
    content: `Orientation camp is a marathon, not a sprint. To successfully navigate the 21-day regimented life, you need more than just your uniform; you need a strategy for comfort and safety.
1. BUNK SELECTION & LOCKER SECURITY
- The Top Bunk Advantage: While climbing can be tiring, the top bunk keeps you away from floor-level dust and prevents people from sitting on your bed throughout the day.
- Double Padding: Camp mattresses are notoriously thin. If possible, bring a thin additional mattress padding or extra bedsheets to fold underneath you.
- Locker Strategy: Use two high-quality padlocks. Never leave your locker open, even for a minute. Keep your waist bag (containing cash, phone, and documents) on your person even while sleeping or showering.
2. THE KITCHEN VS. MAMI MARKET
- Budgeting: The camp kitchen provides free meals (3 times daily), but the quality varies. Most corps members supplement with "Mami Market" food. Budget approximately ₦1,500 - ₦3,000 daily if you plan to eat at the market frequently.
- Meal Tickets: Treat your meal ticket like gold; without it, you cannot access official rations.
- Water: Hydration is critical. Always carry a water bottle. If buying "pure water" at the market, ensure the seal is intact.
3. STAYING HEALTHY & FIT
- Sunscreen & Hydration: You will spend hours on the parade ground. Use sunscreen and drink water at every break to avoid heat exhaustion.
- The Camp Clinic: It is staffed by fellow corps member doctors and nurses. It is free. If you feel dizzy, feverish, or overly exhausted, report there immediately. Do not wait until it becomes an emergency.
- Foot Care: Apply powder to your feet before wearing socks to prevent fungal infections and blisters from the jungle boots.
4. SOCIAL INTEGRATION & NETWORKING
- Avoiding 'Over-Sabi': While it is good to be active, don't try to dominate every conversation or activity. Respect the soldiers and officials; they control your "passing out" process.
- Strategic Networking: Your platoon members and roommates are your first network. Be helpful and collaborative. The friends you make in these 21 days often become lifelong professional contacts.
- Conflict Resolution: Tensions run high in crowded hostels. De-escalate conflicts quickly. If a situation becomes physical, report to your Platoon Officer immediately; fighting is a decampable offense.`,
    metadata: {
      stage: 'camp',
      risk: 'medium',
      source: 'NYSC Official/Experienced',
      last_updated: '2025',
      featured: true
    }
  },
  {
    id: 'k-camp-rules',
    category: 'Survival',
    title: 'NYSC Orientation Camp Rules & Realities',
    summary: 'Critical guide on dress code, prohibited items, disciplinary penalties, and emergency protocols.',
    content: `Compliance with NYSC Bye-laws during the 21-day orientation is non-negotiable. Failure to adhere to these rules can lead to 'Decamping' (expulsion from camp) or an extension of service.
1. THE 6/6 DRESS CODE MANDATE
- You must be in your official uniform at all times.
- 'Full 6/6' refers to: Cap, Crested Vest, Khaki Jacket/Trousers, Belt, Socks, and Jungle Boots.
- 'White-on-White' refers to: White round-neck T-shirt, White shorts, White socks, and White sneakers.
- Wearing mufti (civilian clothes) is strictly prohibited and can lead to immediate disciplinary action.
2. PROHIBITED ITEMS & FIRE SAFETY
- Boiling Rings & Irons: These are the #1 cause of hostel fires. If found, they will be confiscated, and the owner may face the camp court.
- Sharp Objects: Knives, metal forks, and scissors are not allowed. Use plastic alternatives.
- Alcohol & Narcotics: Bringing spirits or illegal substances into camp is a 'decampable' offense.
3. ATTENDANCE & DISCIPLINE
- The Bugle is Law: When the bugle sounds, you must move immediately to the designated area (Parade Ground or Lecture Hall).
- Unauthorized Absence: Leaving the camp premises without a written exit permit from the State Coordinator is treated as absconding.
- Lights Out: By 10:00 PM, all lights must be off and hostels silent.
4. HEALTH & EMERGENCIES
- The Camp Clinic: Open 24/7 for all corps members. Do not self-medicate in the hostel.
- Report any symptoms of exhaustion or illness to your Platoon Commander or the medical team immediately.`,
    metadata: {
      stage: 'camp',
      risk: 'high',
      source: 'NYSC Bye-laws',
      last_updated: '2025',
      featured: true
    }
  },
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