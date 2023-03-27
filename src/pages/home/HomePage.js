import { useTitle } from "../../hooks/useTitle";
import { Faq } from "./component/Faq";
import { FeaturedProducts } from "./component/FeaturedProducts";
import {Hero} from "./component/Hero"
import { Testimonials } from "./component/Testimonials";

export const HomePage = () => {

useTitle("E-Books Home Page")

  return (
    <main >
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
