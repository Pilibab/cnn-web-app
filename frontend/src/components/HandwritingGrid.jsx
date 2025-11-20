import { useState } from "react";
import "../styles/HandwritingGrid.css";

const initial_cell_color = 'white';
const initial_border_color = 'black';
const on_down_color = 'black';

const Cell = ({isMouseDown}) =>  {
    const [color, setColor] = useState(initial_cell_color);

    const paint = () => setColor(on_down_color);

    return (
        <div
        className="cell"
        onMouseEnter={() => isMouseDown && paint()}
        onMouseDown={paint}
        style={{
            "--color": color,
            "--line_color": initial_border_color
        }}
        />
    );
}

const Grid = ({rows = 28, cols = 28}) => {
    const [isMouseDown , setIsMouseDown] = useState(false);

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    return (
        <div 
            id="grid"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
                "--rows": rows,
                "--cols": cols
            }}
            >
            {[...Array(rows * cols)].map((_, i ) => (
                <Cell key={i} isMouseDown={isMouseDown} />
            ))}
        </div>
    )
}


export default Grid;