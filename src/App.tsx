import "./App.css";

import NewHikeForm from "./components/NewHikeForm/NewHikeForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>HOLA MUNDO!!!</h1>
      <RegisterForm />

      <NewHikeForm />
    </div>
  );
}

export default App;
