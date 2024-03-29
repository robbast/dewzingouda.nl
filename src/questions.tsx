export interface Question {
  image: string,
  audio: string,
  title: string,
  question: string,
  answerIndex: number,
  answers: string[]
}

const questions: Question[] = [
  {
    image: 'carillon.jpg',
    audio: 'carillon.m4a',
    title: 'Carillon',
    question: 'Waar komt het melodietje van het carillon vandaan?',
    answerIndex: 1,
    answers: [
      'Ria Blos',
      'Maria Blom',
      'Rita Bos'
    ]
  },
  {
    image: 'de-waag.jpg',
    audio: 'de-waag.m4a',
    title: 'De Waag',
    question: 'Sinds wanneer bestaat de Goudse Kaasmarkt?',
    answerIndex: 0,
    answers: [
      'Sinds de 15de eeuw',
      'Sinds de 16de eeuw',
      'Sinds de 17de eeuw'
    ]
  },
  {
    image: 'arti-legi.jpg',
    audio: 'arti-legi.m4a',
    title: 'Arti Legi',
    question: 'Waar staat het woord "legi" voor?',
    answerIndex: 0,
    answers: [
      'recht',
      'school',
      'onderwijs'
    ]
  },
  {
    image: 'korte-tiendeweg.jpg',
    audio: 'korte-tiendeweg.m4a',
    title: 'Korte Tiendeweg',
    question: 'Hoeveel tiendwegen zijn er nog in Nederland?',
    answerIndex: 2,
    answers: [
      '51',
      '53',
      '55'
    ]
  },
  {
    image: 'stroopwafelmuur.jpg',
    audio: 'stroopwafelmuur.m4a',
    title: 'Stroopwafelmuur',
    question: 'Uit welk jaar komt de echte siroopwafel?',
    answerIndex: 1,
    answers: [
      '1710',
      '1810',
      '1910'
    ]
  },
  {
    image: 'sint-janskerk.jpg',
    audio: 'sint-janskerk.m4a',
    title: 'Sint-Janskerk',
    question: 'Hoeveel gebrandschilderde glas-in-lood glazen telt de Sint-Janskerk?',
    answerIndex: 2,
    answers: [
      '52',
      '62',
      '72'
    ]
  },
  {
    image: 'van-der-vormkapel.jpg',
    audio: 'van-der-vormkapel.m4a',
    title: 'Van der Vormkapel',
    question: 'Voor welk gebouw waren de gebrandschilderde glas-in-lood glazen van deze kapel eigenlijk bedoelt?',
    answerIndex: 1,
    answers: [
      'een kerk',
      'een klooster',
      'een school'
    ]
  },
  {
    image: 'erasmus.jpg',
    audio: 'erasmus.mp3',
    title: 'Erasmus',
    question: 'Welk bekend boek heeft Erasmus geschreven?',
    answerIndex: 2,
    answers: [
      'Lof der Goedheid',
      'Lof der Zoetheid',
      'Lof der Zotheid'
    ]
  },
  {
    image: 'willem-vroesenhuis.jpg',
    audio: 'willem-vroesenhuis.m4a',
    title: 'Willem Vroesenhuis',
    question: 'Wat moesten bejaarde Gouwenaars achterlaten in de kluisjes?',
    answerIndex: 1,
    answers: [
      'kaarsen',
      'pijpen',
      'lucifers'
    ]
  },
  {
    image: 'weeshuis.jpg',
    audio: 'weeshuis.mp3',
    title: 'Weeshuis',
    question: 'Voor welke kinderen is dit weeshuis opgericht?',
    answerIndex: 1,
    answers: [
      'kinderen van Poorters',
      'kinderen van een lage sociale klasse',
      'kinderen van rijke regenten'
    ]
  },
  {
    image: 'kees-faessens-rolwagensteeg.jpg',
    audio: 'kees-faessens-rolwagensteeg.m4a',
    title: 'Kees Faessens Rolwagensteeg',
    question: 'Uit welk jaar kwam de jaarrekening waarin staat wie Kees Faessens was?',
    answerIndex: 1,
    answers: [
      '1542',
      '1642',
      '1742'
    ]
  },
  {
    image: 'st.aloysius-school.jpg',
    audio: 'st.aloysius-school.m4a',
    title: 'St. Aloysius School',
    question: 'Wanneer is de St. Aloysius School ontworpen?',
    answerIndex: 2,
    answers: [
      '1706',
      '1806',
      '1906'
    ]
  },
  {
    image: 'lange-noodgodsstraat.jpg',
    audio: 'lange-noodgodsstraat.m4a',
    title: 'Lange Noodgodsstraat',
    question: 'Wanneer besloot het stadsbestuur dit Katholieke heiligdom te slopen?',
    answerIndex: 1,
    answers: [
      '1476',
      '1576',
      '1676'
    ]
  },
  {
    image: 'oosthaven.jpg',
    audio: 'oosthaven.m4a',
    title: 'Oosthaven',
    question: 'Hoeveel schepen voeren er vroeger jaarlijks door de grachten?',
    answerIndex: 1,
    answers: [
      '1.000',
      '10.000',
      '100.000'
    ]
  },
  {
    image: 'joods-bejaardenhuis.jpg',
    audio: 'joods-bejaardenhuis.m4a',
    title: 'Joods Bejaardenhuis',
    question: 'Hoeveel tegeltjes voor vermoorde Joodse mensen tel je?',
    answerIndex: 1,
    answers: [
      '51',
      '56',
      '62'
    ]
  },
  {
    image: 'coornhert.jpg',
    audio: 'coornhert.mp3',
    title: 'Dirck Volckertszoon Coornhert',
    question: 'Wanneer vestigde Coornhert zich in Gouda?',
    answerIndex: 2,
    answers: [
      '1548',
      '1568',
      '1588'
    ]
  },
  {
    image: 'catharina-gasthuis.jpg',
    audio: 'catharina-gasthuis.m4a',
    title: 'Catharina Gasthuis',
    question: 'Wanneer hield het Catharina Gasthuis op met bestaan als ziekenhuis?',
    answerIndex: 2,
    answers: [
      '1820',
      '1906',
      '1910'
    ]
  },
  {
    image: 'donkere-sluis.jpg',
    audio: 'donkere-sluis.m4a',
    title: 'Donkere Sluis',
    question: 'Wanneer werd de Donkere Sluis gebouwd?',
    answerIndex: 1,
    answers: [
      '1208',
      '1308',
      '1408'
    ]
  },
  {
    image: 'dubbele-buurt.jpg',
    audio: 'dubbele-buurt.m4a',
    title: 'Dubbele Buurt',
    question: 'Hoeveel Dubbele Buurt straten waren er vroeger in Gouda?',
    answerIndex: 0,
    answers: [
      '2',
      '4',
      '6'
    ]
  },
  {
    image: 'toren-sint-janskerk.jpg',
    audio: 'toren-sint-janskerk.m4a',
    title: 'Kerktoren',
    question: 'Hoeveel jaar heeft Gouda stadsrechten?',
    answerIndex: 2,
    answers: [
      '550 jaar',
      '650 jaar',
      '750 jaar'
    ]
  },
  {
    image: 'fietsen.jpg',
    audio: 'fietsen.m4a',
    title: 'Fietsen',
    question: 'Hoeveel fietsen waren er een paar weken geleden in deze steeg?',
    answerIndex: 2,
    answers: [
      '6',
      '7',
      '9'
    ]
  },
  {
    image: 'stadhuis.jpg',
    audio: 'stadhuis.m4a',
    title: 'Stadhuis',
    question: 'Wat is de bijnaam van Maria van Bourgondië?',
    answerIndex: 0,
    answers: [
      'Maria de Rijke',
      'Maria de Slimme',
      'Maria de Schoone'
    ]
  }
]

export default questions
