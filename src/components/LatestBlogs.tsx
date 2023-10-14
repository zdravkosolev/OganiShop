import React from "react";
import { BlogType } from "../types/homepage";

interface Props {
  data: BlogType[];
}

const LatestBlogs: React.FC<Props> = ({ data }) => {
  return (
    <section className="from-blog spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title from-blog__title">
              <h2>From The Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* blog card - list all here */}
          {data.map((blog) => {
            return (
              <div key={blog.id} className="col-lg-4 col-md-4 col-sm-6">
                <a href="#" className="blog__item">
                  <div className="blog__item__pic">
                    <img src={`${blog.image}`} alt="" height={300} />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o"></i> {blog.published}
                      </li>
                    </ul>
                    <h5>{blog.title}</h5>
                    <p>{blog.excerpt}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
