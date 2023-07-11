import './App.css';
import GameSelectionScreen from './components/GameSelectionScreen';
import background from './assets/sparkles.gif'

function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat' }}>
      <GameSelectionScreen />
    </div>
  );
}

export default App;
