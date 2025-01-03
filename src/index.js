import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000; /* Black background */
    color: #fff; /* White text */
  }

  h1, h2, h3, h4, h5, h6 {
    color: #fff; /* White headings */
  }

  p {
    line-height: 1.6;
    color: #ccc; /* Light gray for paragraphs */
  }

  a {
    color: #fff; /* White links */
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline; /* Underline for contrast */
  }

  button {
    background-color: #fff; /* White buttons */
    color: #000; /* Black text */
    border: 1px solid #fff; /* White border */
    padding: 0.5em 1em;
    cursor: pointer;
  }

  button:hover {
    background-color: #ccc; /* Light gray on hover */
    color: #000; /* Black text */
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);
