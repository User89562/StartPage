import { StartPageLinks} from './data-classes/json-class';

class Colors {
  static red(): string {
    return '#ba000d';
  }
  static green(n: number): string {
    switch (n){
      case 2:
        return '#00701a';
      default:
        return '#003d00';
    }
  }
  static cyan(): string {
    return '#007c91';
  }

  static purple(n: number): string {
    switch (n){
      case 1:
        return '#7e57c2';
      default:
        return '#5c007a';
    }
  }

  static blueGrey(): string {
    return '#1c313a';
  }

  static yellow(n: number): string {
    switch (n){
      case 2:
        return '#bb4d00';
      default:
        return '#bc5100';
    }
  }

  static indigo(n: number): string {
    switch (n){
      case 2:
        return '#26418f';
      default:
        return '#002171';
    }
  }
  static blue(n: number): string {
    switch (n){
      case 1:
        return '#005b9f';
      case 2:
        return '#0077c2';
      case 3:
        return '#0064b7';
      case 4:
        return '#005cb2';
      default:
        return '#003c8f';
    }
  }
}

export const STARTPAGE: StartPageLinks[] = [
  {
    tab: 'Home',
    links: [
      {
        header: '',
        urls: [
          {
            suburls: [
              {
                url: 'https://old.reddit.com/',
                urlName: 'Reddit',
                backgroundColor: Colors.red(),
              },
              {
                url: 'https://open.spotify.com/',
                urlName: 'Spotify',
                backgroundColor: Colors.green(1)
              },
              {
                url: 'https://github.com/login',
                urlName: 'Github',
              },
              {
                url: 'https://twitter.com/',
                urlName: 'Twitter',
                backgroundColor: Colors.cyan()
              },
              {
                url: 'https://www.google.com/gmail/',
                urlName: 'Gmail',
                backgroundColor: Colors.green(2)
              },
            ]
          },
        ]
      },
      {
        header: '',
        urls: [
          {
            suburls: [
              {
                url: 'https://www.twitch.tv/directory/all',
                urlName: 'Twitch',
                backgroundColor: Colors.purple(0)
              },
              {
                url: 'https://www.youtube.com/',
                urlName: 'Youtube',
              },
            ]
          },
        ]
      },
      {
        header: '',
        urls: [
          {
            suburls: [
              {
                url: 'https://www.amazon.ca/',
                urlName: 'Amazon',
              },
              {
                url: 'https://www.humblebundle.com/',
                urlName: 'Humble Bundle',
              },
            ]
          },
        ]
      },
      {
        header: '',
        urls: [
          {
            suburls: [
              {
                url: 'https://www.livechart.me/schedule/tv',
                urlName: 'Anime Season',
              },
              {
                url: 'http://192.168.1.15:8080',
                urlName: 'Downloader',
                backgroundColor: Colors.blueGrey()
              },
            ]
          },
        ]
      },
    ]
  },
  {
    tab: 'Developer',
    links: [
      {
        header: 'Angular',
        urls: [
          {
            suburls: [
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
              {
                url: 'https://material.io/resources/icons/?style=baseline',
                urlName: 'Angular Icons',
              },
            ]
          }
        ],
      },
      {
        header: 'Assets',
        urls: [
          {
            suburls: [
              {
                url: 'https://kenney.nl/assets',
                urlName: '2-D Assets',
              },
            ]
          }
        ],
      },
    ],
  },
  {
    tab: 'Games',
    links: [
      {
        header: 'General',
        urls: [
          {
            subheader: 'Reddit',
            fontColor: Colors.red(),
            suburls: [
              {
                url: 'https://old.reddit.com/r/leagueoflegends/',
                urlName: 'League',
                backgroundColor: Colors.yellow(1)
              },
              {
                url: 'https://old.reddit.com/r/VALORANT/',
                urlName: 'Valorant',
              },
              {
                url: 'https://old.reddit.com/r/ffxiv/',
                urlName: 'FFXIV',
                backgroundColor: Colors.indigo(1)
              },
              {
                url: 'https://old.reddit.com/r/EscapefromTarkov/',
                urlName: 'Escape from Tarkov',
              },
            ]
          },
          {
            subheader: 'Wiki',
            suburls: [
              {
                url: 'https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki',
                urlName: 'League',
                backgroundColor: Colors.yellow(1)
              },
              {
                url: 'https://ffxiv.gamerescape.com/wiki/Main_Page',
                urlName: 'FFXIV',
                backgroundColor: Colors.indigo(1)
              },
              {
                url: 'https://escapefromtarkov.gamepedia.com/Escape_from_Tarkov_Wiki',
                urlName: 'EFT',
              },
            ]
          },
        ],
      },
      {
        header: 'League',
        urls: [
          {
            suburls: [
              {
                url: 'https://u.gg/',
                urlName: 'Builds',
                backgroundColor: Colors.yellow(2)
              },
              {
                url: 'https://na.op.gg/',
                urlName: 'OP.gg',
              },
            ]
          },
        ],
      },
      {
        header: 'FFXIV',
        urls: [
          {
            suburls: [
              {
                url: 'https://super-aardvark.github.io/yuryu/',
                urlName: 'Cactpot Solver',

              },
              {
                url: 'https://arrtripletriad.com/',
                urlName: 'Triple Triad',
                backgroundColor: Colors.indigo(1)
              },
            ]
          },
        ],
      },
      {
        header: 'EFT',
        urls: [
          {
            suburls: [
              {
                url: 'https://i.redd.it/6zifnbvu2hj41.png',
                urlName: 'Beginner Quick Infograph',
              },
              {
                url: 'https://www.eftdb.one/weaponmodding/260007/Mosin/build-900082',
                urlName: 'Modding Tool',
              },
            ]
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
            subheader: 'Reddit',
            fontColor: Colors.red(),
            suburls: [
              {
                url: 'https://old.reddit.com/r/gachagaming/',
                urlName: 'Gacha Gaming',
              },
              {
                url: 'https://old.reddit.com/r/girlsfrontline/',
                urlName: 'Girl\'s Frontline',
                backgroundColor: Colors.blue(0)
              },
              {
                url: 'https://old.reddit.com/r/arknights/',
                urlName: 'Arknights',
                backgroundColor: Colors.green(1)
              },
              {
                url: 'https://old.reddit.com/r/genshin_impact/',
                urlName: 'Genshin Impact',
                backgroundColor: Colors.purple(0)
              },
            ]
          },
          {
            subheader: 'Wiki',
            suburls: [
              {
                url: 'https://en.gfwiki.com/wiki/Girls%27_Frontline_Wiki',
                urlName: 'GFL',
                backgroundColor: Colors.blue(0)
              },
              {
                url: 'https://wiki.arknights.moe/Main_Page',
                urlName: 'Arknights',
                backgroundColor: Colors.green(1)
              },
            ]
          },
          {
            subheader: 'Other',
            fontColor: Colors.yellow(1),
            suburls: [
              {
                url: 'https://discord.com/login',
                urlName: 'Discord',
              },
              {
                url: 'https://docs.google.com/spreadsheets/d/1by5rcLdKXdhLClfVQ-FLvK_OM4Xko0CT9peKQwQCfXw/edit?usp=sharing',
                urlName: 'GFL Doc',
                backgroundColor: Colors.blue(0)
              },
              {
                url: 'https://docs.google.com/spreadsheets/d/1iA07L2CvAgJkbRFvUGQToyO9RrZjJnNyAAtpKDD-Dvc/edit?usp=sharing',
                urlName: 'Ranking Diary',
                backgroundColor: Colors.indigo(1)
              },
              {
                url: 'https://docs.google.com/spreadsheets/d/1MKEvSx9zcgvWnRhv9IoL_-XUuHOq5ESFCSlJkxuE6OU/edit#gid=0',
                urlName: 'Armory',
                backgroundColor: Colors.indigo(2)
              },
            ]
          },
        ],
      },
      {
        header: 'Blogs',
        urls: [
          {
            subheader: 'GFL',
            fontColor: Colors.blue(2),
            suburls: [
              {
                url: 'https://www.gflcorner.com/',
                urlName: 'GFL Corner',
                backgroundColor: Colors.blue(0)
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
            ]
          },
          {
            subheader: 'Arknights',
            fontColor: Colors.green(2),
            suburls: [
              {
                url: 'https://gamepress.gg/arknights/',
                urlName: 'Gamepress Articles',
                backgroundColor: Colors.green(1)
              },
            ]
          }
        ],
      },
      {
        header: 'Tools',
        urls: [
          {
            subheader: 'GFL',
            fontColor: Colors.blue(2),
            suburls: [
              {
                url: 'https://aaeeschylus.github.io/main.html',
                urlName: 'Recipe Calculator',
              },
              {
                url: 'https://gfgfork.github.io/gf/main.html',
                urlName: 'Logistics Calculator',
              },
              {
                url: 'https://gfl.matsuda.tips/combatsim/',
                urlName: 'Damage Simulation',
                backgroundColor: Colors.blue(0)
              },
              {
                url: 'https://hycdes.com/pages/GFT_ChipCal-EN.html',
                urlName: 'Chip Calculator',
              },
            ]
          },
          {
            subheader: 'Arknights',
            fontColor: Colors.green(2),
            suburls: [
              {
                url: 'https://aceship.github.io/AN-EN-Tags/akhr.html',
                urlName: 'Recruitment',
                backgroundColor: Colors.green(1)
              },
            ]
          },
          {
            subheader: 'Genshin',
            fontColor: Colors.purple(1),
            suburls: [
              {
                url: 'https://genshin-impact-map.appsample.com/',
                urlName: 'Map',
                backgroundColor: Colors.purple(0)
              },
            ]
          }
        ],
      },
      {
        header: 'Resources',
        urls: [
          {
            subheader: 'GFL',
            fontColor: Colors.blue(2),
            suburls: [
              {
                url: 'https://docs.google.com/spreadsheets/d/10LJdksnM3zipOb72IneJD7WVp3765JYJEGg0LnodzDI/edit#gid=516072763',
                urlName: 'T-doll Analysis',
              },
              {
                url: 'https://gf.hometehomete.com/en/',
                urlName: 'Maps',
                backgroundColor: Colors.blue(0)
              },
              {
                url: 'https://docs.google.com/spreadsheets/d/1TjHC4Vaed8dFqSkagM6teNlmBjFGPiUbTRnTnvxnnu4/edit#gid=296924292',
                urlName: 'Boss Strategies',
              },
              {
                url: 'https://sangvis.science/list/all',
                urlName: 'T-Doll Recipe DB',
              },
              {
                url: 'https://docs.google.com/document/d/1nRRyH9IH7dg7BRow8Y_hh2bNAlLxtpRB6cr_kzl_5NE/edit#',
                urlName: 'Next Ranking',
                backgroundColor: Colors.blue(0)
              },
            ]
          },
          {
            subheader: 'Arknights',
            fontColor: Colors.green(2),
            suburls: [
              {
                url: 'https://gamepress.gg/arknights/tier-list/arknights-operator-tier-list',
                urlName: 'Tier',
                backgroundColor: Colors.green(1)
              },
              {
                url: 'https://docs.google.com/spreadsheets/d/1L5smDJR2_4JCLvDJpT2Cz94inl8MFtRXH-xEOyuahIA/edit#gid=0',
                urlName: 'Character Analysis',
              },
              {
                url: 'https://imgur.com/a/Lh1qfDi',
                urlName: 'CN Tier List',
              },
            ]
          },
        ],
      },
    ],
  },
  {
    tab: '',
    links: [
      {
        header: 'Reddit',
        urls: [
          {
            suburls: [
              {
                url: 'https://old.reddit.com/r/DOAXVenusVacation/',
                urlName: 'DoA Venus Vacation',
                backgroundColor: Colors.green(0)
              },
               {
                url: 'https://old.reddit.com/r/AzureLane/',
                urlName: 'Azure Lane',
                backgroundColor: Colors.blue(0)
              },
              {
                url: 'https://old.reddit.com/r/grandorder/',
                urlName: 'Fate Go',
                backgroundColor: Colors.purple(0)
              },
              {
                url: 'https://old.reddit.com/r/SaGa_ReuniverSe/',
                urlName: 'Romancing Saga',
              },
            ]
          }
        ],
      },
      {
        header: 'Wiki',
        urls: [
          {
            suburls: [
              {
                url: 'https://doax.cc/english.html',
                urlName: 'DoA X',
                backgroundColor: Colors.green(0)
              },
              {
                url: 'https://azurlane.koumakan.jp/Azur_Lane_Wiki',
                urlName: 'AL',
                backgroundColor: Colors.blue(0)
              },
              {
                url: 'https://grandorder.wiki/Main_Page',
                urlName: 'Fate Go',
                backgroundColor: Colors.purple(0)
              }
            ]
          }
        ],
      },
      {
        header: 'Blogs',
        urls: [
          {
            subheader: 'DOA Mods',
            suburls: [
              {
                url: 'https://www.loverslab.com/forum/259-dead-or-alive-xtreme-venus-vacation/',
                urlName: 'Loverslab',
                backgroundColor: Colors.green(0)
              },
              {
                url: 'https://www.loverslab.com/topic/114640-doaxvv-minazukis-mod/',
                urlName: 'Minazuki Mod',
              },
            ]
          },
          {
            subheader: 'FGO',
            suburls: [
              {
                url: 'https://gamepress.gg/grandorder/',
                urlName: 'Gamepress',
              },
              {
                url: 'https://gamepress.gg/grandorder/event-guides',
                urlName: 'Events',
                backgroundColor: Colors.purple(0)
              },
            ]
          },
        ],
      },
      {
        header: 'Tools',
        urls: [
          {
            suburls: [
              {
                url: 'https://shipfu.moe/fgo/',
                urlName: 'Fate Save Cal',
              },
            ]
          }
        ],
      },
    ],
  },
];
