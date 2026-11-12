export const PERSON = {
  name: "Ayush Sharma",
  role: "AI Engineer",
  email: "assharma4456@gmail.com",
  phone: "+91-9636711457",
  phoneHref: "tel:+919636711457",
  mailto: "mailto:assharma4456@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayushsharma2702",
  github: "https://github.com/ayushsharma-engineer",
  location: "India",
};

export const HERO = {
  lines: ["AYUSH", "SHARMA"],
  intro:
    "Software Engineer specializing in AI/ML, RAG systems, LLM applications, and scalable backend solutions. Turning complex ideas into practical, production-ready software.",
};


export const ABOUT = {
  bio: [
    "I'm a Software Engineer with hands-on experience in Artificial Intelligence, Machine Learning, and backend development. Previously, I worked as an AI Engineer at Retner (KoreGrow Technologies), where I developed RAG pipelines, integrated LLMs like LLaMA 3, and built AI-powered applications using Flask and FastAPI.",

    "My experience spans the complete machine learning lifecycle — from data preprocessing and feature engineering to model training, evaluation, and Docker-based deployment. I have also worked with vector databases, embeddings, FAISS, and production-oriented AI applications.",

    "I hold a B.Tech in Computer Science & Engineering from Poornima Institute of Engineering & Technology, Jaipur (2022–2026).",
  ],
};


export const MARQUEE_ITEMS = [
  "RAG PIPELINES",
  "LLM APPLICATIONS",
  "MACHINE LEARNING",
  "FAISS VECTOR SEARCH",
  "FASTAPI",
  "PYTORCH",
  "SCIKIT-LEARN",
  "DOCKER",
  "FEATURE ENGINEERING",
  "LLAMA 3",
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "LLMs",
      "RAG",
      "Feature Engineering",
      "Data Preprocessing",
    ],
  },
  {
    id: "libraries",
    name: "Libraries & Frameworks",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "FAISS",
      "Streamlit",
    ],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["MySQL", "MariaDB","Postgresql"],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Ubuntu / Linux",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
];

export const PROJECTS = [
  {
    id: "visioncart",
    title: "VisionCart — AI-Powered Shopping Platform",
    status: "prototype",
    statusLabel: "In Development",
    description:
      "An AI-powered fashion shopping platform providing personalized product recommendations based on user preferences and budget. Features a RAG-based recommendation system using embeddings and pgvector for semantic product search, with AI capabilities for outfit compatibility, budget optimization, occasion-based shopping, and product comparison.",
    details:
      "REST APIs are built with FastAPI, SQLAlchemy, and PostgreSQL, and the Google Gemini API powers conversational shopping assistance and intelligent recommendations.",
    tech: [
      "RAG",
      "Embeddings",
      "pgvector",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Google Gemini API",
    ],
    linkLabel: "GitHub Repository",
    link: "https://github.com/ayushsharma-engineer",
  },
  {
    id: "rag-chatbot",
    title: "Website-Based AI Chatbot using RAG",
    status: "completed",
    statusLabel: "Completed",
    description:
      "A RAG-based AI chatbot that generates responses using pre-indexed website knowledge. FAISS handles semantic vector retrieval while LLaMA-3 runs as a locally deployed model for inference.",
    details:
      "The application is designed to restrict responses to the available knowledge base, reducing hallucinated responses.",
    tech: ["RAG", "FAISS", "LLaMA-3"],
    linkLabel: "GitHub Repository",
    link: "https://github.com/ayushsharma-engineer",
  },
];

export const EXPERIENCE = [
  {
    id: "retner-engineer",
    period: "Apr 2026 — Oct 2026",
    role: "AI Engineer",
    org: "Retner (KoreGrow Technologies Pvt. Ltd.)",
    location: "Ahmedabad, Gujarat",
    points: [
      "Developed AI/ML applications using Python, PyTorch, TensorFlow, and Scikit-learn.",
      "Designed RAG pipelines using FAISS and integrated LLMs, including LLaMA 3.",
      "Built REST APIs using Flask and FastAPI and integrated AI models with databases and web applications.",
      "Worked on cloud-based deployment and Docker-based application environments.",
      "Tested, debugged, and optimized AI-powered applications.",
    ],
  },
  {
    id: "retner-intern",
    period: "Oct 2025 — Mar 2026",
    role: "AI Engineer Intern",
    org: "Retner (KoreGrow Technologies Pvt. Ltd.)",
    location: "Ahmedabad, Gujarat",
    points: [
      "Worked on AI/ML model development using Python and Scikit-learn.",
      "Contributed to LLM-based applications, RAG chatbots, and FAISS vector search.",
    ],
  },
  {
    id: "softech-era",
    period: "2025",
    role: "Data Science Intern",
    org: "Softech Era Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    points: [
      "Built classification models using Logistic Regression and Random Forest, achieving 85%+ accuracy on medical datasets.",
      "Improved model performance through feature engineering and hyperparameter tuning.",
      "Worked with structured datasets for data preprocessing, model training, evaluation, and predictive analysis.",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech — Computer Science & Engineering",
  school: "Poornima Institute of Engineering & Technology",
  location: "Jaipur, Rajasthan",
  period: "2022 — 2026",
};

export const MEDIA = {
  heroVideo: "/media/hero.mp4",
  aboutVideo: "/media/about.mp4",
  heroPoster: "/media/hero-poster.jpg",
  aboutPoster: "/media/about-poster.jpg",
  stillA: "/media/still-a.jpg",
  stillB: "/media/still-b.jpg",
  stillC: "/media/still-c.jpg",
};
