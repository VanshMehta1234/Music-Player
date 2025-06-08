let musicDB = [
    {
        id: 8,
        name: "Ignite",
        author_name: "Tom wilson, Heuse",
        img: "ignite-1600419626-nHn4WXY79q.jpg",
        lang: "ENGLISH",
        type: "electronic",
        musicName: "Heuse & Tom Wilson - Ignite [NCS Release].mp3",
        attribution: {
            song: "Heuse & Tom Wilson - Ignite [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Ignite",
            stream: "http://youtu.be/zbqgv0mMfwk"
        }
    },
    {
        id: 9,
        name: "Intentions (feat. Quavo)",
        author_name: "Justin Bieber",
        img: "intentions.jpg",
        lang: "ENGLISH",
        type: "electronic",
        musicName: "intentions.mp3",
        attribution: {
          song: "Intentions (feat. Quavo)",
          musicBy: "Justin Bieber",
          download: null, // Add download URLs or set to null if unavailable
          stream: null, // Add streaming URLs or set to null if unavailable
        },
      },
      {
        id: 10,
        name: "Naina Da Kya Kasoor",
        author_name: "Amit Trivedi",
        img: "naina.jpg",
        lang: "HINDI",
        musicName: "Naina_da_kya_kasoor.mp3",
        attribution: {
          song: "Naina Da Kya Kasoor",
          musicBy: "Amit Trivedi (From \"Luka Chuppi\")",
          download: null, // Add download URLs or set to null if unavailable
          stream: null, // Add streaming URLs or set to null if unavailable
        },
      },
      {
        id: 11,
        name: "Memories",
        author_name: "Maroon 5",
        img: "memories.jpg",
        lang: "ENGLISH",
        musicName: "memories.mp3",
        attribution: {
          song: "Memories",
          musicBy: "Maroon 5",
          download: null, // Add download URLs or set to null if unavailable
          stream: null, // Add streaming URLs or set to null if unavailable
        },
      },
      {
        id: 12,
        name: "Old Town Road",
        author_name: "Lil Nas X",
        img: "oldtownroad.jpg",
        lang: "ENGLISH",
        musicName: "old_town_road.mp3",
        attribution: {
          song: "Old Town Road",
          musicBy: "Lil Nas X",
          download: null, // Add download URLs or set to null if unavailable
          stream: null, // Add streaming URLs or set to null if unavailable
        },
      },
      {
        id: 13,
        name: "Illegal Weapon 2.0",
        author_name: "Jasmine Sandlas",
        img: "illegal.jpg",
        lang: "PUNJABI",
        musicName: "illeagal_weapon_2.mp3",
        attribution: {
          song: "Illegal Weapon 2.0",
          musicBy: "Jasmine Sandlas",
          download: null, // Add download URLs or set to null if unavailable
          stream: null, // Add streaming URLs or set to null if unavailable
        },
      },
      {
        id: 14,
        name: "Shayad",
        author_name: "Pritam",
        img: "shayad.jpg",
        lang: "HINDI",
        musicName: "shayad.mp3",
        attribution: {
          song: "Shayad",
          musicBy: "Pritam (From \"Love Aaj Kal\")",
          download: null, // Add download URLs or set to null if unavailable
          stream: null, // Add streaming URLs or set to null if unavailable
        },
      },
      {
        id: 15,
        name: "Without Me",
        author_name: "Halsey",
        img: "withoutme.jpg",
        lang: "ENGLISH",
        musicName: "without_me.mp3",
        attribution: {
          song: "Without Me",
          musicBy: "Halsey",
          download: null, // Add download URLs or set to null if unavailable
          stream: null, // Add streaming URLs or set to null if unavailable
        },
      },
      {
        id:16,
        name: "Happier",
        author_name: "Marshmello",
        img: "happier.jpg",
        lang: "ENGLISH",
        musicName: "happier.mp3",
        attribution: {
          // Assuming you don't have attribution information for Marshmello's "Happier":
          song: "Happier",
          musicBy: "Marshmello",
          download: null, // Set to null if not available
          stream: null, // Set to null if not available
        },
      },
      {
        id: 17,
        name: "Faded",
        author_name: "Alan Walker",
        img: "faded.jpg",
        lang: "ENGLISH",
        musicName: "Faded_Alan_Walker.mp3",
        attribution: {
          song: "Faded",
          musicBy: "Alan Walker",
          download: "https://www.amazon.com/Faded-Alan-Walker/dp/B01CZU2J64", // Example download URL
          stream: "https://www.youtube.com/watch?v=qT0mc3q6Lg", // Example streaming URL
        },
      },
      {
        id: 18,
        name: "I Don't Care (with Justin Bieber)",
        author_name: "Ed Sheeran",
        img: "idontcare.jpg",
        lang: "ENGLISH",
        musicName: "i_dont_care.mp3",
        attribution: {
          song: "I Don't Care (with Justin Bieber)",
          musicBy: "Ed Sheeran",
          download: "https://www.amazon.com/No-6-Collaborations-Project-Deluxe/dp/B07NBX9PWN", // Example download URL
          stream: "https://www.youtube.com/watch?v=CUKYK_4qPko", // Example streaming URL
        },
      },
      {
        id: 0,
        name: "Shakedown",
        author_name: "Clarx",
        img: "shakedown.jpg",
        lang: "ENGLISH",
        type: "electronic",
        musicName: "Clarx - Shakedown [NCS Release].mp3",
        attribution: {
            song: "Clarx - Shakedown [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Shakedown",
            stream: "http://youtu.be/qJT0mc3q6Lg"
        }
    },
    {
        id: 1,
        name: "Games Worldbeat",
        author_name: "Bernardo R.",
        img: "notAvailable.jpg",
        lang: null,
        type:"instrumental",
        musicName: "mixkit-games-worldbeat-466.mp3",
        attribution: {
            song: "Games Worldbeat",
            musicBy: "mixkit",
            download: null,
            stream: null
        }
    },
    {
        id: 2,
        name: "OverMyHead",
        author_name: " ROY KNOX",
        img: "over-my-head-1602154826-mOiKzOJDe6.jpg",
        lang: "ENGLISH",
        type: "electronic",
        musicName: "ROY KNOX -  Over My Head (Feat. Mike Robert) [NCS Release].mp3",
        attribution: {
            song: "ROY KNOX - Over My Head (Feat. Mike Robert) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/OverMyHead",
            stream: null
        }
    },
    {
        id: 3,
        name: "Want You (feat. Sara Skinner)",
        author_name: "Subtact, Sara Skinner",
        img: "want-you-feat-sara-skinner-1586956276-s4lOrfrHQj.jpg",
        lang: "ENGLISH",
        type: "electronic",
        musicName: "Subtact - Want You (feat. Sara Skinner) [NCS Release].mp3",
        attribution: {
            song: "Subtact - Want You (feat. Sara Skinner) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/WantYou",
            stream: "http://youtu.be/Pww31vN_1QY"
        }
    },
    {
        id: 4,
        name: "Apocalypse",
        author_name: "Midranger",
        img: "apocalypse-1600776027-tsCmgK4gEU.jpg",
        lang: "ENGLISH",
        type: "electronic",
        musicName: "Midranger - Apocalypse [NCS Release].mp3",
        attribution: {
            song: "Midranger - Apocalypse [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Apocalypse",
            stream: "http://youtu.be/Whw1sWDpAvE"
        }
    },
    {
        id: 5,
        name: "Alive",
        author_name: "Neoni, N3WPORT",
        img: "alive.jpg",
        lang: "ENGLISH",
        type: "electronic",
        musicName: "N3WPORT - Alive (feat. Neoni) [NCS Release].mp3",
        attribution: {
            song: "N3WPORT - Alive (feat. Neoni) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/NAlive",
            stream: "http://youtu.be/vJAcXd_UtWQ"
        }
    },
    {
        id: 6,
        name: "Impact Moderato",
        author_name: "Kevin MacLeod",
        img: "notAvailable.jpg",
        lang: "ENGLISH",
        type: "instrumental",
        musicName: "impact.mp3",
        attribution: {
            song: "Impact Moderato",
            musicBy: "Kevin MacLeod",
            download: null,
            stream: null
        }
    },
    {
        id: 7,
        name: "Impact Moderato 2",
        author_name: "Kevin MacLeod",
        img: "notAvailable.jpg",
        lang: "ENGLISH",
        type: "instrumental",
        musicName: "impact2.mp3",
        attribution: {
            song: "Impact Moderato",
            musicBy: "Kevin MacLeod",
            download: null,
            stream: null
        }
    }
];

export default musicDB;
