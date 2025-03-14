import './decription-reverse.css'

const DescriptionReverse = () => {
    return ( 
        <>
        
        <section className="description reverse">
            <div className="container">
                <div className="description_image">
                    <a href="#"><img src="../public/images/Rectangle.png" alt="woman"/></a>
                </div>
                <div className="description_text">
                    <h4>Culture and Heritage</h4>
                    <p>{`As well as covering heritage and tradition, our guides to culture introduce you to the designers, artists and chefs creating at the forefront of today's culture.`}</p>
                    <a href="#">Shop Culture Guides</a>
                </div>
            </div>
        </section>
        
        </>
     );
}
 
export default DescriptionReverse;