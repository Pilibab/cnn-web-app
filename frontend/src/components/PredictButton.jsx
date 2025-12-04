import { useContext } from "react";
import ButtonContext from "../context/ButtonContext";


const PredictButton = () => {
    const {isSubmit, setSubmitBtn} = useContext(ButtonContext);

    const predictClicked = () => {
        setSubmitBtn(!isSubmit);
    }

    return (
        <button 
            onClick={() => predictClicked()}
        >
            predict 
        </button>
    );
}

export default PredictButton