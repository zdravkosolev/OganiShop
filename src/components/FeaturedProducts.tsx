import Link from "next/link";
import React from "react";
import Product from "./Product";
import { ProductType } from "../types/homepage";

interface Props {
  data: ProductType[];
}

const FeaturedProducts: React.FC<Props> = ({ data }) => {
  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* list the products here */}
          {data.map((prod) => {
            return <Product key={prod.id} {...prod} />;
          })}
        </div>

        <div className="row">
          <div className="col text-center">
            <Link href="/shop">
              <a className="primary-btn">See all</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
