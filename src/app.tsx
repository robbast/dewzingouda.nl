import React from 'react'
import sample from 'lodash.sample'
import Question, { QuestionProps } from './question'

const data: QuestionProps[] = [
  {
    image: 'https://picsum.photos/400/300',
    audio: '/audio/arti-legi.m4a',
    title: 'Arti Legi',
    question: 'Hoeveel meter hoog is de Gouwekerk?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/400/300',
    audio: '/audio/carillon-gouda.m4a',
    title: 'Carillon',
    question: 'Hoeveel gebrandschilderde glazen telt de Sint-Janskerk?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/400/300',
    audio: '/audio/catherina-gasthuis.m4a',
    title: 'Catherina Gasthuis',
    question: 'Hoe lang is Gouda al een stad?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/400/300',
    audio: '/audio/de-waag-gouda.m4a',
    title: 'De Waag',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/donkere-sluis.m4a',
    title: 'Donkere Sluis',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/dubbele-buurt.m4a',
    title: 'Dubbele Buurt',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/fietsen.m4a',
    title: 'Fietsen',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/joods-bejaardenhuis.m4a',
    title: 'Joods Bejaardenhuis (De Haven)',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/kees-faessens-rolwagensteeg.m4a',
    title: 'Kees Faessens Rolwagensteeg',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/kerktoren.m4a',
    title: 'Kerktoren',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/korte-tiendeweg.m4a',
    title: 'Korte Tiendeweg',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/oosthaven.m4a',
    title: 'Oosthaven',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
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
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/st.aloysius-school.m4a',
    title: 'St. Aloysius School',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/stroopwafelmuur.m4a',
    title: 'Stroopwafelmuur',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/van-der-vormkapel.m4a',
    title: 'Van der Vormkapel',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/voorzijde-stadhuis.m4a',
    title: 'Stadhuis',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answerIndex: 0,
    answers: [
      'a',
      'b',
      'c'
    ]
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/willem-vroesenhuis.m4a',
    title: 'Willem Vroesenhuis',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
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
