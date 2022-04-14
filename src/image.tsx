import React from 'react'

interface Props {
  src: string
}

const sizes: string[] = ['small', 'medium', 'large', 'original']
const breakpoints: string[] = ['600w', '1200w', '2000w', '4000w']

export default class extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    const images: string[] = sizes.map((directory) => '/images/' + directory + '/' + this.props.src),
      srcset: string[] = images.map((image, index) => image + ' ' + breakpoints[index])

    return <img
      className="rounded"
      src={images[0]}
      srcSet={srcset.join(', ')}
      style={{ backgroundColor: '#fdce43' }}
    />
  }
}