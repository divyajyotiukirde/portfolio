import "./Navbar.css";

const Navbar = (props) => {
    return(
        <div id="navbar-wrap">
            <div className="logo">
                It's me Divya!
            </div>
            <div className="menu">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About Me</a>
            </div>
        </div>
    )
}

export default Navbar;