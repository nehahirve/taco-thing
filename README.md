<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  TacoThing
</h1>

**About:**  

TacoThing is an app that fetches a random taco recipe from the [TacoFancy API](https://github.com/evz/tacofancy-api) and a random taco image from the [Unsplash APi](https://unsplash.com/documentation). It renders the recipe markdown to the page using react-markdown. It also allows you to save your favourite tacos to a list, although for now it doesn't use any kind of localStorage or database to persist the data. Design in the style of the [Thingtesting website](https://thingtesting.com/).


**Tools / Libraries / Dependencies**
- [TacoFancy API](https://github.com/evz/tacofancy-api)
- [Unsplash API](https://unsplash.com/documentation)
- [create-react-app](https://create-react-app.dev/)
- [react-markdown](https://www.npmjs.com/package/react-markdown)

**Process:**

I tried to approach this in iterations, so that the first priority was getting a working app (even if unpolished)

I gave myself 4 - 6 hours for this task, this is how I approximately distributed the time: 

- 1 hour -- researching, testing the API, looking at the data to see what I could do. Rough figma sketch.
- 1.5 hours -- coding the basic requirements using create-react-app (first time I used this, decided Gatsby was overkill even though more comfortable in it)
- 3.5 hours -- details, added the 'liked tacos' page, design
- 0.5 hours -- cleanup and readme


**Areas to improve**

- Need a better / more efficient CSS workflow. Wasted a lot of time in messy styling

- Need to learn markdown, and explore react-markdown more, I removed the images from the markdown using regex, but think there's an easier way to do it with props

- Should maybe have spent more time on UX / UI feedback for buttons, hover states, clicked states etc. 

- The Like button should have possibly been inside the recipe component instead of the TacoGenerator, the responsibility that TacoGenerator has is not specific enough now.

- Ideally the generator should re-fetch if we get the same taco twice, and should display some UI on error and loading states.

**Hurdles**

- Had to do some googling to learn about CORS errors

- Originally wanted to break up the markdown and separate out the ingredients and directions for styling but realised that it would take longer time than I had.


