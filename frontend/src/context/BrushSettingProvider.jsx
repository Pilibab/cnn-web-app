import { useState } from "react";
import BrushSettingContext from "./BrushSettingContext"


const BrushSettingProvider = ({children}) => {
    const [radius, setRadius] = useState(3);
    const [hardness, setHardness] = useState(1);

    const packageData = {
        radius, setRadius,
        hardness, setHardness
    };
    
    return (
        <BrushSettingContext.Provider value={packageData}>
            {children}
        </BrushSettingContext.Provider>
    );
}

export default BrushSettingProvider;