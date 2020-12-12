import React from 'react'
import logo from './logo.svg'

import TacoList from './TacoList'
import TacoGenerator from './TacoGenerator'

import './styles/reset.css'
import './styles/App.css'

export default class App extends React.Component {
  constructor() {
    super()
    this.fetchTaco = this.fetchTaco.bind(this)
    this.toggletacoListVisible = this.toggletacoListVisible.bind(this)
    this.likeTaco = this.likeTaco.bind(this)
    this.generateTaco = this.generateTaco.bind(this)
    this.state = { tacoListVisible: false, tacoList: [] }
  }

  componentDidMount() {
    this.fetchTaco()
  }

  toggletacoListVisible() {
    this.setState({ tacoListVisible: !this.state.tacoListVisible })
  }

  likeTaco() {
    const taco = {
      tacoName: this.state.tacoName,
      image: this.state.image,
      recipe: this.state.recipe
    }
    if (
      !this.state.tacoList.some(tacoObj => tacoObj.tacoName === taco.tacoName)
    ) {
      this.setState({ tacoList: this.state.tacoList.concat(taco) })
    }
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
    console.log(taco.name)
    const tacoName = taco.name
    // remove images from markdown
    const regex = /!\[(.*?)\]\((.*?)\)/g
    const strippedTaco = taco.recipe.replace(regex, '')

    // const imageUrl =
    //   'https://api.unsplash.com/photos/random?client_id=yJn8cRgfTyy6hKHZ-Ce3ZcFCW8i62gdc4TDKz1jBZ_w&query=taco'

    // const tacoImage = await fetch(imageUrl)
    //   .then(response => response.json())
    //   .then(image => image.urls.small)

    this.setState({
      recipe: strippedTaco,
      image:
        'https://repository-images.githubusercontent.com/199493546/d2739980-b53b-11e9-9622-4b4307910050',
      tacoName: tacoName
    })
  }

  generateTaco(tacoName, tacoRecipe, tacoImage) {
    this.setState({
      recipe: tacoRecipe,
      image: tacoImage,
      tacoName: tacoName,
      tacoListVisible: false
    })
  }

  render() {
    const buttonText = this.state.tacoListVisible ? 'Random Taco' : 'Favourites'
    return (
      <>
        <header>
          <div className='top-bar'>
            <img src={logo} alt='Tacothing logo' />
            <button className='my-tacos' onClick={this.toggletacoListVisible}>
              {buttonText}
            </button>
          </div>
        </header>
        <main>
          <TacoGenerator
            recipe={this.state.recipe}
            image={this.state.image}
            fetchTaco={this.fetchTaco}
            isVisible={!this.state.tacoListVisible}
            likeTaco={this.likeTaco}
          />
          <TacoList
            isVisible={this.state.tacoListVisible}
            tacoList={this.state.tacoList}
            generateTaco={this.generateTaco}
          />
        </main>
      </>
    )
  }
}
