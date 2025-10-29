// index.js file is first one when executed project

// step 1 import the React and ReactDOM libraries
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// step 2 Get a ?reference to the div with ID root

const el = document.getElementById('root');

// Step 3 tell react to take control of the element

const root = ReactDOM.createRoot(el);


// step 4 show the component on the screen
root.render(<App />);c