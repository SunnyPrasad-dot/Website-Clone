import 'remixicon/fonts/remixicon.css';

import "./TestimonialsSection.css"

export function Testimonial(){

    return(
        <>
        
        <section class="m-0">

                <div class="heading">
                    <h2 class="mb-5 text-center">You said it best</h2>
                </div>
                <div class="btn-con">
                    <div class="top-controls">
                        <a type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                            <i className="ri-arrow-left-s-line"></i>
                        </a>
                        <a type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                            <i className="ri-arrow-right-s-line"></i>
                        </a>
                    </div>
                </div>


                <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        {/* <!-- Slide 1 --> */}
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-lg-4 border border-2 border-black m-0">
                                    <div class="testimonial-card p-3 ">
                                        <div class="fs-4 text-start">
                                            <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
                                        </div>
                                        <h5 class="my-3">Great experience</h5>
                                        <p>The website and app are very customer friendly when it comes to navigating.</p>
                                        <h5 class="mt-5">LISA FEWER</h5>
                                    </div>
                                </div>
                                <div class="col-lg-4 border border-2 border-black m-0">
                                    <div class="testimonial-card p-3">
                                        <div class="fs-4 text-start">
                                            <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
                                        </div>
                                        <h5>Thankful</h5>
                                        <p>ModeSens is a must-have for fashion-forward shoppers who want to buy smart without sacrificing style. Its combination of powerful price comparisons, extensive brand coverage, and curated fashion discovery makes it feel like having a personal stylist and deal hunter rolled into one elegant tool.</p>
                                        <h5 class="mt-5">CPAW888</h5>
                                    </div>
                                </div>
                                <div class="col-lg-4 border border-2 border-black m-0">
                                    <div class="testimonial-card p-3">
                                        <div class="fs-4 text-start">
                                            <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
                                        </div>
                                        <h5>REALLY helpful</h5>
                                        <p>Found the scent I wanted at the best price.</p>
                                        <h5 class="mt-5">CELIA BERDES</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide 2 --> */}
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-lg-4 border border-2 border-black m-0">
                                    <div class="testimonial-card p-3">
                                        <div class="fs-4 text-start">
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <h5>Ill be back!!</h5>
                                        <p>I tried on the larger size at Nordy's Oak Brook, they had no small. Neither did online. I saw Modsens, ordered it, immediately heard back, easy order and received it in under a week. I'm a fan!</p>
                                        <h5 class="mt-5">Donna</h5>
                                    </div>
                                </div>
                                <div class="col-lg-4 border border-2 border-black m-0">
                                    <div class="testimonial-card p-3">
                                        <div class="fs-4 text-start">
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <h5>REALLY helpful</h5>
                                        <p>The website and app are very customer friendly when it comes to navigating.</p>
                                        <h5 class="mt-5">CELIA BERDES</h5>
                                    </div>
                                </div>
                               <div class="col-lg-4 border border-2 border-black m-0">
                                    <div class="testimonial-card p-3">
                                        <div class="fs-4 text-start">
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <h5>Thankful</h5>
                                        <p>ModeSens is a must-have for fashion-forward shoppers who want to buy smart without sacrificing style. Its combination of powerful price comparisons, extensive brand coverage, and curated fashion discovery makes it feel like having a personal stylist and deal hunter rolled into one elegant tool.</p>
                                        <h5 class="mt-5">CPAW888</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </section>

        </>
    )

}