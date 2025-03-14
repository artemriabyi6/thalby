import './portrets.css'

const Portrets = () => {
    return ( 

        <>
        
        <section className="portrets">
            <div className="container">
                <article>
                    <div className="portrets_image">
                        <a href="#"><img src="../public/images/man.png" alt="man"/></a>
                    </div>
                    <h5>{`"I don’t like things to be conventional. If it’s too nice, I bring disorder."`}</h5>
                    <p>Camille Muller, <br/> Landscape Designer, France</p>
                    <a href="#">Discover</a>
                </article>
                <article>
                    <div className="portrets_image">
                        <a href="#"><img src="../public/images/woman.png" alt="man"/></a>
                    </div>
                    <h5>{`"Magic is not magic in the sense that I can just wish for anything."`}</h5>
                    <p>Sonia Kowalewski, <br/> Witch, Germany</p>
                    <a href="#">Discover</a>
                </article>
                <article>
                    <div className="portrets_image">
                        <a href="#"><img src="../public/images/girl.png" alt="man"/></a>
                    </div>
                    <h5>{`"I was eight years old when I entered my first competition. I won it."`}</h5>
                    <p>Lilly Stoephasius, <br/> Skateboarder, Germany</p>
                    <a href="#">Discover</a>
                </article>
            </div>
        </section>
        
        </>

     );
}
 
export default Portrets;