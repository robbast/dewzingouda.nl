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

    // bind scope so we can access 'this' in handler
    this.nextQuestion = this.nextQuestion.bind(this)

    let index: number

    if (window.location.hash) {
      const hash = decodeURIComponent(window.location.hash.substring(1))

      // remove hash
      history.replaceState(null, 'Beleef Gouda', null)

      // pick question using hash
      index = questions.findIndex(question => hash === question.title)

      if (index === -1) {
        // if there was no match, pick a random question as starting point
        index = getRandomInt(0, questions.length)
      }
    } else {
      // pick a random question as starting point
      index = getRandomInt(0, questions.length)
    }

    this.state = {
      activeIndex: index
    }
  }

  nextQuestion() {
    const currentIndex = this.state.activeIndex,
      nextIndex = questions.length - 1  === currentIndex ? 0 : currentIndex + 1

    this.setState({
      activeIndex: nextIndex
    })
  }

  render() {
    return <Question
      key={this.state.activeIndex}
      correctAnswerHandler={this.nextQuestion}
      {...questions[this.state.activeIndex]}
    />
  }
}
