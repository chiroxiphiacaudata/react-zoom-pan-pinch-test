import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

class Example extends Component {
  render() {
    return (
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, zoomToElement,...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
            <TransformComponent>
            <div className="first">
              <div>section 1</div>
              <button onClick={() => zoomToElement("second")}>FLY to SECTION 2 button</button>
            </div>
            <div id="second">
              <div>section 2</div>
              <button onClick={() => zoomToElement("third")}>FLY to SECTION 3 button</button>
            </div>
            <div id="third">
              <div>section 3</div>
            </div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));