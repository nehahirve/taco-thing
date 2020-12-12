import React from 'react'
import ReactMarkdown from 'react-markdown'
import logo from './logo.svg'

import './styles/reset.css'
import './styles/App.css'

export default class App extends React.Component {
  constructor() {
    super()
    this.fetchTaco = this.fetchTaco.bind(this)
    this.toggletacoListVisible = this.toggletacoListVisible.bind(this)
    this.likeTaco = this.likeTaco.bind(this)
    this.state = { tacoListVisible: false, tacoList: [] }
  }

  componentDidMount() {
    this.fetchTaco()
  }

  toggletacoListVisible() {
    this.setState({ tacoListVisible: !this.state.tacoListVisible })
  }

  likeTaco() {
    const taco = { tacoName: this.state.tacoName, image: this.state.image }
    this.setState({ tacoList: this.state.tacoList.concat(taco) })
    console.log(taco)
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

  render() {
    return (
      <>
        <header>
          <img src={logo} alt='Tacothing logo' />
          <button className='my-tacos' onClick={this.toggletacoListVisible}>
            Favourites
          </button>
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
          />
        </main>
      </>
    )
  }
}

class TacoGenerator extends React.Component {
  constructor(props) {
    super(props)
  }

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

class TacoList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    console.log(this.props.tacoList)
  }

  render() {
    const tacos = this.props.tacoList.map(taco => {
      return <TacoListItem tacoName={taco.tacoName} image={taco.image} />
    })

    if (this.props.isVisible) {
      return <div>{tacos}</div>
    } else return null
  }
}

class TacoListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='taco-card-small'>
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
