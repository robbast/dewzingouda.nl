import React, { SyntheticEvent } from 'react'
import Answers from './answers'
import Image from './image'

interface Props {
  answerHandler: () => void,
  image: string,
  audio: string,
  title: string,
  question: string,
  answerIndex: number,
  answers: (string)[]
}

interface State {
  audioPlaybackEnded: boolean
}

export default class Question extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props)

    // bind scope so we can access 'this' in handler
    this.receiveAnswer = this.receiveAnswer.bind(this)
    this.audioEnded = this.audioEnded.bind(this)
    this.state = { audioPlaybackEnded: false }
  }

  receiveAnswer(answer: string) {
    const { answers, answerIndex } = this.props

    answers.indexOf(answer) === answerIndex && this.props.answerHandler()
  }

  audioSeeking(event: SyntheticEvent<HTMLMediaElement>) {
    console.log(event)
  }

  audioSeeked(event: SyntheticEvent<HTMLMediaElement>) {
    console.log(event)
  }

  audioEnded(event: SyntheticEvent<HTMLMediaElement>) {
    this.setState({ audioPlaybackEnded: true })
  }

  render() {
    const { audioPlaybackEnded } = this.state,
      { audio, image, title, question, answers } = this.props

    return <>
      <div className="row p-0 g-0 mb-4" style={{ minHeight: '458px' }}>
        <Image src={image} />
      </div>
      <div className="row p-0 g-0 mb-4 d-flex" style={{ minHeight: '70px' }}>
        <audio
          controls
          onSeeking={this.audioSeeking}
          onSeeked={this.audioSeeked}
          onEnded={this.audioEnded}
          preload="auto"
          src={'/audio/' + audio}
          style={{ margin: 'auto' }}
        >
          Your browser does not support the audio element.
        </audio>
      </div>
      { audioPlaybackEnded && <>
        <div className="row p-1 g-0 mb-4 text-center card" style={{ backgroundColor: '#eb6334' }}>
          <h1 style={{ color: '#fdce43' }} className="mt-4 mb-2">{title}</h1>
          <p style={{ color: '#fff' }}>{question}</p>
        </div>
        <div className="d-grid gap-2">
          <Answers answers={answers} clickHandler={this.receiveAnswer} />
        </div>
      </> }
    </>
  }
}
