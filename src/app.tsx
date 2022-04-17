import React, { ClassAttributes, PureComponent } from 'react'
import Question from './question'
import questions from './questions'
import { getRandomInt } from './utilities'

interface State {
  activeIndex: number
}

export default class extends React.PureComponent<ClassAttributes<PureComponent>, State> {

  constructor(props: ClassAttributes<PureComponent>) {
    super(props)

    let index: number

    if (window.location.hash) {
      const hash = decodeURIComponent(window.location.hash.substring(1))

      // pick question based on hash provided
      index = questions.findIndex(question => hash === question.title)

      if (index === -1) {
        // if there was no match, pick a random question as starting point
        index = getRandomInt(0, questions.length)

        // remove hash
        history.replaceState(null, '', '/')
      }
    } else {
      // pick a random question as starting point
      index = getRandomInt(0, questions.length)
    }

    this.state = {
      activeIndex: index
    }
  }

  setQuestion(question: number) {
    this.setState({
      activeIndex: question
    })

    history.replaceState(null, '', '#' + encodeURIComponent(questions[question].title))
  }

  render() {
    const currentIndex = this.state.activeIndex,
      nextIndex = questions.length - 1  === currentIndex ? 0 : currentIndex + 1

    return <Question
      key={this.state.activeIndex}
      correctAnswerHandler={() => this.setQuestion(nextIndex)}
      {...questions[this.state.activeIndex]}
    />
  }
}
