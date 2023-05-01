# Bot Battlr

Visit this link to view the project [https://mshekerotokiti.github.io/bot-battlr/](https://mshekerotokiti.github.io/bot-battlr/)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Requirements

For this project, I’ll be building out a React application a user  can custom build their own Bot Army!

As a user, I should be able to:

See profiles of all bots rendered in `BotCollection`.

Add an individual bot to my army by clicking on it. The selected bot should render in the  `YourBotArmy` component. The bot can be enlisted only once. The bot does not disappear from the `BotCollection`.

Release a bot from my army by clicking on it. The bot disappears from the `YourBotArmy` component.

Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the `YourBotArmy` on the frontend.

# Project Setup

Run `json-server --watch db.json -p 8001` to get the backend started.
Test the server by visiting this route in the browser [http://localhost:8001/bots](http://localhost:8001/bots)

Open another tab in the  terminal and start the react application by running `npm start`
The page will reload when you make changes.

# Project Explanation

The step by step thought process has been commented in the respective components

The Component Hierarchy is; 
App ├──BotsPage ├── BotCollection ├── BotCard └── YourBotArmy ├── BotCard

Displayed the data to the BotCard component by passing props through: BotsPage => BotCollection => BotCard Mapped the data to the component using .map() method completing the first deliverable

Added a bot to the YourBot Army component by creating a click function that spreads the selected bot by id and renders it to the DOM completing the second deliverable

Added an if statement to ensure that once the bot is clicked from the YourBotArmy component it is released back to the BotCard component completing the third deliverable

Added a delete method to make sure once the delete button is clicked it deletes the bot from the DOM and server completing the last deliverable

# Author

GITHUB: [Sharon Tokiti](https://github.com/mshekerotokiti)

TWITTER: [@sharonTokiti](https://twitter.com/sharontokiti)

# License

This project is MIT licensed
Copyright (c) 2023 mshekero_tokiti

