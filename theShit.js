// ------- DATA --------
var openingLines = [
  "Nishant? Who the f*ck is",
  "Surely, you are joking mr.",
  "Obviously, you're not a golfer",
  "People always ask me if I know"
];

var closingLines = [
  { quote: "After all, tomorrow is another day.", from: "Gone with the wind" },
  { quote: "I am haunted by humans.", from: "The Book Thief" },
  { quote: "2. Where is Plymouth Rock?", from: "Bill Watterson" },
  { quote: "Reality continues to ruin my life.", from: "Bill Watterson" },
  { quote: "Bangarang, Motherfucker!", from: "https://xkcd.com/813/" },
  { quote: "Rage, Rage Against the Dying of the Light", from: "Dylan Thomas" }
];

var socialMedia = [
  {
    icon: "fa-linkedin",
    text: "www.linkedin.com/in/naishe",
    link: "https://www.linkedin.com/in/naishe/"
  },
  {
    icon: "fa-stack-overflow",
    text: "stackoverflow.com/users/298455",
    link: "https://stackoverflow.com/users/298455/nishant"
  },
  {
    icon: "fa-github",
    text: "github.com/naishe",
    link: "https://github.com/naishe"
  },
  {
    icon: "fa-twitter",
    text: "twitter.com/naishe",
    link: "https://twitter.com/naishe"
  },
  {
    icon: "fas fa-rss",
    text: "blog.naishe.in",
    link: "https://blog.naishe.in"
  }
];

var techLoveData = [
  {
    title: "Java",
    icon: "/assets/java.png",
    expertise: 5,
    love: 3
  },
  {
    title: "Node.js",
    icon: "/assets/nodejs.png",
    expertise: 5,
    love: 5
  },
  {
    title: "MongoDB",
    icon: "/assets/mongo.png",
    expertise: 5,
    love: 5
  },
  {
    title: "React",
    icon: "/assets/react.png",
    expertise: 5,
    love: 5
  },
  {
    title: "AWS",
    icon: "/assets/aws.png",
    expertise: 5,
    love: 5
  },
  {
    title: "GraphQL",
    icon: "/assets/graphql.png",
    expertise: 4,
    love: 5
  },
  {
    title: "ML",
    icon: "/assets/ml.png",
    expertise: 1,
    love: 5
  },
  {
    title: "Docker",
    icon: "/assets/docker.png",
    expertise: 3,
    love: 5
  },
  {
    title: "Cassandra",
    icon: "/assets/cass.png",
    expertise: 5,
    love: 4
  }
];

var techLoveMiniData = [
  { title: "React Native", expertise: 4 },
  { title: "Electron", expertise: 4 },
  { title: "ElasticSearch", expertise: 3 },
  { title: "Bash", expertise: 5 },
  { title: "Python", expertise: 3 },
  { title: "Scala", expertise: 2 },
  { title: "Git", expertise: 4 },
  { title: "MySQL", expertise: 4 },
  { title: "PostgreSQL", expertise: 4 },
  { title: "Spark", expertise: 3 },
  { title: "Nagios", expertise: 5 },
  { title: "ECMAScript", expertise: 5 },
  { title: "HTML5", expertise: 4 },
  { title: "CSS3", expertise: 3 },
  { title: "Kubernetes", expertise: 2 },
  { title: "SciKit Learn", expertise: 3 },
  { title: "Internet of Things", expertise: 3 },
  { title: "TensorFlow", expertise: 1 }
];

var clients = [
  {
    name: "WealthEngine Inc",
    url: "https://www.wealthengine.com/",
    img: "/assets/we.png",
    role: "Independent Contractor",
    duration: "March 2014 &mdash; Now",
    pointers: [
      "Setup and manage AWS infrastructure",
      "The DevOps Guy, and release engineer",
      "Backend application development (Java)",
      "Reliability engineer for NoSQL databases: Cassandra, MongoDB, and ElasticSearch"
    ],
    techStack: [
      "AWS",
      "Cassandra",
      "MongoDB",
      "ElasticSearch",
      "Nagios",
      "Java"
    ]
  },
  {
    name: "Cloudnine Hospitals",
    url: "https://www.cloudninecare.com/",
    img: "/assets/c9.png",
    role: "Independent Contractor",
    duration: "Oct 2017 &mdash; Feb 2018, Sep 2018 &mdash; Now",
    pointers: [
      "React Native App for existing APIs",
      "Hiring and setting up engineering team",
      "AWS infrastructure setup",
      "Architecture and developmentment of appointment booking system (AMS)",
      "Design and development of UIs to manage and administer AMS"
    ],
    techStack: [
      "Node.js",
      "GraphQL",
      "AWS",
      "Docker",
      "EKS",
      "CI/CD",
      "ReactJS",
      "React Native"
    ]
  },
  {
    name: "InfiTech Solutions",
    url: null,
    img: "/assets/c9.png",
    role: "Independent Contractor",
    duration: "Oct 2016 &mdash; Jan 2017",
    pointers: [
      "Setting up automation for book packaging system (BPS)",
      "Architecture and developmentment of BPS",
      "Barcode based scanning and alerting requires no manual navigation for input",
      "UX (sound and color based) so that illiterate laborors can work without training"
    ],
    techStack: [
      "Node.js",
      "Docker",
      "ReactJS",
      "Electron",
      "React Native",
      "MongoDB"
    ]
  }
];

var petProjects = [
  {
    title: "My Pet Project",
    desc:
      "Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years. Bird and reptile eggs consist of a protective eggshell, albumen (egg white), and vitellus (egg yolk), contained within various thin membranes",
    status:
      "Currently, in ideation phase. No funding, no developer, no user. Helppp!!!"
  },
  {
    title: "My Pet Project",
    desc:
      "Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years. Bird and reptile eggs consist of a protective eggshell, albumen (egg white), and vitellus (egg yolk), contained within various thin membranes",
    status:
      "Currently, in ideation phase. No funding, no developer, no user. Helppp!!!"
  },
  {
    title: "My Pet Project",
    desc:
      "Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years. Bird and reptile eggs consist of a protective eggshell, albumen (egg white), and vitellus (egg yolk), contained within various thin membranes",
    status:
      "Currently, in ideation phase. No funding, no developer, no user. Helppp!!!"
  }
];

// --- render the data ---
// Helper function that generate on and off stars and hearts
var getStars = (stars, iconClass) =>
  [...Array(5).keys()]
    .map(i =>
      i < stars
        ? `<i class="fas ${iconClass}"></i>`
        : `<i class="far ${iconClass}"></i>`
    )
    .join("");

var shuffleComparator = () => Math.random() - 0.5;
var lastRandom = {};
var getRandom = (key, length) => {
  var lastRandomVal = lastRandom[key];
  var newRandom;
  do {
    newRandom = Math.floor(Math.random() * length);
  } while (newRandom === lastRandomVal);
  lastRandom[key] = newRandom;
  return newRandom;
};

var isFirstRun = true;
var doTheMagic = () => {
  document.getElementById("intro").innerText =
    openingLines[getRandom("opening", openingLines.length)];

  var outro = closingLines[getRandom("closing", closingLines.length)];
  var outroContainer = document.getElementById("outro");
  outroContainer.setAttribute("title", outro.from);
  outroContainer.innerHTML = `<em>Fin.</em>${outro.quote}`;

  // 1. load social media icons
  document.getElementById("social-media").innerHTML = socialMedia
    .sort(shuffleComparator)
    .map(
      s => `
        <div class="social-media-item">
          <div>
            <a href=""> <i class="fab ${s.icon}"></i> </a>
          </div>
          <div><a href="${s.link}">${s.text}</a></div>
        </div>`
    )
    .join("");

  // 2. Render big tech icons
  document.getElementById("techlove").innerHTML = techLoveData
    .sort(shuffleComparator)
    .map(
      t =>
        `<div class="score-wrapper">
          <div class="score">
            <div><img src="${t.icon}" /></div>
            <h3>${t.title}</h3>
            <div>
              <div><small>LEVEL OF EXPERTISE</small></div>
              <div class="stars">
                ${getStars(t.expertise, "fa-star")}
              </div>
            </div>
            <div>
              <div>
                <div><small>LEVEL OF ENJOYMENT WORKING</small></div>
                <div class="hearts">
                    ${getStars(t.love, "fa-heart")}
                </div>
              </div>
            </div>
          </div>
        </div>`
    )
    .join("");

  // 3. Render mini tech icons
  document.getElementById("techlove-mini").innerHTML = techLoveMiniData
    .sort(shuffleComparator)
    .map(
      t =>
        ` <div class="mini-badge">
            <div>${t.title}</div>
            <div>${getStars(t.expertise, "fa-star")}</div>
        </div>`
    )
    .join("");

  // 4. render clientele
  document.getElementById("clients").innerHTML = clients
    .map(
      c =>
        `<div class="client">
          <div class="client-pic"><img src="${c.img}" /></div>
          <div class="client-detail">
            <div class="client-title">
                <img src="${c.img}" />
                <h3><a href="${c.url}">${c.name}</a></h3>
            </div>
            <ul>
              <li>
                <strong>${c.role} | ${c.duration}</strong>
              </li>
              ${c.pointers.map(p => `<li>${p}</li>`).join("")}
              <li>
                <span class="client-tech-stack">Tech Stack:&nbsp;</span>
                ${c.techStack.join(" | ")}
              </li>
            </ul>
          </div>
        </div>`
    )
    .join("");

  // 5. Render pet projects
  document.getElementById("pet-projects").innerHTML = petProjects
    .map(
      p => `
    <div class="pet-project">
        <div><h3>${p.title}</h3></div>
        <div>${p.desc}</div>
        <div>STATUS: ${p.status}</div>
      </div>`
    )
    .join("");

  // 6. set random favicons
  var rand = getRandom("favicon", 17) + 1;
  var faviconPath = `/assets/favicons/fav${rand}.ico`;

  if (isFirstRun) {
    var h = document.getElementsByTagName("head")[0];
    h.insertAdjacentHTML(
      "afterbegin",
      `<link id="favicon" rel="shortcut icon" href=${faviconPath} />`
    );
  } else {
    document.getElementById("favicon").setAttribute("href", faviconPath);
  }

  isFirstRun = false;
};

window.addEventListener("load", doTheMagic);
