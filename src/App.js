import React from 'react'
import ReactMarkdown from 'react-markdown'
import logo from './logo.svg'

import './styles/reset.css'
import './styles/App.css'

export default class App extends React.Component {
  constructor() {
    super()
    this.fetchTaco = this.fetchTaco.bind(this)
    this.state = {}
  }

  componentDidMount() {
    this.fetchTaco()
  }

  async fetchTaco() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    const url = 'https://taco-randomizer.herokuapp.com/random/?full-taco=true'
    const taco = await fetch(url, requestOptions).then(response =>
      response.json()
    )
    console.log(taco)
    // remove images from markdown
    const regex = /!\[(.*?)\]\((.*?)\)/g
    const strippedTaco = taco.recipe.replace(regex, '')

    const imageUrl =
      'https://api.unsplash.com/photos/random?client_id=yJn8cRgfTyy6hKHZ-Ce3ZcFCW8i62gdc4TDKz1jBZ_w&query=taco'

    const tacoImage = await fetch(imageUrl)
      .then(response => response.json())
      .then(image => image.urls.regular)

    this.setState({ recipe: strippedTaco, image: tacoImage })
  }

  render() {
    return (
      <>
        <header>
          <img src={logo} alt='Tacothing logo' />
        </header>
        <main>
          <Recipe recipe={this.state.recipe} image={this.state.image} />
          <button className='get-taco-button' onClick={this.fetchTaco}>
            Not delicious? Taco 'nother chance 🌮
          </button>
        </main>
      </>
    )
  }
}

class Recipe extends React.Component {
  constructor(props) {
    super(props)
  }

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
