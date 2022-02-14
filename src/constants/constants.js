export const projects = [
    {
        title: "Story Time",
        description:
            'A full-stack social media web application, similar to Facebook, where users can create and like posts called "stories". User authentication is implemented using Google OAuth 2.0 and JSON Web Tokens. Other interesting features include: searching, sorting, and commenting on stories.',
        image: "/images/1.png",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        source: "https://github.com/klam98/story-time",
        visit: "https://story-time-web.netlify.app",
        id: 0,
    },
    {
        title: "Restaurant Finder",
        description:
            "A full-stack web application where students can find and review restaurants on my university's campus. Interesting features include: Twitter API on the homepage to fetch relevant restaurant tweets and Google Maps API for navigation instructions.",
        image: "/images/2.png",
        tags: ["PostgreSQL", "Express", "JavaScript", "Node.js"],
        source: "https://github.com/klam98/SFU-Restaurant-Finder",
        visit: "https://sfu-restaurant-finder.herokuapp.com",
        id: 1,
    },
    {
        title: "Course Planner",
        description:
            "A Java REST-API that parses my university's course data from a CSV file and stores it on the server-side. Students can modify their course schedule through CRUD methods on the client-side.",
        image: "/images/3.png",
        tags: ["Java", "Spring Boot", "JavaScript"],
        source: "https://github.com/klam98/SFU-Course-Planner",
        id: 2,
    },
    {
        title: "COVID-19 Data Mining",
        description:
            "A Python script that uses data mining techniques on a 2020 global COVID-19 dataset. I trained and tuned machine learning models for classification like XGBoost and Random Forests. This led to an 80% prediction accuracy on 300+ thousand patients' COVID-19 status on unseen data.",
        image: "/images/4.png",
        tags: ["Python", "Jupyter Notebook"],
        source: "https://github.com/klam98/COVID-19-Data-Mining",
        id: 3,
    },
];

export const TimeLineData = [
    {
        year: 2016,
        text: "I learned how to code for the first time through an Intro to Programming Course in C++.",
    },
    {
        year: 2017,
        text: "I began to like coding a lot and took further theoretical and programming CS courses like Discrete Math, Data Structures and Algorithms, etc.",
    },
    {
        year: 2018,
        text: "This was the year I decided to switch majors from Engineering into Computer Science. I also learned more programming languages like Java, Python, and SQL.",
    },
    {
        year: 2019,
        text: "I got my first taste of full-stack web development: (PostgreSQL, Express, JavaScript, Node.js) and working in a (mock) Agile setting. I really enjoyed it!",
    },
    {
        year: 2020,
        text: "I got my first internship as a Business Intelligence Developer, where I utilized my database knowledge and analytical skills in the industry.",
    },
    {
        year: 2021,
        text: "My final year of my undergraduate degree. I took specialization courses in Databases and Data Mining while also working on some personal projects to expand my skillset.",
    },
    {
        year: 2022,
        text: "I have two internships planned for this year, one as a Web Developer, and the other as a Software Developer. These experiences will pave the path towards my future career.",
    },
];

export const achievementsData = [
    { number: 20, text: "Achievement 1" },
    { number: 1000, text: "Achievement 2" },
    { number: 1900, text: "Achievement 3" },
    { number: 5000, text: "Achievement 4" },
];

export const employmentData = [
    {
        company: "Kids Shield Services Inc.",
        jobTitle: "Web Developer Intern",
        dateStart: "Jan 2022",
        dateEnd: "Present",
        description:
            "At Kids Shield Services Inc I was mainly responsible for designing front-end components in Figma and then implementing them on the website using JavaScript and Joomla CMS. For instance, I setup their login/registration pages with user authentication, and also created a landing page for them to improve marketing efforts. I also integrated a MySQL database through cPanel to store important information from submitted forms, like emails for example, to setup a mailing list for customers. Other optimizations I made include reducing page load times and increasing the website's search engine optimization (SEO).",
        image: "/images/8.jpg",
        id: 0,
    },
    {
        company: "Provincial Health Services Authority",
        jobTitle: "Business Intelligence Developer Intern",
        dateStart: "Sep 2020",
        dateEnd: "Dec 2020",
        description:
            "At Provincial Health (PHSA) I was mainly responsible for creating employee-related data reports using Microsoft's SQL Server and Reporting Services suite to extract data-driven insights to influence business decisions. Throughout my internship, I refactored and optimized several data reports and their associated SQL scripts through query optimization. My biggest achievement was creaing a report that displayed all IT employees' permissions to PHSA's databases. This greatly improved the IT department's workflow when they had to check or remove database permissions from their employees.",
        image: "/images/7.jpg",
        id: 1,
    },
];
