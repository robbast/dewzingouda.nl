import React from 'react'

interface Props {
  answers: string[],
  clickHandler: (answer: string) => void
}

export default class extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return this.props.answers.map(
      (answer: string, index: number) => <button
        key={'answer-' + index}
        type="button"
        className="btn btn-primary"
        onClick={() => this.props.clickHandler(answer)}
        style={{
          color: '#000',
          fontWeight: 'bold',
          backgroundColor: '#fdce43',
          borderColor: '#fdce43'
        }}>{answer}</button>
    )
  }
}