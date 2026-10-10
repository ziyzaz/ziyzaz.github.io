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
      slug: "series-one",              // 网址里用的名字，只用小写字母、数字和横线
      title: { en: "Series One", zh: "系列一", pt: "Série Um", es: "Serie Uno" },
      year: "2024–2026",
      statement: {
        en: "Replace this with a short text about the series, around 100 to 200 words. Say where and when the pictures were made, what drew you to the subject, and what you want a viewer to notice.\n\nA second paragraph can describe the process: the camera, the light, how long you spent with the place or the people.",
        zh: "这里替换成这个系列的简短介绍，大约 100 到 200 字。说明照片在哪里、什么时候拍的，是什么吸引你拍这个题材，以及你希望观看者注意到什么。\n\n第二段可以写创作过程：使用的相机、光线，以及你在这个地方或和这些人一起度过了多长时间。",
        pt: "Substitua por um texto curto sobre a série, entre 100 e 200 palavras. Diga onde e quando as fotografias foram feitas, o que a atraiu ao tema e o que você quer que o público perceba.\n\nUm segundo parágrafo pode descrever o processo: a câmera, a luz, quanto tempo você passou com o lugar ou com as pessoas.",
        es: "Sustituye esto por un texto breve sobre la serie, de unas 100 a 200 palabras. Cuenta dónde y cuándo se hicieron las fotografías, qué te atrajo del tema y qué quieres que note quien las mira.\n\nUn segundo párrafo puede describir el proceso: la cámara, la luz, cuánto tiempo pasaste con el lugar o con las personas."
      },
      images: [
        { file: "images/series-one/01.jpg", caption: { en: "Untitled, 2024", zh: "无题，2024", pt: "Sem título, 2024", es: "Sin título, 2024" } },
        { file: "images/series-one/02.jpg", caption: { en: "Untitled, 2024", zh: "无题，2024", pt: "Sem título, 2024", es: "Sin título, 2024" } },
        { file: "images/series-one/03.jpg", caption: { en: "Untitled, 2025", zh: "无题，2025", pt: "Sem título, 2025", es: "Sin título, 2025" } },
        { file: "images/series-one/04.jpg", caption: { en: "Untitled, 2025", zh: "无题，2025", pt: "Sem título, 2025", es: "Sin título, 2025" } },
        { file: "images/series-one/05.jpg", caption: { en: "Untitled, 2025", zh: "无题，2025", pt: "Sem título, 2025", es: "Sin título, 2025" } },
        { file: "images/series-one/06.jpg", caption: { en: "Untitled, 2026", zh: "无题，2026", pt: "Sem título, 2026", es: "Sin título, 2026" } }
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
