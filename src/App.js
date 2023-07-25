import './App.css';
import GameSelectionScreen from './components/GameSelectionScreen';
import background from './assets/sparkles.gif'
import MenuSelectionScreen from './components/MenuSelectionScreen';
import './assets/pokemon-gameboy-font.css';

function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat' }}>
      <GameSelectionScreen />
      <MenuSelectionScreen />
    </div>
  );
}

export default App;
