import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class Recipe extends React.Component {
  render() {
    const recipe = this.props.recipe
    const image = this.props.image

    return (
      <div className='recipe-card'>
        <div className='title-card'>
          <div className='taco-recipe'>
            <ReactMarkdown children={recipe} />
          </div>
          <div className='taco-image'>
            <img src={image} alt='a randomly generated taco' />
          </div>
        </div>
      </div>
    )
  }
}
