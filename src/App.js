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
    this.setState({ recipe: strippedTaco })
  }

  render() {
    return (
      <>
        <header>
          <img src={logo} alt='Tacothing logo' />
        </header>
        <main>
          <Recipe recipe={this.state.recipe} />
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

    return (
      <div className='recipe-card'>
        <div className='title-card'>
          <div className='taco-recipe'>
            <ReactMarkdown children={recipe} />
          </div>
          <div className='taco-image'>
            <img
              src='https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
              alt='a randomly generated taco'
            />
          </div>
        </div>
      </div>
    )
  }
}
