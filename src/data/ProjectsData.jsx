//Images - BingeLog
import BingeLogUserPage from "../../src/assets/BingeLogUserPg.webp";
import BingeLogUserSearch from "../../src/assets/BingeLogUserSearch.webp";
import BingeLogSocialFeed from "../../src/assets/BingeLogSocialFeed.webp";
import BingeLogSocialFeedComments from "../../src/assets/BingeLogSocialFeedComments.webp";
import BingeLogShowSearch from "../../src/assets/BingeLogShowSearch.webp";
import BingeLogShowsSaved from "../../src/assets/BingeLogShowsSaved.webp";
import BingeLogShowsSavedEpisodeList from "../../src/assets/BingeLogShowsSaved_EpisodeList.webp";
import BingeLogShowsSavedEpisodeNotes from "../../src/assets/BingeLogShowsSaved_EpisodeNotes.webp";
//Images - TaskBreaker
import TaskBreakerGoals from "../../src/assets/TaskBreakerGoals.webp";
import TaskBreakerAddGoal from "../../src/assets/TaskBreakerAddGoal.webp";
import TaskBreakerTaskView from "../../src/assets/TaskBreaker_TaskView.webp";
import TaskBreakerNotebook from "../../src/assets/TaskBreaker_Notebook.webp";
import TaskBreakerPomodoro from "../../src/assets/TaskBreaker_Pomodoro.webp";
import TaskBreakerArchive from "../../src/assets/TaskBreaker_Archive.webp";
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
      BingeLogShowsSaved,
      BingeLogShowsSavedEpisodeList,
      BingeLogShowsSavedEpisodeNotes,
      BingeLogUserSearch,
      BingeLogSocialFeed,
      BingeLogSocialFeedComments,
      BingeLogShowSearch,
    ],
    futureFeatures: [
      "Manual status updates.",
      "Reviews page to search and display reviews made by users.",
      "Properly adding friends by viewing their profile link.",
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
      TaskBreakerAddGoal,
      TaskBreakerTaskView,
      TaskBreakerNotebook,
      TaskBreakerPomodoro,
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
