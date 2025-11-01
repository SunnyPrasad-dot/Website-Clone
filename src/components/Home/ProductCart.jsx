import "./ProductCart.css"

export function ProductCart(){

    return(
        <>
        
        <section class="m-0">
            {/* <!-- <div class="container"> --> */}
                <div class="row">
                    <div class="col-lg-6 m-0">
                        <img src="images/backimg.png" alt="image" class="img-fluid" width="100%" />
                    </div>
                    <div class="col-lg-6 m-0 bg-black">
                        <div class="heading text-start ms-5 mt-4">
                            <h1 class="display-5 lh-1 text-white">10,000+ shoppers <br/>found a better  deal <br/> with ModeSens  in <br/>the last 24 hours</h1>
                        </div>
                        <p class="text-start ms-5 mt-4 text-white fs-4 lh-1">Sign up to compare prices across 800+ <br/>vetted stores — all in one place.</p>
                        <a href="javascript:void(0)" class="md-btn text-center btn ms-5 mt-4">JOIN ModeSens</a>

                    </div>
                </div>
            
            </section>

        </>
    )

}