import { useState } from "react";
import GridContext from "./GridContext";

const initial_cell_color = 255;


const GridProvider =  ({children}) => {
    const rows = 28;
    const cols = 28;

    const createGridArray = (rows, cols) => {
        const gridArray = [];
        for (let r = 0; r < rows; r++) {
            const row = [];

            for (let c = 0; c < cols; c++) {
                row.push(initial_cell_color);
            }       
            gridArray.push(row);
        }
        return gridArray;
    }

    const [gridColor, setGridColor] = useState(()=> createGridArray(rows, cols));
    
    const packageData = {gridColor, setGridColor, createGridArray, rows, cols};
    return (
        <GridContext.Provider value={packageData}>
            {children}
        </GridContext.Provider>
    );
}

export default GridProvider;