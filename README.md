# Getting Started

`npm install`

`npm start`

## Instructions

In the sections folder you will find three sections to complete for this exercise.

You have `Art`, `Users` and `Advice`.

The aim of the exercise is to practice fetching data and rendering lists.

Inside each section folder you will find:

- an `index.js` file for the logic of each section **build everything here and then break it down into components**
- a `template.html` that shows you an example of what your React components should create. Take note of `className` to get the styling working.
- a `components` folder with suggested components to create so you can practice props.

For each section you will need to make a fetch request using the following APIs:

Art - https://api.artic.edu/docs/#introduction

Note: You will find the following section helpful for the images: https://api.artic.edu/docs/#images

Users - https://randomuser.me/documentation

Advice - https://api.adviceslip.com/

## Deliverables

The `Art` list should render:

- An image of the artwork
- The title of the artwork
- The artist's name
- A list of subjects from `subject_titles`

The `Users` list should render:

- An image of the user
- The full name of the user
- The background colour of each list item should change according to gender
- The email of the user

### Challenge Section

The `Advice` slip section should render:

- A single random advice slip
- A list of favourtie advice slips

The `Advice` slip section should allow users to:

- Fetch another advice slip using a button
- Save an advice slip to favourites using a button
