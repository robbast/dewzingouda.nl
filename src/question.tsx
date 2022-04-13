import React, { ClassAttributes, PureComponent } from 'react'

type QuestionProps = {
  image: string,
  audio: string,
  title: string,
  question: string,
  answer: number | string | (number | string)[]
}

export type { QuestionProps }

export default class Question extends React.PureComponent<QuestionProps & ClassAttributes<PureComponent>> {

  constructor(props: QuestionProps & ClassAttributes<PureComponent>) {
    super(props)
  }

  render() {
    const { answer } = this.props

    let input: JSX.Element | JSX.Element[] | null = null

    if (typeof answer === 'number') {
      input = <input type="number" placeholder="Antwoord.." name="answer" className="form-control" />
    }

    if (typeof answer === 'string') {
      input = <input type="text" placeholder="Antwoord.." name="answer" className="form-control" />
    }

    if (typeof answer === 'object' && true === Array.isArray(this.props.answer)) {
      input = answer.map((value: string | number, index: number) => {
        const id = `answer-${index}`
        return <div className="form-check text-align-left">
          <input className="form-check-input" type="radio" id={id} name="answer" value="value" />
          <label className="form-check-label" htmlFor={id}>{value}</label>
        </div>
      })
    }

    return <div style={{ height: '300px' }} className="text-center">
      <img src={this.props.image} style={{ margin: '0 auto 1.5rem', maxWidth: '100%', maxHeight: '100%', borderRadius: '.5rem', objectFit: 'contain' }} />
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <audio controls preload="auto" src={this.props.audio} style={{ margin: 'auto' }}>
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="text-start" style={{ color: '#fff' }}>
        <h1 style={{ color: '#fcb900' }} className="mt-4 mb-2 text-center">{this.props.title}</h1>
        <p>{this.props.question}</p>
        {input}
      </div>
    </div>
  }
}
