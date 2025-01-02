

const Footer = ()=>{
    const currentYear = new Date().getFullYear();

    return(
        <div>
            <hr style={{color:'white',marginTop:'100px'}}/>
            <div className="container-fluid text-light" style={{backgroundColor:'black'}}>
                <div className="row ms-5 me-5 mt-5">
                    <div className="col-sm-4 mt-5 mb-5">
                        <h4><a href="" style={{textDecoration:'none',color:'white'}}>U & Recipy</a></h4><hr />
                        <p>Address: Qutub Vihar Goyala dairy </p>
                        <p>Email: harshitprakash2@gmial.com</p>


                    </div>
                    <div className="col-sm-4 mt-5 mb-5">
                        <h4><a href="" style={{textDecoration:'none',color:'white'}}>Social Media</a></h4><hr />
                        <p>Address: Qutub Vihar Goyala dairy </p>
                        <p>Email: harshitprakash2@gmial.com</p>


                    </div>
                    <div className="col-sm-4 mt-5 mb-5">
                        <h4><a href="" style={{textDecoration:'none', color:'white'}}>About</a></h4><hr />
                        <p className="opacity-100 fs-6">Welcome to U & Recipy – where cooking meets convenience and creativity! Our mission is simple: to help you discover exciting and delicious recipes based on the ingredients you already have at home.</p>
                        <p className="opacity-100 fs-6">Whether you're a seasoned chef or a beginner in the kitchen, U & Recipy is your perfect culinary companion.</p>
                        <button type="button" className="btn btn-dark border-white">Read More</button>


                    </div>
                    <hr />
                    <div className="col-sm-12">
                        <p>Thank You for Visiting Us. Copy Rights by U & Recipy {currentYear}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;