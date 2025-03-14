import './header.css'

const Header = () => {
    return ( 
        <>
             <header>
        <div className="container">
            <nav>
                <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Try a Free Guide</a></li>
                    <li><a href="#">Stories</a></li>
                </ul>
            </nav>
            <div className="main_logo">
                <img src="../public/images/logo.svg" alt="logo"/>
            </div>
            <div className="header_burger">
                <span></span>
            </div>
            <div className="icons">
                <a href="#"><img src="../public/images/Frame (4).svg" alt="instagram"/></a>
                <a href="#"><img src="../public/images/Frame (2).svg" alt="search"/></a>
                <a href="#"><img src="../public/images/Frame (3).svg" alt="lock"/></a>
            </div>
        </div>
    </header>
        </>
     );
}
 
export default Header;