// ------- DATA --------
var openingLines = [
  "Nishant? Who the fuck is",
  "Surely, you are joking mr.",
  "Obviously, you're not a golfer",
  "People always ask me if I know",
];

var closingLines = [
  { quote: "After all, tomorrow is another day.", from: "Gone with the wind" },
  { quote: "I am haunted by humans.", from: "The Book Thief" },
  { quote: "2. Where is Plymouth Rock?", from: "Bill Watterson" },
  { quote: "Reality continues to ruin my life.", from: "Bill Watterson" },
  { quote: "Bangarang, Motherfucker!", from: "https://xkcd.com/813/" },
  { quote: "Rage, Rage Against the Dying of the Light", from: "Dylan Thomas" },
  {
    quote: "The past is a foreign country; they do things differently there",
    from: "The Go-Between",
  },
  { quote: "All children, except one, grow up.", from: "Peter Pan" },
  { quote: "All this happened. More or less.", from: "Slaughterhouse Five" },
];

var socialMedia = [
  {
    icon: "fa-linkedin",
    text: "linkedin.com/in/naishe",
    link: "https://www.linkedin.com/in/naishe/",
  },
  {
    icon: "fa-stack-overflow",
    text: "stackoverflow.com/users/298455",
    link: "https://stackoverflow.com/users/298455/nishant",
  },
  {
    icon: "fa-github",
    text: "github.com/naishe",
    link: "https://github.com/naishe",
  },
  {
    icon: "fa-twitter",
    text: "twitter.com/naishe",
    link: "https://twitter.com/naishe",
  },
  {
    icon: "fa-medium",
    text: "medium.com/@nishant.neeraj",
    link: "https://medium.com/@nishant.neeraj",
  },
];

var techLoveData = [
  {
    title: "Java",
    icon: "/assets/java.png",
    expertise: 5,
    love: 3,
  },
  {
    title: "Node.js",
    icon: "/assets/nodejs.png",
    expertise: 5,
    love: 5,
  },
  {
    title: "MongoDB",
    icon: "/assets/mongo.png",
    expertise: 5,
    love: 5,
  },
  {
    title: "React",
    icon: "/assets/react.png",
    expertise: 5,
    love: 5,
  },
  {
    title: "AWS",
    icon: "/assets/aws.png",
    expertise: 5,
    love: 5,
  },
  {
    title: "GraphQL",
    icon: "/assets/graphql.png",
    expertise: 4,
    love: 5,
  },
  {
    title: "ML",
    icon: "/assets/ml.png",
    expertise: 1,
    love: 5,
  },
  {
    title: "Docker",
    icon: "/assets/docker.png",
    expertise: 3,
    love: 5,
  },
  {
    title: "Cassandra",
    icon: "/assets/cass.png",
    expertise: 5,
    love: 4,
  },
  {
    title: "UI/UX",
    icon: "/assets/ux.png",
    expertise: 3,
    love: 5,
  },
];

var techLoveMiniData = [
  { title: "React Native", expertise: 5 },
  { title: "Electron", expertise: 4 },
  { title: "ElasticSearch", expertise: 3 },
  { title: "Bash", expertise: 5 },
  { title: "Python", expertise: 3 },
  { title: "Git", expertise: 5 },
  { title: "MySQL", expertise: 4 },
  { title: "PostgreSQL", expertise: 5 },
  { title: "HTML5", expertise: 4 },
  { title: "CSS3", expertise: 4 },
];

var clients = [
  {
    name: "ThatMate",
    url: "https://thatmate.com/",
    img: "/assets/thatmate.png",
    role: "CTO / Tech Architect",
    duration: "Sep 2019 &mdash; Now",
    pointers: [
      "Taking a mostly offline organization to fully online",
      "Architecting, design decisions, and tech selection",
      "The Code Monkey",
      "Lean Startup to the core",
    ],
    techStack: [
      "AWS",
      "Terraform",
      "PostgreSQL",
      "React Native",
      "React JS",
      "NodeJS",
      "TypeScript",
      "CI/CD",
    ],
  },
  {
    name: "Cloudnine Hospitals",
    url: "https://www.cloudninecare.com/",
    img: "/assets/c9.png",
    role: "Independent Contractor",
    duration: "Oct 2017 &mdash; Feb 2018, Sep 2018 &mdash; Dec 2019",
    pointers: [
      "React Native App for existing APIs",
      "Hiring and setting up engineering team",
      "AWS infrastructure setup",
      "Architecture and developmentment of appointment booking system (AMS)",
      "Design and development of UIs to manage and administer AMS",
    ],
    techStack: [
      "Node.js",
      "GraphQL",
      "AWS",
      "Docker",
      "EKS",
      "CI/CD",
      "ReactJS",
      "React Native",
    ],
  },
  {
    name: "WealthEngine Inc",
    url: "https://www.wealthengine.com/",
    img: "/assets/we.png",
    role: "Independent Contractor",
    duration: "March 2014 &mdash; Feb 2019",
    pointers: [
      "Setup and manage AWS infrastructure",
      "The DevOps Guy, and release engineer",
      "Backend application development (Java)",
      "Reliability engineer for NoSQL databases: Cassandra, MongoDB, and ElasticSearch",
    ],
    techStack: [
      "AWS",
      "Cassandra",
      "MongoDB",
      "ElasticSearch",
      "Nagios",
      "Java",
    ],
  },
];

var petProjects = [
  {
    title: "Call Me Maybe",
    desc:
      "The idea is to provide restaurants a call bell similar to the one we have in the airplanes but better. Apart from getting rid of the " +
      "hand raising, turning your neck and spotting a service person to passby, you can just press the orb on the table and it lights up. " +
      "Not just a visual indicator. The table service person will be notified, the restaurant's main waiting will be appended; and the time " +
      "it takes to serve you is observed.",
    status:
      "Ideation completed. Tech is ready. Business plan ready. Funding and sales partner required.",
  },
  {
    title: "Deskter",
    desc:
      "Highly customizable automatic standing desks. Essentially, Uplift desks in India, but you can choose fixed height legs too!",
    status: "Business plan ready. Needs funding.",
  },
  {
    title: "Pawr",
    desc:
      "A free for all appointment management system for vets, that also allows you maintain profiles " +
      "of your pet, help rescue animals, and connect animal lovers.",
    status: "Ideation phase. Needs funding to keep it free and open.",
  },
];

// --- render the data ---
// Helper function that generate on and off stars and hearts
var getStars = (stars, iconClass) =>
  [...Array(5).keys()]
    .map((i) =>
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
      (s) => `
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
      (t) =>
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
      (t) =>
        ` <div class="mini-badge">
            <div>${t.title}</div>
            <div>${getStars(t.expertise, "fa-star")}</div>
        </div>`
    )
    .join("");

  // 4. render clientele
  document.getElementById("clients").innerHTML = clients
    .map(
      (c) =>
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
              ${c.pointers.map((p) => `<li>${p}</li>`).join("")}
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
      (p) => `
    <div class="pet-project">
        <div><h3>${p.title}</h3></div>
        <div>${p.desc}</div>
        <div>STATUS: ${p.status}</div>
      </div>`
    )
    .join("");

  // 6. set random favicons
  var rand = getRandom("favicon", 18) + 1;
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

var isDarkMode = true;
var isModeForced = false;
var setTheme = (setDark) => {
  let root = document.documentElement;

  if (setDark) {
    root.style.setProperty("--odd-bg", "rgba(6, 30, 35, 1)");
    root.style.setProperty("--odd-txt", "rgba(255, 255, 255, 0.7)");
    root.style.setProperty("--odd-highlight", "rgba(183, 7, 0, 1)");
    root.style.setProperty("--even-bg", "rgba(9, 67, 81, 1)");
    root.style.setProperty("--even-txt", "rgba(255, 255, 255, 0.8)");
    root.style.setProperty("--even-highlight", "rgba(255, 126, 7, 1)");
    root.style.setProperty("--link", "rgba(255, 66, 6, 1)");
    root.style.setProperty("--link-hover", "rgba(255, 126, 7, 1)");
    root.style.setProperty("--img-border", "rgba(255, 126, 7, 1)");
  } else {
    root.style.setProperty("--odd-bg", "papayawhip");
    root.style.setProperty("--odd-txt", "black");
    root.style.setProperty("--odd-highlight", "red");
    root.style.setProperty("--even-bg", "red");
    root.style.setProperty("--even-txt", "papayawhip");
    root.style.setProperty("--even-highlight", "black");
    root.style.setProperty("--link", "black");
    root.style.setProperty("--link-hover", "red");
    root.style.setProperty("--img-border", "papayawhip");
  }
};

var toggleTheme = (isButtonClick = false) => {
  if (isButtonClick) {
    isModeForced = true;
  }

  isDarkMode = !isDarkMode;
  setTheme(isDarkMode);
  var addClass = "fa-moon";
  var removeClass = "fa-sun";
  if (isDarkMode) {
    addClass = "fa-sun";
    removeClass = "fa-moon";
  }
  var modeNode = document.getElementById("mode").classList;
  modeNode.add(addClass);
  modeNode.remove(removeClass);
};

console.log(`
Commenting out some cool code
             /\\_/\\
            ( o.o )
             > ^ <
NO SUPPORT FOR AMBIENCE LIGHT YET`);
var setThemeBasedOnAmbientLight = () => {
  // if ("ondevicelight" in window) {
  //   window.addEventListener("devicelight", function(event) {
  //     var darkButNoDarkMode = event.value <= 50 && !isDarkMode;
  //     var brightButInDarkMode = event.value > 50 && isDarkMode;
  //     if (darkButNoDarkMode || brightButInDarkMode) {
  //       toggleTheme();
  //     }
  //   });
  // } else {
  var hr = new Date().getHours();
  var isItDarkOutside = hr > 18 || hr < 7;
  var darkOutSideButNoDarkTheme = isItDarkOutside && !isDarkMode;
  var brightOutsideButInDarkMode = !isItDarkOutside && isDarkMode;

  if (darkOutSideButNoDarkTheme || brightOutsideButInDarkMode) {
    toggleTheme();
  }
  // }
};

window.addEventListener("load", setThemeBasedOnAmbientLight);

setInterval(() => {
  if (!isModeForced) {
    setThemeBasedOnAmbientLight();
  }
}, 5000);
