import React from "react";
import { ProductType } from "../types/homepage";
import Link from "next/link";

const Product: React.FC<ProductType> = (product) => {
  return (
    <Link href={`/shop/${product.id}`}>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="product__item">
          <div className="product__item__pic">
            {/* fill out the correct url */}
            <img src={`/img/products/${product.filename}`} alt="" />

            <ul className="product__item__pic__hover">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-retweet"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* fill out these */}
          <a className="product__item__text d-block">
            <h6>{product.title}</h6>
            <h5>${product.price}</h5>
          </a>
        </div>
      </div>
    </Link>
  );
};

export default Product;
