# TO-DO List Exercise

## 🚨 PLEASE READ THE WHOLE DOCUMENT BEFORE STARTING 🚨

Medellín | Front-End Test

This is a supermarket app in which you can select products by category to later
add them to a shopping basket

The app is in development state and has some bugs. We need you to complete it
and fix the errors

## 🛠 Requirements

- Git: [Download here](https://git-scm.com/downloads)
- Node JS (Version 8.x and up): [Download here](https://nodejs.org/en/download/)

## ⚙️ Install dependencies and run the app

- `npm install`
- `npm run setup`
- `npm run start`

## 📖 Considerations

- Review project structure and follow the same patterns.
- Create new components if you need to.
- Your code should work fine at least in Google Chrome.
- Please do not `git commit` for any reason at any point since this will break our diff strategy that should be used at the end.
- localhost:3004/food will show you the data you're getting from the API

## 📋 Backlog

### HTML

- Fix all the HTML semantic issues that you can find.

### CSS

- Implement the design for the small viewport
- The UI should change based on the viewport size
- Aisles should have rotating colors: blue, amber and pink, blue, amber, pink and so on

### JS

- Connect with real data using the `/food` endpoint
- Group items by category
- Remove the "All products" aisle
- Remove items without images
- Implement the behavior of the "Add" button:
- The counter on the header should reflect the number of added items
- When clicking on "Add", the text should change to "Added"

## 🏁 At the end of the test

- Run `npm run diff` and send `supermarket-app.diff` file back to us. **DO NOT ZIP THE WHOLE PROJECT**.
- Please do not share this test with anyone else.
