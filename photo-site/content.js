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
  email: "hello@example.com",
  instagram: "yourhandle",             // Instagram 用户名，不带 @

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
      slug: "series-two",
      title: { en: "Series Two", zh: "系列二", pt: "Série Dois", es: "Serie Dos" },
      year: "2023",
      statement: {
        en: "Each series gets its own short text. Curators often read this before they look closely at the images, so keep it plain and specific.",
        zh: "每个系列都有自己的简短介绍。策展人往往会先读这段文字再仔细看照片，所以写得朴素、具体就好。",
        pt: "Cada série tem o seu próprio texto curto. Curadores costumam lê-lo antes de olhar as imagens com atenção, então seja simples e específica.",
        es: "Cada serie tiene su propio texto breve. Los comisarios suelen leerlo antes de mirar las imágenes con detenimiento, así que mantenlo sencillo y concreto."
      },
      images: [
        { file: "images/series-two/01.jpg", caption: "" },
        { file: "images/series-two/02.jpg", caption: "" },
        { file: "images/series-two/03.jpg", caption: "" },
        { file: "images/series-two/04.jpg", caption: "" }
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
