import img from "../../assets/Images/a1.jpeg";
import img2 from "../../assets/Images/a2.jpeg";
import img3 from "../../assets/Images/a3.jpeg";
import img4 from "../../assets/Images/a4.jpeg";
import img5 from "../../assets/Images/a5.jpeg";
import img6 from "../../assets/Images/a6.jpeg";
import "./TrendingCollections.css"

export function TrendingCollection(){

    return(

        <section class="m-0">
            <div class="heading">
                <h2 class="my-4 text-center">Best offers from our partners</h2>
            </div>

            {/* <!-- Buttons Top-Right --> */}
            <div class="top-controls text-end mb-2">
                <a type="button" data-bs-target="#next" data-bs-slide="prev" class="mx-1">
                    <i class="ri-arrow-left-s-line"></i>
                </a>
                <a type="button" data-bs-target="#next" data-bs-slide="next" class=" mx-1">
                    <i class="ri-arrow-right-s-line"></i>
                </a>
            </div>

            {/* <!-- Carousel --> */}
            <div id="next" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">

                    {/* <!-- Slide 1 --> */}
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-lg-4 p-0 border border-2 border-black">
                                <div class="testimonial-card1">
                                    <img src={img} alt="a1" />
                                    <div class="info-sec ms-4">
                                        <h5 class="my-3">POPETTES ST BARTH</h5>
                                        <p>Resort 26 Collection: Exclusive pieces that capture the spirit of Poupette St Barth.</p>
                                        <a href="javascript:void(0)" class="text-dark">Shop at Popette St Barth</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 p-0 border border-2 border-black">
                                <div class="testimonial-card1">
                                    <img src={img2} alt="a2" />
                                    <div class="info-sec ms-4">
                                        <h5 class="my-3">DIESEL</h5>
                                        <p>up to 30% off</p>
                                        <a href="javascript:void(0)" class="text-dark">Shop at Popette St Barth</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 p-0 border border-2 border-black">
                                <div class="testimonial-card1">
                                    <img src={img3} alt="a3" />
                                    <div class="info-sec ms-4">
                                        <h5 class="my-3">REVOLVE</h5>
                                        <p>Up to 65% off top designers styles</p>
                                        <a href="javascript:void(0)" class="text-dark">Shop at Popette St Barth</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Slide 2 --> */}
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg-4 p-0 border border-2 border-black">
                                <div class="testimonial-card1">
                                    <img src={img4} alt="a4" />
                                    <div class="info-sec ms-4">
                                        <h5 class="my-3">SHOPBOP</h5>
                                        <p>Always discover something new with free shipping and retuma</p>
                                        <a href="javascript:void(0)" class="text-dark">Shop at Popette St Barth</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 p-0 border border-2 border-black">
                                <div class="testimonial-card1">
                                    <img src={img5} alt="a5" />
                                    <div class="info-sec ms-4">
                                        <h5 class="my-3">FARFETCH</h5>
                                        <p>Fresh picks from the world's best brands and boutiques.</p>
                                        <a href="javascript:void(0)" class="text-dark">Shop at Popette St Barth</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 p-0 border border-2 border-black">
                                <div class="testimonial-card1">
                                    <img src={img6} alt="a6" />
                                    <div class="info-sec ms-4">
                                        <h5 class="my-3">NEIMAN MARCUS</h5>
                                        <p>15% off your first order when you sign up for their newsletters.</p>
                                        <a href="javascript:void(0)" class="text-dark">Shop at Popette St Barth</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )

}