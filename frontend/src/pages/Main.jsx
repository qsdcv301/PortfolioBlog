import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { format } from "date-fns";
import { boxShadow, padding16, borders } from "../style/style";
import Banner from "../components/Banner";

import axios from "axios";

const Main = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  //이미지 태그 제거 함수
  const removeImgTags = (content) => {
    return content.replace(/<img[^>]*>/g, "");
  };

  /*
  yyyy 연도, MM월, dd 일, EEEE 요일, a(오전/오후)  h:m (시간,분)
  */
  const formatDate = (dt) => {
    const date = new Date(dt);
    return format(date, "yyyy년 MM월 dd일 a h:m");
  };

  return (
    <Container style={{ ...boxShadow, ...padding16, ...borders }}>
      <Banner />
      <Row className="mt-4">
        {posts.map((post, index) =>
          index === 0 ? (
            <Col md="12" key={index}>
              {post.firstImg && (
                <Image
                  src={`upload/images/${post.ntime}/${post.firstImg}`}
                  fluid
                  alt={post.title}
                  className="post-img"
                />
              )}
              <div className="post-text-box">
                <h3>{post.title}</h3>
                <div className="post-event">
                  <span className="bold mx-2"></span>
                  <span className="bold text-danger mx-2"></span>
                  <span className="ps-4">{post.createDate}</span>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: removeImgTags(post.content),
                  }}
                />
              </div>
            </Col>
          ) : (
            <Col md="6" key={index}>
              {post.firstImg && (
                <Image
                  src={`upload/images/${post.ntime}/${post.firstImg}`}
                  fluid
                  alt={post.title}
                  className="post-img2"
                />
              )}
              <div className="post-text-box2">
                <h3>{post.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: removeImgTags(post.content),
                  }}
                />
              </div>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default Main;
