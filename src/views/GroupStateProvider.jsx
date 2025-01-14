import stickerOnlyImg from "../asserts/images/group/stickeronly.jpg";
import communityImg from "../asserts/images/group/main.jpg";
import techImg from "../asserts/images/group/tech.jpg";
import progImg from "../asserts/images/group/prog.jpg";
import moviesImg from "../asserts/images/group/movies.jpg";
import statusImg from "../asserts/images/group/status.jpg";
import memeImg from "../asserts/images/group/meme.jpg";
import sticker1Img from "../asserts/images/group/sticker1.jpg";
import sticker2Img from "../asserts/images/group/sticker2.jpg";
import sticker3Img from "../asserts/images/group/sticker3.jpg";
import animeImg from "../asserts/images/group/anime.jpg";
import botImg from "../asserts/images/group/bot.jpg";
import haveliImg from "../asserts/images/group/haveli.jpg";
import gamingImg from "../asserts/images/group/gaming.jpg";
import studiesImg from "../asserts/images/group/study.jpg";
import sportsImg from "../asserts/images/group/sports.jpg";
import cryptoImg from "../asserts/images/group/crypto.jpg";
import autoImg from "../asserts/images/group/auto.jpg";
import dealsImg from "../asserts/images/group/deals.jpg";
// import pubgmImg from "../asserts/images/group/pubgm.jpg";

export default function GroupStateProvider() {
  const wagroups = [
    {
      name: "STICKER ONLY",
      desc: "Sticker all time, closed chat",
      img: stickerOnlyImg,
      url: "https://",
    },
    {
      name: "COMMUNITY",
      desc: "Main Group, For all Discussion",
      img: communityImg,
      url: "https://",
    },
    {
      name: "TECH DISCUSSION",
      desc: "For Tech related Discussion",
      img: techImg,
      url: "https://",
    },
    {
      name: "TECH NEWS",
      desc: "For Latest Tech News",
      img: techImg,
      url: "https://",
    },
    {
      name: "PROGRAMMERS",
      desc: "For Programming Discussion",
      img: progImg,
      url: "https://",
    },
    {
      name: "MOVIES",
      desc: "For Series, Movies Discussion",
      img: moviesImg,
      url: "https://",
    },
    {
      name: "STATUS",
      desc: "For Sharing Whatsapp Status",
      img: statusImg,
      url: "https://",
    },
    {
      name: "MEMES",
      desc: "For latest Memes Sharing",
      img: memeImg,
      url: "https://",
    },
    {
      name: "STICKER 1.0",
      desc: "For new Sticker Sharing",
      img: sticker1Img,
      url: "https://",
    },
    {
      name: "STICKER 2.0",
      desc: "For new Sticker Sharing",
      img: sticker2Img,
      url: "https://",
    },
    {
      name: "STICKER 3.0",
      desc: "For new Sticker Sharing",
      img: sticker3Img,
      url: "https://",
    },
    {
      name: "ANIME",
      desc: "For Anime Related Discussion",
      img: animeImg,
      url: "https://",
    },
    {
      name: "BOT",
      desc: "For Whatsapp Bot Testing",
      img: botImg,
      url: "https://",
    },
    {
      name: "HAVELI",
      desc: "For Spam and all",
      img: haveliImg,
      url: "https://",
    },
    {
      name: "GAMING",
      desc: "For Gaming Discussion",
      img: gamingImg,
      url: "https://",
    },
    {
      name: "STUDIES",
      desc: "For Study Related Discussion",
      img: studiesImg,
      url: "https://",
    },
    {
      name: "SPORTS",
      desc: "For Different Sports Discussion",
      img: sportsImg,
      url: "https://",
    },
    {
      name: "CRYPTO",
      desc: "For Crypto Related Discussion",
      img: cryptoImg,
      url: "https://",
    },
    {
      name: "AUTOMOBILE",
      desc: "For Cars Bikes Discussion",
      img: autoImg,
      url: "https://",
    },
    // {
    //   name: "BGMI",
    //   desc: "For BGMI Mobile Discussion",
    //   img: pubgmImg,
    //   url: "https://",
    // },
    {
      name: "DEALS",
      desc: "For Loots & Deals Info",
      img: dealsImg,
      url: "https://",
    },
  ];
  return wagroups;
}
