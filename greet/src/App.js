import './App.css';
import TaskList from './components/container/task_list';
import Father from './components/practice/father';
import AsyncExample from './components/pure/AsyncExample';
import AxiosExample from './components/pure/AxiosExample';
import FetchExamples from './components/pure/forms/FetchExamples';
import LoginFormiK from './components/pure/forms/loginFormiK';
import ObservableExample from './components/pure/ObservableExample';

function App() {
  return (
    <div className="App">
      {/*<TaskList/>*/}
      {/* <Father/> */}
      {/*<LoginFormiK/>*/}

      {/* ejemplos de async */}
      {/*<AsyncExample/>*/}
      {/*<ObservableExample/>*/}
      {/*<FetchExamples/>*/}
      <AxiosExample/>
    </div>
  );
}

export default App;
