import './Css Folder/Footer.css'

const Footer = () => {
    return (
      <footer className="footer bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left">
              <h5 className="footer-title">Stay Connected</h5>
              <p>Follow us on social media for the latest news updates.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/ankush.kumar.758/" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>

                <a href="https://www.linkedin.com/in/davinder-singh-0476b2116/" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a>
               {/*
<a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>

               
               */}

                <a href="https://www.instagram.com/dev_anku_pb05/" className="text-white mx-2"><i className="fab fa-instagram"></i></a>

              </div>

            </div>
            <div className="col-md-6 text-center text-md-right">
              <h5 className="footer-title">Contact Us</h5>
              <p>Email: Devindersingh859@gmail.com | Phone: +91-97812-54681</p>
            </div>
          </div>
          <hr className="footer-divider"/>
          <div className="row">
            <div className="col text-center">
              <p className="mb-0">© {new Date().getFullYear()} @DavinderSingh. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  