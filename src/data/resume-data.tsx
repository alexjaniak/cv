import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alexander Janiak",
  initials: "AJ",
  location: "Durham, NC",
  locationLink: "https://www.google.com/maps/place/Durham+NC",
  about:
    "",
  summary:
    "",
  avatarUrl: "https://avatars.githubusercontent.com/u/41028719?s=400&u=69fcceedef9c2a81a81511e554b9bb72339c42e3&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "alexander.janiak@outlook.com",
    tel: "+19084006216",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alexjaniak",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexander-janiak",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/waniak_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Duke University",
      degree: "B.S in Computer Science; B.A in Philosophy; Minor in Mathematics",
      start: "2021",
      end: "2025",
    },
    {
      school: "Governor Livingston High School",
      start: "2016",
      end: "2020",
    }
  ],
  work: [
    {
      company: "Panoptyc",
      link: "https://panoptyc.com/",
      badges: ["Remote"],
      title: "Research & Development Intern",
      start: "Jun. 2023",
      end: "Current",
      description:
        "",
    },
    {
      company: "Spice Finance",
      link: "https://www.spicefi.xyz/",
      badges: ["Remote"],
      title: "Software Developer",
      start: "May 2022",
      end: "Aug. 2022",
      description:
        "",
    },
    {
      company: "NJIT Provost Research Program",
      link: "https://github.com/alexjaniak/mdt-research",
      badges: [],
      title: "Research Intern",
      start: "June 2019",
      end: "Aug. 2019",
      description:
        "",
    },
  ],
  skills: [
    "Python",
    "C",
    "Java",
    "HTML/CSS",
    "JavaScript/TypeScript",
    "React/Next.js",
    "SQL",
    "Racket",
  ],
  technologies: [
    "Git",
    "PyTorch",
    "Keras/Tensorflow",
    "NumPy",
    "Pandas",
    "TCP/IP"
  ],
  courses: [
    "Neural Networks & Deep Learning",
    "Design & Analysis of Algorithms",
    "Data Structures & Algorithms",
    "Abstract Algebra",
    "Probability",
    "Vector Calculus",
    "Intro to Computer Systems",
    "Logic",
    "Matrices & Vector Spaces",
    "Computer Network Architecture",
    "Discrete Math for Computer Science"
  ],
  projects: [
    {
      title: "ZKMNIST-Noir",
      techStack: [
        "Python",
        "Keras/Tensorflow",
        "Next.js",
        "TypeScript"
      ],
      description: "Zero knowledge web application to prove/verify the output of a neural network",
      link: {
        label: "@alexjaniak/ZKMNIST-Noir",
        href: "https://zkmnist-noir.netlify.app/",
      },
    },
    {
      title: "Pentris-RL",
      techStack: [
        "Python",
        "PyTorch",
        "NumPy"
      ],
      description: "5-piece Tetris AI implemented using a Deep Reinforcement Learning Q Network",
      link: {
        label: "@alexjaniak/Pentris-RL",
        href: "https://colab.research.google.com/drive/10XFwhRMLbL1qFtpOA_fdNH_gNTBUqHkq?usp=sharing",
      },
    },
    {
      title: "encrypt",
      techStack: [
        "Python",
        "SQLite",
        "Click"
      ],
      description: "A command-line interface for locally-encrypting files",
      link: {
        label: "@alexjaniak/encrypt",
        href: "https://github.com/alexjaniak/encrypt",
      },
    },
    {
      title: "clpm",
      techStack: [
        "Python",
        "SQLite",
        "Click"
      ],
      description: "A locally-encrypted command-line password manager",
      link: {
        label: "@alexjaniak/clpm",
        href: "https://github.com/alexjaniak/clpm",
      },
    },
    {
      title: "Fractal Explorer",
      techStack: [
        "Unity",
        "C#",
        "HLSL"
      ],
      description: "Unity application to explore the Mandelbrot and Julia fractal sets",
      link: {
        label: "@alexjaniak/Fractal-Explorer",
        href: "https://www.alexjaniak.com/explorer.html",
      },
    },
    {
      title: "Calculator",
      techStack: [
        "JavaScript",
        "HTML/CSS",
      ],
      description: "Neomorphism inspired calculator",
      link: {
        label: "@alexjaniak/Calculator",
        href: "https://www.alexjaniak.com/calculator/",
      },
    },
  ],
} as const;
