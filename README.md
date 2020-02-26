# React Frontend Assignment

You will build a travelling app that lets users like and review their favourite destinations.

This exercise serves as a demonstration of your technical skills and a point of discussion for our technical interview. This is a fictional case study and none of your work will be used for any of our products.

Fork this repo to get started following the *Getting Started* section and give us a link to your repository when you are done.

#### Demo
The links below are demos of the expected app.

[Desktop demo](https://www.figma.com/proto/daatD2T7u8gejwyPYdNyCR/FH-test?node-id=1%3A2&scaling=min-zoom)

[Mobile demo](https://www.figma.com/proto/daatD2T7u8gejwyPYdNyCR/FH-test?node-id=6%3A706&scaling=scale-down)

## Specifications

Make sure to follow the specs described below while working on the assignment. 

### General
- The app consists of two screens, Home and Favourites, accessed by top tabs.
- The App starts with the Home screen active.
- The destinations from the provided endpoint are fetched when the app first loads.
- Only destinations of the "en" locale should be included, exclude other locales.
- The first letter of a destination should be capitalised.
- The app is rendered properly while fetching, including the header and the screen titles.
- A loading indication is displayed instead of the card list while fetching.

### Screens
- Clicking the Favourites tab changes the view from the Home screen to the Favourites screen.
- The corresponding tab is highlighted to indicate the active screen.
- The Home screen shows all available destinations.
- The Favourites screens shows only the favourite destinations. The screen is empty if there are no favourites.

### Cards
- Tapping a card's Heart button or double tapping the card itself adds the destination to the user's favourites list.
- The Heart button of favourite destinations is highlighted.
- Double tapping cards of favourite destinations has no effect.
- Tapping the Heart button of favourite destinations removes them from the favourites list.
- The cards have different layout on mobile and desktop, but represent the same data.

### Design
- The loading indication is a simple `<p>Loading...</p>` component.
- The logo and the Heart icons are included in the directory. Import them in the source code.
- Colors:
    - Primary: `#01C3A7`
    - Tab gray: `#B4B4B4`
    - Card text: `#8C8C8C`
    - Cards box shadow `1px 2px 2px rgba(0, 0, 0, 0.15)`
- The font family is `Raleway`. Include it from google fonts.
- Breakpoints: `Mobile: <= 600px`.

## Guidelines
- Write the app using React.js
- Use Function Components and Hooks. Don't use Class Components.
- Use `fetch` to get data from the API.
- Don't use any navigation library and don't bother with the browser's history. Conditionally rendering the appropriate screen is fine for the assignment.
- Don't use any CSS frameworks (Bootstrap, etc.). Implement the design with custom CSS. Use flex to build the layouts.
- You can write the styles in plain CSS files or use any CSS technique you feel comfortable with (SASS, css modules, CSS-in-JS tools such as Styled Components, Emotion, etc.).
- Use the following endpoint to fetch the data needed.

Endpoint: `https://m135fekqpe.execute-api.eu-central-1.amazonaws.com/prod?entity=destinations`

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can:

### Install the project
`npm install`

### Run it locally
`npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

### Run tests
`npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.