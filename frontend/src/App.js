import Grid from './components/HandwritingGrid';
import ResetButton from './components/ResetButton';
import ButtonProvider from './context/ButtonProvider';

function App() {
  return (
    <ButtonProvider>
      <div className="App">
        <Grid />
        <ResetButton/>
      </div>
    </ButtonProvider>
  );
}

export default App;
