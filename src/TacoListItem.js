import React from 'react'

export default class TacoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('click handled')
    this.props.generateTaco(
      this.props.tacoName,
      this.props.recipe,
      this.props.image
    )
  }

  render() {
    return (
      <div className='taco-card-small' onClick={this.handleClick}>
        <div className='taco-name'>
          <h1>{this.props.tacoName}</h1>
        </div>
        <div className='taco-image'>
          <img src={this.props.image} alt='' />
        </div>
      </div>
    )
  }
}
