import React from 'react'

// class Car {
//   constructor (brand, color, numberOfDoors) {
//     this.brand = brand
//     this.color = color
//     this.numberOfDoors = numberOfDoors
//   }
// }

// const car1 = new Car('audi', 'red', 5)
// const car2 = new Car('bmw', 'black', 3)

// console.log(car1.color) // 'red
// const car2brand = car2.brand // 'bmw'

export class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      seconds: 0
    }
    console.log('contructor')
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const newState = {
        seconds: this.state.seconds + 1
      }
      this.setState(newState)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render () {
    return <h2>Minęło {this.state.seconds} sekund.</h2>
  }
}
