import { useContext } from "react";
import ButtonContext from "../context/ButtonContext";



const ResetButton = () => {

    const { isReset, setResetBtn, isSubmit, setSubmitBtn } = useContext(ButtonContext);

    const resetClicked = () => {
        setResetBtn(!isReset);
    }

    return (
        <button 
            onClick={() => resetClicked()}
        >
            reset 
        </button>
    );
};

export default ResetButton;