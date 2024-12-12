import React from "react";

const Post = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {/* Start blog left */}
          <div className="col-lg-8 col-md-12 sm-margin-50px-bottom">
            {["blog-1", "blog-2", "blog-3", "blog-4"].map((blog, index) => (
              <div className="margin-40px-bottom" key={index}>
                <img src={`img/blog/${blog}.jpg`} alt="..." />
                <div className="padding-30px-top padding-50px-lr xs-no-padding-lr">
                  <span className="text-extra-dark-gray font-size14">
                    <span className="font-weight-600">By:</span>
                    <a href="#" className="border-bottom">
                      Author Name
                    </a>
                    <span className="font-weight-600">, at </span>
                    <a href="#" className="border-bottom">
                      Date
                    </a>
                  </span>
                  <h5 className="margin-15px-top font-weight-600">
                    <a
                      href="standard-post.html"
                      className="text-extra-dark-gray"
                    >
                      Post Title
                    </a>
                  </h5>
                  <p>Short description of the post content.</p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="standard-post.html" className="btn-blog">
                        Read More
                      </a>
                    </div>
                    <div>
                      <ul className="social-links no-margin-bottom">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* End blog left */}

          {/* Start blog right */}
          <div className="col-lg-4 col-md-12">
            <div className="side-bar padding-30px-left md-no-padding-left">
              {/* Search Widget */}
              <div className="widget search padding-30px-all md-padding-20px-all shadow-theme">
                <div className="widget-title margin-35px-bottom">
                  <h3>Search</h3>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type here..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <span className="ti-search"></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="widget padding-30px-all md-padding-20px-all shadow-theme">
                <div className="widget-title margin-35px-bottom">
                  <h3>Categories</h3>
                </div>
                <ul className="widget-list no-margin-bottom">
                  {[
                    "Entertainment",
                    "Business",
                    "Adventure",
                    "Decorating",
                    "Travelling",
                    "Shopping",
                  ].map((category, index) => (
                    <li key={index}>
                      <a href="#">{category}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="widget padding-30px-all md-padding-20px-all shadow-theme">
                <div className="widget-title margin-35px-bottom">
                  <h3>Recent Posts</h3>
                </div>
                {["blog-6", "blog-7", "blog-8", "blog-5"].map(
                  (recentBlog, index) => (
                    <div className="media margin-20px-bottom" key={index}>
                      <img
                        src={`img/blog/${recentBlog}.jpg`}
                        className="mr-4"
                        alt=""
                      />
                      <div className="media-body">
                        <h5 className="no-margin-top margin-5px-bottom font-size15 font-weight-500">
                          <a href="#" className="text-extra-dark-gray">
                            Post Title
                          </a>
                        </h5>
                        <span className="font-size14">Post Date</span>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Tags Widget */}
              <div className="widget padding-30px-all md-padding-20px-all shadow-theme">
                <div className="widget-title margin-35px-bottom">
                  <h3>Tags</h3>
                </div>
                <ul className="tags no-margin-bottom">
                  {[
                    "Lifestyle",
                    "Food",
                    "Kids",
                    "Fashion",
                    "Travel",
                    "DIY",
                    "Music",
                    "Crafts",
                    "Business",
                    "Career",
                  ].map((tag, index) => (
                    <li key={index}>
                      <a href="javascript:void(0)">{tag}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* End blog right */}
        </div>
      </div>
    </section>
  );
};

export default Post;
