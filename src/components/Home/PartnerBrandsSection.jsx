import p1 from "../../assets/Images/p1.webp";
import p2 from "../../assets/Images/p2.webp";
import p3 from "../../assets/Images/p3.png";
import p4 from "../../assets/Images/p4.png";
import p5 from "../../assets/Images/p5.png";
import p6 from "../../assets/Images/p6.jpg";
import p7 from "../../assets/Images/p7.webp";
import p8 from "../../assets/Images/p8.jpg";
import p9 from "../../assets/Images/p9.jpg";
import p10 from "../../assets/Images/p10.webp";
import "./PartnerBrandsSection.css"

export function PartnerBrand(){

    return(

        <>
        {/* <!-- partners section start here 3rd  --> */}
        <section>
                <div class="heading">
                     <h1 class="display-6 fw-medium text-center">We partner with 800+ leading fashion stores and brands</h1>
                </div>
                <div class="row"> /
                    <div class="col-12">
                        <div class="logo-slider mt-5">
                            <div class="logo-track">
                                <img src={p1} alt="p1" class="img-fluid" width="250px" />
                                <img src={p2} alt="p2" class="img-fluid" width="250px" />
                                <img src={p3} alt="p3" class="img-fluid" width="250px" />
                                <img src={p4} alt="" class="img-fluid" width="100px" />
                                <img src={p5} alt="" class="img-fluid" width="250px" />
                                <img src={p1} alt="" class="img-fluid" width="250px" />
                                <img src={p2} alt="" class="img-fluid" width="250px" />
                                <img src={p3} alt="" class="img-fluid" width="250px" />
                                <img src={p4} alt="" class="img-fluid" width="100px" />
                                <img src={p5} alt="" class="img-fluid" width="250px" />
                            </div>
                        </div>
                        <div class="logo-slider my-5">
                            <div class="logo-track2">
                                <img src={p6} alt="p6" class="img-fluid" width="250px" />
                                <img src={p7} alt="p2" class="img-fluid" width="250px" />
                                <img src={p8} alt="p3" class="img-fluid" width="250px" />
                                <img src={p9} alt="" class="img-fluid" width="100px" />
                                <img src={p10} alt="" class="img-fluid" width="250px" />
                                <img src={p6} alt="" class="img-fluid" width="250px" />
                                <img src={p7} alt="" class="img-fluid" width="250px" />
                                <img src={p8} alt="" class="img-fluid" width="250px" />
                                <img src={p9} alt="" class="img-fluid" width="100px" />
                                <img src={p10} alt="" class="img-fluid" width="250px" />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>

    )

}