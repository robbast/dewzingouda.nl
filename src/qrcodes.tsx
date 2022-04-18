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
    return <div className="row">
      {this.props.questions.map(
        (question: Question) => <div className="col">
          <div className="card m-4 g-0 text-center" style={{ width: '300px' }}>
            <QRCodeSVG
              value={'https://dewzingouda.nl/#' + encodeURIComponent(question.title)}
              size={256}
              style={{ margin: '1rem auto' }}
            />
            <div className="card-body">
              <h4>{question.title}</h4>

            </div>
          </div>
        </div>
      )}
    </div>
  }
}