import BingeLogHome from "../../src/assets/BingeLogHome.png"
import BingeLogUserPage from "../../src/assets/BingeLogUserPg.png"



export const ProjectsData = [
    {
        id: "BingeLog_Project",
        title: "BingeLog",
        description: "Bingelog is a Twitter inspired TV tracker that includes an automatic social feed based on user updates. It's meant to be a simple, but still social app amongst friends with emphasis on avoiding spoilers.",
        tech: ["React", "CSS", "JS"],
        gitRepo: "https://github.com/WebDev955/BingeLog",
        liveDemo: "https://webdev955.github.io/BingeLog/",
        images: [BingeLogHome, BingeLogUserPage],
        futureFeatures:[
            "Manual status updates.", 
            "Fully functional reviews page to search and display reviews with comments.",
            "Properly adding friends by viewing their profile link."
        ]
    },
    {
        id: "TaskBreaker_Project",
        title: "TaskBreaker",
        description: "TaskBreaker is meant to be as simple and encouraging app to create and accomplish goals. Create Goals that have Tasks and further breakdown Tasks into Chunks. In addtion, use a Pomodoro timer to complete your tasks. Never delete your goals! Archive them until you are ready to take them on.",
        tech: ["React", "CSS", "JS", "TS"],
        gitRepo: "https://github.com/WebDev955/TaskBreaker",
        liveDemo: " https://webdev955.github.io/TaskBreaker/",
        images: ["img"],
        futureFeatures:[
            "Intergrating another app into this to provide users with random topics to learn.",
            "Profile creation.",
        ]
    },
    {
        id: "MagicRPG_Project",
        title: "Magic RPG",
        description: "MagicRPG is a web app, mobile focused battle RPG game. A classic turn based RPG battle system with a unique  ",
        tech: ["React", "CSS", "JS", "TS"],
        gitRepo: "https://github.com/WebDev955/MagicRPGRemix",
        liveDemo: "https://webdev955.github.io/MagicRPGRemix/",
        images: ["imgSource"],
        futureFeatures:[
            "Improved battles with better logic",
            "Access to the village, a village item shop, and an additional cave quest.", 
            "Crafting items and spells with materials",
            "Expanding current maps.",

        ]
    }
]

