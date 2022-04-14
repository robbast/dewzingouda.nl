import React, { ClassAttributes, PureComponent } from 'react'
import sample from 'lodash.sample'
import Question from './question'
import questions, { Question as QuestionInterface } from './questions'

interface State {
  activeIndex: number
}

export default class App extends React.PureComponent<ClassAttributes<PureComponent>, State> {

  constructor(props: ClassAttributes<PureComponent>) {
    super(props)

    // pick a random question as starting point
    const question: QuestionInterface = sample(questions) as QuestionInterface,
      index: number = questions.indexOf(question)

    this.state = {
      activeIndex: index
    }

    // bind scope so we can access 'this' in handler
    this.nextQuestion = this.nextQuestion.bind(this)
  }

  nextQuestion() {
    const currentIndex = this.state.activeIndex,
      nextIndex = questions.length - 1  === currentIndex ? 0 : currentIndex + 1

    this.setState({activeIndex: nextIndex})
  }

  render() {
    return <Question key={this.state.activeIndex} {...{answerHandler: this.nextQuestion, ...questions[this.state.activeIndex]}} />
  }
}
