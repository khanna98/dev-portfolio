/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mayank Khanna",
  title: "Hi all, I'm Mayank",
  subTitle:
    "A passionate software developer, problem solver, and technology enthusiast who loves learning new things. A quick learner with zeal and motivation to succeed, I have experience working as a Full Stack Developer, Voice App Developer, and DevOps Engineer (SRE). I look forward to opportunities that will help me grow and where I can contribute to the growth of the organization with my technical and management skills.",
  resumeLink:
    "https://drive.google.com/file/d/1SY4jkAAlKny1kTRT-5BiH1sbFcoI36zO/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khanna98",
  linkedin: "https://www.linkedin.com/in/khanna98/",
  gmail: "mkhanna98.dev@gmail.com",
  gitlab: "https://gitlab.com/mayank.khanna.98",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@iammayank",
  instagram: "https://instagram.com/_mayankkhanna",
  stackoverflow: "https://stackoverflow.com/users/10852834/mayank-khanna",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I build Cloud Infrastructure and Softwares that makes your life easy and work enjoyable.",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Build and Deploy a complete working production app from scratch.",
    "⚡ Help you save cost on cloud infrastructure.",
    "⚡ Develop good looking and informative dashboards for monitoring and logging.",
    "⚡ Setup Cloud Infrastructure on AWS, GCP or any cloud provider.",
    "⚡ Manage Cloud Infrastructure using Terraform (IAC).",
    "⚡ Automate your deployments using CI/CD, Jenkins etc.",
    "⚡ Amaze you with my coding and devOps skills.",
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate SWE | SRE (DevOps and Infrastructure)",
      company: "UST BlueConch Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/bct.jpeg"),
      date: "August 2020 – Present",
      desc: "I am currently working as an SRE for Uplight, where I automate tasks, take care of the Cloud Infrastructure and make deployments smooth and easy.",
      descBullets: [
        "Working as the lead in the GCP Migration for Orchestrate Engineering product, where I see and manage the infrastructure that needs to be set up and how to migrate the data and products.",
        "Implementing CI/CD for the tasks and deployments using CircleCI",
        "Improving and maintaining legacy Jenkins Pipelines to be used for deployments and enabling logs etc.",
        "Adding IAC features to make sure that all the infra related changes are made using terraform.",
        "Creating new and robust dashboards for monitoring and logging in Splunk Observability Cloud.",
        "Working as Incident Manager for On-Call rotation.",
        "Adding new features for the new GCP Infrastructure being set up using IAC - Terraform.",
        "Active member in the C&I Migration using AWS DMS.",
        "Creating new tenants on the Production environment for the customers.",
        "Giving regular demos of the new technologies being used and new work that is being done.",
        "I worked on the AWS Infrastructure enhancement and monitoring cost for the resources.",
        "Helped in solving a critical production issue that saved UPLIGHT $200K per month cost increase.",
        "I wrote a script to add tags to all the instances be it EC2, S3, Lambda, or DynamoDB , which helped us monitor costs better and eventually helped save around $ 10k per year.",
        "I also made various monitoring dashboards in Looker and CloudWatch.",
      ]
    },
    {
      role: "SDE Intern | Full Stack Developer",
      company: "GoVocal.AI",
      companylogo: require("./assets/images/govocal.jpeg"),
      date: "May 2019 – June 2020",
      desc: "I have been working as a Software Developer with in-demand skills and technologies. I have made many Voice Apps and also worked on Mobile Apps using React-Native.",
      descBullets: [
        "Developed software lifecycle products from vision through successful deployment.",
        "Successfully delivered Voice App for Tata Sky on Actions on Google (Google Assistant) and Amazon Alexa (Alexa Skill) into Production.",
        "Successfully upgraded an android app, Quiddity using React Native. It is a book summaries app where you can read and listen to the summaries of the Great and Best Selling books for free.",
        "Reviewed, monitored, and repaired any changed code for quality, adherence to standards, and potential performance effects on compatible systems.",
        "Managed software documentation by testing and validating the accuracy of all new applications to ensure user‐friendliness and productivity.",
        "Worked with Amazon AWS Lambda and Cloud‐watch for the deployment and testing of the Voice Apps in Production.",
        "Wrote the request logger for Systematically logging the request and debugging the errors using Winston.",
        "Designed new software applications by using object‐oriented languages like JavaScript.",
        "Altered, updated, and enhanced existing systems and applications after performing troubleshooting measures to determine the issue."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
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
      title: "Spark Award - UST BlueConch Technologies",
      subtitle:
        "Got appreciation for being the spark in the team and motivating them to do better and efficient work.",
      image: require("./assets/images/14595-thumbs-up.gif"),
      footerLink: [
        { name: "Spark Award" },
        { name: "#Leadership" },
        { name: "#Appreciation" },
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
        { name: "Pat On the Back" },
        { name: "#Appreciation" },
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
        { name: "Jul 2020 - No Expiration" },
        { name: "Udemy", url: "https://www.udemy.com" },
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
        { name: "Jun 2020 - No Expiration" },
        { name: "Udemy", url: "https://www.udemy.com" },
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
        { name: "May 2020 - No Expiration" },
        { name: "Udemy", url: "https://www.udemy.com" },
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
        { name: "Apr 2020 - No Expiration" },
        { name: "Udemy", url: "https://www.udemy.com" },
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
        { name: "Jun 2019 - No Expiration" },
        { name: "Coding Ninjas", url: "https://www.codingninjas.in" },
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
        { name: "Mar 2018 - No Expiration" },
        { name: "Udacity", url: "https://www.udacity.com" },
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
        { name: "Jun 2019 - No Expiration" },
        { name: "upGrad", url: "https://www.upgrad.com" },
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
  subtitle:
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
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
