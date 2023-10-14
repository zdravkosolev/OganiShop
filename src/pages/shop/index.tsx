import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Breadcrumbs from "../../components/Breadcrumbs";
import Filters from "../../components/Filters";
import Product from "../../components/Product";
import {
  ProductCategory,
  ProductSize,
  ProductType,
} from "../../types/homepage";

interface Props {
  products: ProductType[];
  categories: ProductCategory[];
  sizes: ProductSize[];
}

const Shop: NextPage<Props> = ({ products, categories, sizes }) => {
  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>

      <Breadcrumbs title="Shop" />

      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <Filters categories={categories} sizes={sizes} />
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="row">
                {products.map((product) => {
                  return <Product key={product.id} {...product} />;
                })}

                {/* show this message if there are no results */}
                {/* <p>There are no products based on your filter.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const size = query.size;
  const category = query.category;

  let link: string;

  if (size && category) {
    link = `http://localhost:5001/products?size_like=${size}&type_like=${category}`;
  } else if (size) {
    link = `http://localhost:5001/products?size_like=${size}`;
  } else if (category) {
    link = `http://localhost:5001/products?type_like=${category}`;
  } else {
    link = "http://localhost:5001/products";
  }

  const res = await fetch(link);
  const products: ProductType[] = await res.json();

  const resCategories = await fetch("http://localhost:5001/productCategories");
  const categories: ProductCategory[] = await resCategories.json();

  const resSizes = await fetch("http://localhost:5001/productSizes");
  const sizes: ProductSize[] = await resSizes.json();

  return {
    props: { products, categories, sizes },
  };
};
