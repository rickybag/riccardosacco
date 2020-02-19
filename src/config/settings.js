export default {
  name: "Riccardo Sacco",
  avatar: "/img/avatar.png",
  bio:
    "Hi, my name is Riccardo Sacco and I'm a full stack developer. Welcome to my website!",
  job: "Full Stack Developer",
  description:
    "I’ve been passionate about programming since I was 13 and I love to learn. I believe in the learn-by-doing approach because I’ve always learned from mistakes.<br/> I love my job so much that it doesn’t feel like I'm working. Sometimes I make decisions, sometimes I change my mind, but everytime I get to the best solution.",
  social: [
    {
      name: "facebook",
      link: "https://www.facebook.com/riccardo.sacco.90",
      color: "#3b5998"
    },
    {
      name: "github",
      link: "https://github.com/rickybag/",
      color: "#333"
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/riccardo-sacco",
      color: "#0976b4"
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/rickysacco99/",
      color:
        "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
    }
  ],
  contacts: [
    {
      value: "+39 339 1848457",
      link: "tel:+393391848457",
      icon: "fa fa-phone-square-alt"
    },
    {
      value: "riccardo@itwebservices.it",
      link: "mailto:riccardo@itwebservices.it",
      icon: "fa fa-envelope-square"
    }
  ],
  navigation: [
    {
      path: "/",
      icon: "fa fa-user",
      label: "About Me",
      component: "About"
    },
    {
      path: "/portfolio",
      icon: "fa fa-laptop-code",
      label: "Portfolio",
      component: "Portfolio"
    },
    {
      path: "/resume",
      icon: "fa fa-file-alt",
      label: "Resume",
      component: "Resume"
    },
    {
      path: "/contact",
      icon: "fa fa-envelope-open-text",
      label: "Contact",
      component: "Contact"
    }
  ],
  skills: {
    title: "What I do",
    subtitle:
      "I have more than 5 years of experience developing frontend & backend applications for my clients. Below is a quick overview of my main technical skill sets and technologies I use.",
    list: [
      {
        name: "HTML5 & CSS3",
        icons: [
          { icon: "fab fa-html5 mr-1", color: "#DE6E3C" },
          { icon: "fab fa-css3-alt ml-1", color: "#53A7DC" }
        ]
      },
      {
        name: "JavaScript",
        icons: [{ icon: "fab fa-js-square", color: "#F1DE4F" }]
      },
      {
        name: "React & React Native",
        icons: [{ icon: "fab fa-react", color: "#62D4FA" }]
      },
      {
        name: "iOS & Android",
        icons: [
          { icon: "fab fa-app-store-ios mr-2", color: "#5fbef1" },
          { icon: "fab fa-google-play ml-2", color: "#75d58e" }
        ]
      },
      {
        name: "Node.js & npm",
        icons: [
          { icon: "fab fa-node-js mr-2", color: "#3B7EEB" },
          { icon: "fab fa-npm ml-2", color: "#b9261a" }
        ]
      },
      {
        name: "Python",
        icons: [{ icon: "fab fa-python", color: "#5769b8" }]
      },
      {
        name: "PHP & Laravel",
        icons: [
          { icon: "fab fa-php mr-2", color: "#787caf" },
          { icon: "fab fa-laravel ml-2", color: "#e65d47" }
        ]
      },
      {
        name: "Sass & Boostrap",
        icons: [
          { icon: "fab fa-sass mr-1", color: "#BF6B97" },
          { icon: "fab fa-bootstrap ml-1", color: "#524078" }
        ]
      },
      {
        name: "Git & Github",
        icons: [
          { icon: "fab fa-git mr-2", color: "#dc5c40" },
          { icon: "fab fa-github-square ml-2", color: "#eee" }
        ]
      },
      {
        name: "Trello & Confluence",
        icons: [
          { icon: "fab fa-trello mr-2", color: "#387ac2" },
          { icon: "fab fa-confluence ml-2", color: "#427ced" }
        ]
      },
      {
        name: "Figma & Sketch",
        icons: [
          { icon: "fab fa-figma mr-2", color: "#9761f7" },
          { icon: "fab fa-sketch ml-2", color: "#f0b13e" }
        ]
      },
      {
        name: "DigitalOcean & AWS",
        icons: [
          { icon: "fab fa-digital-ocean mr-2", color: "#3b81f7" },
          { icon: "fab fa-aws ml-2", color: "#ef9d38" }
        ]
      }
    ]
  },
  portfolio: {
    title: "My portfolio",
    subtitle: "Some of my works",
    projects: [
      {
        title: "Loyable",
        subtitle: "Digital loyalty platform",
        client: "Loyable Sagl",
        screenshots: ["loyable1.png"],
        technologies: [
          {
            name: "Frontend",
            values: ["HTML", "CSS", "React"]
          },
          {
            name: "Backend",
            values: ["NodeJS", "Express", "MongoDB"]
          }
        ],
        description: ""
      },
      {
        title: "Evaluation Form",
        subtitle: "Questionario digitale feedback per eventi",
        client: "ADM Media Consulting",
        screenshots: ["evaluationform1.png"],
        technologies: [
          {
            name: "Frontend",
            values: ["HTML", "CSS", "JavaScript"]
          },
          {
            name: "Backend",
            values: ["PHP", "MySQL"]
          }
        ],
        description: ""
      },
      {
        title: "Live Event",
        subtitle: "Piattaforma per la gestione di eventi live streaming",
        client: "ADM Media Consulting",
        screenshots: ["live-event1.png"],
        technologies: [
          {
            name: "Frontend",
            values: ["HTML", "CSS", "JavaScript"]
          },
          {
            name: "Backend",
            values: ["PHP", "MySQL"]
          }
        ],
        description: ""
      },
      {
        title: "Controllo Ore",
        subtitle: "Gestionale controllo ore integrato con SAP",
        client: "Veragouth",
        screenshots: ["controllo-ore1.png"],
        technologies: [
          {
            name: "Frontend",
            values: ["HTML", "CSS", "JavaScript"]
          },
          {
            name: "Backend",
            values: ["PHP", "MySQL"]
          }
        ],
        description: ""
      },
      {
        title: "Gestione Anagrafica",
        subtitle: "Piattaforma gestione anagrafica multiutente",
        client: "SG Lugano",
        screenshots: ["anagrafica1.png"],
        technologies: [
          {
            name: "Frontend",
            values: ["HTML", "CSS", "JavaScript"]
          },
          {
            name: "Backend",
            values: ["PHP", "MySQL"]
          }
        ],
        description: ""
      },
      {
        title: "Web Catalog",
        subtitle: "Catalogo digitale con integrazione e-commerce",
        client: "Peirano Vivai",
        screenshots: ["catalogo-piante1.png"],
        technologies: [
          {
            name: "Frontend",
            values: ["HTML", "CSS", "Bootstrap", "JavaScript"]
          },
          {
            name: "Backend",
            values: ["PHP", "MySQL"]
          }
        ],
        description: ""
      },
      {
        title: "Gestione Flotta",
        subtitle: "Piattaforma per organizzazione flotta veicoli",
        client: "Romantic Tour",
        screenshots: ["gestionale-bus1.png"],
        technologies: [
          {
            name: "Frontend",
            values: ["HTML", "CSS", "Bootstrap", "JavaScript"]
          },
          {
            name: "Backend",
            values: ["PHP", "MySQL"]
          }
        ],
        description: ""
      },
      {
        title: "Modulo Preventivo",
        subtitle: "Modulo per richiesta preventivo prodotti",
        client: "Ghielmimport",
        screenshots: ["richiesta-offerta1.png"],
        technologies: [
          {
            name: "Frontend",
            values: ["HTML", "CSS", "Bootstrap", "JavaScript"]
          },
          {
            name: "Backend",
            values: ["NodeJS", "Express"]
          }
        ],
        description: ""
      },
      {
        title: "REX.CH",
        subtitle: "Sito web istituzionale",
        client: "REX Articoli Tecnici SA",
        screenshots: ["rex1.png"],
        technologies: [
          {
            name: "CMS",
            values: ["WordPress", "Elementor"]
          }
        ],
        description: ""
      }
    ]
  },
  resume: {
    title: "My resume",
    name: "Riccardo Sacco",
    job: "Full Stack Developer",
    contacts: [
      {
        value: "+39 339 1848457",
        link: "tel:+393391848457",
        icon: "fa fa-phone-square-alt"
      },
      {
        value: "riccardo@itwebservices.it",
        link: "mailto:riccardo@itwebservices.it",
        icon: "fa fa-envelope-square"
      },
      {
        value: "riccardosacco.com",
        link: "https://riccardosacco.com",
        icon: "fa fa-globe"
      },
      {
        value: "Milan, Italy",
        link:
          "https://www.google.it/maps/place/IT+Web+Services/@45.4265459,9.2003332,17z/data=!3m1!4b1!4m5!3m4!1s0x4786c45b08e126cb:0x29944543e6792cb7!8m2!3d45.4265459!4d9.2025219",
        icon: "fa fa-map-marker-alt"
      }
    ],
    avatar: "img/avatar.png",
    bio:
      "I’ve been passionate about programming since I was 13 and I love to learn. I believe in the learn-by-doing approach because I’ve always learned from mistakes. <br/>I love my job so much that it doesn’t feel like I'm working. Sometimes I make decisions, sometimes I change my mind, but everytime I get to the best solution.",
    works: {
      title: "Work experiences",
      items: [
        {
          title: "Lead Instructor",
          company: "Wild Code School",
          place: "Milan, Italy",
          icon: "wildcodeschool.png",
          from: new Date("2020-01-01"),
          to: new Date()
        },
        {
          title: "Full Stack Developer",
          company: "IT Web Services",
          icon: "itwebservices.png",
          from: new Date("2017-10-01"),
          to: new Date()
        },
        {
          title: "IT Consultant",
          company: "IT Professional Services SAGL",
          place: "Lugano, Switzerland",
          icon: "itproserv.png",
          from: new Date("2017-06-01"),
          to: new Date()
        },
        {
          title: "IT Manager",
          company: "IT Web Group S.r.l.s",
          icon: "itwebgroup.jpeg",
          from: new Date("2018-03-01"),
          to: new Date("2019-10-01")
        },
        {
          title: "E-commerce Manager",
          company: "CLASSIC Brand Milan",
          icon: "classicbrandmilan.png",
          from: new Date("2018-01-01"),
          to: new Date("2019-06-01")
        },
        {
          title: "Business Owner",
          company: "HeverHosting",
          icon: "heverhosting.png",
          from: new Date("2014-02-01"),
          to: new Date("2018-11-01")
        }
      ]
    },
    skills: {
      title: "Skills",
      items: [
        {
          topic: "Technical",
          list: [
            {
              value: "HTML5",
              icon: {
                name: "fab fa-html5",
                color: "#DE6E3C"
              }
            },
            {
              value: "CSS3",
              icon: {
                name: "fab fa-css3-alt",
                color: "#53A7DC"
              }
            },
            {
              value: "JavaScript",
              icon: {
                name: "fab fa-js-square",
                color: "#F1DE4F"
              }
            },
            {
              value: "React & React Native",
              icon: {
                name: "fab fa-react",
                color: "#62D4FA"
              }
            },
            {
              value: "Node.js",
              icon: {
                name: "fab fa-node-js",
                color: "#3B7EEB"
              }
            },
            {
              value: "Python",
              icon: {
                name: "fab fa-python",
                color: "#5769b8"
              }
            },
            {
              value: "PHP",
              icon: {
                name: "fab fa-php",
                color: "#787caf"
              }
            }
          ]
        },
        {
          topic: "Professional",
          list: [
            { value: "Project management" },
            { value: "Business development" },
            { value: "E-commerce" },
            { value: "Mobile app development" },
            { value: "Cloud computing" },
            { value: "Big data" },
            { value: "Machine learning" },
            { value: "Internet of Things" },
            { value: "3D Printing" }
          ]
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Politecnico di Milano",
          title: "Ingegneria Informatica",
          icon: "polimi.png",
          from: 2019,
          to: 2022
        },
        {
          school: "Istituto Maria Ausiliatrice",
          title: "Diploma Liceo Scientifico",
          icon: "maria-ausiliatrice.png",
          from: 2012,
          to: 2017
        }
      ]
    },
    languages: {
      title: "Languages",
      items: [
        {
          language: "Italian",
          level: "Native",
          icon: "italy"
        },
        {
          language: "English",
          level: "Professional",
          icon: "united-kingdom"
        },
        {
          language: "French",
          level: "Working",
          icon: "france"
        },
        {
          language: "Spanish",
          level: "Working",
          icon: "spain"
        }
      ]
    },
    interests: {
      title: "Interests",
      items: [
        { value: "Traveling" },
        { value: "Fitness" },
        { value: "Adventure" },
        { value: "Motorcycle" },
        { value: "Skiing" },
        { value: "Drone Photography" }
      ]
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Loyable",
          icon: "loyable.png",
          subtitle:
            "Digital loyalty platform for businesses to simplify stamp-driven promotions"
        },
        {
          title: "ECOLab",
          icon: "ecolab.png",
          subtitle:
            "Virtualization of computers in school laboratories, to save energy and be self-sustained with solar panels"
        },
        {
          title: "3D Printing Laboratory",
          icon: "3dprinting.png",
          subtitle:
            "3D Printing laboratory in Milan, funded by ACLI, where we do courses for children & students"
        }
      ]
    }
  },
  contact: {
    title: "Contact me",
    subtitle:
      "Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email."
  },
  businessCard: {
    header: {
      name: "Riccardo Sacco",
      profession: "IT Consultant",
      logo: "/img/itwebservices.svg"
    },
    contacts: [
      {
        key: "Mobile:",
        value: "+39 3391848457"
      },
      {
        key: "Email:",
        value: "riccardo@itwebservices.it"
      }
    ],
    footer: {
      company: "IT Web Services",
      address: "Via Gastone Da Foix 2,<br/>20141 Milano",
      website: "https://itwebservices.it",
      alias: "itwebservices.it"
    }
  }
};
