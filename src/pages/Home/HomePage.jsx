import { AppPromotion } from "../../components/Home/AppPromotionSection";
import Footer from "../../components/Footer/Footer";
import { HeroBanner } from "../../components/Home/HeroBanner"; // verify exact case
import { ImageSearch } from "../../components/Home/ImageSearchSection";
import { JoinModesens } from "../../components/Home/Join-Modesens";
import { PartnerBrand } from "../../components/Home/PartnerBrandsSection";
import { ProductCart } from "../../components/Home/ProductCart";
import { ShopbyDesigner } from "../../components/Home/ShopByDesigner";
import { Testimonial } from "../../components/Home/TestimonialsSection";
import { TopSearches } from "../../components/Home/TopSearchesSection";
import { TrendingCollection } from "../../components/Home/TrendingCollections";
import Navbar from "../../components/Navbar/navbar";


function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ImageSearch />
      <PartnerBrand />
      <Testimonial />
      <ProductCart />
      <ShopbyDesigner />
      <TrendingCollection />
      <TopSearches />
      <AppPromotion />
      <JoinModesens />
      <Footer />
    </>
  );
}

export default HomePage;
