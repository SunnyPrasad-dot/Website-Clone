import i1 from "../../assets/Images/logo2.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-white py-5">
        <div className="container">
          <div className="row gy-4">
            {/* Logo + Customer Care */}
            <div className="col-12 col-md-3">
              <div className="mb-3">
                <img src={i1} alt="Logo" width="18px" />
              </div>
              <h6 className="fw-bold">CUSTOMER CARE</h6>
              <ul className="list-unstyled footer-links">
                <li><a href="#">Shopper Protection</a></li>
                <li><a href="#">Loyalty Program</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Size Guides</a></li>
                <li><a href="#">Contact Us / Feedback</a></li>
                <li><a href="#">Shipping / Returns</a></li>
              </ul>
            </div>

            {/* Information */}
            <div className="col-6 col-md-2">
              <h6 className="fw-bold">INFORMATION</h6>
              <ul className="list-unstyled footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Ambassador Program</a></li>
                <li><a href="#">Partner Stores</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Trend Report</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-6 col-md-2">
              <h6 className="fw-bold">LEGAL</h6>
              <ul className="list-unstyled footer-links">
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Disclosure</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Community Guidelines</a></li>
              </ul>
            </div>

            {/* International */}
            <div className="col-6 col-md-2">
              <h6 className="fw-bold">INTERNATIONAL</h6>
              <ul className="list-unstyled footer-links">
                <li><a href="#">ModeSens</a></li>
                <li><a href="#">China (中国大陆)</a></li>
                <li><a href="#">United Kingdom</a></li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div className="col-6 col-md-3">
              <h6 className="fw-bold">CONNECT WITH US</h6>
              <ul className="list-unstyled footer-links">
                <li><i className="ri-apple-line"></i> <a href="#">Download iOS App</a></li>
                <li><i className="ri-android-line"></i> <a href="#">Download Android App</a></li>
                <li><i className="ri-chrome-line"></i> <a href="#">Chrome Extension</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="row mt-5">
            <div className="col-md-6">
              <h6 className="fw-bold">DON'T MISS OUT</h6>
              <p>
                Sign up for price alerts on your <br /> favorite items—never miss a sale or <br /> special promo code again.
              </p>

              <div className="mb-3">
                <input type="radio" id="womens" name="gender" />
                <label htmlFor="womens" className="ms-2">Women's</label>
                <input type="radio" id="mens" name="gender" className="ms-3" />
                <label htmlFor="mens" className="ms-2">Men's</label>
              </div>

              <div className="w-50">
                <input
                  type="email"
                  className="form-control rounded-2 my-2"
                  placeholder="Email Address"
                />
                <button className="sign-up btn btn-dark w-100">SIGN UP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
