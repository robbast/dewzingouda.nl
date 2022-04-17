function play(url: string) {
  return new Promise(function(resolve, reject) { // return a promise
    const audio = new Audio()                    // create audio wo/ src
    audio.preload = 'auto'                       // intend to play through
    audio.autoplay = true                        // autoplay when loaded
    audio.onerror = reject                       // on error, reject
    audio.onended = resolve                      // when done, resolve

    audio.src = url
  })
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min) + min)
}

export { play, getRandomInt }