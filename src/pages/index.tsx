import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/HeroSection";
import LatestBlogs from "../components/LatestBlogs";
import {
  BlogType,
  ProductType,
  HomepageType,
  ProductCategory,
} from "../types/homepage";

interface Props {
  homepageData: HomepageType;
  productCategories: ProductCategory[];
  featuredProducts: ProductType[];
  blogs: BlogType[];
}

const Home: NextPage<Props> = ({
  homepageData,
  productCategories,
  featuredProducts,
  blogs,
}) => {
  return (
    <div>
      <Head>
        <title>OganiShop</title>
      </Head>

      <HeroSection data={homepageData} productCategories={productCategories} />

      <FeaturedProducts data={featuredProducts} />

      <LatestBlogs data={blogs} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/homepage");
  const homepageData: HomepageType = await res.json();

  const resProdCat = await fetch("http://localhost:5001/productCategories");
  const productCategories: ProductCategory[] = await resProdCat.json();

  const resFeaturedProd = await fetch(
    "http://localhost:5001/products?_start=1&_limit=4"
  );
  const featuredProducts: ProductType[] = await resFeaturedProd.json();

  const resBlogs = await fetch("http://localhost:5001/blogs");
  const blogs: BlogType[] = await resBlogs.json();

  return {
    props: {
      homepageData,
      productCategories,
      featuredProducts,
      blogs,
    },
  };
};
