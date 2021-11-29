import "./App.css";
import HeaderHike from "./components/HeaderHike/HeaderHike";

import NewHikeForm from "./components/NewHikeForm/NewHikeForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App(): JSX.Element {
  return (
    <div className="App">
      <HeaderHike />
      <RegisterForm />

      <NewHikeForm />
    </div>
  );
}

export default App;
