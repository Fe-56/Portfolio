import parse from 'html-react-parser';
import * as urlConst from "./url";

// general
export const NAME = "Lim Fuo En";
export const FOOTNOTE = `${NAME} All Rights Reserved.`;
export const SOURCE_CODE = "Github Source Code";

// Navigation bar
export const NAVBAR_PROJECTS = "Projects";
export const NAVBAR_SKILLS = "Skills";
export const NAVBAR_EXPERIENCES = "Experiences";
export const NAVBAR_HOBBIES = "Hobbies";
export const NAVBAR_CONTACT = "Contact";

// About page
export const ABOUT_TITLE = "About";
export const ABOUT_RESUME_TITLE = "Resume";
export const ABOUT_MY_TITLE = "Aspiring Full-Stack Developer";
export const ABOUT_MY_QUOTE = "I love to build cool apps that bring value to the lives of others!";
export const ABOUT_ABOUT = "Fuo En was born in Singapore in 1999. Since young, he has an interest in computers and technology, and aspired to have a career that involved technology. He is currently a Computer Science and Design (CSD) Junior at Singapore University of Technology and Design (SUTD), and a general visiting student (Master's) at Xi'an Jiaotong University (西安交通大学) until December 2023.";
export const ABOUT_RESUME_BUTTON = "My Resume >";
export const ABOUT_FIND_ME_WEB = "Find me on the Web";
export const ABOUT_GITHUB = "Github";
export const ABOUT_LINKEDIN = "LinkedIn";
export const ABOUT_PROFILE_PIC_ALT_TEXT = "Lim Fuo En profile picture";
export const ABOUT_TIMELINE_TITLE = "(Professional) Timeline";
export const ABOUT_TIMELINE_MILESTONES = [
  {2016: "First venture into the world of coding. Attended a basic Android app development course using storyboards"},
  {2017: "Attended a coding course, where I learnt Ruby, the first programming language I've ever learnt"},
  {2020: "Matriculated at SUTD"},
  {2021: "Completed my first ever internship at DBS Bank as a Business Analyst Intern"},
  {2022: "Completed mobile application development internship at Housing & Development Board (HDB)"},
  {2023: "Completed Flutter developer internships at CoffeeSpace and MyExpoPlace in the United States"},
];

// Projects page
export const PROJECTS_TITLE = "Projects";
export const PROJECTS_SKILLS_LABEL = "Skills";
export const PROJECTS_GITHUB = "Check out the project's Github!";
export const PROJECTS_PROJECT_LINK = "Project Link >";
export const PROJECT_VIEW_MORE = "View more";
export const PROJECTS_LOOK_AND_EARN_TITLE = "Look and Earn";
export const PROJECTS_LOOK_AND_EARN_ROLE = "Full-Stack Developer";
export const PROJECTS_LOOK_AND_EARN_PROJECT_TYPE = "Start-up Project";
export const PROJECTS_LOOK_AND_EARN_TIMELINE = "October 2022 to Present";
export const PROJECTS_LOOK_AND_EARN_PROJECT_DESCRIPTION = "Look and Earn is a start-up project that aims to incentivise users to view advertisements posted by partner companies.\n\nLook and Earn has a Flutter app that allows the user to view current advertisements (image, video, or GIF), bookmark advertisements, and check their account balance earned from watching advertisements.\n\nThe app has mechanisms in place to ensure that the user has to finish viewing the entire advertisement before they can move on to the next.\n\nLook and Earn also has an admin web app to manage the advertisements that will be displayed in the app.\n\nI designed the entire system architecture of the app and web app, and developed them from scratch.\n\nI integrated Google Firestore to the app and web as their common database.";
export const PROJECTS_LONELY_NO_LONGER_TITLE = "Lonely No Longer";
export const PROJECTS_LONELY_NO_LONGER_ROLE = "Developer";
export const PROJECTS_LONELY_NO_LONGER_PROJECT_TYPE = "Start-up Project";
export const PROJECTS_LONELY_NO_LONGER_TIMELINE = "May 2022 to Sep 2022";
export const PROJECTS_LONELY_NO_LONGER_DESCRIPTION = "Lonely No Longer (LNL) is a start-up project that aims to connect singles in Singapore looking for a genuine relationship through a couple of (literally) blind dates in groups at the beginning.\n\nLNL has a Telegram bot to serve as an assistant bot to customers for viewing their application status, buying items from our store, and receiving important updates.\n\nI designed the entire system architecture of the Telegram bot, and developed it from scratch, which included integrating the bot to Google Firestore as its database.\n\nI also integrated Google Sheets into the workflow, where its contents are synchronised seamlessly with the database.\n\nI wrote the entire technical documentation of the mechanism of the Telegram bot from scratch, including the control flow diagrams of certain commands.";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_TITLE = "Online Hate Speech Detection";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_ROLE = "Machine Learning Engineer";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_PROJECT_TYPE = "School Project";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_TIMELINE = "July 2022 to August 2022";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_DESCRIPTION = parse(
  `For Singapore University of Technology and Design (SUTD)'s course: <a href=${urlConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_COURSE_URL} target='_blank'>50.007 Machine Learning</a>.<br/><br/>Trained a variety of machine learning models for online hate speech classification.<br/><br/>Extensively tuned the model hyper-parameters to improve model performance.<br/><br/>Used machine learning techniques not taught in class to improve model performance.<br/><br/>I focused on tuning and optimising a machine learning model, called Support Vector Machines (SVM)`
);
export const PROJECTS_TRANSFERCONNECT_TITLE = "TransferConnect";
export const PROJECTS_TRANSFERCONNECT_ROLE = "Backend Developer";
export const PROJECTS_TRANSFERCONNECT_PROJECT_TYPE = "School Project";
export const PROJECTS_TRANSFERCONNECT_TIMELINE = "May 2022 to August 2022";
export const PROJECTS_TRANSFERCONNECT_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_TRANSFERCONNECT_COURSE_URL} target='_blank'>50.003 Elements of Software Construction</a>.<br/><br/>TransferConnect acts as a middleman between loyalty programs and banks to facilitate the transfer and conversion of loyalty points from bank transactions.<br/><br/>This project focuses on the development of a bankend API server and database for TransferConnect, as well as a frontend bank app to demonstrate the end-to-end workflow.<br/><br/>I developed highly performant and functional APIs to meet project requirements.<br/><br/>I also implemented extensive testing and fuzzing to ensure the proper functioning of the entire system.`
);
export const PROJECTS_GIGLET_TITLE = "Giglet";
export const PROJECTS_GIGLET_ROLE = "Developer";
export const PROJECTS_GIGLET_PROJECT_TYPE = "School Project";
export const PROJECTS_GIGLET_TIMELINE = "January 2022 to April 2022";
export const PROJECTS_GIGLET_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_GIGLET_COURSE_URL} target='_blank'>30.001 Entrepreneurship</a>.<br/><br/>Giglet is our idea for a start-up to showcase our knowledge of entrepreneurship learned from the Entrepreneurship course.<br/><br/>Giglet is a platform that matches STEM undergraduates in South East Asia to companies via gig work, for the companies to \"test the waters\" and see whetehr the students are suitable for an internship or full-time role in their company.<br/><br/>Giglet currently has its first products ready in beta: Giglet Hirer and Giglet Freelancer Telegram Bots.<br/><br/>I designed the entire system architecture of the Telegram bots, and developed the bots from scratch, which included integrating the bot to Google Firestore as its database.`
);
export const PROJECTS_WORDLE_TITLE = "Wordle";
export const PROJECTS_WORDLE_ROLE = "Programmer";
export const PROJECTS_WORDLE_PROJECT_TYPE = "School Project";
export const PROJECTS_WORDLE_TIMELINE = "January 2022 to April 2022";
export const PROJECTS_WORDLE_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_WORDLE_COURSE_URL} target="_blank">50.002 Computation Structures</a>.<br/><br/>This project is inspired by the popular online word-guessing game, <a href=${urlConst.PROJECTS_WORDLE_URL} target="_blank">Wordle</a>.<br/><br/>This project transforms the software nature of the original game into a piece of handcrafted hardware, in the form of an arcade-like machine.<br/><br/>I programmed the 16-bit ALU (Arithmetic Logic Unit) of the machine and helped to program the finite state machine for the game logic.`
);
export const PROJECTS_FEAST_TITLE = "Food Establishment Autonomous Spatial Tracking (FEAST)";
export const PROJECTS_FEAST_ROLE = "Frontend Lead";
export const PROJECTS_FEAST_PROJECT_TYPE = "School Project";
export const PROJECTS_FEAST_TIMELINE = "January 2022 to April 2022";
export const PROJECTS_FEAST_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_FEAST_COURSE_URL} target="_blank">50.001 Information Systems & Programming</a>.<br/><br/>FEAST is a real-time crowd tracking app that allows users to conveniently check the current crowd levels at various food and beverage (F&B) establishments in SUTD.<br/><br/>Accompanying the crowd tracking functionality are a suite of features that improve user experience in the app, such as predictive estimated waiting time, customisability by prioritising user preferred locations, and real-time business advisory.<br/><br/>Built using modular design principles, the app has a plug-and-play model that allows easy implementation at any location, and even contains the infrastructure to expand beyond F&B to track crowd levels of other kinds of locations.<br/><br/>I led the frontend team and helped to design the user interface of the app, and ensured that the data from the backend is displayed properly on the frontend.`
);
export const PROJECTS_WILL_I_GO_BROKE_TITLE = "Will I Go Broke?";
export const PROJECTS_WILL_I_GO_BROKE_ROLE = "Developer";
export const PROJECTS_WILL_I_GO_BROKE_PROJECT_TYPE = "Personal Project";
export const PROJECTS_WILL_I_GO_BROKE_TIMELINE = "December 2021 to January 2022";
export const PROJECTS_WILL_I_GO_BROKE_PROJECT_DESCRIPTION = "Will I Go Broke? is a Telegram bot that is targetted at university students in Singapore.\n\nThe bot maps out your finances over your university/school life and determines how your financial situation might turn out once you graduate.\n\nI developed the bot from scratch and designed the user experience and mechanics behind the bot.";
export const PROJECTS_POKEMON_BATTLE_TITLE = "Pokemon Battle";
export const PROJECTS_POKEMON_BATTLE_ROLE = "Team Lead";
export const PROJECTS_POKEMON_BATTLE_PROJECT_TYPE = "School Project";
export const PROJECTS_POKEMON_BATTLE_TIMELINE = "September 2020 to December 2020";
export const PROJECTS_POKEMON_BATTLE_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_POKEMON_BATTLE_COURSE_URL} target="_blank">10.014 Computational Thinking for Design</a>.<br/><br/>Pokemon Battle is inspired by the popular game series, <a href=${urlConst.PROJECTS_POKEMON_BATTLE_URL} target="_blank">Pokémon</a>.<br/><br/>It is a Python text-based game for 2 players, where each player select a Pokemon from a list of 18 Pokemons of all types with a wide selection of moves, and battle each other.<br/><br/>It simulates the actual battle mechanics of modern Pokemon games, albeit providing a textual interface to play in.<br/><br/>I led the team for the game research and design of the game, and coded the mechanics and flow of the game.`
  )

// Skills page
export const SKILLS_TITLE = "Skills";
export const SKILLS_LANGUAGES_TITLE = "Languages";
export const SKILLS_LANGUAGES_ENGLISH = "English";
export const SKILLS_LANGUAGES_MANDARIN = "Mandarin";
export const SKILLS_LANGUAGES_SPOKEN_WRITTEN = "(spoken & written)";
export const SKILLS_PROGRAMMING_LANGUAGES_TITLE = "Programming Languages";
export const SKILLS_PROFICIENCY_PROFICIENT = "(proficient)";
export const SKILLS_PROFICIENCY_INTERMEDIATE = "(intermediate)";
export const SKILLS_PROFICIENCY_BEGINNER = "(beginner)";
export const SKILLS_FRAMEWORKS_TITLE = "Frameworks";
export const SKILLS_FRAMEWORKS_FRONTEND = "Frontend";
export const SKILLS_FRAMEWORKS_BACKEND = "Backend";
export const SKILLS_FRAMEWORKS_MOBILE = "Mobile";
export const SKILLS_TOOLS_TITLE = "Tools";
export const SKILLS_CERTIFICATIONS_TITLE = "Certifications";
export const SKILLS_CERTIFICATIONS_RESPONSIVE = "Responsive Web Design";
export const SKILLS_CERTIFICATIONS_JAVASCRIPT = "JavaScript Algorithms and Data Structures";
export const SKILLS_CERTIFICATIONS_FRONTEND = "Front End Development Libraries";
export const SKILLS_CERTIFICATIONS_VISUALISATION = "Data Visualization";
export const SKILLS_CERTIFICATIONS_BACKEND = "Back End Development and APIs";

// Experiences page
export const EXPERIENCES_TITLE =  "Experiences";
export const EXPERIENCES_MYEXPOPLACE_TITLE = "MyExpoPlace";
export const EXPERIENCES_MYEXPOPLACE_ROLE = "Flutter Developer Intern";
export const EXPERIENCES_MYEXPOPLACE_LOCATION = "Los Angeles, California, United States";
export const EXPERIENCES_MYEXPOPLACE_TIMELINE = "June 2023 to August 2023";
export const EXPERIENCES_MYEXPOPLACE_EXPERIENCE_DESCRIPTION = parse("- Maintained and developed new features for MyExpoPlace mobile app using Flutter<br/>- Took ownership of design and development tasks for the app<br/>- Designed and implemented brand new user interfaces and experiences to improve listing experience in the app<br/>- Conducted technical research for potential development of new features to improve user experience when navigating the app");
export const EXPERIENCES_COFFEESPACE_TITLE = "CoffeeSpace";
export const EXPERIENCES_COFFEESPACE_ROLE = "Software Engineering Intern";
export const EXPERIENCES_COFFEESPACE_LOCATION = "San Francisco, California, United States";
export const EXPERIENCES_COFFEESPACE_TIMELINE = "March 2023 to June 2023";
export const EXPERIENCES_COFFEESPACE_EXPERIENCE_DESCRIPTION = parse("- Maintained and developed new features for CoffeeSpace mobile app using Flutter<br/>- Liaised with backend engineer to deliver functional and efficient CoffeSpace app functions<br/>-- Conducted technical research for potential development of new in-app payments to achieve additional revenue streams for CoffeeSpace");
export const EXPERIENCES_HDB_TITLE = "Housing & Development Board";
export const EXPERIENCES_HDB_ROLE = "Mobile Application Development Intern";
export const EXPERIENCES_HDB_LOCATION = "Singapore";
export const EXPERIENCES_HDB_TIMELINE = "August 2022 to December 2022";
export const EXPERIENCES_HDB_EXPERIENCE_DESCRIPTION = parse("- Maintained the Android and iOS codebases of the Mobile@HDB application, in Java (Android Studio) and Swift (Xcode) respectively<br/>- Developed new features for the Mobile@HDB application<br/>- Conducted technical research and built two functional Augmented Reality (AR) prototypes using different open source AR libraries in Kotlin");
export const EXPERIENCES_SMILETUTOR_TITLE = "SmileTutor";
export const EXPERIENCES_SMILETUTOR_ROLE = "Private Tutor (part-time)";
export const EXPERIENCES_SMILETUTOR_LOCATION = "Singapore";
export const EXPERIENCES_SMILETUTOR_TIMELINE = "January 2022 to Present";
export const EXPERIENCES_SMILETUTOR_EXPERIENCE_DESCRIPTION = parse("- Subjects taught: Primary 6 Mathematics and Science for Primary School Leaving Examinations (PSLE)<br/>- Conducted weekly one-on-one lessons at students' residences<br/>- Clarified the student's doubts, went through their homework and exam papers with them<br/>- Explained and taught them concepts thay they were otherwise unsure of<br/>- Liaised with the student's parents to ensure that their child's homework and assignments are done on time");
export const EXPERIENCES_DBS_TITLE = "DBS Bank";
export const EXPERIENCES_DBS_ROLE = "Business Analyst Intern";
export const EXPERIENCES_DBS_LOCATION = "Singapore";
export const EXPERIENCES_DBS_TIMELINE = "May 2021 to September 2021";
export const EXPERIENCES_DBS_EXPERIENCE_DESCRIPTION = parse("- Performed primary and secondary research, conduct analyses and appropriate modelling tasks that feeds directly into the development of technology-enabled solutions to tackle clients’ complex business problems<br/>- Supported the project teams in developing presentation materials and in coordination of communications with the client<br/>- Assisted the project teams in delivery of business-driven, technology-enabled solutions to help the clients meet pressing challenges and seize opportunities in their respective markets");


// Hobbies page
export const HOBBIES_TITLE = "Hobbies";

// Contact page
export const CONTACT_TITLE = "Contact";

// miscellaneous (used across pages)
export const SKILL_FLUTTER = "Flutter";
export const SKILL_DART = "Dart";
export const SKILL_ANDROID_STUDIO = "Android Studio";
export const SKILL_FIRESTORE = "Google Firestore";
export const SKILL_JAVASCRIPT = "JavaScript";
export const SKILL_REACT = "React";
export const SKILL_EXPRESS = "Express.js";
export const SKILL_NODE = "Node.js";
export const SKILL_GITHUB = "GitHub";
export const SKILL_PYTHON = "Python";
export const SKILL_PYTELEGRAMBOT = "pyTelegramBotAPI";
export const SKILL_ML = "Machine Learning";
export const SKILL_POSTMAN = "Postman";
export const SKILL_TESTING = "Software Testing";
export const SKILL_VERILOG = "Verilog";
export const SKILL_COMPUTER_ENGINEERING = "Computer Engineering";
export const SKILL_JAVA = "Java";
export const SKILL_FIGMA = "Figma";
export const SKILL_GAME_DESIGN = "Game Design";
export const SKILL_COMMUNICATION = "Communication";
export const SKILL_RESEARCHING = "Researching for Solutions";
export const SKILL_DETAIL = "Attention to Detail";
export const SKILL_ENTREPRENEURSHIP = "Entrepreneurship";
export const SKILL_KOTLIN = "Kotlin";
export const SKILL_SWIFT = "Swift";
export const SKILL_HTML = "HTML";
export const SKILL_CSS = "CSS";
export const SKILL_D3 = "D3.js";
export const SKILL_BOOTSTRAP = "Bootstrap";
export const SKILL_MONGO = "MongoDB";
export const SKILL_FIREBASE = "Google Firebase";
export const SKILL_VSCODE = "Visual Studio Code";
export const SKILL_XCODE = "Xcode";
export const SKILL_JIRA = "Jira";
export const SKILL_TEACHING = "Teaching";
export const SKILL_POWERPOINT = "Powerpoint";
export const SKILL_WORD = "Word";
export const SKILL_EXCEL = "Excel";
export const SKILL_SYSTEMSTESTING = "Systems Testing";
export const SKILL_PM = "Project Management";
