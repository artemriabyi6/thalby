import './registration.css'

const Registration = () => {
    return ( 
        <>
        
        <section className="registration">
            <div className="container">
                <h3>Keep in touch</h3>
                <p>Get our travel advice, global views and travel freebies in your <br/> inbox</p>
                <form name="main_form" action="#">
                    <div className="form_wrap">
                        <div className="input_flex">
                            <input name="first_name" placeholder="First Name" type="text"/>
                            <input name="lasr_name" placeholder="Last Name" type="text"/>
                        </div>
                        <input name="email" placeholder="Email" type="email"/>
                        <button name="Subscribe" type="button">Subscribe</button>
                    </div>
                </form>
            </div>

        </section>
        
        </>
     );
}
 
export default Registration;