import React from 'react'
import TacoListItem from './TacoListItem'

export default class TacoList extends React.Component {
  componentDidUpdate() {
    console.log(this.props.tacoList)
  }

  render() {
    const tacos = this.props.tacoList.map((taco, index) => {
      return (
        <TacoListItem
          tacoName={taco.tacoName}
          image={taco.image}
          recipe={taco.recipe}
          generateTaco={this.props.generateTaco}
          key={index}
        />
      )
    })

    if (this.props.isVisible) {
      return <div>{tacos}</div>
    } else return null
  }
}
