import React from 'react'
import { Question } from './questions'
import { QRCodeSVG } from 'qrcode.react'

interface Props {
  questions: Question[]
}

export default class extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return this.props.questions.map(
      (question: Question) => <div className="card m-4 g-0">
        <div className="card-body text-center">
          <h2>{question.title}</h2>
          <QRCodeSVG
            value={'https://dewzingouda.nl/#' + encodeURIComponent(question.title)}
            size={256}
          />
        </div>
      </div>
    )
  }
}