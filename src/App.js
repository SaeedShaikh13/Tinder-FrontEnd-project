  import './App.css';
  import Header from './compononets/Header';
  import TinderCards from './compononets/TinderCards';
  import SwipeButtons from './compononets/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;

