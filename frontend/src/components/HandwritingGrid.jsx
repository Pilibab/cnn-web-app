import { useEffect, useState, useContext } from "react";
import "../styles/HandwritingGrid.css";
import ButtonContext from "../context/ButtonContext";
import BrushSettingContext from "../context/BrushSettingContext";
import GridContext from "../context/GridContext";

const initial_border_color = 'rgba(179, 179, 179, 1)';
// const on_down_color = 0;

// generate initial grid color array

const Cell = ({ row, col, color, isMouseDown, onPaint }) =>  {
    const cssColor = `rgb(${color}, ${color}, ${color})`;

    return (
        <div
            className="cell"

            // ! why do we need onMouseEnter if we will just activate 
            // ! the paint if mouse is down 

            /* 
            * Yes — you need onMouseEnter (or onMouseOver) while isMouseDown is true to 
            * implement drawing while dragging. onMouseDown paints the initial cell; 
            * onMouseEnter paints new cells as the cursor moves over them while the mouse button 
            * remains pressed. Leave both.
            */
            onMouseEnter={() => isMouseDown && onPaint(row, col)}
            onMouseDown={ e => {
                e.preventDefault();     // ^ NOTE: avoids text selection issues
                onPaint(row, col);
            }}
            style={{ backgroundColor: cssColor }}
        />
    );
}

const Grid = () => {

    const { isReset, setResetBtn, isSubmit, setSubmitBtn } = useContext(ButtonContext);
    const { radius, hardness} = useContext(BrushSettingContext);
    const {gridColor, setGridColor, createGridArray, rows, cols} = useContext(GridContext);


    useEffect(() => {

        if (isReset) {
            resetGridArray()
        }
        const onUp = () => setIsMouseDown(false);
        window.addEventListener("mouseup", onUp);
        return () => window.removeEventListener("mouseup", onUp);
    }, [isReset]); 


    const resetGridArray = () => setGridColor(createGridArray(rows, cols))

    const onPaint = (r,c) => {
        /**
         * parameters: row, col
         * set the color of the cell at (row, col) to on_down_color 
         */
        paintAt(r, c, { radius, hardness, target: 0 });
    }

    const paintAt = (r0, c0 , { radius = 1, hardness = 1, target = 0 } = {}) => {
    /**
     * parameters:  r0, c0:     center cell coordinates
     *              radius:     radius of effect
     *              hardness:   hardness of effect  / alpha value
     *              target:     target color value (0 -255) /rgb  
     * 
     * returns:     next:       updated grid color array
     * 
     * Description:  Paints the grid with a radial gradient effect centered at (r0, c0).
     */


    // we dont need { radius = 1, hardness = 1, target = 0 } "= {}" right? since
    //      answer: “If no object is passed, use an empty object, then destructure 
    //              defaults from that.” 

    // TODO: fix hardness 

        setGridColor((prev) => {

            // get lenght of grid 
            const rowsCount = prev.length;
            const colsCount = prev[0].length;           // checks the length of the first row

            // clone prevGrid to newGrid
            const next = prev.map(row => row.slice());  // loops thru array 

            const rMin = Math.max(0, r0 - radius);
            const rMax = Math.min(rowsCount - 1, r0 + radius);
            const cMin = Math.max(0, c0 - radius);
            const cMax = Math.min(colsCount - 1, c0 + radius);

            for (let r = rMin; r <= rMax; r++) {
                for (let c = cMin; c <= cMax; c++) {
                    const dx = r - r0;
                    const dy = c - c0;
                    const d = Math.sqrt(dx*dx + dy*dy);
                    if (d > radius) continue;

                    // falloff: linear then apply hardness exponent
                    let strength = 1 - d / radius;       // 1 at center, 0 at edge
                    strength = Math.pow(strength, hardness); // hardness >1 = sharper

                    const oldVal = next[r][c];
                    const newVal = Math.round(oldVal * (1 - strength) + target * strength);

                    // optional: only darken (do not brighten)
                    next[r][c] = Math.min(oldVal, newVal);
                    }
                }
            return next;
        });
    };



    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const [isMouseDown , setIsMouseDown] = useState(false);

    
    return (
        <div 
            id="grid"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
                "--rows": rows,
                "--cols": cols,
                "--line_color": initial_border_color,
            }}
            >
            {gridColor.map((row, r ) => (
                    row.map((cell, c) => (
                    <Cell 
                        key={r * cols + c}
                        row={r}
                        col={c}
                        color={cell} // TODO fix this unsure what value should be color
                        isMouseDown={isMouseDown}  
                        onPaint={onPaint} 
                    />
                ))
            ))}
        </div>
    )
}









export default Grid;