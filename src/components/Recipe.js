import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick(e) {
    // kind of a hack fix, needs to be improved
    e.preventDefault()
    const correctedUrl =
      'https://taco-randomizer.herokuapp.com' +
      e.target.getAttribute('href').slice(0, -3)
    window.location = correctedUrl
  }

  render() {
    const recipe = this.props.recipe
    const image = this.props.image
    const renderers = {
      link: props => {
        return <a {...props} onClick={e => this.handleLinkClick(e)} />
      }
    }
    return (
      <div className='recipe-card'>
        <div className='title-card'>
          <div className='taco-recipe'>
            <ReactMarkdown children={recipe} renderers={renderers} />
          </div>
          <div className='taco-image'>
            <img src={image} alt='a randomly generated taco' />
          </div>
        </div>
      </div>
    )
  }
}
