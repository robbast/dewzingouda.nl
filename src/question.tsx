import React, { ClassAttributes, PureComponent } from 'react'

type QuestionProps = {
  image: string,
  audio: string,
  title: string,
  question: string,
  answerIndex: number,
  answers: (number | string)[]
}

export type { QuestionProps }

export default class Question extends React.PureComponent<QuestionProps & ClassAttributes<PureComponent>> {

  constructor(props: QuestionProps & ClassAttributes<PureComponent>) {
    super(props)
  }

  render() {
    const { answerIndex, answers } = this.props,
      buttons: JSX.Element | JSX.Element[] = answers.map((value: string | number, index: number) => {
        const id = `answer-${index}`
        return <button type="button" className="btn btn-primary" style={{ color: '#eb6334', backgroundColor: '#fdce43', borderColor: '#fdce43' }}>{value}</button>
      })

    return <>
      <div className="row p-0 g-0 mb-4" style={{ height: '480px' }}>
        <img src={this.props.image} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '1rem', objectFit: 'cover' }} />
      </div>
      <div className="row p-0 g-0 d-flex">
        <audio controls preload="auto" src={this.props.audio} style={{ margin: 'auto' }}>
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="row text-center" style={{ color: '#fff' }}>
        <h1 style={{ color: '#fcb900' }} className="mt-4 mb-2">{this.props.title}</h1>
        <p>{this.props.question}</p>
        <div className="d-grid gap-2">
          {buttons}
        </div>
      </div>
    </>
  }
}
