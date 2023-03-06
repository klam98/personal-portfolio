export const projects = [
    {
        title: "Story Time",
        description:
            'A full-stack social media web application, similar to Facebook, where users can create and like posts called "stories". User authentication is implemented using Google OAuth 2.0 and JSON Web Tokens. Other interesting features include: searching, sorting, and commenting on stories.',
        image: "images/story-time.jpg",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        source: "https://github.com/klam98/story-time",
        visit: "https://story-time-web.netlify.app",
        id: 0,
    },
    {
        title: "Restaurant Finder",
        description:
            "A full-stack web application where students can find and review restaurants on my university's campus. Interesting features include: Twitter API on the homepage to fetch relevant restaurant tweets and Google Maps API for navigation instructions.",
        image: "images/sfu-restaurant-finder.png",
        tags: ["PostgreSQL", "Express", "JavaScript", "Node.js"],
        source: "https://github.com/klam98/SFU-Restaurant-Finder",
        visit: "https://sfu-restaurant-finder.herokuapp.com",
        id: 1,
    },
    {
        title: "Course Planner",
        description:
            "A Java REST API that parses my university's course data from a CSV file and stores it on the server-side. Students can modify their course schedule through CRUD methods on the client-side.",
        image: "images/sfu-course-planner.png",
        tags: ["Java", "Spring Boot", "JavaScript"],
        source: "https://github.com/klam98/SFU-Course-Planner",
        id: 2,
    },
    {
        title: "COVID-19 Data Mining",
        description:
            "A Python script that uses data mining techniques on a 2020 global COVID-19 dataset. I trained and tuned machine learning models like XGBoost and Random Forests for classification. This led to an 80% prediction accuracy on 300+ thousand patients' COVID-19 status on unseen data.",
        image: "images/covid19-data-mining.jpg",
        tags: ["Python", "Jupyter Notebook"],
        source: "https://github.com/klam98/COVID-19-Data-Mining",
        id: 3,
    },
];

export const TimeLineData = [
    {
        year: "2016",
        text: "Where it all started: I took my first Intro to Programming course and loved it. I wanted to learn more about different programming languages and concepts.",
    },
    {
        year: "2018",
        text: "After taking numerous computer science courses on theory and programming, I decided to switch majors from Engineering into Computer Science.",
    },
    {
        year: "2019",
        text: "I took many project-based programming courses to strengthen my coding and teamwork skills, one of which included a full-stack web project following Agile.",
    },
    {
        year: "2020",
        text: "I landed my first internship as a Business Intelligence Developer where I learned how to manage databases and use my analytical skills in the healthcare industry.",
    },
    {
        year: "2022",
        text: "I will be gaining practical experience in web development and software development through two internships this year. I am excited to learn many new things and meet new people.",
    },
    {
        year: "2023+",
        text: "I plan to continually grow in both my career and personal life through building fun applications, picking up new hobbies, traveling, and being passionate about working with software.",
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
        company: "Spare",
        jobTitle: "Junior Software Engineer",
        dateStart: "Nov 2022",
        dateEnd: "Present",
        description:
            "At Spare I am a member of the Open Team working on Spare's Open Fleets technology which is external on-demand ridesharing services with partnering mobility providers like Lyft and Uber.\
            I primarily work on backend API integrations (using TypeScript, Node.js) with Spare's partnering companies into our platform — working on new features that customers request.\
            Throughout my time at Spare, I have grown a lot as an engineer. I've worked on and owned projects for external stakeholders throughout the entire SDLC: eliciting requirements →\
            writing technical design specifications → software implementation → unit/integration testing → deployment to production.",
        image: "images/spare-logo.png",
        id: 0,
    },
    {
        company: "Sophos",
        jobTitle: "Software Developer Intern",
        dateStart: "May 2022",
        dateEnd: "Aug. 2022",
        description:
            "At Sophos I was a member of the Network Security Group (NSG) working on developing features and bug fixes to Sophos Firewall v19 in C and automating manual test cases for existing Sophos Firewall\
            features like TLS inspection and web proxy filtering in Perl. I also had a direct impact on customers of our product by populating a decryption exclusion list with known conflicting domains,\
            thus allowing customers to access those domains without issues. Throughout my internship, I learned how to write effective unit tests and communicate issues during code review, leading to high-quality\
            pull requests that were integrated into the product.",
        image: "images/sophos-logo.jpg",
        id: 1,
    },
    {
        company: "Kids Shield Services Inc.",
        jobTitle: "Web Developer Intern",
        dateStart: "Jan. 2022",
        dateEnd: "Apr. 2022",
        description:
            "At Kids Shield Services Inc I was mainly responsible for designing and implementing features on the Kids Shield website using JavaScript and Joomla CMS. For instance, I set up their login/registration\
            pages with user authentication, and also created a landing page for them to improve marketing efforts. I also integrated a MySQL database through cPanel to store important information from submitted\
            forms, like emails, for example, to set up a mailing list for customers. Other optimizations I made include reducing page load times and increasing the website's search engine optimization (SEO).",
        image: "images/kids-shield-logo.png",
        id: 2,
    },
    {
        company: "Provincial Health",
        jobTitle: "Business Intelligence Developer Intern",
        dateStart: "Sep. 2020",
        dateEnd: "Dec. 2020",
        description:
            "At Provincial Health (PHSA) I was mainly responsible for creating employee-related data reports using Microsoft's SQL Server and Reporting Services suite to extract data-driven insights to influence\
            business decisions. Throughout my internship, I refactored and optimized several data reports and their associated SQL scripts through query optimization. My biggest achievement was creating a report\
            that displayed all IT employees' permissions to PHSA's databases. This greatly improved the IT department's workflow when they had to check or remove database permissions from their employees.",
        image: "images/phsa-logo.jpg",
        id: 3,
    },
];
