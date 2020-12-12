import React from 'react'
import ReactMarkdown from 'react-markdown'
import logo from './logo.svg'

import './styles/reset.css'
import './styles/App.css'

export default class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <img src={logo} alt='Tacothing logo' />
        </header>
        <main>
          <Recipe />
          <button className='get-taco-button'></button>
        </main>
      </>
    )
  }
}

class Recipe extends React.Component {
  render() {
    const sampleMd =
      "@deezthugs' Smokey Turkey Tacos\n===============================\n\nThese tacos have and will blow minds.\n\n(Note:  I cannot separate the base_layer here from the seasoning, it is all integral)\n\n* 2 Packages ground Turkey or Chicken (1.5 to 2 lbs) - not the lean stuff for Chrissake!\n* Several slices of cooked bacon, diced\n* 2 Tbs Coconut oil\n* 2 Tbs Bacon Grease. That's right, Bacon Grease. (What you don't keep it? Might as well just quit now)\n* 1 Medium sweet onion\n* (The following dry ingrediants can be increased depending on amount of meat)  \n* 4 Garlic Cloves, smashed\n* 1 tsp Cumin\n* 2 tsp Onion powder\n* 1 tsp Chipotle powder (use as much as required)\n* 1 tsp (cool smokey) Paprika\n* 1 tsp Cinnamon\n* 1 tsp Ground Ginger\n* 1/2 - 1 tsp Black Pepper\n* 1 tsp Kosher Salt\n* 3 Limes, juiced\n* [optional] 1/2 can low-salt Chicken broth\n\nCombine all dry seasonings in bag, shake up and combine well with raw turkey meat. return to fridge for an hour or more. \n\nMelt the Bacon Grease over medium heat, add Coconut oil and diced onion, cook down till onions are, well, you know, awesome. Add the smashed garlic. Add the bacon. Add the turkey meat and break it down into medium/small bits with a spatula or butter knife. After cooking for a few minutes and the meat has begun to brown, drizzle 2 of limes' juice onto the meat.\n\nCook well, adding optional chicken broth to shape the consistency as needed. (Generally not needed unless you accidentally buy low-fat meat. Shame on you.)\n\nFinally, transfer amount for a meal to a frying pan, frying for a few minutes to create some crispy bits (This is the key step:)), adding lime juice as it cooks.  Spoon onto favorite tortillas add condiments and devour.\n"

    return (
      <div className='recipe-card'>
        <div className='title-card'>
          <div className='taco-recipe'>
            <ReactMarkdown children={sampleMd} />
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
