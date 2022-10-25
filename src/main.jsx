import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormCustomHook } from "./02-useEffect/FormCustomHook";
import { HooksApp } from "./HooksApp";
import { MultipleCustomHooks } from "./03-Examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-Memo/Memorize";
import { MemoHook } from "./06-Memo/MemoHook";
import { CallbackHook } from "./06-Memo/CallbackHook";
import { Padre } from "./07-tarea-memo/Padre";
//import "./08-useReducer/intro-reducer";
import { TODOApp } from "./08-useReducer/TODOApp";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <div className="container-fluid">
    <RouterProvider router={router} />
  </div>
  // </React.StrictMode>
);
