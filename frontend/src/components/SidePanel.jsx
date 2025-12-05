import { useContext } from 'react';
import '../styles/SidePanel.css';
import Slider from '@mui/material/Slider';
import BrushSettingContext from '../context/BrushSettingContext';


const SidePanel = ({ children }) => {

    const {radius, setRadius} = useContext(BrushSettingContext)
    return (
        <div className="side-panel">
            <Slider 
                size='small'
                min={1}
                max={5}
                defaultValue={radius}
                onChange={(e, newVal) => {
                    setRadius(newVal);
                }}
                aria-label="Small"
                valueLabelDisplay="auto"
                marks
            />

            <div className='btns-components'>
                {children}
            </div>
        </div>
    );
};

export default SidePanel;
