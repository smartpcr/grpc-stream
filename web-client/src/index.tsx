import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Store from "./Store";
import Stories from "./story/Stories";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={Store}>
        <React.StrictMode>
            <Stories />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);