export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills"},
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/modern-portfolio/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Experienced in working with globally distributed teams.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[40vh] select-none",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My Resume",
      description: "Are you hiring? Check out ",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex",
      imgClassName: "",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Software developer driven by a passion for Technology.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/modern-portfolio/grid.svg",
      spareImg: "/modern-portfolio/b4.svg",
    },
  
    {
      id: 5,
      title: "Clean Code and Modern Design",
      description: "Passionate about transforming ideas into reality.",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/modern-portfolio/b5.svg",
      spareImg: "/modern-portfolio/grid.svg",
    },
    {
      id: 6,
      title: "Ready to collaborate on your next idea?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
        {
      id: 1,
      title: "Amazon Clone",
      des: "Amazon Clone is a personal portfolio project designed to simulate an e-commerce platform with an intuitive interface and core shopping features.",
      img: "/modern-portfolio/amazon.png",
      iconLists: ["/re.svg",  "/css.svg", "/js.svg", "/mongo.svg", "/nodejs.svg"],
      link: "github.com/balagowda/Mern-Stack-web",
    },
    {
      id: 2,
      title: "YouTube Clone",
      des: "Simulate a video-sharing platform and understand real-world app flow.",
      img: "/modern-portfolio/youtube.png",
      iconLists: ["/re.svg","/css.svg", "/js.svg", "/firebase.svg"],
      link: "balagowda-yt-clone.web.app",
    },
    {
      id: 3,
      title: "Customer-Returns",
      des: "Automated System for Material Return from Customer.",
      img: "/modern-portfolio/return.png",
      iconLists: ["/re.svg", "/css.svg", "/js.svg", "/firebase.svg"],
      link: "customerreturn-97bdd.web.app/",
    },
  ];
  
  export const workExperience = [
  {
    id: 1,
    title: "Software Engineer at TCS",
    desc: "<ul><li>Build scalable, maintainable APIs using Spring Boot and MySQL.</li><li>Enable reliable microservice communication with Feign and service discovery.</li><li>Deliver end-to-end backend solutions including testing and API validation.</li><li>Collaborate effectively in Agile teams to ensure high-quality delivery.</li></ul>",
    className: "md:row-span-2",  // First item spans both rows in col 1 on md+
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Open Source",
    desc: "My open-source contributions focus on improving user experience, enhancing front-end functionality, and collaborating with the community through effective debugging and knowledge sharing",
    className: "",  // Flows to col 2, row 1
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Project",
    desc: "Developed a web application for a client, handling both design and implementation using React.",
    className: "",  // Flows to col 2, row 2
    thumbnail: "/exp3.svg",
  },
];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/modern-portfolio/git.svg",
      href: "https://github.com/balagowda",
    },
    {
      id: 2,
      img: "/modern-portfolio/twit.svg",
      href: "https://x.com/balagowda_02",
    },
    {
      id: 3,
      img: "/modern-portfolio/link.svg",
      href: "https://www.linkedin.com/in/balachandregowda-p-20034a224/",
    },
  ];
