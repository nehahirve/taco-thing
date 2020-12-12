import React from 'react'
import Recipe from './Recipe'
import heart from './heart.svg'
import arrow from './arrow.svg'

export default class TacoGenerator extends React.Component {
  render() {
    if (this.props.isVisible) {
      return (
        <div className='taco-generator'>
          <div className='taco-buttons'>
            <button className='get-taco-button' onClick={this.props.fetchTaco}>
              <span className='arrow'>
                <img src={arrow} alt='' />
              </span>
              <span>Not delicious? Taco 'nother chance 🌮</span>
            </button>
            <button className='like-button' onClick={this.props.likeTaco}>
              <span>
                <img className='heart' src={heart} alt='' />
              </span>
              <span>Like</span>
            </button>
          </div>
          <Recipe recipe={this.props.recipe} image={this.props.image} />
        </div>
      )
    } else {
      return null
    }
  }
}
