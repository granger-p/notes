import { MdDarkMode, MdLightMode } from "react-icons/md";
const Header = ({toggleDarkMode,darkMode})=>{
    return (
        <div className="header">
            <h1>Notes</h1>
            <button onClick={toggleDarkMode} className="toggle-btn">
    {darkMode ? <MdLightMode size="1.5em" color="white"/> : <MdDarkMode size="1.5em" />}
</button>
        </div>
    );
}

export default Header;