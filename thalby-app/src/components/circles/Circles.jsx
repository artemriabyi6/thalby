import './circles.css'

const Circles = () => {
    return ( 
        <>
        
        <section className="circles">
            <div className="container">
                <h5>Some of the features that <br/> make Thalby guides unique</h5>
                <div className="circles_flex">
                    <article>
                        <div className="circles_image">
                            <img src="../public/images/circle_1.png" alt="photo"/>
                        </div>
                        <h6>Written by <br/> locals</h6>
                    </article>
                    <article>
                        <div className="circles_image">
                            <img src="../public/images/circle_2.png" alt="photo"/>
                        </div>
                        <h6>Packed with <br/> insight</h6>
                    </article>
                    <article>
                        <div className="circles_image">
                            <img src="../public/images/circle_3.png" alt="photo"/>
                        </div>
                        <h6>Interviews with <br/> diverse voices</h6>
                    </article>
                </div>
                <div className="circles_flex">
                    <article>
                        <div className="circles_image">
                            <img src="../public/images/circle_4.png" alt="photo"/>
                        </div>
                        <h6>Written by <br/> locals</h6>
                    </article>
                    <article>
                        <div className="circles_image">
                            <img src="../public/images/circle_5.png" alt="photo"/>
                        </div>
                        <h6>Packed with <br/> insight</h6>
                    </article>
                    <article>
                        <div className="circles_image">
                            <img src="../public/images/circle_6.png" alt="photo"/>
                        </div>
                        <h6>Interviews with <br/> diverse voices</h6>
                    </article>
                </div>
                <h4>Each Thalby guide includes interviews with <br/> a range of fascinating voices, such as</h4>
            </div>
        </section>

        
        </>
     );
}
 
export default Circles;