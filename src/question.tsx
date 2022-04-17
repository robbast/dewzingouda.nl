import React from 'react'
import Answers from './answers'
import Image from './image'

interface Props {
  correctAnswerHandler: () => void,
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

export default class extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props)

    // bind scope so we can access 'this' in handler
    this.correctAnswerHandler = this.correctAnswerHandler.bind(this)
    this.audioEnded = this.audioEnded.bind(this)

    this.state = {
      audioPlaybackEnded: true
    }
  }

  correctAnswerHandler() {
    this.props.correctAnswerHandler()
  }

  audioEnded(/*event: SyntheticEvent<HTMLMediaElement>*/) {
    this.setState({ audioPlaybackEnded: true })
  }

  render() {
    const { audioPlaybackEnded } = this.state,
      { audio, image, title, question, answers, answerIndex } = this.props

    return <>
      <div className="row p-0 g-0 mb-4" style={{ minHeight: '477px' }}>
        <Image src={image} />
      </div>
      <div className="row p-0 g-0 mb-4 d-flex" style={{ minHeight: '70px' }}>
        <audio
          controls
          preload="auto"
          src={'./audio/' + audio}
          style={{ margin: 'auto' }}
          onEnded={this.audioEnded}
        >
          Je browser ondersteund het audio element niet :-(
        </audio>
      </div>
      { audioPlaybackEnded && <>
        <div className="row p-2 g-0 mb-4 text-center card" style={{ backgroundColor: '#eb6334' }}>
          <h1 style={{ color: '#fdce43' }} className="my-2">{title}</h1>
          <p style={{ color: '#fff' }}>{question}</p>
        </div>
        <div className="d-grid gap-2">
          <Answers answers={answers} answerIndex={answerIndex} correctHandler={this.correctAnswerHandler} />
        </div>
      </> }
    </>
  }
}
