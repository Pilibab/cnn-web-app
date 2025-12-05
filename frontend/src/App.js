// App.js
import Grid from './components/HandwritingGrid';
import Button from './components/reusable/Button';
import SidePanel from './components/SidePanel';
import ButtonContext from './context/ButtonContext';
import './styles/App.css';
import { useContext } from 'react';


function App() {
	const {isReset,
			setResetBtn,
			isSubmit,
			setSubmitBtn} = useContext(ButtonContext)
	
	const resetPackage = {  
		stateVar: isReset,
		stateFunc: setResetBtn,
		btnName: 'Reset',
		variant: "reset"
	}

	const submitPackage = {
		stateVar: isSubmit,
		stateFunc: setSubmitBtn,
		btnName: 'Submit',
		variant: "submit"
	}

	return (
		<div class="App">
		<Grid />
		<SidePanel>
			<Button {...resetPackage}/>
			<Button {...submitPackage}/>   
		</SidePanel>

		</div>
	);
}

export default App;
