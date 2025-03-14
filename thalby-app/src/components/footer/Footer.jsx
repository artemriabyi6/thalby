import './footer.css'

const Footer = () => {
    return ( 
        <>
        
        <footer>
        <div className="container">
            <div className="footer_wrapper">
                <div className="links">
                    <div className="links_logo">
                        <img src="../public/images/Frame (5).svg" alt="logo"/>
                    </div>
                    <div className="links_image">
                        <a href="#"><img src="../public/images/facebook (2).svg" alt=""/></a>
                        <a href="#"><img src="../public/images/instagram (2).svg" alt=""/></a>
                        <a href="#"><img src="../public/images/twitter (3).svg" alt=""/></a>
                    </div>
                </div>
                <div className="lists">
                    <ul>
                        <li>ABOUT</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Write for Us</a></li>
                    </ul>
                    <ul>
                        <li>CONTACT</li>
                        <li><a href="#">Email hi@thalby.com</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>
            <p>Thalby LLC © 2021</p>
        </div>
    </footer>
        
        </>
     );
}
 
export default Footer;