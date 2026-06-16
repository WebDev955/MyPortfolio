import BingeLogUserPage from "../../src/assets/BingeLogUserPg.png"
import BingeLogSocialFeed from "../../src/assets/BingeLogSocialFeed.png"
import BingeLogShowSearch from "../../src/assets/BingeLogShowSearch.png"
import ShowDetails from "../../src/assets/ShowDetails.png"

import TaskBreakerArchive from "../../src/assets/TaskBreakerArchive.png"
import TaskBreakerGoalsPg from "../../src/assets/TaskBreakerGoalsPg.png"
import TaskBreakerNotesPg from  "../../src/assets/TaskBreakerNotesPg.png"
import TaskBreakerNotesPg2 from "../../src/assets/TaskBreakerNotesPg2.png"

import RPGCastleMap from "../../src/assets/RPGCastleMap.png"
import RPGQuest from "../../src/assets/RPGQuest.png"
import RPGQuestLog from "../../src/assets/RPGQuestLog.png"
import RPGMonsterLog from "../../src/assets/RPGMonsterLog.png"
import RPGBattle from "../../src/assets/RPGBattle.png"

export const ProjectsData = [
    {
        id: "BingeLog_Project",
        title: "BingeLog",
        description: "Bingelog is a Twitter inspired TV show tracker that includes an automatic social feed based on user updates. It's meant to be a simple, but still social app amongst friends with emphasis on avoiding spoilers.",
        tech: ["React", "CSS", "JS"],
        gitRepo: "https://github.com/WebDev955/BingeLog",
        liveDemo: "https://webdev955.github.io/BingeLog/",
        images: [BingeLogUserPage, BingeLogSocialFeed, BingeLogShowSearch, ShowDetails],
        futureFeatures:[
            "Manual status updates.", 
            "Fully functional reviews page to search and display reviews with comments.",
            "Properly adding friends by viewing their profile link."
        ]
    },
    {
        id: "TaskBreaker_Project",
        title: "TaskBreaker",
        description: "TaskBreaker is meant to be a simple and encouraging app to create and accomplish goals. Create Goals that have Tasks and further breakdown Tasks into Chunks. In addtion, use a Pomodoro timer to complete your tasks. Never delete your goals! Archive them until you are ready to take them on.",
        tech: ["React", "CSS", "JS", "TS"],
        gitRepo: "https://github.com/WebDev955/TaskBreaker",
        liveDemo: " https://webdev955.github.io/TaskBreaker/",
        images: [TaskBreakerArchive, TaskBreakerGoalsPg, TaskBreakerNotesPg, TaskBreakerNotesPg2],
        futureFeatures:[
            "Intergrating another app into this to provide users with random topics to learn.",
            "Profile creation.",
        ]
    },
    {
        id: "MagicRPG_Project",
        title: "Magic RPG",
        description: "MagicRPG is a web app, mobile focused RPG game. A classic turn based RPG battle system with gimmick a of shifting one's element through out battle to change the tide of battle.",
        tech: ["React", "CSS", "JS", "TS"],
        gitRepo: "https://github.com/WebDev955/MagicRPGRemix",
        liveDemo: "https://webdev955.github.io/MagicRPGRemix/",
        images: [RPGCastleMap,RPGQuest, RPGQuestLog, RPGMonsterLog, RPGBattle],
        futureFeatures:[
            "Fine tuning the battle logic.",
            "Access to the village, a village item shop, and an additional cave quest.", 
            "Crafting items and spells with materials.",
            "Expanding current maps.",
        ]
    }
]

