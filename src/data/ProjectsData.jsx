//Images - BingeLog
import BingeLogUserPage from "../../src/assets/BingeLogUserPg.png"
import BingeLogSocialFeed from "../../src/assets/BingeLogSocialFeed.png"
import BingeLogSocialFeedComments from "../../src/assets/BingeLogSocialFeedComments.png"
import BingeLogShowNotes from "../../src/assets/BingeLogShowNotes.png"
import BingeLogShowSearchResults from "../../src/assets/BingeLogShowSearchResults.png"
import BingeLogUserSearch from "../../src/assets/BingeLogUserSearch.png"
import ShowDetails from "../../src/assets/ShowDetails.png"
//Images - TaskBreaker
import TaskBreakerArchive from "../../src/assets/TaskBreakerArchive.png"
import TaskBreakerGoals from "../../src/assets/TaskBreakerGoals.png"
import TaskBreakerNotesPg from  "../../src/assets/TaskBreakerNotesPg.png"
import TaskBreakerGoalsPgAddTask from  "../../src/assets/TaskBreakerGoalsPgAddTask.png"
import TaskBreakerGoalsPgTasks from  "../../src/assets/TaskBreakerGoalsPgTasks.png"
//Images - RPG
import RPGCastleMap from "../../src/assets/RPGCastleMap.png"
import RPGQuest from "../../src/assets/RPGQuest.png"
import RPGQuestLog from "../../src/assets/RPGQuestLog.png"
import RPGMonsterLog from "../../src/assets/RPGMonsterLog.png"
import RPGBattle from "../../src/assets/RPGBattle.png"

export const ProjectsData = [
    {
        id: "BingeLog_Project",
        title: "BingeLog",
        description: "BingeLog is a Twitter inspired TV show tracking app that includes an automatic social feed based on user updates. It's meant to be a simple, but still social app amongst friends with emphasis on avoiding spoilers. Each status post can become a private chat between two single users.",
        tech: ["React", "CSS", "JS"],
        gitRepo: "https://github.com/WebDev955/BingeLog",
        liveDemo: "https://webdev955.github.io/BingeLog/",
        images: [BingeLogUserPage, BingeLogShowNotes, BingeLogSocialFeed,BingeLogSocialFeedComments,BingeLogShowSearchResults, BingeLogUserSearch],
        futureFeatures:[
            "Manual status updates.", 
            "Reviews page to search and display reviews made by users.",
            "Properly adding friends by viewing their profile link.",
            "General design improvements."
        ]
    },
    {
        id: "TaskBreaker_Project",
        title: "TaskBreaker",
        description: "TaskBreaker is meant to be a simple and encouraging app to create and accomplish goals. Create goals that have tasks and further breakdown tasks into chunks. A Pomodoro timer pushes a user to set time to complete tasks. Never delete your goals! Archive them until you are ready to take them on.",
        tech: ["React", "CSS", "JS", "TS"],
        gitRepo: "https://github.com/WebDev955/TaskBreaker",
        liveDemo: " https://webdev955.github.io/TaskBreaker/",
        images: [TaskBreakerGoals, TaskBreakerGoalsPgAddTask, TaskBreakerNotesPg,TaskBreakerArchive ],
        futureFeatures:[
            "Intergrating another app into this to provide users with random topics to learn.",
            "Profile creation.",
        ]
    },
    {
        id: "MagicRPG_Project",
        title: "Magic RPG",
        description: "Magic RPG is a mobile focused web app RPG with inspiration from the Nintendo DS as a duel screen layout. The player interacts with NPCS to gain quests, explore map grid spaces for treasure and battles, and manages their inventory. Battles are turn based, but with a unique twist of shifting the element that players are channeling based on their chosen spell. Channeling elements gives the player advantages alongside disadvantages.",
        tech: ["React", "CSS", "JS", "TS"],
        gitRepo: "https://github.com/WebDev955/MagicRPGRemix",
        liveDemo: "https://webdev955.github.io/MagicRPGRemix/",
        images: [RPGCastleMap,RPGQuest, RPGQuestLog, RPGMonsterLog, RPGBattle],
        futureFeatures:[
            "**This is still a large work in progress**",
            "Fine tuning the battle logic.",
            "Fine tuning battles in general.",
            "Expanding current maps.",
            "Access to the village, a village item shop, and an additional quest in the cave.", 
            "Crafting items and spells with materials.",
            "General design improvements."
        ]
    }
]

