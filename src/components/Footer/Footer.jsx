import i1 from "../../assets/Images/logo2.svg";
import "./Footer.css"


export default function Footer(){

    return(
       <>
        <footer class="bg-white py-5">
        <div class="container">
            <div class="row gy-4">

                {/* <!-- Logo + Customer Care --> */}
                <div class="col-12 col-md-3">
                    <div class="mb-3">
                        <img src={i1} alt="Logo" width="18px"/>
                    </div>
                    <h6 class="fw-bold">CUSTOMER CARE</h6>
                    <ul class="list-unstyled footer-links">
                        <li><a href="javascript:void(0)">Shopper Protection</a></li>
                        <li><a href="javascript:void(0)">Loyalty Program</a></li>
                        <li><a href="javascript:void(0)">Help Center</a></li>
                        <li><a href="javascript:void(0)">Size Guides</a></li>
                        <li><a href="javascript:void(0)">Contact Us / Feedback</a></li>
                        <li><a href="javascript:void(0)">Shipping / Returns</a></li>
                    </ul>
                </div>

                {/* <!-- Information --> */}
                <div class="col-6 col-md-2">
                    <h6 class="fw-bold">INFORMATION</h6>
                    <ul class="list-unstyled footer-links">
                        <li><a href="javascript:void(0)">About Us</a></li>
                        <li><a href="javascript:void(0)">Ambassador Program</a></li>
                        <li><a href="javascript:void(0)">Partner Stores</a></li>
                        <li><a href="javascript:void(0)">Sitemap</a></li>
                        <li><a href="javascript:void(0)">Trend Report</a></li>
                    </ul>
                </div>

                {/* <!-- Legal --> */}
                <div class="col-6 col-md-2">
                    <h6 class="fw-bold">LEGAL</h6>
                    <ul class="list-unstyled footer-links">
                        <li><a href="javascript:void(0)">Terms Of Use</a></li>
                        <li><a href="javascript:void(0)">Disclosure</a></li>
                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                        <li><a href="javascript:void(0)">Community Guidelines</a></li>
                    </ul>
                </div>

                {/* <!-- International --> */}
                <div class="col-6 col-md-2">
                    <h6 class="fw-bold">INTERNATIONAL</h6>
                    <ul class="list-unstyled footer-links">
                        <li><a href="javascript:void(0)">ModeSens</a></li>
                        <li><a href="javascript:void(0)">China (中国大陆)</a></li>
                        <li><a href="javascript:void(0)">United Kingdom</a></li>
                    </ul>
                </div>

                {/* <!-- Connect With Us --> */}
                <div class="col-6 col-md-3">
                    <h6 class="fw-bold">CONNECT WITH US</h6>
                    <ul class="list-unstyled footer-links">
                        <li><i class="ri-apple-line"></i> <a href="javascript:void(0)">Download iOS App</a></li>
                        <li><i class="ri-android-line"></i> <a href="javascript:void(0)">Download Android App</a></li>
                        <li><i class="ri-chrome-line"></i> <a href="javascript:void(0)">Chrome Extension</a></li>
                    </ul>
                </div>
            </div>

            {/* <!-- Newsletter --> */}
            <div class="row mt-5">
                <div class="col-md-6">
                    <h6 class="fw-bold">DON'T MISS OUT</h6>
                    <p>Sign up for price alerts on your <br/> favorite items—never miss a sale or <br/> special promo code again.</p>

                    <div class="mb-3">
                        <input type="radio" id="womens" name="gender" /> <label for="womens">Women's</label>
                        <input type="radio" id="mens" name="gender" class="ms-3" /> <label for="mens">Men's</label>
                    </div>

                    <div class="w-50">
                        <input type="email" class="form-control rounded-2 my-2" placeholder="Email Address" />
                        <button class="sign-up btn btn-dark w-100">SIGN UP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      
      </> 
    )

}