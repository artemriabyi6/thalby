import './cards.css'

const Cards = () => {
    return ( 
        <>

<section className="cards">
            <div className="container">
                <h3>Our guides explain countries and cultures.</h3>
                <p className="main_text">Are you curious about the world around you? Our guides are for smart global citizens, world travelers and engaged residents who want to gain a deeper understanding of the cultures and societies they care about.</p>
                <p className="mini_text">Available as ebooks here and on Amazon.</p>
                <h2>Our best sellers</h2>
                <div className="cards_flex">
                    <article>
                        <div className="cards_img">
                            <a href="#"><img src="../public/images/image 2.png" alt="man"/></a>
                        </div>
                        <h5>Thalby Guide to French Culture and Heritage</h5>
                        <p>USD 6.99</p>
                        <a href="#">Add to cart</a>
                    </article>
                    <article>
                        <div className="cards_img">
                            <a href="#"><img src="../public/images/image 3.png" alt="man"/></a>
                        </div>
                        <h5>Thalby Guide to French People and Society</h5>
                        <p>USD 6.99</p>
                        <a href="#">Add to cart</a>
                    </article>
                    <article>
                        <div className="cards_img">
                            <a href="#"><img src="../public/images/image 4.png" alt="man"/></a>
                        </div>
                        <h5>Thalby Guide to German Culture and Heritage</h5>
                        <p>USD 6.99</p>
                        <a href="#">Add to cart</a>
                    </article>
                </div>
            </div>
        </section>


        </>
     );
}
 
export default Cards;