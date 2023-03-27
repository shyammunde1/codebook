import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ProductCard } from "../../../component";
import { getFeatureProductList } from "../../../services";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  //const [show,setShow] =useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeatureProductList();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};