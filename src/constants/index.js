export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "An ecommerce website allowing users to register and purchase their favourate t-shirt.",
    subDescription: [
      "Built a scalable Ecommerce website using Django with React.",
      "Implemented secure authentication and database management using Django",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems such as YOCO, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ecommerce.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Django",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "HTML5",
        path: "/assets/logos/html.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Sales Admin Dashboard",
    description:
      "Real-Time Sales Analytics: Interactive dashboard visualizing policy sales, premiums, and claims data with dynamic charts (e.g., D3.js or Chart.js)..",
    subDescription: [
      ".NET Core Backend: Secure RESTful APIs for policy management, customer data processing, and commission tracking.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/dashboard.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Todoist website replica",
    description:
      "A lightweight to do list web/app designed for tracking tasks.",
    subDescription: [
      "Built with python and HTML",
      "styled using Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps.",
      "Included a delete, add feature ",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/todoist.jpg",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 3,
        name: "Bootstrap",
        path: "/assets/logos/bootstrap.png",
      },
    ],
  },
  {
    id: 5,
    title: "React Portfolio",
    description:
      "Built a fully responsive React Portfolio Website with React, vite and node.",
    subDescription: [
      "Developed a theme using HTML5, CSS3, and JavaScript.",
      "Intergrated a Light & Dark mode theme switching.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/portfolio.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Inflo Social App",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built with Next.js App Router, Prisma, Postgres, Clerk and Typescript for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
      "Developed APIs using Next.js Route Handlers to handle requests and interact with the backend.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/inflo.jpg",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/assets/projects/nextjs.jpg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/kopano-tshikare/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kopano_tshikare/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Shapapiece Ecommerce",
    date: "2021-2023",
    contents: [
      "RESTful API/GraphQL and Handles product, user, and order data.",
      "Review & Ratings System – User-generated feedback",
      "integrates intuitive UI/UX with robust backend functionality to deliver a smooth online shopping journey.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Admin Sales Dashboard",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Digital Media Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Katlego",
    username: "@katli",
    body: "I've never seen anything like this before. It's amazing. It's the one.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Nkagisang",
    username: "@kg",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Matt",
    username: "@matt",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Charmel",
    username: "@mel",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bobeezy",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charles",
    username: "@charles",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Faith",
    username: "@Faith",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Tumisang",
    username: "@Tumi",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
