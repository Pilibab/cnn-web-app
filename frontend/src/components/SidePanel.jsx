import '../styles/SidePanel.css';

const SidePanel = ({ children }) => {
    return (
        <div className="side-panel">
            {children}
        </div>
    );
};

export default SidePanel;
