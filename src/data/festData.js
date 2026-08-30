export const eventCategories = [
  {
    id: 'performing-arts',
    name: 'Performing Arts',
    shortName: 'Theatre',
    desc: 'Stage is yours. Own the moment.',
    icon: 'theatre',
    events: [
      {
        id: 'monoact',
        title: 'Monoact (Solo Dramatics)',
        desc: 'Single actor playing multiple characters in a dramatic narrative.',
        prize: '₹10,000',
        fee: '₹200',
        time: 'Day 1 (Sep 17), 12:00 PM',
        venue: 'Stage 3 (Sruthi)',
        rules: ['Solo performance.', 'Duration: 5-7 minutes.', 'Evaluated on voice modulation and expressions.']
      },
      {
        id: 'street-play',
        title: 'Nukkad Natak (Street Play)',
        desc: 'Socially relevant street performances addressing college life or heritage.',
        prize: '₹25,000',
        fee: '₹500',
        time: 'Day 2 (Sep 18), 03:00 PM',
        venue: 'Open Air Theatre (OAT)',
        rules: ['Group size: 8-15 members.', 'Duration: 15-20 minutes.', 'No electronic amplification.']
      }
    ]
  },
  {
    id: 'music',
    name: 'Music',
    shortName: 'Music',
    desc: 'Feel the rhythm. Live the melody.',
    icon: 'veena',
    events: [
      {
        id: 'sopana-vocals',
        title: 'Classical Solo (Vocal)',
        desc: 'Solo Carnatic or Hindustani vocal performances reflecting classical ragas.',
        prize: '₹12,000',
        fee: '₹200',
        time: 'Day 1 (Sep 17), 11:00 AM',
        venue: 'Stage 3 (Sruthi)',
        rules: ['Solo singing.', 'Duration: 8-10 minutes.', 'No film songs allowed.']
      },
      {
        id: 'battle-bands',
        title: 'Battle of the Bands',
        desc: 'The ultimate rock and fusion face-off. Own the soundscape.',
        prize: '₹40,000',
        fee: '₹1,000',
        time: 'Day 3 (Sep 19), 06:00 PM',
        venue: 'Open Air Theatre (OAT)',
        rules: ['Band size: 4-8 members.', 'Time: 15 mins (inc. setup).', 'One fusion piece recommended.']
      }
    ]
  },
  {
    id: 'fine-arts',
    name: 'Fine Arts',
    shortName: 'Art',
    desc: 'Create. Imagine. Inspire.',
    icon: 'palette',
    events: [
      {
        id: 'mural-sketching',
        title: 'Mural Sketching (Traditional)',
        desc: 'Sketching traditional Kerala mural motifs using modern colors.',
        prize: '₹12,000',
        fee: '₹150',
        time: 'Day 1 (Sep 17), 10:00 AM',
        venue: 'Art Center (Chithra)',
        rules: ['Individual event.', 'Duration: 3 hours.', 'Bring your own colors/brushes.']
      },
      {
        id: 'clay-sculpting',
        title: 'Clay Modeling',
        desc: 'Mould clay into expressive, organic structures representing heritage.',
        prize: '₹15,000',
        fee: '₹200',
        time: 'Day 2 (Sep 18), 01:30 PM',
        venue: 'Art Courtyard',
        rules: ['Max 2 members per team.', 'Duration: 2.5 hours.', 'Clay will be provided.']
      }
    ]
  },
  {
    id: 'literary',
    name: 'Literary',
    shortName: 'Writing',
    desc: 'Words that connect. Voices that matter.',
    icon: 'quill',
    events: [
      {
        id: 'creative-writing',
        title: 'Creative Writing (English/Malayalam)',
        desc: 'Weave words into engaging stories or poems on a spot theme.',
        prize: '₹8,000',
        fee: '₹100',
        time: 'Day 1 (Sep 17), 01:30 PM',
        venue: 'Seminar Hall',
        rules: ['Individual event.', 'Duration: 1.5 hours.', 'Word limit: 1000 words.']
      },
      {
        id: 'elocution',
        title: 'Vakya (Elocution)',
        desc: 'Express opinions cogently on contemporary social/cultural topics.',
        prize: '₹10,000',
        fee: '₹150',
        time: 'Day 2 (Sep 18), 11:00 AM',
        venue: 'Library Hall',
        rules: ['Individual speech.', 'Duration: 5 minutes.', 'Language: Malayalam or English.']
      }
    ]
  },
  {
    id: 'media',
    name: 'Media',
    shortName: 'Media',
    desc: 'Capture. Create. Communicate.',
    icon: 'camera',
    events: [
      {
        id: 'spot-photography',
        title: 'Spot Photography',
        desc: 'Capture the essence of AGAM on your lens. Theme announced on Day 1.',
        prize: '₹15,000',
        fee: '₹200',
        time: 'Full Fest (Sep 17–20)',
        venue: 'Campus-wide',
        rules: ['Individual submission.', 'Photos must be taken on campus.', 'No major editing/filters allowed.']
      },
      {
        id: 'short-film',
        title: 'Short Film Making',
        desc: 'Create a compelling short narrative reflecting student culture or tradition.',
        prize: '₹25,000',
        fee: '₹400',
        time: 'Submission by Day 4 (Sep 20)',
        venue: 'Online upload',
        rules: ['Group size: Up to 6 members.', 'Duration: 3-5 minutes.', 'Must include English subtitles.']
      }
    ]
  },
  {
    id: 'dance',
    name: 'Dance',
    shortName: 'Dance',
    desc: 'Move with grace. Express with soul.',
    icon: 'anklet',
    events: [
      {
        id: 'folk-dance',
        title: 'Folk Dance (Group)',
        desc: 'Traditional group folk styles of Kerala, including Thiruvathira or Oppana.',
        prize: '₹25,000',
        fee: '₹500',
        time: 'Day 1 (Sep 17), 02:00 PM',
        venue: 'Main Stage (Keli)',
        rules: ['Group must consist of 6-12 members.', 'Duration: 8-10 minutes.', 'Only folk styles allowed.']
      },
      {
        id: 'classical-dance',
        title: 'Classical Dance (Solo)',
        desc: 'Performances in Mohiniyattam, Bharatanatyam, or Kuchipudi.',
        prize: '₹15,000',
        fee: '₹300',
        time: 'Day 3 (Sep 19), 10:00 AM',
        venue: 'Stage 2 (Mudra)',
        rules: ['Solo performance.', 'Duration: 12-15 minutes.', 'Evaluated on expressions and posture.']
      }
    ]
  }
];

export const departmentStandings = [
  {
    rank: '01',
    dept: 'CSE',
    name: 'Computer Science & Engineering',
    points: 2100,
    participations: 14,
    trend: 'up',
    breakdown: [
      { event: 'Battle of the Bands', place: '1st Place', points: 400 },
      { event: 'Folk Dance (Group)', place: '1st Place', points: 300 },
      { event: 'Monoact (Solo Dramatics)', place: '2nd Place', points: 150 },
      { event: 'Mural Sketching', place: '1st Place', points: 200 },
      { event: 'Other Events', place: 'Consolidated', points: 1050 }
    ]
  },
  {
    rank: '02',
    dept: 'ECE',
    name: 'Electronics & Communication',
    points: 1520,
    participations: 12,
    trend: 'down',
    breakdown: [
      { event: 'Classical Dance (Solo)', place: '1st Place', points: 400 },
      { event: 'Spot Photography', place: '1st Place', points: 200 },
      { event: 'Classical Solo (Vocal)', place: '2nd Place', points: 150 },
      { event: 'Mural Sketching', place: '2nd Place', points: 150 },
      { event: 'Other Events', place: 'Consolidated', points: 620 }
    ]
  },
  {
    rank: '03',
    dept: 'ME',
    name: 'Mechanical Engineering',
    points: 1280,
    participations: 15,
    trend: 'stable',
    breakdown: [
      { event: 'Nukkad Natak (Street Play)', place: '1st Place', points: 350 },
      { event: 'Folk Dance (Group)', place: '2nd Place', points: 200 },
      { event: 'Battle of the Bands', place: '2nd Place', points: 250 },
      { event: 'Other Events', place: 'Consolidated', points: 480 }
    ]
  },
  {
    rank: '04',
    dept: 'CE',
    name: 'Civil Engineering',
    points: 980,
    participations: 11,
    trend: 'up',
    breakdown: [
      { event: 'Clay Modeling', place: '1st Place', points: 300 },
      { event: 'Mural Sketching', place: '1st Place', points: 200 },
      { event: 'Other Events', place: 'Consolidated', points: 480 }
    ]
  },
  {
    rank: '05',
    dept: 'EE',
    name: 'Electrical Engineering',
    points: 760,
    participations: 9,
    trend: 'stable',
    breakdown: [
      { event: 'Creative Writing', place: '2nd Place', points: 150 },
      { event: 'Other Events', place: 'Consolidated', points: 610 }
    ]
  },
  {
    rank: '06',
    dept: 'IC',
    name: 'Instrumentation & Control Engineering',
    points: 650,
    participations: 8,
    trend: 'up',
    breakdown: [
      { event: 'Spot Photography', place: '3rd Place', points: 100 },
      { event: 'Other Events', place: 'Consolidated', points: 550 }
    ]
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Dr. P. R. Suresh',
    role: 'Chief Patron',
    dept: 'Principal',
    group: 'patron',
    image: 'suresh'
  },
  {
    id: 2,
    name: 'Dr. Vinod Kumar',
    role: 'Faculty Advisor',
    dept: 'ME Dept',
    group: 'faculty',
    image: 'vinod'
  },
  {
    id: 3,
    name: 'Hari Narayanan',
    role: 'Student Chairman',
    dept: 'ECE',
    group: 'student',
    image: 'hari'
  },
  {
    id: 4,
    name: 'Meenakshi K. S.',
    role: 'Arts Secretary',
    dept: 'CSE',
    group: 'student',
    image: 'meenakshi'
  },
  {
    id: 5,
    name: 'Sarang Nair',
    role: 'WEB Lead',
    dept: 'CSE',
    group: 'tech',
    image: 'sarang'
  },
  {
    id: 6,
    name: 'Arjun K. S.',
    role: 'Creative Designer',
    dept: 'CSE',
    group: 'design',
    image: 'arjun'
  },
  {
    id: 7,
    name: 'Sandra Mathew',
    role: 'Media Lead',
    dept: 'ECE',
    group: 'design',
    image: 'sandra'
  },
  {
    id: 8,
    name: 'Aditya Varma',
    role: 'General Convener',
    dept: 'ME',
    group: 'management',
    image: 'aditya'
  }
];
