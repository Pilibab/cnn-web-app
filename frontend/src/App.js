import Grid from './components/HandwritingGrid';
import ResetButton from './components/ResetButton';
import BrushSettingProvider from './context/BrushSettingProvider';
import ButtonProvider from './context/ButtonProvider';

function App() {
  return (
    <BrushSettingProvider>
        <ButtonProvider>
          <div className="App">
            <Grid />
            <ResetButton/>
          </div>
        </ButtonProvider>    
    </BrushSettingProvider>

  );
}

export default App;
