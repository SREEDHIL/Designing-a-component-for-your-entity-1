import './App.css';
import Usercard from './components/usercard.jsx';

function App() {
  const cards = Array.from({ length: 3 });
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Usercard key={index} />
      ))}
    </div>
  );
}

export default App;
