import React from 'react'
import sample from 'lodash.sample'
import Question, { QuestionProps } from './question'

const data: QuestionProps[] = [
  {
    image: 'https://picsum.photos/400/300',
    audio: '/audio/arti-legi.m4a',
    title: 'Gouwekerk',
    question: 'Hoeveel meter hoog is de Gouwekerk?',
    answer: 80
  },
  {
    image: 'https://picsum.photos/400/300',
    audio: '/audio/Arti Legi.m4a',
    title: 'Sint-Janskerk',
    question: 'Hoeveel gebrandschilderde glazen telt de Sint-Janskerk?',
    answer: 72
  },
  {
    image: 'https://picsum.photos/400/300',
    audio: '/audio/Arti Legi.m4a',
    title: 'Stadsrechten',
    question: 'Hoe lang is Gouda al een stad?',
    answer: 750
  },
  {
    image: 'https://picsum.photos/400/300',
    audio: '/audio/Arti Legi.m4a',
    title: 'Beroemd',
    question: 'Waar kent iedereen Gouda van?',
    answer: 'kaas'
  },
  {
    image: 'https://picsum.photos/200/300',
    audio: '/audio/Arti Legi.m4a',
    title: 'Multiple-choice',
    question: 'Wat moesten Goudse bewoners weg stoppen?',
    answer: [
      'pijpen',
      'kaarsen',
      'aanstekers'
    ]
  }
]

const question: QuestionProps = sample(data) as QuestionProps

export default function App() {
  return <Question {...question} />
}
