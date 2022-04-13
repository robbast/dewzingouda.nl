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
      }),
      images = ['small', 'medium', 'large', 'original'].map((directory) => '/images/' + directory + '/' + this.props.image),
      breakpoints = ['600w', '1200w', '2000w', '4000w'],
      srcset = images.map((image, index) => image + ' ' + breakpoints[index])

    return <>
      <div className="row p-0 g-0 mb-4" style={{ minHeight: '458px' }}>
        <img
          src={images[0]}
          srcSet={srcset.join(', ')}
          style={{ borderRadius: '1rem' }} />
      </div>
      <div className="row p-0 g-0 d-flex" style={{ minHeight: '70px' }}>
        <audio controls preload="auto" src={'/audio/' + this.props.audio} style={{ margin: 'auto' }}>
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