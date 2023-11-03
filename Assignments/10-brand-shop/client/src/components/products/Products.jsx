import { useLoaderData } from "react-router-dom";
import NoProductsFound from "./NoProductsFound";
import ProductFound from "./ProductFound";
import SwiperSliders from "./SwiperSliders";

export default function Products() {
  const brandProducts = useLoaderData();

  return (
    <section>
      <SwiperSliders />
      {brandProducts.length ? (
        <ProductFound products={brandProducts} />
      ) : (
        <NoProductsFound />
      )}
    </section>
  );
}
