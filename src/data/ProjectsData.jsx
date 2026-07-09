//Images - BingeLog
import BingeLogUserPage from "../../src/assets/BingeLogUserPg.png";
import BingeLogSocialFeed from "../../src/assets/BingeLogSocialFeed.png";
import BingeLogSocialFeedComments from "../../src/assets/BingeLogSocialFeedComments.png";
import BingeLogShowNotes from "../../src/assets/BingeLogShowNotes.png";
import BingeLogShowSearchResults from "../../src/assets/BingeLogShowSearchResults.png";
import BingeLogUserSearch from "../../src/assets/BingeLogUserSearch.png";
import ShowDetails from "../../src/assets/ShowDetails.png";
//Images - TaskBreaker
import TaskBreakerArchive from "../../src/assets/TaskBreakerArchive.png";
import TaskBreakerGoals from "../../src/assets/TaskBreakerGoals.png";
import TaskBreakerNotesPg from "../../src/assets/TaskBreakerNotesPg.png";
import TaskBreakerGoalsPgAddTask from "../../src/assets/TaskBreakerGoalsPgAddTask.png";
import TaskBreakerGoalsPgTasks from "../../src/assets/TaskBreakerGoalsPgTasks.png";
//Images - RPG
import RpgTitle from "../../src/assets/MagicRPG-Title.webp";
import RpgMainScreen from "../../src/assets/MagicRPG-MainScreen.webp";
import RpgNPC from "../../src/assets/MagicRPG-NPC.webp";
import RpgMainMenu from "../../src/assets/MagicRPG-MainMenu.webp";
import RpgBag from "../../src/assets/MagicRPG-Bag.webp";
import RpgQuestLog from "../../src/assets/MagicRPG-QuestLog.webp";
import RpgMonsterLog from "../../src/assets/MagicRPG-MonsterLog.webp";
import RpgBattle from "../../src/assets/MagicRPG-Battle.webp";

export const ProjectsData = [
  {
    id: "BingeLog_Project",
    title: "BingeLog",
    description:[
      "BingeLog is a Twitter-like TV show tracking app built with auth, Redux state management, and Firebase integration. Users can create an account, search and add shows/friends, take notes on every episode, and update their binging status with auto updates.",
      
      "With an emphasis on avoiding spoilers, auto-updates only provide show and episode titles. Comments are strictly between a single user and a commenter, functioning as private chats on the feed post."
  ],
    tech: ["React", "CSS", "JS"],
    gitRepo: "https://github.com/WebDev955/BingeLog",
    liveDemo: "https://webdev955.github.io/BingeLog/",
    images: [
      BingeLogUserPage,
      BingeLogShowNotes,
      BingeLogSocialFeed,
      BingeLogSocialFeedComments,
      BingeLogShowSearchResults,
      BingeLogUserSearch,
    ],
    futureFeatures: [
      "Manual status updates.",
      "Reviews page to search and display reviews made by users.",
      "Properly adding friends by viewing their profile link.",
      "General design improvements.",
    ],
  },
  {
    id: "TaskBreaker_Project",
    title: "TaskBreaker",
    description:[
      "TaskBreaker is a simple and encouraging app to set and complete goals, without the fluff and pressure of todo apps. Goals are broken down into tasks, which can be further broken down into chunks. This breaks up large goals into smaller, less overwhelming items to complete. A pomodoro timer allows for users to get in the zone and crank out work. If a user finds a goal is too much or they are burnt out, they can archive it. Never delete your goals!"
    ],
    tech: ["React", "CSS", "JS", "TS"],
    gitRepo: "https://github.com/WebDev955/TaskBreaker",
    liveDemo: " https://webdev955.github.io/TaskBreaker/",
    images: [
      TaskBreakerGoals,
      TaskBreakerGoalsPgAddTask,
      TaskBreakerNotesPg,
      TaskBreakerArchive,
    ],
    futureFeatures: [
      "Intergrating another app into this to provide users with random topics to learn.",
      "Profile creation.",
    ],
  },
  {
    id: "MagicRPG_Project",
    title: "Magic RPG",
    description:[
      "Magic RPG is mobile-first web app built around a duel-screen display inspired by the Nintendo DS. The UI is split between a bottom event grid-based map with grid events populating a top screen component.",
      
      "Players can accept quests from NPCs, buy and equip items, and partake in turn based battles with a unique mechanic where spells can change ones channeled element, opening up strategic decisions mid-battle.",
      
      "Game progress is managed by a global React context that is continuously updated based on player interactions—all state managed entirely on the frontend.",
    ],
    tech: ["React", "CSS", "JS", "TS"],
    gitRepo: "https://github.com/WebDev955/MagicRPGRemix",
    liveDemo: "https://webdev955.github.io/MagicRPGRemix/",
    images: [
      RpgTitle,
      RpgMainScreen,
      RpgNPC,
      RpgMainMenu,
      RpgBag,
      RpgQuestLog,
      RpgMonsterLog,
      RpgBattle,
    ],
    futureFeatures: [
      "**This is still a large work in progress**",
      "Fine tuning the battle logic.",
      "Fine tuning battles in general.",
      "Expanding current maps.",
      "Access to the village, a village item shop, and an additional quest in the cave.",
      "Crafting items and spells with materials.",
      "General design improvements.",
    ],
  },
];
