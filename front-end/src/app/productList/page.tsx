import ProductListItem from "@/components/ProductListItem/productListItem";
import IProduct from "@/Interfaces/Product";
import getProductsData from '../../../mock-tool/getProducts'


export default async function ProductList() {
  const productsArr = await getProductsData();

  if (!productsArr) return <p>No profile data</p>;
  return (
    <div className="p-20 ...">
      <div className="text-center pb-10...">
        <p className="text-sm ...">
          THE INNOVATION LEADER IN LUXURY VINYL PLANK
        </p>
        <h3 className="text-2xl pb-10 ...">Let's Get Started</h3>
      </div>
      <div className="grid gap-6 2xl:grid-cols-4 max-sm:grid-cols-1 ...">
        {productsArr.map((product: IProduct) => {
          return <ProductListItem product={product} />;
        })}
      </div>
    </div>
  );
}
