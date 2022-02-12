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
    { year: 2016, text: "TBA" },
    { year: 2017, text: "TBA" },
    { year: 2018, text: "TBA" },
    { year: 2019, text: "TBA" },
    { year: 2020, text: "TBA" },
    { year: 2021, text: "TBA" },
    { year: 2022, text: "TBA" },
];

export const achievementsData = [
    { number: 20, text: "Achievement 1" },
    { number: 1000, text: "Achievement 2" },
    { number: 1900, text: "Achievement 3" },
    { number: 5000, text: "Achievement 4" },
];
