# Build "Instagram Stories" feature

"Live Link : https://insta-ss.netlify.app/"

This project implements an Instagram-like Stories feature using React with TypeScript. It simulates the behavior of Instagram Stories where users can view stories in sequence with progress bars, automatic transitions, and navigation.

## Features

- Displays a list of users' stories with their thumbnails.
- Clicking a user’s thumbnail opens the full stories modal.
- Stories auto-transition every 5 seconds with a progress bar.
- Supports navigation between stories (previous/next).
- Closes the story modal after all stories for a user are viewed.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: For static typing.
- **CSS**: For styling and responsive design.
- **Custom Hooks**: To fetch and manage stories data.
- **useState & useEffect**: React hooks to manage state and side effects.

## Project Structure

/src
/components
Story.tsx :- Component to render a single story with progress bar.
StoryList.tsx :- It is a component that renders the list of users and their stories.
/hooks
useStories.ts :- fetching stories data from JSON.
/styles
App.css :- All the css
App.tsx :- Main application file.
index.tsx :- React entry point.

## Setup

### Prerequisites

- Node.js
- npm

### Installation

1. Clone this repository:

```bash
git clone https://github.com/Saleem95/Instagram.git

```

2. Move to the project directory:
cd instagram-stories

3. Install all the dependencies required:
npm install
Running the Project

4. Start the development server:

npm start
Open your browser and visit http://localhost:5173/ to view the project.

### Explanation

- Installation and Setup
How to clone the repo, install the dependencies, and run the development server.
- Usage
How the user interacts with the story list and story modal.
- **JSON of example stories**: Structurally shows how your stories should look.
- **Ideas to modify this project**: Ways that the developer may be interested to modify his code. Maybe set a shorter length of a story, and alter the source where he might pick the stories (like data).
- **Possible Enhancement for future features:** Feature additions for optimization and optimizations
- **License: to license in public or personal release.

With this `README.md`, anyone who sets up or contributes to your project will have clear instructions on how to work with it. Let me know if you need further adjustments!#   I n s t a g r a m 
 
 
