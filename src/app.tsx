import React from 'react'
import sample from 'lodash.sample'
import Question, { QuestionProps } from './question'

const data: QuestionProps[] = [
  {
    image: 'arti-legi.jpg',
    audio: 'arti-legi.m4a',
    title: 'Arti Legi',
    question: 'Waar staat het woord "legi" voor?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'carillon.jpg',
    audio: 'carillon.m4a',
    title: 'Carillon',
    question: 'Waar komt het melodietje van het carillon vandaan?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'catharina-gasthuis.jpg',
    audio: 'catharina-gasthuis.m4a',
    title: 'Catharina Gasthuis',
    question: 'Wanneer hield het Catharina Gasthuis op met bestaan als ziekenhuis?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'de-waag.jpg',
    audio: 'de-waag.m4a',
    title: 'De Waag',
    question: 'Vanaf wanneer bestaat de Goudse Kaasmarkt?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'donkere-sluis.jpg',
    audio: 'donkere-sluis.m4a',
    title: 'Donkere Sluis',
    question: 'Wanneer werd de Donkere Sluis gebouwd?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'dubbele-buurt.jpg',
    audio: 'dubbele-buurt.m4a',
    title: 'Dubbele Buurt',
    question: 'Hoeveel Dubbele Buurt straten waren er vroeger in Gouda?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'fietsen.jpg',
    audio: 'fietsen.m4a',
    title: 'Fietsen',
    question: 'Hoeveel fietsen waren er een paar weken geleden in deze steeg?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'joods-bejaardenhuis.jpg',
    audio: 'joods-bejaardenhuis.m4a',
    title: 'Joods Bejaardenhuis (De Haven)',
    question: 'Hoeveel tegeltjes voor vermoorde Joodse mensen tel je?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'kees-faessens-rolwagensteeg.jpg',
    audio: 'kees-faessens-rolwagensteeg.m4a',
    title: 'Kees Faessens Rolwagensteeg',
    question: 'Uit welk jaar kwam de jaarrekening waarin staat wie Kees Faessens was?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'korte-tiendeweg.jpg',
    audio: 'korte-tiendeweg.m4a',
    title: 'Korte Tiendeweg',
    question: 'Hoeveel tiendwegen zijn er nog in Nederland?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'oosthaven.jpg',
    audio: 'oosthaven.m4a',
    title: 'Oosthaven',
    question: 'Hoeveel schepen voeren er vroeger jaarlijks door de grachten?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: 'sint-janskerk.m4a',
    title: 'Sint-Janskerk',
    question: 'Hoeveel gebrandschilderde glas-in-lood glazen telt de Sint-Janskerk?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'st.aloysius-school.jpg',
    audio: 'st.aloysius-school.m4a',
    title: 'St. Aloysius School',
    question: 'Wanneer is de St. Aloysius School ontworpen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'stadhuis.jpg',
    audio: 'stadhuis.m4a',
    title: 'Stadhuis',
    question: 'Wat is de bijnaam van Maria van Bourgondië?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'stroopwafelmuur.jpg',
    audio: 'stroopwafelmuur.m4a',
    title: 'Stroopwafelmuur',
    question: 'Wanneer opende Gerard Kamphuisen zijn bakkerij met echte stroopwafels?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'toren-sint-janskerk.jpg',
    audio: 'toren-sint-janskerk.m4a',
    title: 'Kerktoren',
    question: 'Hoeveel jaar heeft Gouda stadsrechten?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'van-der-vormkapel.jpg',
    audio: 'van-der-vormkapel.m4a',
    title: 'Van der Vormkapel',
    question: 'Voor welk gebouw waren de gebrandschilderde glas-in-lood glazen van deze kapel eigenlijk bedoelt?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'willem-vroesenhuis.jpg',
    audio: 'willem-vroesenhuis.m4a',
    title: 'Willem Vroesenhuis',
    question: 'Wat moesten bejaarde Goudenaars achterlaten in de kluisjes?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  }
]

const question: QuestionProps = sample(data) as QuestionProps

export default function App() {
  return <Question {...question} />
}
