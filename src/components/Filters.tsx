import React, { useState } from "react";
import { ProductCategory, ProductSize } from "../types/homepage";
import { useRouter } from "next/router";

interface Props {
  categories: ProductCategory[];
  sizes: ProductSize[];
}

const Filters: React.FC<Props> = ({ categories, sizes }) => {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <h4>Department</h4>
        {/* show this button if there is a category filter selected to remove it */}
        {router.query.category && (
          <div className="mb-3">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                delete router.query.category;

                router.push({
                  href: "/shop",
                  query: {
                    ...router.query,
                  },
                });
              }}
            >
              Clear filter <span className="ml-1">&#10005;</span>
            </button>
          </div>
        )}
        {categories.map((category) => {
          return (
            <div
              key={category.slug}
              className="sidebar__item__size"
              onClick={() => {
                router.push({
                  href: "/shop",
                  query: {
                    ...router.query,
                    category: category.slug,
                  },
                });
              }}
            >
              {/* toggle the active class here */}
              <label
                className={
                  router.query.category === category.slug ? "active" : ""
                }
              >
                {category.name}
                <input type="radio" name="product-categories" />
              </label>
            </div>
          );
        })}
      </div>
      <div className="sidebar__item">
        <h4>Popular Size</h4>
        {/* show this button if there is a size filter selected to remove it */}
        {router.query.size && (
          <div className="mb-3">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                delete router.query.size;

                router.push({
                  href: "/shop",
                  query: {
                    ...router.query,
                  },
                });
              }}
            >
              Clear filter <span className="ml-1">&#10005;</span>
            </button>
          </div>
        )}
        {sizes.map((size) => {
          return (
            <div
              key={size.slug}
              className="sidebar__item__size"
              onClick={() => {
                router.push({
                  href: "/shop",
                  query: {
                    ...router.query,
                    size: size.slug,
                  },
                });
              }}
            >
              {/* toggle the active class here */}
              <label
                className={router.query.size === size.slug ? "active" : ""}
              >
                {size.name}
                <input type="radio" name="product-sizes" />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
