const GOOGLE_API_KEY="AIzaSyCoBOubqnh5pGEuckuEEm-8x-xI9yDTmDQ"

export const YOUTUBE_VIDEOS_API =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
    +GOOGLE_API_KEY
    //process.env.GOOGLE_API_KEY
  );

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );

export const LIVE_CHAT_COUNT = 10;

export const CAROUSEL_DATA = [
  "All",
  "Songs",
  "Gaming",
  "aaaaa",
  "Live",
  "Scooer",
  "News",
  "Cooking",
  "Bigg Boss",
  "Score",
  "Party",
  "Yoga",
  "Dance",
  "Fitness",
];

const commentsData = [
  {
    name: "Linga",
    text: "This is about comment section",
    replies: [
      {
        name: "Linga",
        text: "This is about comment section",
        replies: [
          {
            name: "Linga",
            text: "This is about comment section",
            replies: [
              {
                name: "Linga",
                text: "This is about comment section",
                replies: [
                  {
                    name: "Linga",
                    text: "This is about comment section",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Linga",
        text: "This is about comment section",
        replies: [],
      },
      {
        name: "Linga",
        text: "This is about comment section",
        replies: [],
      },
    ],
  },
  {
    name: "Linga",
    text: "This is about comment section",
    replies: [],
  },
  {
    name: "Linga",
    text: "This is about comment section",
    replies: [],
  },
  {
    name: "Linga",
    text: "This is about comment section",
    replies: [],
  },
];
export default commentsData;
export const USER_ICON =
  "https://cdn-icons-png.flaticon.com/512/709/709722.png";

export const HAMBURGER_ICON =
  "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp";

export const YOUTUBE_LOGO =
  "https://ongpng.com/wp-content/uploads/2023/04/3-13.png";

export const YOUTUBE_URL = "https://www.youtube.com/embed/";
