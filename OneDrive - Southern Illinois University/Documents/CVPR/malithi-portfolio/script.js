const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const experiences = [
  {
    role: "Graduate Teaching Assistant",
    place: "Southern Illinois University · Carbondale, USA",
    period: "Jan 2024 – Current",
    detail: "Teaching assistant for Operating Systems, Web Application Development, Machine Learning, and Soft Computing; ABET documentation; research on LLMs/SLMs for multimodal AI."
  },
  {
    role: "Assistant Lecturer",
    place: "Informatics Institute of Technology · Colombo, Sri Lanka",
    period: "Aug 2023 – Dec 2023",
    detail: "Taught object-oriented programming, computer systems, software development, and advanced mathematics for data science students."
  },
  {
    role: "Temporary Lecturer",
    place: "Rajarata University of Sri Lanka · Mihintale, Sri Lanka",
    period: "Aug 2021 – Aug 2023",
    detail: "Taught Web Development, Operating Systems, and Management Information Systems; supervised final-year projects."
  },
  {
    role: "Online Tutor",
    place: "Open University of Sri Lanka · Colombo, Sri Lanka",
    period: "Oct 2021 – Aug 2023",
    detail: "Taught web development, computer security, Python programming, and mobile application development."
  },
  {
    role: "Research Assistant",
    place: "SLIIT and University of Sri Jayewardenepura · Sri Lanka",
    period: "2017 – 2021",
    detail: "Conducted research in computer vision, machine learning, graph neural networks, and supervised undergraduate researchers."
  }
];

const skills = [
  { title: "Programming", items: ["Python", "Java", "C++", "C", "JavaScript", "PHP"] },
  { title: "AI & Research", items: ["LLMs", "SLMs", "Machine Learning", "Deep Learning", "Security", "Privacy"] },
  { title: "Web & Data", items: ["HTML", "CSS", "REST", "SOAP", "MySQL", "Oracle", "Tableau"] },
  { title: "Tools", items: ["Jupyter", "MATLAB", "Minitab", "RapidMiner", "Unity", "Eclipse"] },
  { title: "Domains", items: ["Human Activity Recognition", "Wearable AI", "Healthcare AI", "Smart Homes"] },
  { title: "Academic", items: ["Teaching", "ABET Documentation", "Research Writing", "Project Supervision"] }
];

const publications = [
  {
    title: "Breaking Sensor-Text Alignment: Cross-Modal Attack on Contrastive Multimodal Human Activity Recognition",
    venue: "IEEE/CVF CVPR 2026",
    tags: ["cvpr", "har"],
    description: "A study of cross-modal attacks that disrupt contrastive sensor-text alignment in human activity recognition."
  },
  {
    title: "Development of a Fall Detection and Safety Communication System Using Small Language Models",
    venue: "ISARC 2025",
    tags: ["health", "robotics"],
    description: "A safety communication system integrating small language models for fall detection and emergency response."
  },
  {
    title: "Zero-Shot Detection and Sanitization of Data Poisoning Attacks in Wearable AI Using Large Language Models",
    venue: "ICMLA 2024",
    tags: ["har", "health"],
    description: "LLM-based zero-shot detection and mitigation of data poisoning attacks in wearable AI systems."
  },
  {
    title: "Intelligent Fall Detection and Emergency Response for Smart Homes Using Language Models",
    venue: "ICMLA 2024",
    tags: ["health"],
    description: "Language-model-assisted fall detection and emergency response for smart home environments."
  },
  {
    title: "Large Language Model Integrated Healthcare Cyber-Physical Systems Architecture",
    venue: "COMPSAC 2024",
    tags: ["health"],
    description: "An architecture for integrating language models into healthcare cyber-physical systems."
  },
  {
    title: "Poster: Leveraging Large Language Models for Zero-Shot Detection and Mitigation of Data Poisoning in Wearable AI Systems",
    venue: "NeurIPS GenAI4Health 2024",
    tags: ["har", "health"],
    description: "A poster on LLM-assisted security for wearable AI and healthcare systems."
  },
  {
    title: "Comparative Analysis of AI-Powered Approaches for Skeleton-Based Child and Adult Action Recognition in Multi-person Environment",
    venue: "CSASE 2022",
    tags: ["har"],
    description: "Comparative analysis of AI methods for skeleton-based action recognition."
  },
  {
    title: "A Sociable Robotic Platform to Make Career Advices for Undergraduates",
    venue: "HCI International 2020",
    tags: ["robotics"],
    description: "A sociable robotic system for student career guidance and interaction."
  },
  {
    title: "Blockchain-based Distributed Secure Crowdfunding and Decision-Making Platform for Large-scale Business Projects",
    venue: "European Modern Studies Journal 2020",
    tags: ["security"],
    description: "A blockchain-based secure platform for crowdfunding and decision-making."
  }
];

const topics = {
  har: {
    title: "Human Activity Recognition",
    text: "My work combines sensor data, natural-language descriptions, and contrastive learning to improve activity understanding while analyzing how these systems fail under attack."
  },
  llm: {
    title: "LLMs & SLMs",
    text: "I explore how language models can reason over text, vision, and sensor inputs, with emphasis on efficient and deployable small language models."
  },
  security: {
    title: "Security & Privacy",
    text: "I study data poisoning, adversarial examples, prompt injection, and cross-modal attacks to make AI-integrated sensing systems more trustworthy."
  },
  health: {
    title: "Healthcare AI",
    text: "I design intelligent systems for sensitive domains where accuracy, privacy, interpretability, and safety are essential."
  }
};

function renderTimeline() {
  const timeline = $("#timeline");
  timeline.innerHTML = experiences.map(item => `
    <article class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="timeline-content">
        <div class="timeline-meta">${item.period}</div>
        <h3>${item.role}</h3>
        <p><strong>${item.place}</strong></p>
        <p>${item.detail}</p>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  const grid = $("#skillsGrid");
  grid.innerHTML = skills.map(skill => `
    <article class="skill-card">
      <h3>${skill.title}</h3>
      <div class="skill-tags">${skill.items.map(item => `<span>${item}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderPublications(filter = "all") {
  const list = $("#publicationList");
  const visible = filter === "all" ? publications : publications.filter(pub => pub.tags.includes(filter));
  list.innerHTML = visible.map(pub => `
    <article class="publication-card">
      <div class="pub-meta"><span>${pub.venue}</span>${pub.tags.map(tag => `<span>#${tag}</span>`).join("")}</div>
      <h3>${pub.title}</h3>
      <p>${pub.description}</p>
    </article>
  `).join("");
}

function initFilters() {
  $$(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPublications(btn.dataset.filter);
    });
  });
}

function initTopicCards() {
  $$(".research-card").forEach(card => {
    card.addEventListener("click", () => {
      $$(".research-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      const topic = topics[card.dataset.topic];
      $("#topicPanel").innerHTML = `<h3>${topic.title}</h3><p>${topic.text}</p>`;
    });
  });
}

function initCounters() {
  const counters = $$(".counter");
  const animate = (counter) => {
    const target = Number(counter.dataset.target);
    let current = 0;
    const steps = 40;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target === 4 && counter.parentElement.textContent.includes("GPA") ? "4.00" : target;
        clearInterval(timer);
      } else {
        counter.textContent = target === 4 && counter.parentElement.textContent.includes("GPA") ? current.toFixed(2) : Math.floor(current);
      }
    }, 28);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.done) {
        entry.target.dataset.done = "true";
        animate(entry.target);
      }
    });
  }, { threshold: 0.7 });

  counters.forEach(counter => observer.observe(counter));
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => observer.observe(el));
}

function initNavigation() {
  $("#menuToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  $$(".nav-links a").forEach(link => link.addEventListener("click", () => $("#navLinks").classList.remove("open")));
}

function initTheme() {
  const button = $("#themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.dataset.theme = saved;
  button.textContent = document.documentElement.dataset.theme === "dark" ? "☀️" : "🌙";
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    button.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

function initCursorGlow() {
  const glow = $(".cursor-glow");
  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

renderTimeline();
renderSkills();
renderPublications();
initFilters();
initTopicCards();
initCounters();
initReveal();
initNavigation();
initTheme();
initCursorGlow();
$("#year").textContent = new Date().getFullYear();
