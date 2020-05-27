import React from "react";
import Main from "./components/MainComponent.js";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
  return (<Provider store={store}>
    <Main />
  </Provider>);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0ff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
