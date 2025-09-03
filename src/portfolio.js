/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mayank Khanna",
  title: "Mayank Khanna",
  subTitle:
    "Senior DevOps & Cloud Engineer with 5+ years of experience in building scalable infrastructure and full-stack applications. I specialize in automating complex workflows and optimizing systems for performance and cost-efficiency.",
  resumeLink: "",
  // "https://drive.google.com/file/d/1SY4jkAAlKny1kTRT-5BiH1sbFcoI36zO/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khanna98",
  linkedin: "https://www.linkedin.com/in/khanna98/",
  gmail: "mail@mayankkhanna.dev",
  gitlab: "https://gitlab.com/mayank.khanna.98",
  // medium: "https://medium.com/@iammayank",
  instagram: "https://instagram.com/moon.light.adventures",
  // stackoverflow: "https://stackoverflow.com/users/10852834/mayank-khanna",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Expertise",
  subTitle:
    "Adept at building scalable cloud infrastructure and intuitive software solutions that enhance user experience and drive operational efficiency.",
  skills: [
    "⚡ Architecting and developing highly interactive, responsive user interfaces for web and mobile applications.",
    "⚡ Leading the end-to-end development and deployment of production-ready applications from concept to launch.",
    "⚡ Implementing cost-optimization strategies to significantly reduce cloud infrastructure expenditures on AWS, GCP, and Azure.",
    "⚡ Designing and developing insightful dashboards for comprehensive system monitoring, logging, and observability.",
    "⚡ Provisioning and managing robust cloud infrastructure using Terraform for predictable, version-controlled deployments (IaC).",
    "⚡ Engineering and automating CI/CD pipelines to streamline development workflows and accelerate deployment cycles."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIT Guwahati",
      logo: require("./assets/images/iit-logo.png"),
      subHeader: "Advanced PG Certification in Cloud & Devops",
      duration: "September 2021 - Present",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Chitkara University",
      logo: require("./assets/images/cu-logo.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science & Technology",
      duration: "June 2016 - June 2020",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design (React/Angular/React-Native)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (MongoDB), MySQL",
      progressPercentage: "90%"
    },
    {
      Stack: "AWS/GCP/Cloud Computing",
      progressPercentage: "85%"
    },
    {
      Stack: "Python, Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Jenkins, Ansible, Terraform, Chef",
      progressPercentage: "80%"
    },
    {
      Stack: "Docker, Kubernetes",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Site Reliability Engineer II",
      company: "Uplight",
      companylogo: require("./assets/images/uplight-logo.png"),
      date: "February 2024 – Present",
      desc: "",
      descBullets: [
        "Orchestrated the end-to-end automation of Autogrid deployments, significantly reducing manual intervention and deployment time.",
        "Streamlined DNS management by implementing a system for creating and updating records entirely through code, improving consistency and reliability.",
        "Engineered an automated notification system for AWS Health events, integrating with PagerDuty (PD) to ensure immediate alerting and faster incident response.",
        "Collaborated with system architects on strategic infrastructure planning to enhance scalability and resilience, while also mentoring junior engineers on best practices.",
        "Validated expertise by achieving the HashiCorp Certified: Terraform Associate certification."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "UST.",
      companylogo: require("./assets/images/ust-logo.png"),
      date: "August 2020 – January 2024",
      desc: "",
      descBullets: [
        "Led the strategic migration of a core product to Google Cloud Platform (GCP), managing all infrastructure as code using Terraform.",
        "Engineered and maintained CI/CD pipelines using CircleCI and Jenkins to automate deployments and improve software delivery speed.",
        "Enhanced platform stability and optimized cloud costs by resolving critical production incidents and implementing robust monitoring solutions."
      ]
    },
    {
      role: "SDE Intern | Full Stack Developer",
      company: "GoVocal.AI",
      companylogo: require("./assets/images/govocal.jpeg"),
      date: "May 2019 – June 2020",
      desc: "",
      descBullets: [
        "Engineered and launched cross-platform mobile applications using React Native, ensuring a seamless user experience across both iOS and Android.",
        "Developed and deployed innovative voice applications for Amazon Alexa and Google Assistant, creating intuitive, hands-free user experiences."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Terraform Certified Associate",
      subtitle: "Got certified as Terraform Associate (003).",
      image: require("./assets/images/Terraform.png"),
      footerLink: [
        {
          name: "HashiCorp Certified: Terraform Associate (003)",
          url: "https://www.credly.com/badges/c8c7a237-255a-49bf-83ba-632ef71dee10"
        },
        {name: "#Terraform"},
        {name: "#Certified"},
        {
          name: "#Infrastructure As Code"
        }
      ]
    },
    {
      title: "Spark Award - UST BlueConch Technologies",
      subtitle:
        "Got appreciation for being the spark in the team and motivating them to do better and efficient work.",
      image: require("./assets/images/14595-thumbs-up.gif"),
      footerLink: [
        {name: "Spark Award"},
        {name: "#Leadership"},
        {name: "#Appreciation"},
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/13Efi2NP1QH-PB-tqhV0u-cMc0wQnz1MP/view?usp=sharing"
        }
      ]
    },
    {
      title: "Pat on Back - Uplight",
      subtitle:
        "Got appreciation for the work I did as a Associate Software Enginner.",
      image: require("./assets/images/61147-excellent.gif"),
      footerLink: [
        {name: "Pat On the Back"},
        {name: "#Appreciation"},
        {
          name: "Certificate 2021",
          url: "https://drive.google.com/file/d/13Efi2NP1QH-PB-tqhV0u-cMc0wQnz1MP/view?usp=sharing"
        },
        {
          name: "Certificate 2020",
          url: "https://drive.google.com/file/d/1mConZpXwpeo0j8wZ-X1jtR2SD3aPRo5o/view?usp=sharing"
        }
      ]
    },
    {
      title: "Python: Zero to Hero",
      subtitle: "Completed Certifcation from Udemy for Python basics",
      image: require("./assets/images/python-logo.png"),
      footerLink: [
        {name: "Jul 2020 - No Expiration"},
        {name: "Udemy", url: "https://www.udemy.com"},
        {
          name: "Certification Credntials",
          url: "https://www.udemy.com/certificate/UC-9a058d13-f3a1-4455-aa9c-dd0255ad527c/"
        }
      ]
    },
    {
      title: "React: Complete Developer Guide",
      subtitle: "Completed Certifcation from Udemy for React",
      image: require("./assets/images/react-logo.png"),
      footerLink: [
        {name: "Jun 2020 - No Expiration"},
        {name: "Udemy", url: "https://www.udemy.com"},
        {
          name: "Certification Credntials",
          url: "https://www.udemy.com/certificate/UC-ec858918-b82d-432f-962c-b7476d87244f/"
        }
      ]
    },
    {
      title: "Nodejs: Complete Developer Course",
      subtitle: "Completed Certifcation from Udemy for Nodejs",
      image: require("./assets/images/node-logo.png"),
      footerLink: [
        {name: "May 2020 - No Expiration"},
        {name: "Udemy", url: "https://www.udemy.com"},
        {
          name: "Certification Credntials",
          url: "https://www.udemy.com/certificate/UC-add3b90c-f4da-416c-9b92-35c5f14aad66/"
        }
      ]
    },
    {
      title: "MongoDB: Complete Developer Guide",
      subtitle: "Completed Certifcation from Udemy for MongoDB",
      image: require("./assets/images/MongoDB-Logo.png"),
      footerLink: [
        {name: "Apr 2020 - No Expiration"},
        {name: "Udemy", url: "https://www.udemy.com"},
        {
          name: "Certification Credntials",
          url: "https://www.udemy.com/certificate/UC-f17f0ea5-dcfe-4dfe-8b69-89a30a3d6f93/"
        }
      ]
    },
    {
      title: "Data Structures in JAVA",
      subtitle: "Completed Certifcation from Coding Ninjavs for DS in JAVA ",
      image: require("./assets/images/coding-ninja-logo.png"),
      footerLink: [
        {name: "Jun 2019 - No Expiration"},
        {name: "Coding Ninjas", url: "https://www.codingninjas.in"},
        {
          name: "Certification Credntials",
          url: "https://www.codingninjas.in/verify/c1e90177b1930cf6"
        }
      ]
    },
    {
      title: "Front-end Nanodegree I & II",
      subtitle: "Completed nanodegrees from Udacity",
      image: require("./assets/images/udacity-logo.png"),
      footerLink: [
        {name: "Mar 2018 - No Expiration"},
        {name: "Udacity", url: "https://www.udacity.com"},
        {
          name: "Certification Credntials I",
          url: "https://drive.google.com/file/d/1S7NrzYGwVdzE09T9gkIxfOBJOMWBCdBe/view?usp=sharing"
        },
        {
          name: "Certification Credntials II",
          url: "https://drive.google.com/file/d/1bX-pPJv2xKblK9tSgbkqKI_lH1qwukLK/view?usp=sharing"
        }
      ]
    },
    {
      title: "Acadview: Core JAVA Development",
      subtitle:
        "Completed training from Acadview (Now upGrad) for basics of JAVA ",
      image: require("./assets/images/upgrad-logo.png"),
      footerLink: [
        {name: "Jun 2019 - No Expiration"},
        {name: "upGrad", url: "https://www.upgrad.com"},
        {
          name: "Certificate Credentials",
          url: "https://drive.google.com/file/d/1_EfucnNr6j1JUnEQp5Y7ZyEzqgfavIAv/view?usp=sharing"
        },
        {
          name: "Letter of Recommendation",
          url: "https://drive.google.com/file/d/1PsysrFHeQvoNk_LgJFuuXJUcPlg2ZD1m/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write about coding, articles, and poetry.",

  blogs: [
    {
      url: "https://iammayank.medium.com/find-unique-characters-in-a-string-cc322a1f7ed8",
      title: "Find unique characters in a given string",
      description:
        "A very common interview question that is a must for each and everyone preparing for interviews. This shows..."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all."
};

// Twitter Section

const twitterDetails = {
  userName: "khannamayank98", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
