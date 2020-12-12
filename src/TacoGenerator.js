import React from 'react'
import Recipe from './Recipe'
import heart from './heart.svg'

export default class TacoGenerator extends React.Component {
  render() {
    if (this.props.isVisible) {
      return (
        <div className='taco-generator'>
          <Recipe recipe={this.props.recipe} image={this.props.image} />
          <button className='get-taco-button' onClick={this.props.fetchTaco}>
            Not delicious? Taco 'nother chance 🌮
          </button>
          <button className='like-button' onClick={this.props.likeTaco}>
            Like
          </button>
        </div>
      )
    } else {
      return null
    }
  }
}
