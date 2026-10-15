/*
  网站的全部内容都在这个文件里。
  只需要改这里的文字和图片路径，不用碰其他文件。

  多语言写法：任何一段文字都可以写成
    { en: "English", zh: "中文", pt: "Português", es: "Español" }
  某种语言没填时，会自动显示英文。
  如果某段文字在所有语言里都一样（比如年份），直接写成普通字符串 "2024" 即可。

  图片放在 images/ 文件夹里，每个系列一个子文件夹，例如 images/series-one/01.jpg
*/

window.SITE = {
  // 网站提供的语言，顺序就是切换按钮的顺序；第一个是默认语言
  languages: ["en", "zh", "pt", "es"],

  name: "Ziyi",                        // 也可以写成 { en: "Ziyi ...", zh: "..." }
  role: {
    en: "Photographer, Copenhagen",
    zh: "摄影师，哥本哈根",
    pt: "Fotógrafa, Copenhague",
    es: "Fotógrafa, Copenhague"
  },
  email: "ziyiz3655@gmail.com",
  instagram: "domi.yiii",             // Instagram 用户名，不带 @
  home: [
    "images/series-one/02.jpg",
    "images/series-two/06.jpg",
    "images/series-one/11.jpg",
    "images/series-two/21.jpg",
    "images/series-two/29.jpg"
  ],
  
  // ---------- 作品系列：全部显示在 Photographs 页面里 ----------
  // 第一个系列的封面会作为网站首页的大图。
  // 每个系列的封面默认是第一张照片；想用别的照片当封面，加一行 cover: "images/series-one/05.jpg",
   series: [
    {
      slug: "Farewell",              // 网址里用的名字，只用小写字母、数字和横线
      title: { en: "Farewell", zh: "告别", pt: "Despedida", es: "Despedida" },
      year: "2021",
      statement: {
        en: "One midsummer in Beijing, I began to learn photography as a third organ of breath, and the film camera grew into a new sense. At the parting, four years flared and shimmered like firelight, and I breathed in great, glad gulps, hoping to hold on to the traces of our meeting.\n\nThe pictures came in short, abundant bursts, like an iced lemonade after a summer day of pouring sweat.",
        zh: "在北京的一个盛夏，开始习得摄影作为呼吸的第三个器官，胶片相机长成新的感官，四年的时光在分别时火光潋滟，大口畅快地呼吸希望留住相遇的印记。\n\n短促而大量的拍摄，如经历夏日大汗淋漓后的柠檬冰水。",
        pt: "Em pleno verão, em Pequim, comecei a aprender a fotografia como um terceiro órgão da respiração, e a câmera analógica cresceu em mim como um novo sentido. Na despedida, quatro anos cintilaram como chamas, e eu respirava a plenos pulmões, querendo guardar as marcas dos nossos encontros.\n\nDisparos breves e numerosos, como uma limonada gelada depois de um dia de verão encharcado de suor.",
        es: "En pleno verano, en Pekín, empecé a aprender la fotografía como un tercer órgano de la respiración, y la cámara analógica se convirtió en un nuevo sentido. En la despedida, cuatro años centellearon como llamas, y yo respiraba a pleno pulmón, queriendo guardar las huellas de nuestros encuentros.\n\nDisparos breves y numerosos, como una limonada helada después de un día de verano empapado en sudor."
      },
      images: [
        { file: "images/series-one/01.jpg", caption: { en: "Dragon Boat Festival stall, 2021", zh: "端午节小摊，2021", pt: "Barraca do Festival do Barco-Dragão, 2021", es: "Puesto del Festival del Barco del Dragón, 2021" } },
        { file: "images/series-one/02.jpg", caption: { en: "Graduation photo, 2021", zh: "毕业照，2021", pt: "Foto de formatura, 2021", es: "Foto de graduación, 2021" } },
        { file: "images/series-one/03.jpg", caption: { en: "Billboard truck, 2021", zh: "广告车，2021", pt: "Caminhão de propaganda, 2021", es: "Camión publicitario, 2021" } },
        { file: "images/series-one/04.jpg", caption: { en: "Blue Harbour, 2021", zh: "蓝色港湾，2021", pt: "Porto Azul, 2021", es: "Puerto Azul, 2021" } },
        { file: "images/series-one/05.jpg", caption: { en: "Conjoined buildings, 2021", zh: "连体楼，2021", pt: "Prédios siameses, 2021", es: "Edificios siameses, 2021" } },
        { file: "images/series-one/06.jpg", caption: { en: "Shrubs by the bus stop, 2021", zh: "公交车站旁的灌木，2021", pt: "Arbustos junto ao ponto de ônibus, 2021", es: "Arbustos junto a la parada de autobús, 2021" } },
        { file: "images/series-one/07.jpg", caption: { en: "Stretching, 2021", zh: "拉伸，2021", pt: "Alongamento, 2021", es: "Estiramiento, 2021" } },
        { file: "images/series-one/08.jpg", caption: { en: "Long jump, 2021", zh: "跳远，2021", pt: "Salto em distância, 2021", es: "Salto de longitud, 2021" } },
        { file: "images/series-one/09.jpg", caption: { en: "Reign, 2021", zh: "统治，2021", pt: "Reinado, 2021", es: "Reinado, 2021" } },
        { file: "images/series-one/10.jpg", caption: { en: "Humanities, pink-collar, 2021", zh: "文科粉领，2021", pt: "Humanas, colarinho-rosa, 2021", es: "Letras, cuello rosa, 2021" } },
        { file: "images/series-one/11.jpg", caption: { en: "Look at me, just once, 2021", zh: "看我一眼，2021", pt: "Olhe para mim, só uma vez, 2021", es: "Mírame, solo una vez, 2021" } },
        { file: "images/series-one/12.jpg", caption: { en: "Final chapter, 2021", zh: "终章，2021", pt: "Capítulo final, 2021", es: "Capítulo final, 2021" } }
      ]
    },
    {
      slug: "trees",
      title: { en: "Trees", zh: "树", pt: "Árvores", es: "Árboles" },
      year: "2017–2026",
      statement: {
        en: "Trees, ancient and silent. Spring, summer, autumn, winter, turning round again and again. Time passes and cannot be held back, yet the way a tree grows stays timeless, each one flourishing in its own singular way.",
        zh: "树，古老而沉寂，春夏秋冬，往复循环，时间流逝不可阻挡，树木的成长轨迹却永恒而独绽异彩。",
        pt: "Árvores, antigas e silenciosas. Primavera, verão, outono, inverno, num ciclo que sempre se repete. O tempo passa e não se deixa deter, mas o crescimento de uma árvore permanece eterno, e cada uma floresce à sua maneira, única.",
        es: "Árboles, antiguos y silenciosos. Primavera, verano, otoño, invierno, en un ciclo que siempre se repite. El tiempo pasa y no se deja detener, pero el crecimiento de un árbol permanece eterno, y cada uno florece a su manera, única."
      },
      images: [
        { file: "images/series-two/01.jpg", caption: { en: "Nalati, Xinjiang, China, 2017/07/26", zh: "新疆，那拉提，2017/07/26", pt: "Nalati, Xinjiang, China, 2017/07/26", es: "Nalati, Xinjiang, China, 2017/07/26" } },
        { file: "images/series-two/02.jpg", caption: { en: "Yucheng District, Ya'an, Sichuan, China, 2020/01/03", zh: "四川省，雅安市雨城区，2020/01/03", pt: "Distrito de Yucheng, Ya'an, Sichuan, China, 2020/01/03", es: "Distrito de Yucheng, Ya'an, Sichuan, China, 2020/01/03" } },
        { file: "images/series-two/03.jpg", caption: { en: "Chengdu, Sichuan, China, 2017/08/29", zh: "四川省，成都市，2017/08/29", pt: "Chengdu, Sichuan, China, 2017/08/29", es: "Chengdu, Sichuan, China, 2017/08/29" } },
        { file: "images/series-two/04.jpg", caption: { en: "Lyngby, Denmark, 2025/04/03", zh: "丹麦，灵比，2025/04/03", pt: "Lyngby, Dinamarca, 2025/04/03", es: "Lyngby, Dinamarca, 2025/04/03" } },
        { file: "images/series-two/05.jpg", caption: { en: "Lyngby, Denmark, 2024/01/17", zh: "丹麦，灵比，2024/01/17", pt: "Lyngby, Dinamarca, 2024/01/17", es: "Lyngby, Dinamarca, 2024/01/17" } },
        { file: "images/series-two/06.jpg", caption: { en: "Schwangau, Ostallgäu, Bavaria, Germany, 2024/12/31", zh: "德国，拜恩 · 东阿尔高 · 施万高，2024/12/31", pt: "Schwangau, Ostallgäu, Baviera, Alemanha, 2024/12/31", es: "Schwangau, Ostallgäu, Baviera, Alemania, 2024/12/31" } },
        { file: "images/series-two/07.jpg", caption: { en: "Sydney, Australia, 2025/10/09", zh: "澳大利亚，悉尼，2025/10/09", pt: "Sydney, Austrália, 2025/10/09", es: "Sídney, Australia, 2025/10/09" } },
        { file: "images/series-two/08.jpg", caption: { en: "Yuyuantan Park, Beijing, China, 2021/03/31", zh: "北京，玉渊潭公园，2021/03/31", pt: "Parque Yuyuantan, Pequim, China, 2021/03/31", es: "Parque Yuyuantan, Pekín, China, 2021/03/31" } },
        { file: "images/series-two/09.jpg", caption: { en: "Xi'an Jiaotong University, Shaanxi, China, 2024/05/12", zh: "陕西省，西安交通大学，2024/05/12", pt: "Universidade Jiaotong de Xi'an, Shaanxi, China, 2024/05/12", es: "Universidad Jiaotong de Xi'an, Shaanxi, China, 2024/05/12" } },
        { file: "images/series-two/10.jpg", caption: { en: "Xi'an, Shaanxi, China, 2023/10/13", zh: "陕西省，西安市，2023/10/13", pt: "Xi'an, Shaanxi, China, 2023/10/13", es: "Xi'an, Shaanxi, China, 2023/10/13" } },
        { file: "images/series-two/11.jpg", caption: { en: "Qindu District, Xianyang, Shaanxi, China, 2021/12/06", zh: "陕西省，咸阳市秦都区，2021/12/06", pt: "Distrito de Qindu, Xianyang, Shaanxi, China, 2021/12/06", es: "Distrito de Qindu, Xianyang, Shaanxi, China, 2021/12/06" } },
        { file: "images/series-two/12.jpg", caption: { en: "Schwangau, Ostallgäu, Bavaria, Germany, 2024/12/31", zh: "德国，拜恩 · 东阿尔高 · 施万高，2024/12/31", pt: "Schwangau, Ostallgäu, Baviera, Alemanha, 2024/12/31", es: "Schwangau, Ostallgäu, Baviera, Alemania, 2024/12/31" } },
        { file: "images/series-two/13.jpg", caption: { en: "Huyi District, Xi'an, Shaanxi, China, 2022/05/12", zh: "陕西省，西安市鄠邑区，2022/05/12", pt: "Distrito de Huyi, Xi'an, Shaanxi, China, 2022/05/12", es: "Distrito de Huyi, Xi'an, Shaanxi, China, 2022/05/12" } },
        { file: "images/series-two/14.jpg", caption: { en: "Lyngby, Denmark, 2024/09/08", zh: "丹麦，灵比，2024/09/08", pt: "Lyngby, Dinamarca, 2024/09/08", es: "Lyngby, Dinamarca, 2024/09/08" } },
        { file: "images/series-two/15.jpg", caption: { en: "Kyoto, Japan, 2024/06/16", zh: "日本，京都，2024/06/16", pt: "Quioto, Japão, 2024/06/16", es: "Kioto, Japón, 2024/06/16" } },
        { file: "images/series-two/16.jpg", caption: { en: "Lyngby, Denmark, 2026/04/04", zh: "丹麦，灵比，2026/04/04", pt: "Lyngby, Dinamarca, 2026/04/04", es: "Lyngby, Dinamarca, 2026/04/04" } },
        { file: "images/series-two/17.jpg", caption: { en: "Erbozi Bridge, Beijing, China, 2020/11/01", zh: "北京市，二拨子桥，2020/11/01", pt: "Ponte Erbozi, Pequim, China, 2020/11/01", es: "Puente Erbozi, Pekín, China, 2020/11/01" } },
        { file: "images/series-two/18.jpg", caption: { en: "Germany, 2024/12/31", zh: "德国，2024/12/31", pt: "Alemanha, 2024/12/31", es: "Alemania, 2024/12/31" } },
        { file: "images/series-two/19.jpg", caption: { en: "Gongnaisi, Xinjiang, China, 2017/07/25", zh: "新疆，巩乃斯，2017/07/25", pt: "Gongnaisi, Xinjiang, China, 2017/07/25", es: "Gongnaisi, Xinjiang, China, 2017/07/25" } },
        { file: "images/series-two/20.jpg", caption: { en: "North China Electric Power University, Beijing, China, 2021/06/28", zh: "北京市，华北电力大学，2021/06/28", pt: "Universidade de Energia Elétrica do Norte da China, Pequim, China, 2021/06/28", es: "Universidad de Energía Eléctrica del Norte de China, Pekín, China, 2021/06/28" } },
        { file: "images/series-two/21.jpg", caption: { en: "Lisbon, Portugal, 2025/05/07", zh: "葡萄牙，里斯本，2025/05/07", pt: "Lisboa, Portugal, 2025/05/07", es: "Lisboa, Portugal, 2025/05/07" } },
        { file: "images/series-two/22.jpg", caption: { en: "Xi'an Jiaotong University, Shaanxi, China, 2024/05/12", zh: "陕西省，西安交通大学，2024/05/12", pt: "Universidade Jiaotong de Xi'an, Shaanxi, China, 2024/05/12", es: "Universidad Jiaotong de Xi'an, Shaanxi, China, 2024/05/12" } },
        { file: "images/series-two/23.jpg", caption: { en: "Dresden, Saxony, Germany, 2024/12/28", zh: "德国，萨克森，德累斯顿，2024/12/28", pt: "Dresden, Saxônia, Alemanha, 2024/12/28", es: "Dresde, Sajonia, Alemania, 2024/12/28" } },
        { file: "images/series-two/24.jpg", caption: { en: "Denmark, 2024/10/05", zh: "丹麦，2024/10/05", pt: "Dinamarca, 2024/10/05", es: "Dinamarca, 2024/10/05" } },
        { file: "images/series-two/25.jpg", caption: { en: "Technical University of Denmark, 2025/11/21", zh: "丹麦，丹麦技术大学，2025/11/21", pt: "Universidade Técnica da Dinamarca, 2025/11/21", es: "Universidad Técnica de Dinamarca, 2025/11/21" } },
        { file: "images/series-two/26.jpg", caption: { en: "Rome, Italy, 2026/01/27", zh: "意大利，罗马，2026/01/27", pt: "Roma, Itália, 2026/01/27", es: "Roma, Italia, 2026/01/27" } },
        { file: "images/series-two/27.jpg", caption: { en: "Xinjiang, China, 2017/07/25", zh: "新疆，2017/07/25", pt: "Xinjiang, China, 2017/07/25", es: "Xinjiang, China, 2017/07/25" } },
        { file: "images/series-two/28.jpg", caption: { en: "Agrigento, Sicily, Italy, 2025/11/08", zh: "意大利，西西里，阿格里真托，2025/11/08", pt: "Agrigento, Sicília, Itália, 2025/11/08", es: "Agrigento, Sicilia, Italia, 2025/11/08" } },
        { file: "images/series-two/29.jpg", caption: { en: "Helsingør, Denmark, 2025/06/03", zh: "丹麦，赫尔辛格，2025/06/03", pt: "Helsingør, Dinamarca, 2025/06/03", es: "Helsingør, Dinamarca, 2025/06/03" } },
        { file: "images/series-two/30.jpg", caption: { en: "Dali, Yunnan, China, 2025/08/04", zh: "云南省，大理，2025/08/04", pt: "Dali, Yunnan, China, 2025/08/04", es: "Dali, Yunnan, China, 2025/08/04" } },
        { file: "images/series-two/31.jpg", caption: { en: "Xingqing Park, Xi'an, Shaanxi, China, 2021/01/01", zh: "陕西省，兴庆公园，2021/01/01", pt: "Parque Xingqing, Xi'an, Shaanxi, China, 2021/01/01", es: "Parque Xingqing, Xi'an, Shaanxi, China, 2021/01/01" } },
        { file: "images/series-two/32.jpg", caption: { en: "Copenhagen, Denmark, 2025/09/13", zh: "丹麦，哥本哈根，2025/09/13", pt: "Copenhague, Dinamarca, 2025/09/13", es: "Copenhague, Dinamarca, 2025/09/13" } },
        { file: "images/series-two/33.jpg", caption: { en: "Dyrehaven, Denmark, 2024/10/15", zh: "丹麦，鹿苑，2024/10/15", pt: "Dyrehaven, Dinamarca, 2024/10/15", es: "Dyrehaven, Dinamarca, 2024/10/15" } },
        { file: "images/series-two/34.jpg", caption: { en: "Portugal, 2026/05/15", zh: "葡萄牙，2026/05/15", pt: "Portugal, 2026/05/15", es: "Portugal, 2026/05/15" } },
        { file: "images/series-two/35.jpg", caption: { en: "Dali, Yunnan, China, 2025/08/04", zh: "云南省，大理，2025/08/04", pt: "Dali, Yunnan, China, 2025/08/04", es: "Dali, Yunnan, China, 2025/08/04" } },
        { file: "images/series-two/36.jpg", caption: { en: "Nærum, Denmark, 2024/10/27", zh: "丹麦，奈鲁姆，2024/10/27", pt: "Nærum, Dinamarca, 2024/10/27", es: "Nærum, Dinamarca, 2024/10/27" } }
      ]
    },
    {
      slug: "series-three",
      title: { en: "Series Three", zh: "系列三", pt: "Série Três", es: "Serie Tres" },
      year: { en: "2022–ongoing", zh: "2022 至今", pt: "2022–em curso", es: "2022–en curso" },
      statement: {
        en: "Ongoing work can be marked as ongoing in the year field.",
        zh: "仍在进行中的系列，可以在年份里标注“至今”。",
        pt: "Trabalhos em andamento podem ser marcados como “em curso” no campo do ano.",
        es: "Los trabajos en marcha pueden marcarse como “en curso” en el campo del año."
      },
      images: [
        { file: "images/series-three/01.jpg", caption: "" },
        { file: "images/series-three/02.jpg", caption: "" },
        { file: "images/series-three/03.jpg", caption: "" }
      ]
    }
  ],

  // ---------- About 页面：每一项是一段 ----------
  about: [
    {
      en: "Write a short biography in the third person, three to five sentences: where you are based, how you came to photography, and what your work is about.",
      zh: "用第三人称写一段简短的个人介绍，三到五句话：你在哪里生活和工作，怎样开始摄影，作品关注什么。",
      pt: "Escreva uma biografia curta na terceira pessoa, de três a cinco frases: onde você vive, como chegou à fotografia e sobre o que é o seu trabalho.",
      es: "Escribe una biografía breve en tercera persona, de tres a cinco frases: dónde vives, cómo llegaste a la fotografía y de qué trata tu obra."
    },
    {
      en: "Artist statement: one paragraph on the ideas that connect all of your series.",
      zh: "创作理念：用一段话说明贯穿你所有系列的想法。",
      pt: "Declaração artística: um parágrafo sobre as ideias que ligam todas as suas séries.",
      es: "Declaración artística: un párrafo sobre las ideas que unen todas tus series."
    }
  ]
};
