import img1 from "../../assets/Images/vframe.png"
import img2 from "../../assets/Images/2ndvframe.png"

import "./ImageSearchSection.css"

export function ImageSearch(){

    return(

       <section class="pb-5">
            <div class="container">
                <div class="option-con my-5">
                    <ul class="rounded nav nav-pills list-unstyled justify-content-center bg-body-secondary">
                        <li class="nav-item"><a href="javascript:void(0)" class="nav-link text-decoration-none m-2 text-dark btn rounded border active" data-bs-target="#image" data-bs-toggle="tab"><i class="ri-camera-line me-1 fs-5"></i>IMAGE SEARCH</a></li>
                        <li class="nav-item"><a href="javascript:void(0)" class="nav-link text-decoration-none text-dark m-2 btn rounded border" data-bs-target="#URL" data-bs-toggle="tab"><i class="ri-link me-1 fs-5"></i>URL SEARCH</a></li>
                    </ul>
                </div>
                <div class="tab contant">
                    <div class="tab-pane collapse fade show " id="image">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="img-con">
                                    <img src={img1} class="img-fluid" alt="image" width="600px" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="img-info text-center">
                                    <h1 class="display-5 lh-1">Upload a photo to find exact or similar products</h1>
                                    <p class="text-secondary fs-3 lh-1 ms-4">See a look you love? Screenshot it and share to ModeSens to get the best price.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade collapse" id="URL">
                        <div class="row">
                            <div class="col-lg-6">
                                 <div class="img-info text-center">
                                    <h1 class="display-5 lh-1 text-start ms-0">Share the product or image link, see the best price</h1>
                                    <p class="text-secondary text-start fs-5 mt-4">When you see a style you like on a partner store’s site or app, share it to the ModeSens app to find the best price.</p>
                                </div>   
                            </div>
                            <div class="col-lg-6">
                               <div class="img-con">
                                    <img src={img2} class="img-fluid" alt="image" width="600px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}