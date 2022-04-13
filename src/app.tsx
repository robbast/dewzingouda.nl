import React from 'react'
import sample from 'lodash.sample'
import Question, { QuestionProps } from './question'

const data: QuestionProps[] = [
  {
    image: '/images/arti-legi.jpg',
    audio: '/audio/arti-legi.m4a',
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
    image: '/images/carillon.jpg',
    audio: '/audio/carillon.m4a',
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
    image: '/images/catharina-gasthuis.jpg',
    audio: '/audio/catharina-gasthuis.m4a',
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
    image: '/images/de-waag.jpg',
    audio: '/audio/de-waag.m4a',
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
    image: '/images/donkere-sluis.jpg',
    audio: '/audio/donkere-sluis.m4a',
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
    image: '/images/dubbele-buurt.jpg',
    audio: '/audio/dubbele-buurt.m4a',
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
    image: '/images/fietsen.jpg',
    audio: '/audio/fietsen.m4a',
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
    image: '/images/joods-bejaardenhuis.jpg',
    audio: '/audio/joods-bejaardenhuis.m4a',
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
    image: '/images/kees-faessens-rolwagensteeg.jpg',
    audio: '/audio/kees-faessens-rolwagensteeg.m4a',
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
    image: '/images/korte-tiendeweg.jpg',
    audio: '/audio/korte-tiendeweg.m4a',
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
    image: '/images/oosthaven.jpg',
    audio: '/audio/oosthaven.m4a',
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
    audio: '/audio/sint-janskerk.m4a',
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
    image: '/images/st.aloysius-school.jpg',
    audio: '/audio/st.aloysius-school.m4a',
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
    image: '/images/stadhuis.jpg',
    audio: '/audio/stadhuis.m4a',
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
    image: '/images/stroopwafelmuur.jpg',
    audio: '/audio/stroopwafelmuur.m4a',
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
    image: '/images/toren-sint-janskerk.jpg',
    audio: '/audio/toren-sint-janskerk.m4a',
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
    image: '/images/van-der-vormkapel.jpg',
    audio: '/audio/van-der-vormkapel.m4a',
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
    image: '/images/willem-vroesenhuis.jpg',
    audio: '/audio/willem-vroesenhuis.m4a',
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
