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
    id: 'k-emergency',
    category: 'Advisory/Safety',
    title: 'NYSC Emergency Response Guide',
    summary: 'Strategic Safety Roadmap: Official protocols for medical, security, document loss, and PPA-related emergencies.',
    content: `This guide outlines the mandatory steps to take during critical emergencies during your service year.
I. MEDICAL EMERGENCIES
1. ORIENTATION CAMP: Report immediately to the Camp Clinic. In severe cases, the NYSC medical team will coordinate a referral to a Military or Specialist hospital. Ensure your bunk-mates are aware of any pre-existing conditions.
2. POST-CAMP (PPA): Visit the nearest Government/General hospital. Inform your Local Government Inspector (LGI) and Zonal Inspector (ZI) within 24 hours. NYSC insurance (NHIS) covers registered corps members; present your ID card.
3. SURGERY/CHRONIC CARE: All major medical procedures must be authorized by the State Coordinator to ensure your service status and allowances are protected during recovery.
II. SECURITY & PERSONAL THREATS
1. DISTRESS CALLS: Save the numbers of your LGI, ZI, and the State NYSC Security Officer. In case of immediate physical threat, call the National Emergency number (112).
2. HARASSMENT: Reporting sexual or physical harassment at your PPA is mandatory. Document all incidents and report privately to the LGI. NYSC has a zero-tolerance policy; you will be redeployed immediately if the threat is verified.
3. TRAVEL SAFETY: Never travel outside your state of deployment without written permission from the State Coordinator. Unauthorized travel voids your security coverage and insurance.
III. DOCUMENT EMERGENCIES
1. LOST ID CARD:
   - Step 1: Obtain a Police Report from the nearest station.
   - Step 2: Get a Sworn Affidavit from a High Court.
   - Step 3: Apply for a replacement through your dashboard and notify the State Secretariat ICT department.
2. LOST POSTING/RELOCATION LETTER: Contact the ICT unit at the State Secretariat immediately. Do not attempt to report to a PPA without an official document.
IV. PPA & CDS CONFLICTS
1. ACCOMMODATION ISSUES: If your PPA fails to provide promised accommodation or it becomes uninhabitable (flooding, fire, security breach), report to the LGI. You are entitled to a housing allowance in lieu of physical housing.
2. NATURAL DISASTERS: In the event of community-wide emergencies (floods, civil unrest), follow the directives of the Zonal Inspector. Do not remain in a danger zone to "save" your PPA work.
3. UNJUST REJECTION: If a PPA rejects you without valid cause, do not leave the premises without a signed and stamped rejection letter. Report to the LGI within 24 hours.`,
    metadata: { stage: 'all', risk: 'high', source: 'NYSC Protocols', featured: true }
  },
  {
    id: 'k-insider-tips',
    category: 'Survival/Advisory',
    title: '100 Practical NYSC Survival Tips',
    summary: 'Battle-Tested Intelligence: 100 essential tips covering Camp, PPA terrain, CDS projects, financial mastery, and personal safety.',
    content: `Mastering the service year requires more than just reading the bye-laws; it requires insider intelligence. Here are 100 practical tips divided into five strategic sections.
I. ORIENTATION CAMP (Tips 1-25)
1. Bunk Positioning: Choose a top bunk near a window for better ventilation, or a bottom bunk for easier access.
2. Early Bird Registration: Arrive at the camp gate as early as 4:00 AM on Day 1 to avoid long queues.
3. The 'White' Stock: Buy at least 4 pairs of white T-shirts and shorts; the 2 issued by NYSC are rarely enough.
4. Canvas Quality: Invest in comfortable white sneakers; the issued ones often have hard soles that cause blisters.
5. Waist Pouch: Keep your phone, money, and ID card in a waist pouch at all times—even when sleeping.
6. Power Bank: Electricity in hostels is unreliable; a high-capacity power bank is non-negotiable.
7. Mami Market Budget: Set a daily limit for Mami Market spending to avoid depleting your allowance in 3 weeks.
8. Bucket Cover: Always cover your water bucket to prevent dust and insects.
9. Laundry Hack: Use the camp laundry services if you can afford it; hand-washing white clothes is exhausting.
10. Parade Stamina: Do not skip breakfast before morning drills; fainting on the parade ground is preventable.
11. Water Intake: Drink plenty of water to stay hydrated under the sun.
12. Sunscreen: Apply sunscreen if you have sensitive skin to avoid sunburn during long parade rehearsals.
13. Documents: Carry 10-15 photocopies of every document and 20 passport photos.
14. Medical Fitness: Ensure your medical certificate is from a government hospital; private ones are often rejected.
15. Kit Sizing: Check your kit sizes immediately after collection; swap with others on the spot if they don't fit.
16. Toiletries: Bring extra toilet paper, soap, and disinfectant.
17. Sleeping Earplugs: Hostels are loud; earplugs help if you are a light sleeper.
18. Mosquito Net: Hostels can be infested; a treated net is a health essential.
19. Socializing: Join a camp group (OBS, Band, Kitchen) to network and potentially get better postings.
20. Discipline: Respect the soldiers; "obey before complain" is the camp mantra.
21. Charging Spots: Identify reliable charging spots in the Mami Market early.
22. First Aid: Pack basic meds (paracetamol, vitamins, anti-diarrhea, balm).
23. Small Denominations: Carry 'change' (N100, N200) for small purchases.
24. Padlocks: Buy high-quality padlocks for your boxes.
25. Exit Strategy: Start planning your transport out of camp by Day 15.
II. PRIMARY ASSIGNMENT (PPA) (Tips 26-50)
26. The 48-Hour Window: Report to your PPA within 48 hours of leaving camp.
27. Rejection Protocol: If rejected, ensure the rejection letter is stamped and dated.
28. Accommodation Check: Inspect provided housing for security and basic amenities before moving in.
29. Commute Mapping: Calculate your transport cost from residence to PPA before accepting posting.
30. Professionalism: Treat your PPA like a real job; punctuality counts.
31. Local Relationship: Introduce yourself to the community leader or nearest police station.
32. Monthly Clearance: Never delay your monthly clearance signature; it controls your pay.
33. State Stipend: Check if your state pays an additional allowance (State Allowee) and register for it.
34. Leave of Absence: Always get written permission from the LGI before traveling out of state.
35. Private Practice: If your PPA pay is low, explore remote freelance work or tutoring.
36. Networking: Connect with ex-corpers who served at your PPA for tips on the bosses.
37. Security Awareness: Avoid late nights in unfamiliar terrains.
38. Dress Code: Wear your full uniform (6/7) on CDS days and for official clearance.
39. ID Visibility: Always carry your NYSC ID card; it is your legal shield.
40. Office Politics: Stay neutral in PPA internal conflicts.
41. Skill Acquisition: Use the extra time at your PPA to learn a digital skill.
42. Documentation: Keep a personal file of every clearance form you have signed.
43. Accommodation Allowance: If your PPA doesn't provide a room, ask for "housing allowance in lieu."
44. Biometric Punctuality: Show up early for biometric clearance to avoid system timeouts.
45. Employer Relations: Maintain a good relationship with your principal for a good final clearance.
46. Local Language: Learn basic greetings in the local language; it opens doors.
47. Market Prices: Ask locals for the real price of food items before buying.
48. NHIS Registration: Ensure your PPA health center recognizes your NHIS status.
49. Record Keeping: Document your contributions at the PPA for your CV.
50. Savings: Save a percentage of your federal allowance immediately it arrives.
III. CDS & COMMUNITY IMPACT (Tips 51-65)
51. Milestone 1: Identify a community need through observation, not just guessing.
52. LGI Approval: Never spend a kobo on a project before getting an official approval letter.
53. Fundraising: Approach local businesses for sponsorship instead of using your allowance.
54. Sustainability: Choose projects that the community can maintain after you leave.
55. Group Dynamics: If in a group CDS, take a leadership role for your CV.
56. Project Publicity: Document your project with photos and videos for your portfolio.
57. Commissioning: Invite the ZI or State Coordinator for the project opening to get noticed.
58. Award Nominations: Aim for State or Presidential Honors through exceptional impact.
59. Community Leaders: Involve the local chiefs; they provide security for your project.
60. Digital Tools: Use social media to raise awareness for your community project.
61. Proposal Writing: Keep your project proposal concise and benefit-focused.
62. Verification: Ensure the LGI visits your project site during implementation.
63. Completion Report: Submit your final report with receipts and photos immediately after finishing.
64. Legacy Focus: Ask yourself: "Will this project still be useful in 5 years?"
65. Teamwork: Support other corpers' projects; they will support yours.
IV. FINANCIAL SURVIVAL (Tips 66-80)
66. Payday Alert: The 'Allowee' usually arrives between the 25th and 30th of the month.
67. The 50/30/20 Rule: 50% for needs, 30% for survival/wants, 20% for savings/investment.
68. Emergency Fund: Set aside one month's allowance as an emergency backup.
69. Avoid Debt: Never borrow money based on "expected" allowance; payments can be delayed.
70. Bulk Buying: Buy non-perishable food (rice, beans, oil) in bulk at the start of the month.
71. Transport Sharing: Join other corpers in 'charter' cars to save on travel costs.
72. State Allowee Search: Some states pay once a year; keep track of the registration windows.
73. High-Interest Savings: Use apps like PiggyVest or Cowrywise to save your allowance.
74. Skill Monetization: If you can bake, design, or write, start a small side-hustle.
75. Discount Hunting: Use your ID card to ask for 'corper discount' in markets and parks.
76. Cooking vs. Eating Out: Cooking your meals saves up to 60% of your food budget.
77. Bank Alerts: Enable SMS alerts to monitor your account for any unauthorized charges.
78. Avoid "Fast Money": Stay away from PPA-based Ponzi schemes or "quick" investments.
79. Financial Literacy: Read books on personal finance during your PPA downtime.
80. Transition Fund: Start saving for life after NYSC by the 6th month of service.
V. SECURITY & HEALTH (Tips 81-100)
81. Travel Permission: Traveling without a pass is a disciplinary offense and voids insurance.
82. Night Movements: Avoid arriving in a new town after 6:00 PM.
83. Emergency Contacts: Program the LGI and ZI numbers as 'Emergency' on your phone.
84. Social Media Safety: Do not post your exact PPA location or home address online.
85. Health Insurance: Use the NHIS-designated hospitals for free or subsidized care.
86. Water Safety: Boil or filter water if you are unsure of the source quality.
87. Food Hygiene: Be careful with 'street food' in the first few weeks of deployment.
88. Mental Health: Connect with other corpers; isolation can lead to depression.
89. Conflict Avoidance: Do not get involved in local political or religious arguments.
90. Fire Safety: Unplug all appliances before leaving your room.
91. Road Safety: Use registered transport parks, not 'one-chance' roadside buses.
92. Self-Defense: Be aware of your surroundings; your intuition is a powerful tool.
93. Document Security: Keep original credentials in a waterproof bag in a secure location.
94. Local Laws: Respect the traditional laws of your host community.
95. First Aid Replenishment: Restock your first aid kit every 3 months.
96. Fitness: Keep active; use the weekly CDS morning for personal exercise.
97. Allergic Reactions: Know the nearest pharmacy that stocks anti-histamines.
98. Routine Checks: Get a general checkup at the General Hospital every 6 months.
99. Security Briefings: Attend all security meetings organized by the NYSC State Office.
100. The Golden Rule: Your life is more important than the service certificate. Stay safe.`,
    metadata: { stage: 'all', risk: 'medium', source: 'Verified Insider', featured: true }
  },
  {
    id: 'k-eligibility',
    category: 'Official',
    title: 'NYSC Eligibility: Who Serves, Exemptions & Special Cases',
    summary: 'Strategic Roadmap: Detailed legal clarity on the 30-year age rule, academic prerequisites, and special concessions.',
    content: `Understanding your eligibility status is the foundation of your service year planning.
1. ACADEMIC REQUIREMENTS:
You must have graduated from an accredited Nigerian or foreign institution with a Degree (B.Sc, B.A, etc.) or Higher National Diploma (HND). Part-time and Distance Learning graduates are usually issued "Exclusion Certificates."
2. THE AGE RULE (CRITICAL):
Eligibility is based on your age at the TIME OF GRADUATION, not when you are mobilized.
- If you graduated before age 30: You are MANDATED to serve.
- If you graduated at age 30 or older: You qualify for an "Exemption Certificate," which is legally equivalent to a Discharge Certificate for employment purposes.
3. MARITAL CONCESSIONS:
Married female graduates are eligible for deployment to the state where their spouse resides. This requires uploading a Marriage Certificate, Newspaper Change of Name, and Husband's utility bill during registration.
4. PHYSICAL DISABILITIES:
Graduates with physical disabilities or serious medical conditions that preclude them from participation in camp drills are given special concessions for deployment to their home states or areas with specialized medical facilities.
5. THE EXCLUSION CATEGORY:
This applies to graduates of part-time, sandwich, or distance learning programs. While they do not participate in the service year, they must register on the portal to obtain their "Letter of Exclusion."`,
    metadata: { stage: 'prospective', risk: 'low', source: 'NYSC Act', featured: true }
  },
  {
    id: 'k-batches',
    category: 'Official',
    title: 'NYSC Batch System: A/B/C Streams & Assignment',
    summary: 'Logistics Roadmap: Understand the A/B/C batch cycles, stream assignments, and the revalidation protocol.',
    content: `The NYSC mobilization calendar is divided into three major phases known as Batches.
1. THE THREE BATCHES:
- BATCH A: Usually mobilized in Q1 (Feb/March).
- BATCH B: Usually mobilized in Q2 (May/June).
- BATCH C: Usually mobilized in Q4 (Oct/Nov).
2. STREAMS (THE CAPACITY SPLIT):
Due to the limited capacity of orientation camps across the 36 states, each batch is typically split into "Stream 1" and "Stream 2."
- STREAM 1: Goes to camp immediately after the call-up letter is issued.
- STREAM 2: Goes to camp approximately 3 to 5 weeks after Stream 1 finishes.
3. THE SENATE LIST (FOUNDATION):
Your mobilization depends entirely on your institution uploading your details to the NYSC portal. This is the "Senate List." If your name isn't there, you cannot register for that batch.
4. REVALIDATION PROTOCOL:
If you were issued a call-up letter in a previous batch but failed to report to camp (for valid or invalid reasons), you must undergo "Revalidation."
- You must register again on the portal during the next mobilization window.
- Select the revalidation option.
- You do not need to pay the portal fee again if you already paid for the previous call-up letter.
5. DEPLOYMENT LOGISTICS:
Streams are assigned randomly based on the order of registration and state capacity. Earlier registration doesn't always guarantee Stream 1, but it is highly recommended.`,
    metadata: { stage: 'mobilization', risk: 'low', source: 'NYSC Mobilization Dept', featured: true }
  },
  {
    id: 'k-relocation',
    category: 'Official/Advisory',
    title: 'NYSC Relocation & Redeployment Guide',
    summary: 'Comprehensive roadmap for state transfers: Marital, health, and security grounds, plus post-camp application protocols.',
    content: `Relocation is a procedural privilege granted to corps members under specific conditions. Understanding the timeline and documentation is critical.
1. VALID GROUNDS FOR RELOCATION:
A. MARITAL: Exclusively for married female corps members who wish to wish to serve in the state where their husband resides.
B. MEDICAL: For members with chronic health conditions (Asthma, Sickle Cell, Kidney issues, etc.) that require specialized care or proximity to specific hospitals.
C. SECURITY: Applicable in cases of verifiable personal threats or documented security volatility in the current deployment zone.
2. THE TWO APPLICATION WINDOWS:
- CAMP RELOCATION: Applied for during the 21-day orientation camp via the portal. Results are usually announced on the last day of camp.
- POST-CAMP RELOCATION: If you missed camp relocation, a new window usually opens approximately 3 months after camp. You must apply through your dashboard.
3. MANDATORY DOCUMENT CHAIN:
A. MARITAL: Marriage Certificate, Newspaper Change of Name, Husband’s Identity Card, and a Utility Bill/Employer Letter proving husband's residence in the target state.
B. MEDICAL: A comprehensive medical report from a Government Hospital or Military Hospital. Reports from private clinics are strictly rejected.
C. SECURITY: A formal affidavit or police report detailing the nature of the security risk.
4. THE APPROVAL & PRINTING PROCESS:
- Once approved on the portal, you MUST pay the relocation processing fee (usually ~₦1,000 via Remita).
- Print the Relocation Letter and report to the State Secretariat of your NEW state within 48 hours of printing.
- Your allowance (allowee) will be paused until you complete the biometrics registration in your new state.
5. IMPORTANT CAVEAT:
Relocation is not guaranteed. Do not vacate your current PPA until you have the physical printout of your new posting letter.`,
    metadata: { stage: 'camp', risk: 'medium', source: 'NYSC Bye-laws', featured: true }
  },
  {
    id: 'k-registration',
    category: 'Official',
    title: 'Online Registration Roadmap',
    summary: 'Step-by-step guide to the NYSC portal registration: biometrics, Senate list verification, and payment protocols.',
    content: `Online registration is the first critical step in your service year.
1. SENATE LIST VERIFICATION: Your name must be uploaded by your institution. Check the portal using your Matric Number.
2. BIOMETRIC CAPTURE: Use the official NYSC desktop scanner tool. Ensure your background is plain white.
3. PAYMENTS: Pay for your call-up letter online to receive it via SMS/Dashboard. Do not pay to individuals.
4. DOCUMENT UPLOAD: Scan original documents for medical certificates and school IDs.`,
    metadata: { stage: 'prospective', risk: 'medium', source: 'NYSC ICT Dept', featured: true }
  },
  {
    id: 'k-foreign',
    category: 'Official',
    title: 'NYSC for Foreign-Trained Graduates',
    summary: 'Essential roadmap for graduates from international institutions: evaluation protocols, document chains, and physical verification.',
    content: `For graduates of international institutions, the NYSC mobilization process involves evaluation.
1. THE EVALUATION PROTOCOL: Personally upload and later physically present your credentials at the NYSC Headquarters, Abuja, or designated regional verification centers.
2. MANDATORY DOCUMENT CHAIN: Degree Certificate, Academic Transcript, Int. Passport (with entry/exit stamps), O-Level results.
3. PHYSICAL VERIFICATION: You MUST appear in person at your assigned center with all original documents.
4. EQUIVALENCE EVALUATION: NYSC coordinates with the Federal Ministry of Education to verify the accreditation and equivalence of your foreign degree.`,
    metadata: { stage: 'prospective', risk: 'medium', source: 'NYSC Evaluation Dept', featured: true }
  },
  {
    id: 'k-redeployment',
    category: 'Official/Advisory',
    title: 'NYSC Redeployment & Relocation Guide',
    summary: 'Comprehensive guide on valid relocation grounds (Marital, Medical, Security), the digital application process, and mandatory documentation.',
    content: `Relocation is a privilege granted based on verifiable grounds.
1. MARITAL: Married females must provide marriage cert, change of name (newspaper), and husband's utility bill in the target state.
2. MEDICAL: Chronic conditions requiring specialized care. Must provide a report from a Govt hospital.
3. THE PROCESS: Apply via the dashboard immediately after camp opens. Check status daily.`,
    metadata: { stage: 'camp', risk: 'high', source: 'NYSC Bye-laws', featured: true }
  },
  {
    id: 'k-pregnancy',
    category: 'Advisory/Health',
    title: 'NYSC Provisions for Pregnant Corps Members',
    summary: 'Official roadmap for maternity rights: Concessionary posting, camp exemptions, and the 12-week maternity leave protocol.',
    content: `NYSC policy provides specific concessions for pregnant members and nursing mothers.
1. CONCESSIONARY POSTING: Eligible for deployment to state of spouse/family residence.
2. CAMP EXEMPTIONS: Exempted from strenuous drills. May be allowed to reside off-camp.
3. MATERNITY LEAVE: 12-week (3 months) leave. Apply via PPA and LGI. Allowance is usually sustained.`,
    metadata: { stage: 'mobilization', risk: 'low', source: 'NYSC Policy Handbook', featured: true }
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
    metadata: { stage: 'camp', risk: 'high', source: 'NYSC Legal Unit', featured: true }
  },
  {
    id: 'k-sanctions',
    category: 'Official',
    title: 'NYSC Violations & Penalties Guide',
    summary: 'Critical Advisory: Learn how to avoid Service Extensions and administrative sanctions through compliance.',
    content: `The NYSC Bye-laws specify clear penalties for infractions.
1. EXTENSION OF SERVICE: Usually for 1 month to 4 months based on the gravity of the absence from CDS or PPA.
2. LOSS OF ALLOWANCE: Failure to sign monthly clearance results in forfeiture of that month's payment.
3. REPRIMAND: Issued for minor misconduct. Three reprimands can lead to a formal Extension.`,
    metadata: { stage: 'ppa', risk: 'high', source: 'NYSC Discipline Dept', featured: true }
  },
  {
    id: 'k-clearance-issues',
    category: 'Advisory/Official',
    title: 'Clearance Troubleshooting',
    summary: 'Official Protocol: Know the LGI reporting chain for sign-off refusals and biometric failures.',
    content: `Clearance is your ticket to monthly payment.
1. BIOMETRIC FAILURE: If the thumbprint scanner fails, report to the Zonal Inspector (ZI) for manual capture.
2. PPA REJECTION: If your PPA refuses to sign your clearance, obtain a "Letter of Rejection" and report to the LGI within 24 hours.
3. PORTAL ERRORS: If your clearance status doesn't update, visit the state secretariat ICT office.`,
    metadata: { stage: 'ppa', risk: 'high', source: 'NYSC Finance Unit', featured: true }
  },
  {
    id: 'k-pop',
    category: 'Official',
    title: 'Passing Out Parade (POP) Protocol',
    summary: 'Winding Up: Ensure your final release letter and kit return slip are verified for discharge.',
    content: `The POP is the final phase of your service.
1. FINAL CLEARANCE: Get signatures from LGI, ZI, and State Coordinator.
2. KIT RETURN: Some states require the return of specific kit items. Get a slip.
3. DISCHARGE CERTIFICATE: Issued only after successful final clearance and 12 monthly clearances.`,
    metadata: { stage: 'pop', risk: 'high', source: 'NYSC Operations', featured: true }
  },
  {
    id: 'k-career-leverage',
    category: 'Career/POP',
    title: 'Leveraging NYSC for Career Transition',
    summary: 'Strategic Roadmap: Mastering your transition from service to the labor market through skills, networking, and digital presence.',
    content: `National service is not just a mandatory gap year; it is a strategic launchpad. For those in their final months, the transition to the labor market requires intentional planning.

I. SAED & SKILL MONETIZATION
The Skills Acquisition and Entrepreneurship Development (SAED) program is more than camp lectures. Successful corps members use their PPA downtime to master technical or vocational skills. 
1. CERTIFICATION: Ensure you collect your SAED certificates. They are recognized by the Bank of Industry (BOI) for start-up loans.
2. PORTFOLIO BUILDING: If your PPA is in a school, bank, or firm, document your contributions. A "Recommendation Letter" from your employer is as valuable as the NYSC certificate.

II. NETWORKING WITHIN THE PPA & COMMUNITY
Your PPA is your first professional network.
1. VISIBILITY: Ensure your supervisors know your long-term career goals. Many corps members are retained or referred to partner organizations based on their performance.
2. THE NYSC NETWORK: Connect with other corps members in different PPAs. Today’s bunkmate could be tomorrow’s HR manager.
3. LOCAL LEADERS: If you did a CDS project, the community leaders and sponsors you interacted with are valuable professional references.

III. LEVERAGING THE DISCHARGE CERTIFICATE
The NYSC Discharge Certificate is a legal prerequisite for employment in Nigeria for graduates.
1. THE ANOMALY: Never lose your original certificate. NYSC does not reissue lost certificates; they only provide a "Letter of Confirmation."
2. VERIFICATION: Employers can verify certificates on the portal. Ensure your name on the certificate matches your NIN and Degree exactly to avoid background check delays.
3. THE 'EX-CORPER' EDGE: Many government and multinational roles prioritize candidates who have successfully completed the service year.

IV. DIGITAL BRANDING (LINKEDIN OPTIMIZATION)
Transition from "Corper" to "Professional" on social media.
1. UPDATE PROFILE: Change your LinkedIn headline from "Serving Corps Member" to "Graduate [Your Major] | [Your Skillset]."
2. CONTENT: Post about your CDS project or a challenge you solved at your PPA. Use keywords relevant to your industry.
3. RECOMMENDATIONS: Ask your LGI or PPA supervisor to write a LinkedIn recommendation for you before you POP.

V. POST-SERVICE FINANCIAL PLANNING
The "Allowee" will stop. You need a buffer.
1. SAVINGS: Save at least 20% of your final 3 months' allowance as a "Job Hunt Fund."
2. HEALTH INSURANCE: Note that your NHIS coverage ends with your service. Research affordable private health insurance options immediately.
3. TERMINAL CLEARANCE: Ensure your final clearance is flawless. Any delay in signing off will delay your final payment, which is crucial for your transition.

VI. THE 90-DAY POST-POP WINDOW
Statistics show that the first 90 days after POP are the most critical. 
1. RESUME UPDATE: Include your NYSC experience as a "Professional Experience" entry, not just an "Extra-curricular" one. 
2. CAREER FAIR: Attend the post-service briefings organized by the state. Multinational recruiters often attend these exit ceremonies to scout for talent.`,
    metadata: { stage: 'pop', risk: 'low', source: 'NYSC Smart Companion', featured: true }
  },
  {
    id: 'k-execution',
    category: 'CDS',
    title: 'CDS Project Execution Blueprint',
    summary: 'Procedural integrity: From identification to commissioning your community project.',
    content: `Executing a Personal CDS project requires strict adherence to protocol.
1. NEEDS ASSESSMENT: Conduct a survey. Document the gap you want to fill.
2. PROPOSAL: Submit to LGI. Must include budget, timeline, and location.
3. APPROVAL: Wait for the formal letter from the State Coordinator before starting.
4. COMMISSIONING: Invite NYSC officials for the official opening.`,
    metadata: { stage: 'cds', risk: 'medium', source: 'NYSC CDS Dept', featured: true }
  },
  {
    id: 'k-ppa-rejection',
    category: 'Advisory',
    title: 'Handling PPA Rejection',
    summary: 'Strategic response when a PPA refuses to accept you: Letters, reporting timelines, and reposting protocols.',
    content: `Getting rejected by a PPA is not a disaster; it's a common occurrence.
1. THE LETTER: Ensure the PPA writes "Rejected" on your posting letter with a reason and official stamp.
2. THE CLOCK: You have 48 hours to report this rejection to your LGI.
3. REPOSTING: The LGI will issue you a new posting letter. Do not wander about or go home.`,
    metadata: { stage: 'ppa', risk: 'medium', source: 'NYSC Admin', featured: true }
  },
  {
    id: 'k-faqs',
    category: 'Official',
    title: 'NYSC FAQs: 50+ Answered Questions',
    summary: 'Comprehensive Q&A roadmap covering eligibility, camp survival, PPA protocols, CDS projects, and clearance procedures across all stages.',
    content: `This master guide provides verified answers to the most common questions across the NYSC service year.
I. ELIGIBILITY & REGISTRATION
1. Can I serve if I am over 30? No. If you graduated at 30+, you receive an Exemption Certificate.
2. Can I use a statement of result? Yes, for registration, but you must present the original degree at camp.
3. How do I correct my name? Apply for a name correction on your dashboard using the 'Apply for Correction' link.
4. What is the Senate List? The list of eligible graduates uploaded by your institution to the NYSC database.
5. Can I register with a thumbprint error? No. You must visit an accredited center with a working scanner.
6. Is the medical certificate mandatory? Yes. It must be from a Government/Military hospital.
7. Can I choose my state of deployment? No, except for married women or those with serious medical conditions.
8. What is Revalidation? Registering again because you failed to report to a previous batch.
9. Can I change my date of birth after registration? No, NYSC uses the WAEC/JAMB database for date of birth verification.
10. What if my school name is missing? Contact your Student Affairs Officer immediately.
II. ORIENTATION CAMP SURVIVAL
11. What happens if I arrive camp late? You may be turned back if registration has closed (usually after Day 2).
12. Are laptops allowed in camp? Generally discouraged for security reasons.
13. Can I leave camp before 21 days? Only on official permission for health or marital emergencies.
14. What is 'Double bunking'? The standard sleeping arrangement in NYSC hostels.
15. Is food provided in camp? Yes, three meals daily at the kitchen.
16. Do I get paid in camp? Yes, your first month's allowance and transport allowance are paid.
17. What is the 'White' uniform? White shorts, white T-shirts, and white canvas.
18. Can I wear mufti? Only during social events or religious services.
19. What if I lose my ID card in camp? Report to the camp commandant immediately.
20. Are phones allowed during drills? No. Only during break times and in hostels.
III. PPA & ALLOWANCES
21. What is a PPA? Place of Primary Assignment (where you work for 11 months).
22. Can I reject my posting? No. Only the PPA can reject you.
23. What is 'Allowee'? The monthly federal allowance (currently ₦33,000).
24. Does the state pay allowance? Some states pay an additional stipend.
25. Can I travel without permission? No. You must obtain written permission from the State Coordinator.
26. What is the 'Monthly Clearance'? A form signed by your PPA and LGI to prove you worked.
27. What if my PPA refuses to pay me? Report to your LGI.
28. Can I change my PPA? Only on grounds of security or health.
29. What is an 'Abscondment'? Missing service for more than 3 months without leave.
30. Can I work two jobs? No. National service is a full-time commitment.
IV. CDS & PROJECTS
31. What is CDS? Community Development Service.
32. Is weekly CDS attendance mandatory? Yes. 10% absence can lead to extension.
33. Can I start a project without approval? No. You must receive an official approval letter first.
34. How do I fund my CDS project? Through community donations and corporate sponsorship.
35. What is a 'Personal CDS'? A project initiated by an individual corps member.
36. Can groups do CDS? Yes (e.g., HIV/AIDS, SDGs).
37. What is a completion report? The final document submitted after a project is finished.
38. Do I get an award for CDS? Exceptional projects are nominated for State/Presidential honors.
39. Can I do CDS in my home state? Only if you are legally deployed there.
40. What is a 'Milestone'? A specific phase of project completion verified by the LGI.
V. RELOCATION, POP & CERTIFICATION
41. When can I apply for relocation? During camp or 3 months post-camp.
42. What are the grounds for relocation? Marital, Health, or Security.
43. How long does relocation take? Results are out within 2-4 weeks.
44. What is 'Winding Up'? The final week before the Passing Out Parade.
45. When do I get my Discharge Certificate? On the day of the POP.
46. What if I lose my Discharge Certificate? It is never replaced. NYSC only issues a 'Letter of Confirmation'.
47. Can I collect my certificate by proxy? No. You must be physically present.
48. What is an 'Extension'? A penalty where you serve extra months for misconduct.
49. Is the certificate required for jobs? Yes, it is a legal requirement for employment in Nigeria for graduates.
50. What if I am pregnant? Pregnant members get maternity leave and concessionary postings.
51. What is NHIS? National Health Insurance Scheme. Registered corps members are covered for medical care at govt hospitals.
52. Can I verify my certificate online? Yes, employers can use the NYSC portal to verify discharge certificates.
53. What if my biometrics fail at PPA? Report to the Zonal Office immediately for manual capture.
54. Are foreign graduates verified in camp? No, physical verification happens at designated centers before camp deployment.
55. Can I call an emergency line? Yes, call 112 for national emergencies or your ZI's office line.`,
    metadata: { stage: 'all', risk: 'low', source: 'NYSC Portal / Official Policy Handbook', featured: true }
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
  'Abuja': {
    camp: 'Kubwa Orientation Camp. Modern facilities, grid water supply, very competitive.',
    cost: 'Very High. Abuja rent is steep. Average ₦350k+ in satellite towns, millions in city center.',
    metrics: { rent: 350000, food: 50000, transport: 40000 },
    ppa: 'Govt Agencies, NGOs, and Professional Firms.',
    pro_tip: 'Look for accommodation in Kubwa or Lugbe to save on housing costs.'
  },
  'Rivers': {
    camp: 'Nonwa Gbam Tai Camp. Large grounds, hot weather. Security is tight.',
    cost: 'High. Port Harcourt is an oil city. Rent is around ₦200k-₦300k.',
    metrics: { rent: 250000, food: 40000, transport: 30000 },
    ppa: 'Engineering firms, Schools, and Civil Service.',
    pro_tip: 'Always stay within well-lit areas in PH and avoid late night solo movements.'
  },
  'Oyo': {
    camp: 'Iseyin Orientation Camp. Known for its cool weather and hills. Relaxed atmosphere.',
    cost: 'Low. Ibadan is very affordable. Rent ₦80k-₦150k. Food is cheap.',
    metrics: { rent: 100000, food: 20000, transport: 10000 },
    ppa: 'Educational institutions, Agriculture, and Research.',
    pro_tip: 'Ibadan is vast; choose a PPA close to your residence to avoid long commutes.'
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
  { id: 'd1', title: 'Batch A Online Registration', date: '2025-02-15', stage: 'mobilization', importance: 'high' },
  { id: 'd2', title: 'Medical Fitness Upload', date: '2025-01-30', stage: 'prospective', importance: 'medium' },
  { id: 'd3', title: 'Camp Portal Closure', date: '2025-03-10', stage: 'camp', importance: 'high' },
  { id: 'd4', title: 'Monthly Biometric Window', date: '2025-05-30', stage: 'ppa', importance: 'high' },
  { id: 'd5', title: 'Project Proposal Deadline', date: '2025-07-15', stage: 'cds', importance: 'medium' },
  { id: 'd6', title: 'Final Clearance Phase', date: '2025-11-01', stage: 'pop', importance: 'high' },
  { id: 'd7', title: 'Senate List Verification', date: '2025-01-15', stage: 'prospective', importance: 'high' },
  { id: 'd8', title: 'Call-up Printing Window', date: '2025-02-25', stage: 'mobilization', importance: 'high' },
  { id: 'd9', title: 'Stream 2 Deployment', date: '2025-04-12', stage: 'camp', importance: 'medium' },
  { id: 'd10', title: 'CDS Project Commissioning', date: '2025-09-20', stage: 'cds', importance: 'low' },
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