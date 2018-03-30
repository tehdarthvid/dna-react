/* @darthvid DNA (React) input.js */

const cardList = [
  // childhood
  {
    title: "Star Wars",
    bgImage:
      "https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/1jw_tyZoU5qoOrOOOvQlBLg.jpeg",
    date: "25 May 1977"
  },

  {
    title: "超時空要塞 マクロス",
    bgImage: "http://otalab.net/img2/120106-9l.jpg",
    date: "3 Oct 1982 – 26 Jun 1983"
  },
  {
    title: "Super Mario Bros.",
    bgImage: "http://www.retrogames.cz/games/005/NES_00.gif",
    date: "13 Sep 1985"
  },
  {
    title: "The Uncanny X-Men",
    bgImage:
      "http://geekleagueofamerica.com/wp-content/uploads/2013/09/xmen1.jpg",
    date: "10 Sep 1963"
  },
  // high-school

  {
    title: "Nevermind",
    bgImage:
      "https://images.genius.com/24be3cd0b550d14375035de8c9c4c74c.1000x1000x1.jpg",
    date: "24 Sep 1991"
  },
  {
    title: "Super Street Fighter II X: Grand Master Challenge",
    bgImage:
      "https://steamuserimages-a.akamaihd.net/ugc/543003889249989774/5AAD2D518617DBB02B61EACECFEDC2BF336C9F6E/",
    date: "23 Feb 1994"
  },
  {
    title: "ドラゴンボールZ",
    //bgImage	: "https://vignette.wikia.nocookie.net/dragonball/images/3/37/TheZFighters03.png/revision/latest/scale-to-width-down/1000?cb=20150621010223",
    bgImage: "https://i.ytimg.com/vi/ISBe8FcWCXI/maxresdefault.jpg",
    date: "26 Apr 1989 – 31 Jan 1996"
  },
  {
    title: "らんま 1/2",
    bgImage:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/1987.09+%E3%80%8C%E3%82%89%E3%82%93%E3%81%BE+1_2%E3%80%8D+%E9%80%B1%E5%88%8A%E5%B0%91%E5%B9%B4%E3%82%B5%E3%83%B3%E3%83%87%E3%83%BC+36+9478482851_04bd05ff94_b.jpg",
    date: "Sep 1987 – Mar 1996"
  },
  {
    title: "Batman: The Animated Series",
    bgImage:
      "https://vignette1.wikia.nocookie.net/batman/images/2/24/BTASposter.png",
    date: "5 Sep 1992 – 15 Sep 1995"
  },
  {
    title: "新世紀 エヴァンゲリオン",
    bgImage:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/1995.10.04+%E3%80%8C%E6%96%B0%E4%B8%96%E7%B4%80%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3%E3%80%8D+75442l.jpg",
    date: "4 Oct 1995 – 27 Mar 1996"
  },
  // college
  {
    title: "悪魔城 ドラキュラＸ 月下の夜想曲",
    bgImage:
      "http://neoapo.com/images/game/183/f847d2c227c9d186fef99e3cbdabeef0.jpg",
    date: "20 Mar 1997"
  },
  {
    title: "Starcraft",
    bgImage:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/1998.03.31StarCraft-Box-807x1024.jpg",
    date: "3 Mar 1998"
  },
  // first job

  {
    title: "K&R C",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/The_C_Programming_Language%2C_First_Edition_Cover_%282%29.svg",
    date: "22 Feb 1978"
  },
  // between jobs
  {
    title: "Die Siedler von Catan",
    bgImage:
      "http://old.e-s-g.eu/Images/Spiele/Themen/SdJ/Siedler%20von%20Catan%20Franckh%20Kosmos%20Erstausgabe.jpg",
    date: "Oct 1995"
  },
  {
    title: "Team Fortress 2",
    bgImage: "https://images6.alphacoders.com/749/thumb-1920-749217.jpg",
    date: "10 Oct 2007"
  },
  {
    title: "Hyperion",
    bgImage:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/1989+81i8IM58zLL.jpg",
    date: "26 May 1989"
  },
  // second job
  {
    title: "Gamers With Jobs Conference Call",
    bgImage: "https://secureimg.stitcher.com/feedimagesplain328/6637.jpg",
    date: "2 Aug 2006"
  },
  {
    title: "K-On!",
    bgImage: "https://img.fireden.net/a/image/1462/76/1462760342445.jpg",
    date: "3 Apr 2009 - 26 Jun 2009"
  },
  {
    title: "サマーウォーズ",
    bgImage: "http://livedoor.blogimg.jp/acideigakan/imgs/0/7/07f820a0.jpg",
    date: "1 Aug 2009"
  },
  {
    title: "Redline",
    bgImage: "https://av.watch.impress.co.jp/img/avw/docs/441/654/tc04.jpg",
    date: "14 Aug 2009"
  },
  // dark period
  {
    title: "化物語",
    bgImage:
      "https://media.senscritique.com/media/000016835992/source_big/Bakemonogatari.jpg",
    date: "3 Jul 2009 - 25 Jun 2010"
  },
  {
    title: "魔法少女まどか ☆マギカ",
    bgImage:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/2011.01.07+%E3%80%8C%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E3%81%BE%E3%81%A9%E3%81%8B%E2%98%86%E3%83%9E%E3%82%AE%E3%82%AB%E3%80%8D+4744f30136df1ad1e6c012b5a1cda5ea.jpg",
    date: "7 Jan 2011 - 21 Apr 2011"
  },
  {
    title: "The Binding of Isaac",
    bgImage:
      "https://playindiegames.files.wordpress.com/2011/09/the-binding-of-isaac.jpg",
    date: "28 Sep 2011"
  },
  {
    title: "The iDOLM@STER",
    bgImage: "https://myanimelist.cdn-dena.com/images/anime/9/41085.jpg",
    date: ">8 Jul 2011 - 23 Dec 2011"
  },
  {
    title: "キルラキル",
    bgImage:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/2013.10.04+%E3%80%8C%E3%82%AD%E3%83%AB%E3%83%A9%E3%82%AD%E3%83%AB%E3%80%8D+100051.jpg",
    date: "4 Oct 2013 - 28 Mar 2014"
  },
  {
    title: "月刊少女野崎くん",
    bgImage:
      "http://i.imacdn.com/ta/2016/09/23/a10298f1175e096c_33308f9738776dd4_29605414746065143154671.jpg",
    date: "7 Jul 2014 - 22 Sep 2014"
  },
  // current
  {
    title: "Every Frame a Painting",
    bgImage:
      "https://yt3.ggpht.com/-idi8PvE0BEI/AAAAAAAAAAI/AAAAAAAAAAA/RIWRHpkQspo/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg",
    date: "16 Apr 2014 Apr - 2 Dec 2017"
  },
  {
    title: "Mad Max: Fury Road",
    bgImage:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/2015.05.07+Mad+Max+Fury+Road+11110866_658246694280855_1682386295316885693_o.jpg",
    date: "7 May 2015"
  },
  {
    title: "Overwatch",
    bgImage:
      "http://www.mobygames.com/images/covers/l/340275-overwatch-origins-edition-playstation-4-front-cover.jpg",
    date: "24 May 2016"
  },
  {
    title: "君の名は。",
    bgImage:
      "https://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/32/91/169395_02.jpg",
    date: "3 Jul 2016"
  },
  {
    title: "The Fifth Season",
    bgImage:
      "https://i2.wp.com/www.rantingdragon.com/anticipation/books2014/big/05.jpg",
    date: "4 Aug 2015"
  }
];

export default cardList;
