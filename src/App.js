import logo from './logo.svg';
import './App.css';
import TodoPage from './pages/TodoPage/TodoPage';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <div>
        <TodoPage />

      </div>
    </div>
  );
}

export default App;
