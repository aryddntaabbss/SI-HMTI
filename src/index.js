import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store";
import App from "./App";
import { Provider } from "react-redux";
import 'leaflet/dist/leaflet.css';

if ( 'serviceWorker' in navigator )
{
  window.addEventListener( 'load', () =>
  {
    navigator.serviceWorker
      .register( '/service-worker.js' )
  } );
}

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);
