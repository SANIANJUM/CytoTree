import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import CytoscapeComponent from 'react-cytoscapejs';

// class MyApp extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render(){
//     const elements = [
//        { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
//        { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
//        { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
//     ];

//     return <CytoscapeComponent elements={elements} style={ { width: '600px', height: '600px' } } />;
//   }
// }

// ReactDOM.render( React.createElement(MyApp, document.getElementById('root')));