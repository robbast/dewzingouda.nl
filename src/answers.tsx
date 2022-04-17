import React from 'react'
import { play } from './utilities'

interface Props {
  answers: string[],
  answerIndex: number,
  correctHandler: () => void
}

interface State {
  success: boolean,
  clicked: number | null
}

export default class extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props)

    this.successHandler = this.successHandler.bind(this)
    this.errorHandler = this.errorHandler.bind(this)

    this.state = {
      success: false,
      clicked: null
    }
  }

  successHandler(index: number) {
    this.setState({ clicked: index, success: true })

    const proceed = () => this.props.correctHandler()

    play('./audio/success.wav')
      .then(proceed)
      .catch(proceed)
  }

  errorHandler(index: number) {
    this.setState({ clicked: index })

    const resetState = () => this.setState({ clicked: null })

    play('./audio/failure.wav')
      .then(resetState)
      .catch(resetState)
  }

  render() {
    const { answers, answerIndex } = this.props,
      { success, clicked } = this.state

    return answers.map(
      (answer: string, index: number) => <button
        key={'answer-' + index}
        type="button"
        className="btn btn-primary"
        onClick={
          clicked === null && success === false
            ?  index === answerIndex
              ? () => this.successHandler(index)
              : () => this.errorHandler(index)
            : undefined
        }
        style={{
          color: '#000',
          fontWeight: 'bold',
          backgroundColor: clicked === index ? ( success ? '#008972' : '#f00' ) : '#fdce43',
          borderColor: '#fdce43'
        }}>{answer}</button>
    )
  }
}