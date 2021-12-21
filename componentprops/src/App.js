import './App.css';
import AddTask from './components/addTask';

function App() {

  return (
    <div>
      <AddTask id={12} name={"shiv"} condition={true}/>
    </div>
  );
}

export default App;
