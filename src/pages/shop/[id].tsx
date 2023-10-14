import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Breadcrumbs from "../../components/Breadcrumbs";
import FeaturedProducts from "../../components/FeaturedProducts";
import { ProductType } from "../../types/homepage";

interface Props {
  product: ProductType;
  featuredProducts: ProductType[];
}

const ShopDetail: NextPage<Props> = ({ product, featuredProducts }) => {
  return (
    <div>
      <Head>
        <title>title</title>
      </Head>

      <Breadcrumbs title="Shop detail page" />

      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={`/img/products/${product.filename}`}
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{product.title}</h3>
                <div className="product__details__price">${product.price}</div>
                <p>{product.description}</p>
                <ul>
                  <li>
                    <b>Type</b> <span>{product.type}</span>
                  </li>
                  <li>
                    <b>Size</b> <span>{product.size}</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>{product.information}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts data={featuredProducts} />
    </div>
  );
};

export default ShopDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5001/products");
  const data: ProductType[] = await res.json();

  const paths = data.map((prod) => {
    return {
      params: {
        id: prod.id,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  if (id) {
    const res = await fetch(`http://localhost:5001/products/${id}`);
    const product: ProductType = await res.json();

    const resFeatured = await fetch(
      `http://localhost:5001/products?_start=1&_limit=4`
    );
    const featuredProducts: ProductType[] = await resFeatured.json();

    return {
      props: {
        product,
        featuredProducts,
      },
    };
  }

  return {
    notFound: true,
  };
};
