import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Row, Col } from "react-bootstrap";

import Wysiwyg2 from "../components/Write/Wysiwyg2";

const CommentWrite = ({ postId, post }) => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row className="mt-5">
          <Col md="2" className="text-end">
            이름
          </Col>
          <Col md="10">{user.name}</Col>
          <Col md="2" className="mt-3 text-end">
            내용
          </Col>
          <Col md="10" className="mt-3 comment-wysiwyg">
            <Wysiwyg2 content={comment} setContent={setComment} />
          </Col>
        </Row>
        <div className="text-center mt-5">
          <button type="submit" className="btn btn-primary">
            저장
          </button>
        </div>
      </form>
    </Container>
  );
};

export default CommentWrite;
