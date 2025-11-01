import img1 from "../../assets/Images/imgback.svg";
import "./AppPromotionSection.css"


export function AppPromotion(){

    return(

        <section class=" border-bottom-0">
            <div class="container">
                <div class="heading">
                    <h1 class="text-center display-5">More ways to shop</h1>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="info-shop my-5">
                            <h3 class="text-uppercase mt-5">Browser extension</h3>
                            <p class="text-secondary lh-2 fs-5 " >Found something you love? Use the ModeSens extension to <br/>instantly compare prices across 800+ partner stores.</p>
                            <a href="javascript:void(0)" class="btn btn-outline-dark fw-medium">ADD TO CHROME</a>
                        </div>
                        <div class="info-shop my-5">
                            <h3 class="text-uppercase mt-5">Modesens app</h3>
                            <p class="text-secondary lh-2 fs-5 " >Shopping on the go? Use our app to compare prices anytime,<br/> anywhere — just share the product to ModeSens</p>
                            <a href="javascript:void(0)" class="btn btn-outline-dark fw-medium">GET THE APP</a>
                        </div>
                        
                        
                    </div>
                    <div class="col-lg-6">
                        <img src={img1} alt="" class="img-fluid mt-5" width="600px" />
                    </div>
                </div>
            </div>
        </section>

    )

}