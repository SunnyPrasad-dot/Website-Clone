import i1 from "../../assets/Images/b1.svg";
import i2 from "../../assets/Images/b2.svg";
import i3 from "../../assets/Images/b3.svg";
import i4 from "../../assets/Images/b4.svg";
import i5 from "../../assets/Images/b5.svg";
import i6 from "../../assets/Images/b6.svg";
import i7 from "../../assets/Images/b7.svg";
import i8 from "../../assets/Images/b8.svg";
import i9 from "../../assets/Images/b9.svg";
import i10 from "../../assets/Images/b10.svg";
import i11 from "../../assets/Images/b11.svg";

import "./TopSearchesSection.css"

export function TopSearches(){

    return(

        <section class="category-section py-4">

            {/* <!-- 🔹 Top Categories (Big Icons) --> */}
            <div class="row text-center g-3 justify-content-center">

                <div class="col-6 col-sm-4 col-md-2">
                    <div class="cat-item">
                        <img src={i1} class="img-fluid" alt="" />
                        <a href="javascript:void(0)">WOMEN</a>
                    </div>
                </div>

                <div class="col-6 col-sm-4 col-md-2">
                    <div class="cat-item">
                        <img src={i2} class="img-fluid" alt="" />
                        <a href="javascript:void(0)">MEN</a>
                    </div>
                </div>

                <div class="col-6 col-sm-4 col-md-2">
                    <div class="cat-item">
                        <img src={i3} class="img-fluid" alt="" />
                        <a href="javascript:void(0)">KIDS</a>
                    </div>
                </div>

                <div class="col-6 col-sm-4 col-md-2">
                    <div class="cat-item">
                        <img src={i4} class="img-fluid" alt="" />
                        <a href="javascript:void(0)">BEAUTY</a>
                    </div>
                </div>

                <div class="col-6 col-sm-4 col-md-2">
                    <div class="cat-item">
                        <img src={i5} class="img-fluid" alt="" />
                        <a href="javascript:void(0)">HOME</a>
                    </div>
                </div>
            </div>

            {/* <!-- 🔹 Bottom Small Categories --> */}
            <div class="row text-center g-3 justify-content-center mt-4">

                <div class="col-4 col-sm-3 col-md-2">
                    <a href="javascript:void(0)" class="small-item d-block">
                        <img src={i6} class="img-fluid" alt="" />
                        <p>COTE</p>
                    </a>
                </div>

                <div class="col-4 col-sm-3 col-md-2">
                    <a href="javascript:void(0)" class="small-item d-block">
                        <img src={i7} class="img-fluid" alt="" />
                        <p>T-SHIRTS</p>
                    </a>
                </div>

                <div class="col-4 col-sm-3 col-md-2">
                    <a href="javascript:void(0)" class="small-item d-block">
                        <img src={i10} class="img-fluid" alt="" />
                        <p>TRADITIONAL</p>
                    </a>
                </div>

                <div class="col-4 col-sm-3 col-md-2">
                    <a href="javascript:void(0)" class="small-item d-block">
                        <img src={i9} class="img-fluid" alt="" />
                        <p>BAG</p>
                    </a>
                </div>

                <div class="col-4 col-sm-3 col-md-2">
                    <a href="javascript:void(0)" class="small-item d-block">
                        <img src={i8} class="img-fluid" alt="" />
                        <p>HILL</p>
                    </a>
                </div>

                <div class="col-4 col-sm-3 col-md-2">
                    <a href="javascript:void(0)" class="small-item d-block">
                        <img src={i11} class="img-fluid" alt="" />
                        <p>SALE</p>
                    </a>
                </div>
            </div>

        </section>

    )

}