import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>HOLA MUNDO!!!</h1>
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
