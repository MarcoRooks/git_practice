import logo from './logo.svg';
import './App.css';
import ContactList from './components/contactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactList/>
      </header>
    </div>
  );
}

export default App;
