import Link from "next/link";
import React from "react";
import { HomepageType, ProductCategory } from "../types/homepage";
import { useRouter } from "next/router";

interface Props {
  data: HomepageType;
  productCategories: ProductCategory[];
}

const HeroSection: React.FC<Props> = ({ data, productCategories }) => {
  const router = useRouter();
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars"></i>
                <span>All departments</span>
              </div>
              <div className="py-3">
                {/* list all categories here */}
                {productCategories.map((cat) => {
                  return (
                    <div
                      key={cat.slug}
                      className="sidebar__item__size"
                      onClick={() => {
                        router.push({
                          pathname: "/shop",
                          query: {
                            category: cat.slug,
                          },
                        });
                      }}
                    >
                      <button>{cat.name}</button>
                    </div>
                  );
                })}

                {/* !! */}
              </div>
              {/* fill out this one */}
              <p className="mt-3">{data.departmentInfo}</p>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__item set-bg">
              <div className="hero__text w-50">
                {/* fill out these */}
                <span>{data.heroSection.preTitle}</span>
                <h2>{data.heroSection.title}</h2>
                <p>{data.heroSection.desc}</p>
                {/* !! */}
                <Link href="/shop">
                  <a className="primary-btn">SHOP NOW</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
