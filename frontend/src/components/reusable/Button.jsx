// Button.jsx
import "../../styles/Button.css"

const Button = ({stateVar, stateFunc, btnName, variant}) => {

    
    const resetClicked = () => {
        stateFunc(!stateVar);
    }

    const submitClicked = () => {
        console.log("submit button clicked");
    }
    

    return (
        <button 
            className={`btn ${variant}`}
            onClick={() => {
                if (btnName === "Submit") submitClicked();
                else resetClicked();
            }
        }
        >
            {btnName}
        </button>
    );
};

export default Button;