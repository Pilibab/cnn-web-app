// Button.jsx
import "../../styles/Button.css"

const Button = ({stateVar, stateFunc, btnName, variant}) => {

    const resetClicked = () => {
        stateFunc(!stateVar);
    }

    if (btnName === "Submit") {
        console.log("submit button clicked");
    }

    return (
        <button 
            className={`btn ${variant}`}
            onClick={() => resetClicked()}
        >
            {btnName}
        </button>
    );
};

export default Button;