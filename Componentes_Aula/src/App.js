import Relogio from "./Components/Relogio";
import Letreiro from "./Components/Letreiro";
import ContadorPessoas from "./Components/ContadorPessoas";
import Profile from "./Components/Profile";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div>
      <h2> Aula 01</h2>
        <Relogio />
        <div className="letreiro"  style={{height: "50px"}}> 
        <Letreiro />
        </div>
      <h2> Aula 02</h2>
        <ContadorPessoas />
      <h2>Aula 03 e 04</h2>
        <Profile />
      <h2>Aula 03 e 04</h2>
        <Gallery />
    </div>
  );
}

export default App;
