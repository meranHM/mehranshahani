

//Header NavBar
export const navigation = [
    {
        id: "0",
        title: "Home",
        url: "/home",
    },
    {
        id: "1",
        title: "Projects",
        url: "/projects",
    },
    {
        id: "2",
        title: "About",
        url: "/about",
    },
    {
        id: "3",
        title: "Contact",
        url: "/contact",
    }
]

// Main Terminal Welcome Messages
export const welcomeMessage1 = [
    "  SYSTEM BOOTING...",
    "  CONNECTION ESTABLISHED...",
    "  ACCESS GRANTED",
    "  WELCOME, OPERATIVE",
]

export const welcomeMessage2 = [
    "  INITIALIZING SYSTEM...",
    "  LOADING CORE MODULES...",
    "  SYSTEM CHECKS PASSED...",
    "  BOOT COMPLETE. WELCOME, OPERATIVE.",
]

export const welcomeMessage3 = [
    "  USER AUTHENTICATION IN PROGRESS...",
    "  BIOMETRIC DATA VERIFIED...",
    "  SECURITY CLEARANCE ACCEPTED...",
    "  ACCESS GRANTED. WELCOME BACK.",
]

export const welcomeMessage4 = [
    "  RETRIEVING MISSION FILES...",
    "  DECRYPTION SUCCESSFUL...",
    "  TARGET COORDINATES LOCKED...",
    "  MISSION STATUS: ACTIVE.",
]

export const welcomeMessage5 = [
    "  ESTABLISHING SECURE CONNECTION...",
    "  ENCRYPTION KEY EXCHANGED...",
    "  DATA STREAM SYNCHRONIZED...",
    "  CONNECTION STABLE.",
]

export const welcomeMessage6 = [
    "  CONSCIOUSNESS INITIALIZING...",
    "  MEMORY BANKS LOADED...",
    "  LOGIC MODULES OPTIMIZED...",
    "  AI ONLINE. AWAITING COMMANDS.",
]

export const allWelcomeMessages = [ 
    welcomeMessage1, 
    welcomeMessage2, 
    welcomeMessage3,
    welcomeMessage4,
    welcomeMessage5,
    welcomeMessage6
]


// Main Terminal AsciiArt Logo
export const asciiArt = `
 _______ _______ _______ ______ _______ _______ 
|   |   |    ___|   |   |   __ \   _   |    |  |
|       |    ___|       |      <       |       |
|__|_|__|_______|___|___|___|__|___|___|__|____|
                                                
`

// Terminal Commands
export const commands = [
    "help",
    "clear",
    "cd home",
    "cd projects",
    "cd about",
    "cd contact",
]


// Skills
export const skills = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        status: "STABLE",
    },
    {
        category: "Animations",
        items: ["Framer Motion", "GSAP", "CSS Animations"],
        status: "OPTIMIZING",
    },
    {
        category: "Tools & Workflow",
        items: ["Git", "VS Code", "Figma", "Vite"],
        status: "STABLE",
    },
    {
        category: "Upcoming Learning",
        items: ["Node.js", "Express.js", "MongoDB", "Prisma"],
        status: "Locked",
    }
]


// Mini Terminal Messages
export const miniTerminalMessageHero = `SYSTEM ONLINE...  
WELCOME TO THE CYBER GRID`

export const miniTerminalMessageSkills = `CORE SYSTEMS INITIALIZED...`

export const miniTerminalMessageProjects = `ACCESS GRANTED TO THE MAINFRAME...
DATA STREAM: ACTIVED`

export const miniTerminalMessageCTA = `CONNECTION REQUEST DETECTED...  
ESTABLISHING SECURE LINK...  
STATUS: CONNECTION STABLE  
AWAITING USER INPUT...`  

export const miniTerminalMessageBlog = `DATA NODES LOCATED...
DECODING LATEST LOG ENTRIES...  
ACCESSING KNOWLEDGE ARCHIVE...`

export const miniTerminalMessageXP = `ACCESSING PERSONAL CORE DIRECTIVE...  
LOG ENTRY INITIATED..`


// System Diagnostic Content
export const skillSet = [
    { name: "JavaScript", level: 92, color: "bg-color-neonYellow/60" },
    { name: "React", level: 89, color: "bg-color-neonCyan/60" },
    { name: "Next.js", level: 85, color: "bg-color-neonWhite/60" },
    { name: "TypeScript", level: 80, color: "bg-color-neonBlue/60" },
    { name: "Tailwind CSS", level: 90, color: "bg-color-neonTeal/60" },
    { name: "Framer Motion", level: 78, color: "bg-color-neonViolet/60" },
    { name: "Git & GitHub", level: 88, color: "bg-color-neonRed/60" },
  ]

export const logs = [
    "Initializing system scan...",
    "Fetching core skill data...",
    "Analyzing efficiency levels...",
    "Processing AI diagnostics...",
    "Compiling system performance report...",
    "Optimization complete.",
    "STATUS: STABLE.",
  ]


// My Developer Timeline
export const timelineData = [
  { year: "2013-2015", title: "Early Interests", description: "Fascinated by tech, explored coding basics and digital design.", future: false },
  { year: "2022", title: "Frontend Foundations", description: "Started learning HTML, CSS, and JavaScript. Built first simple projects.", future: false },
  { year: "2023-2024", title: "React & Advanced Tech", description: "Mastered React, Redux, TypeScript, and Tailwind CSS. Created real projects.", future: false },
  { year: "2025", title: "Current Status", description: "Building a strong portfolio, selling templates, and seeking opportunities.", future: false },
  { year: "Future", title: "Next Mission: Backend Mastery", description: "Planning to learn Next.js, databases, and full-stack development.", future: true }
]  


