// Button.jsx
import { useContext } from "react";
import "../../styles/Button.css"
import GridContext from "../../context/GridContext";
import { predictDigit } from "../../api/api";

const Button = ({stateVar, stateFunc, btnName, variant}) => {
    // would this get the correct value even after updating? or should i wrapped it in useffect?
    const {gridColor} = useContext(GridContext)
    const resetClicked = () => {
        stateFunc(!stateVar);
    }

    const submitClicked = () => {
        stateFunc(!stateVar);
        predictDigit(gridColor);
        console.log("submit button clicked");
    }
    
    return (
        <button 
            className={`btn ${variant}`}
            onClick={() => {
                if (btnName === "Submit") submitClicked();
                else resetClicked();
            }}>
            {btnName}
        </button>
    );
};

export default Button;