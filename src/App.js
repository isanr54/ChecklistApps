import logo from './logo.svg';
import './App.css';

const Card = (props) => {
  return(
    <div class="card">
      <p>{props.name}</p>
      <p>{props.job}</p>
    </div>
  );
}

function App() {
  return (
    <Card name='Ikhsan' job='Front-End Developer'/>
  );
}

export default App;
