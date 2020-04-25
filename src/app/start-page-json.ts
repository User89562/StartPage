import { StartPageLinks} from './data-classes/json-class';
/*
export const STARTPAGE: StartPageLinks[] = [
  {
    tab: 'Home',
    links: [
      {
        header: '',
        urls: [
          {
            url: 'https://www.twitch.tv/directory/all',
            urlName: 'Twitch',
          },
          {
            url: 'https://www.old.reddit.com',
            urlName: 'Reddit',
          },
          {
            url: 'https://www.youtube.com/',
            urlName: 'Youtube',
          },
          {
            url: 'https://open.spotify.com/',
            urlName: 'Spotify',
          },
          {
            url: 'https://www.amazon.ca/',
            urlName: 'Amazon',
          },
          {
            url: 'https://www.humblebundle.com/',
            urlName: 'Humble Bundle',
          },
          {
            url: 'https://github.com/login',
            urlName: 'Github',
          },
          {
            url: 'https://www.livechart.me/schedule/tv',
            urlName: 'Anime Season',
          },
          {
            url: 'http://192.168.1.15:8080',
            urlName: 'Downloader',
          },
        ],
      },
    ],
  },
  {
    tab: 'Developer',
    links: [
      {
        header: 'Angular',
        urls: [
          {
            url: 'https://angular.io/start',
            urlName: 'Angular Wiki',
          },
          {
            url: 'https://material.angular.io/components/categories',
            urlName: 'Material',
          },
          {
            url: 'https://material.io/resources/color/#!/?view.left=0&view.right=0',
            urlName: 'Color Picker',
          },
        ],
      },
      {
        header: 'Assets',
        urls: [
          {
            url: 'https://kenney.nl/assets',
            urlName: '2-D Assets',
          },
        ],
      },
    ],
  },
  {
    tab: 'Games',
    links: [
      {
        header: 'League',
        urls: [
          {
            url: 'https://old.reddit.com/r/leagueoflegends/',
            urlName: 'Subreddit',
          },
          {
            url: 'https:u.gg',
            urlName: 'Builds',
          },
          {
            url: 'https://na.op.gg/',
            urlName: 'OP.gg',
          },
        ],
      },
      {
        header: 'FF-XIV',
        urls: [
          {
            url: 'https://old.reddit.com/r/ffxiv/',
            urlName: 'Subreddit',
          },
          {
            url: 'https://ffxiv.gamerescape.com/wiki/Main_Page',
            urlName: 'Wiki',
          },
          {
            url: 'https://super-aardvark.github.io/yuryu/',
            urlName: 'Cactpot Solver',
          },
          {
            url: 'https://arrtripletriad.com/',
            urlName: 'Triple Triad',
          },
        ],
      },
    ],
  },
  {
    tab: 'Mobile',
    links: [
      {
        header: 'General',
        urls: [
          {
            url: 'https://old.reddit.com/r/gachagaming/',
            urlName: 'Gacha Subreddit',
          },
          {
            url: 'https://discordapp.com/login',
            urlName: 'Mobile Gaming Discord',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1by5rcLdKXdhLClfVQ-FLvK_OM4Xko0CT9peKQwQCfXw/edit?usp=sharing',
            urlName: 'GFL Doc',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1iA07L2CvAgJkbRFvUGQToyO9RrZjJnNyAAtpKDD-Dvc/edit?usp=sharing',
            urlName: 'GFL Ranking Diary',
          },
        ],
      },
      {
        header: 'Girl\'s Frontline',
        urls: [
          {
            url: 'https://old.reddit.com/r/girlsfrontline/',
            urlName: 'Subreddit',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/10LJdksnM3zipOb72IneJD7WVp3765JYJEGg0LnodzDI/edit#gid=516072763',
            urlName: 'T-doll Analysis',
          },
          {
            url: 'https://en.gfwiki.com/wiki/Girls%27_Frontline_Wiki',
            urlName: 'Wiki',
          },
          {
            url: 'https://gf.hometehomete.com/en/',
            urlName: 'Maps',
          },
          {
            url: 'https://gfl.matsuda.tips/combatsim/',
            urlName: 'Damage Simulation',
          },
          {
            url: 'https://hycdes.com/pages/GFT_ChipCal-EN.html',
            urlName: 'Chip Calculator',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1TjHC4Vaed8dFqSkagM6teNlmBjFGPiUbTRnTnvxnnu4/edit#gid=296924292',
            urlName: 'Boss Strategies',
          },
          {
            url: 'https://www.gflcorner.com/',
            urlName: 'GFL Corner',
          },
          {
            url: 'https://gfl.matsuda.tips/blog/',
            urlName: 'Angry Midget',
          },
          {
            url: 'https://gamepress.gg/girlsfrontline/',
            urlName: 'Gamerpress',
          },
          {
            url: 'http://dmesse.egloos.com/3568507',
            urlName: 'DMesse',
          },
          {
            url: 'https://docs.google.com/document/d/1nRRyH9IH7dg7BRow8Y_hh2bNAlLxtpRB6cr_kzl_5NE/edit#',
            urlName: 'Next Ranking',
          },
          {
            url: 'https://sangvis.science/list/all',
            urlName: 'T-Doll Recipe DB',
          },
          {
            url: 'https://aaeeschylus.github.io/main.html',
            urlName: 'Recipe Calculator',
          },
          {
            url: 'https://tempkaridc.github.io/gf/',
            urlName: 'Logistics Calculator',
          },
        ],
      },
      {
        header: 'Arknights',
        urls: [
          {
            url: 'https://old.reddit.com/r/arknights/',
            urlName: 'Subreddit',
          },
          {
            url: 'https://wiki.arknights.moe/Main_Page',
            urlName: 'Wiki',
          },
          {
            url: 'https://aceship.github.io/AN-EN-Tags/akhr.html',
            urlName: 'Recruitment',
          },
          {
            url: 'https://gamepress.gg/arknights/',
            urlName: 'Gamepress Articles',
          },
        ],
      },
    ],
  },
];*/
