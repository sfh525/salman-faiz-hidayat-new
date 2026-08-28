/**
 * Portfolio content — this is the file you edit.
 *
 * To add an item, copy an existing object in that array, paste it, and fill the fields.
 * Optional fields can be omitted or left as "".
 *
 * PROJECTS
 *   title        (required) card heading
 *   description  (required) short summary
 *   image        (required) path under ./assets/thumbnails/
 *   url          (required) GitHub, Colab, live demo, etc.
 *   category     (required) used for the filter chips
 *
 * EXPERIENCE
 *   org          (required) organization name
 *   url          (optional) organization website
 *   period       (optional) e.g. "2024 — Present"
 *   roles        (required) array of { title, detail? }
 *
 * AWARDS
 *   title        (required)
 *   url          (optional)
 *
 * CERTIFICATIONS
 *   title        (required) certificate name
 *   issuer       (optional) issuing organization
 *   description  (optional) extra context
 *   image        (optional) path to a scan/screenshot, e.g. "./assets/certs/ielts.png"
 *                If omitted, a diploma-style card is generated from the title.
 *   url          (optional) credential / verification link
 *   year         (optional)
 */

export const SITE = {
  name: "Salman Faiz Hidayat",
  nickname: "Faiz",
  role: "Computer Science undergraduate",
  school: "Gadjah Mada University",
  bio: "A lifelong learner of all things tech. Currently focusing on data science and machine learning engineering.",
  rotating: [
    "software engineering",
    "machine learning",
    "computer vision",
    "natural language processing",
  ],
  photo: "./assets/profile-enhanced.png",
  email: "salmanfaizhidayat525@gmail.com",
  linkedin: "https://www.linkedin.com/in/salman-faiz-hidayat-917b9425b/",
  github: "https://github.com/sfh525",
};

export const AWARDS = [
  {
    title: "3rd Place — Data Royale",
    url: "https://www.linkedin.com/in/salman-faiz-hidayat-917b9425b/details/honors/1712498107773/single-media-viewer/?profileId=ACoAAEARrSMBhfPrw0jOqjkO3hxHZZRQLPY1a0g",
  },
  {
    title: "Ranked #12 of 200+ teams — Dataslayer 2.0, Telkom University",
  },
  {
    title: "Top 20 of 200+ teams — Datavidia 9, Institut Teknologi Bandung",
  },
];

export const EXPERIENCE = [
  {
    org: "tiket.com",
    period: "Aug 2025 - Aug 2026",
    roles: [
      { title: "Data Science Intern" },
    ],
  },
  {
    org: "KKN-PPM UGM",
    period: "Jul 2025 - Jul 2026",
    roles: [
      { title: "Lead/Student Unit Coordinator" },
    ],
  },
  {
    org: "KOMATIK UGM",
    url: "https://komatik.wg.ugm.ac.id/",
    period: "Feb 204 - Nov 2025",
    roles: [
      { title: "Vice President 1" },
      { title: "Member of Software Research and Development" },
    ],
  },
  {
    org: "OmahTI",
    url: "https://omahti.web.id/",
    period: "Mar 2024 - Dec 2024",
    roles: [
      { title: "Member of Data Science and Artificial Intelligence" },
      { title: "Project Manager Staff" },
      { title: "Public Relations and Liaison Officer, OmahTI Learning Center" },
    ],
  },
  {
    org: "Google Developer Student Club",
    url: "https://gdsc.community.dev/universitas-gadjah-mada-sleman-indonesia/",
    period: "Nov 2023 - Jun 2024",
    roles: [{ title: "Hustler" }],
  },
  {
    org: "Global Mandiri Student Council",
    period: "Nov 2021 - Sep 2022",
    roles: [{ title: "Head of Educational Division" }],
  },
];

export const PROJECTS = [
  {
    title: "Puppis Chatbot",
    description: "A helpful chatbot to help employees understand projects without having to skim through pages of documentations or files of code, built in collaboration with tiket.com interns.",
    image: "./assets/thumbnails/puppis.jpeg",
    url: "https://lnkd.in/p/gUcjDaS8",
    category: "AI Engineering",
  },
  {
    title: "CEEMDAN–WT–DAIN Preprocessing",
    description: "A novel preprocessing method to more accurately predict daily closing stock prices.",
    image: "./assets/thumbnails/stock_market_visual.jpeg",
    url: "https://github.com/sfh525/CEEMDAN-DAIN-Preprocessing",
    category: "Time Series",
  },
  {
    title: "Local Tourism Website",
    description: "A novel preprocessing method to more accurately predict daily closing stock prices.",
    image: "./assets/thumbnails/Local Tourism Website.png",
    url: "https://mencrang.com",
    category: "Frontend",
  },
  {
    title: "Fall Detection System",
    description: "A computer vision system that detects human falls in video.",
    image: "./assets/thumbnails/falldetection.jpg",
    url: "https://github.com/sfh525/FallDetection-SlemanFaiz",
    category: "Computer Vision",
  },
  
  {
    title: "Food Commodity Price Prediction",
    description: "Datavidia 9 2025 submission using ExtraTrees and KNN for food commodity prices.",
    image: "./assets/thumbnails/food-commodity.jpg",
    url: "https://github.com/sfh525/HaqTuahOpps-Datavidia",
    category: "Time Series",
  },
  {
    title: "Article Category Prediction",
    description: "NLP classifier for article categories from keywords and headlines, using Torch and BERT.",
    image: "./assets/thumbnails/articleNLP.jpg",
    url: "https://github.com/sfh525/article-category-prediction",
    category: "NLP",
  },
  {
    title: "Fire Detection",
    description: "An ML-based fire detection system trained on the VisiFire dataset.",
    image: "./assets/thumbnails/originalbigcontrol.png",
    url: "https://github.com/sfh525/Fire-Detection",
    category: "Computer Vision",
  },
  {
    title: "Data Royale Awarding Day",
    description: "Awarding day with Nabila Yumna Naafi'a as my teammate.",
    image: "./assets/thumbnails/3rd place data royale.png",
    url: "https://www.linkedin.com/posts/salman-faiz-hidayat-917b9425b_datascience-datasciencecompetitionwinners-activity-7182755433588174848-tK-5?utm_source=share&utm_medium=member_desktop",
    category: "Highlight",
  },
  {
    title: "Music Genre Classification",
    description: "SVM and a sequential neural network to predict music genre — Data Royale submission.",
    image: "./assets/thumbnails/sound-data.png",
    url: "https://colab.research.google.com/drive/1ItziyY92qsWIoeM2axbeZRJPmE81DyNy?usp=sharing",
    category: "Machine Learning",
  },
  {
    title: "Cholesterol Level Prediction",
    description: "XGBoost regressor that estimates cholesterol from medical factors.",
    image: "./assets/thumbnails/cholesterol.png",
    url: "https://colab.research.google.com/drive/1ovlcX3M4KvBg49-NhNiNqwh9fbcsMRGQ?usp=sharing",
    category: "Machine Learning",
  },
  {
    title: "Laptop Price Prediction",
    description: "XGBoost regressor for laptop prices driven mostly by categorical features.",
    image: "./assets/thumbnails/laptop-prices.png",
    url: "https://colab.research.google.com/drive/1Xinb1iqPM8v-Uq1bHk6vP0-7D8hYi9jf?usp=sharing",
    category: "Machine Learning",
  },
  {
    title: "Blog Maker",
    description: "A simple blog maker built with Node.js, Express, and EJS.",
    image: "./assets/thumbnails/blog-maker.png",
    url: "https://github.com/sfh525/blog-maker",
    category: "Software Engineering",
  },
  {
    title: "Joke Generator",
    description: "A joke generator with filters for specific joke categories.",
    image: "./assets/thumbnails/jokegenerator.png",
    url: "https://github.com/sfh525/joke-generator",
    category: "Software Engineering",
  },
  {
    title: "Quiztory",
    description: "A history-themed casual mini-game that makes learning history more engaging.",
    image: "./assets/thumbnails/quiztory.png",
    url: "https://github.com/vityasyyy/quiztory-IOproject",
    category: "Management",
  },
  {
    title: "My First Website",
    description: "A pure HTML personal site — the starting point of this journey.",
    image: "./assets/thumbnails/first-web.png",
    url: "https://sfh525.github.io/basic-web/",
    category: "Software Engineering",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Time Series",
    issuer: "Kaggle",
    description: "Fundamentals about time series data, time series feature engineering, modeling, and evaluating",
    image: "./assets/certs/time_series.png",
    url: "https://www.kaggle.com/learn/certification/salmanfaizhidayat/time-series",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    description: "Core supervised learning workflows and model validation.",
    image: "./assets/certs/intro_2_ml.jpeg",
    url: "https://www.kaggle.com/learn/certification/salmanfaizhidayat/intro-to-machine-learning",
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    description: "Pipelines, categorical encoding, and gradient boosting.",
    image: "./assets/certs/intermediate_ml.jpeg",
    url: "https://www.kaggle.com/learn/certification/salmanfaizhidayat/intermediate-machine-learning",
  },
  {
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    description: "Neural networks with Keras, including dropout and batch normalization.",
    image: "./assets/certs/intro_2_dl.jpeg",
    url: "https://www.kaggle.com/learn/certification/salmanfaizhidayat/intro-to-deep-learning",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Google Careers",
    description: "Emphasizes the fundamentals of automating things in IT with Python",
    image: "./assets/certs/google_it.png",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/XCX04L47FPPK",
  },
  {
    title: "Google Project Management",
    issuer: "Google Careers",
    description: "An end-to-end course that teaches how to manage projects and people in the context of tech-related projects",
    image: "./assets/certs/google_pm.png",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/GMPF3EU1D760",
  },
  {
    title: "Full Stack Web Developer",
    issuer: "The App Brewery",
    description: "Complete web development bootcamp covering front-end and back-end fundamentals.",
    image: "./assets/certs/appbrewery_fullstack.jpg",
    url: "https://www.udemy.com/certificate/UC-7b287d4b-dd44-44f5-9599-0cafd762e9d4/",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description: "Certification in modern, accessible, responsive layouts.",
    image: "./assets/certs/FCC Certificate for New Responsive Web Design.png",
    url: "https://freecodecamp.org/certification/SalmanFaizHidayat/responsive-web-design",
  },
  
];
