import Card from "./component/Card";
import './style.css';
  
  function App() {
    return(
      <div className="App">
        <h className="head"><tab>Instruction</tab><li style={{fontSize: 30,padding: 8,}}>pass the value and setter of the state to the component.</li></h>
        <h className="heading">Calorie Reader</h>
          <Card /> </div>
    );  
  }

  export default App;