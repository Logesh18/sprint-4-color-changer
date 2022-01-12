import './App.css';
import Dropdown from 'src/Components/Dropdown/Dropdown.js';
import ColorChanger from 'src/Components/ColorChanger/ColorChanger.js';
function App() {
  return (
    <div>
      <center><p>Color Changer</p></center>
      <div className="row">
          <div>
              <Dropdown/>
          </div>
          <div>
              <ColorChanger/>
          </div>
      </div>     
    </div>
  ); 
}

export default App;
