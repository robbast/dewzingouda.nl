import React, { ClassAttributes, PureComponent } from 'react'
import sample from 'lodash.sample'
import Question, { QuestionProps } from './question'
import questions from './questions'

interface StateInterface {
  activeIndex: number
}

export default class App extends React.PureComponent<ClassAttributes<PureComponent>, StateInterface> {

  constructor(props: ClassAttributes<PureComponent>) {
    super(props)

    const question: QuestionProps = sample(questions) as QuestionProps,
      index: number = questions.indexOf(question)

    this.state = {
      activeIndex: index
    }
  }

  render() {
    return <Question {...questions[this.state.activeIndex]} />
  }
}
