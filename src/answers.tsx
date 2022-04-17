import React from 'react'
import { play } from './utilities'

interface Props {
  answers: string[],
  answerIndex: number,
  correctHandler: () => void
}

interface State {
  error: number | null
}

export default class extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props)

    this.successHandler = this.successHandler.bind(this)
    this.errorHandler = this.errorHandler.bind(this)

    this.state = {
      error: null
    }
  }

  successHandler() {
    const proceed = () => this.props.correctHandler()

    play('./audio/success.wav')
      .then(proceed)
      .catch(proceed)
  }

  errorHandler(index: number) {
    this.setState({ error: index })

    const resetState = () => this.setState({ error: null })

    play('./audio/failure.wav')
      .then(resetState)
      .catch(resetState)
  }

  render() {
    const { answers, answerIndex } = this.props,
      { error } = this.state

    return answers.map(
      (answer: string, index: number) => <button
        key={'answer-' + index}
        type="button"
        className="btn btn-primary"
        onClick={
          error === null
            ?  index === answerIndex
              ? () => this.successHandler()
              : () => this.errorHandler(index)
            : undefined
        }
        style={{
          color: '#000',
          fontWeight: 'bold',
          backgroundColor: error === index ? '#f00' : '#fdce43',
          borderColor: '#fdce43'
        }}>{answer}</button>
    )
  }
}