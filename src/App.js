import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabs = [
    {
      label: 'Tab One',
      content: 'Content one'
    },
    {
      label: 'Tab Two',
      content: 'Content two'
    },
    {
      label: 'Tab Three',
      content: 'Content three'
    },
  ]

  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
