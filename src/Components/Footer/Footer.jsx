import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="Footer container">
        <div className="footer__section1">
          <h1>Join the community today</h1>
          <p>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
          <button className="footer__section1--btn">Sign Up Free →</button>
        </div>
      </div>
      <div className="footer__bottom container">
        <div className="footer__left">
          <b>magnifico</b>
          <span>© 2023. All rights reserved.</span>
        </div>

        <div className="footer__right">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
          <a href="#">About</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;