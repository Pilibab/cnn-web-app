import Grid from './components/HandwritingGrid';
import PredictButton from './components/PredictButton';
import ResetButton from './components/ResetButton';
import SidePanel from './components/SidePanel';
import './styles/App.css';


function App() {
  return (
    <div class="App">
      <Grid />
      <SidePanel>
        <ResetButton/>
        <PredictButton/>      
      </SidePanel>

    </div>
  );
}

export default App;
