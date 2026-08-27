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
  bio: "A lifelong learner of all things tech. Currently focusing on data analysis and machine learning engineering.",
  rotating: [
    "software engineering",
    "machine learning",
    "computer vision",
    "natural language processing",
  ],
  photo: "./assets/profile-enhanced.png",
  email: "sfhdev42@gmail.com",
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
    org: "KOMATIK UGM",
    url: "https://komatik.wg.ugm.ac.id/",
    period: "Present",
    roles: [
      { title: "Vice President 1" },
      { title: "Member of Software Research and Development" },
    ],
  },
  {
    org: "OmahTI",
    url: "https://omahti.web.id/",
    roles: [
      { title: "Member of Data Science and Artificial Intelligence" },
      { title: "Project Manager Staff" },
      { title: "Public Relations and Liaison Officer, OmahTI Learning Center" },
    ],
  },
  {
    org: "Google Developer Student Club",
    url: "https://gdsc.community.dev/universitas-gadjah-mada-sleman-indonesia/",
    roles: [{ title: "Hustler" }],
  },
  {
    org: "Global Mandiri Student Council",
    url: "https://globalmandiri.sch.id/",
    roles: [{ title: "Head of Educational Division" }],
  },
];

export const PROJECTS = [
  {
    title: "Fall Detection System",
    description: "A computer vision system that detects human falls in video.",
    image: "./assets/thumbnails/falldetection.jpg",
    url: "https://github.com/sfh525/FallDetection-SlemanFaiz",
    category: "Computer Vision",
  },
  {
    title: "CEEMDAN–WT–DAIN Preprocessing",
    description: "A novel preprocessing method to more accurately predict daily closing stock prices.",
    image: "./assets/thumbnails/stock_market_visual.jpeg",
    url: "https://github.com/sfh525/CEEMDAN-DAIN-Preprocessing",
    category: "Time Series",
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
  {
    title: "Data Royale Awarding Day",
    description: "Awarding day with Nabila Yumna Naafi'a as my teammate.",
    image: "./assets/thumbnails/3rd place data royale.png",
    url: "https://www.linkedin.com/posts/salman-faiz-hidayat-917b9425b_datascience-datasciencecompetitionwinners-activity-7182755433588174848-tK-5?utm_source=share&utm_medium=member_desktop",
    category: "Highlight",
  },
];

export const CERTIFICATIONS = [
  {
    title: "IELTS Academic",
    issuer: "IELTS",
    description: "Overall Band Score 8.0.",
    image: "",
    url: "",
    year: "",
  },
  {
    title: "Full Stack Web Developer",
    issuer: "The App Brewery",
    description: "Complete web development bootcamp covering front-end and back-end fundamentals.",
    image: "",
    url: "",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description: "Certification in modern, accessible, responsive layouts.",
    image: "",
    url: "https://freecodecamp.org/certification/SalmanFaizHidayat/responsive-web-design",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    description: "Core supervised learning workflows and model validation.",
    image: "",
    url: "https://www.kaggle.com/learn/certification/salmanfaizhidayat/intro-to-machine-learning",
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    description: "Pipelines, categorical encoding, and gradient boosting.",
    image: "",
    url: "https://www.kaggle.com/learn/certification/salmanfaizhidayat/intermediate-machine-learning",
  },
  {
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    description: "Neural networks with Keras, including dropout and batch normalization.",
    image: "",
    url: "https://www.kaggle.com/learn/certification/salmanfaizhidayat/intro-to-deep-learning",
  },
];
