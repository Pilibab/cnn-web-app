import { useState } from "react"
import ButtonContext from "./ButtonContext"

const ButtonProvider = ({children}) => {

    const [isReset, setResetBtn] = useState(false);
    const [isSubmit, setSubmitBtn] = useState(false);
    
    const packageData = {
        isReset,
        setResetBtn,
        isSubmit,
        setSubmitBtn
    };
    
    return (
    <ButtonContext.Provider value={packageData}>
        {children}
    </ButtonContext.Provider>)
}

export default ButtonProvider;