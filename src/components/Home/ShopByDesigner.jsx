import img from "../../assets/Images/s1.png";
import img2 from "../../assets/Images/s2.png";
import img3 from "../../assets/Images/s3.png";
import "./ShopByDesigner.css"

export function ShopbyDesigner(){

    return(

         <section class="search-hero-section border border-2 border-black m-0">
            <div class="container-fluid">
                <div class="row">
                <div class="col-lg-8 p-0 position-relative">
                    <div id="bgCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img} class="d-block w-100 hero-img" alt="" />
                            </div>
                            <div class="carousel-item">
                                <img src={img2} class="d-block w-100 hero-img" alt="" />
                            </div>
                            <div class="carousel-item">
                                <img src={img3} class="d-block w-100 hero-img" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="search-box">
                        <h3>Have something in mind?</h3>
                        <h2>Search on ModeSens</h2>
                        <p>Search by text, image, or link to instantly compare prices</p>
                        <div class="search-input w-100 ">
                            <input type="text" placeholder="http://www.example.com/valentino" class="fs-3 p-3" />
                            <div class="icons">
                                <i class="ri-search-line fs-3"></i>
                                <i class="ri-link fs-3"></i>
                                <i class="ri-camera-line fs-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 p-5 right-box">
                    <i class="ri-arrow-right-up-long-line fs-3"></i>
                    <h5> Top Searches Right Now</h5>

                   <div class="tags">
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Coach</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Gucci</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Valentino</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Chloé</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Ferragamo</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Prada</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Shoes Sale</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Burberry</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Miu Miu</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Versace</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Balenciaga</a>

                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Coach</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Gucci</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Valentino</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Chloé</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Ferragamo</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Prada</a>
                        <a href="javascript:void(0)" class=" btn btn-outline-dark m-2">Shoes Sale</a>
                    </div>

                </div>

                </div>
            </div>
        </section>

    )

}