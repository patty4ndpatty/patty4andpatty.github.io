import './Header.css'

function Header() {
    const nav_Toggle = () => {
        const nav_Menu = document.getElementById('nav-menu')
        nav_Menu.classList.add('show-menu')
    }

    const nav_Close = () => {
        const nav_Menu = document.getElementById('nav-menu')
        nav_Menu.classList.remove('show-menu')
    }

    function linkact(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }
    
    return(
        <header className="header" id="header">
            <nav className="nav container">
                <a className="nav_logo">Pochcharapon</a>
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link" onClick={linkact}>
                                <i className="uil uil-estate nav_icon"></i> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link" onClick={linkact}>
                                <i className="uil uil-user nav_icon"></i> About Me
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link" onClick={linkact}>
                                <i className="uil uil-bolt nav_icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#education" className="nav_link" onClick={linkact}>
                                <i className="uil uil-graduation-cap nav_icon"></i> Education
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#works" className="nav_link" onClick={linkact}>
                                <i className="uil uil-book-open nav_icon"></i> Works
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#project" className="nav_link" onClick={linkact}>
                                <i className="uil uil-meeting-board nav_icon"></i> Project
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav_close" onClick={nav_Close}></i>
                </div>
                <div className="nav_btns">
                    <i className="uil uil-moon change-theme" id="theme-button"></i>
                    <div className="nav_toggle" onClick={nav_Toggle}>
                        <i className="uil uil-apps"></i> 
                    </div>
                </div>
            </nav>
        </header>
    ) 
}

export default Header