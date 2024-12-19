import React, { useState, useEffect, useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import CommentWrite from "./CommentWrite";
import Login from "./Login";
import axios from "axios";

const View = () => {
  const { post } = useParams();
  const [data, setData] = useState();
  const [comments, setComments] = useState([]);
  const { isAuthenticated, user, login, logout } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/posts/${post}`)
      .then((res) => {
        setData(res.data);
        console.dir(res.data);
      })
      .catch((error) => console.error(error));
  }, [post]);

  useEffect(() => {
    //data가 로드 완료된 후
    if (data && data.id) {
      axios
        .get(`http://localhost:8080/api/posts/comment/${data.id}`)
        .then((res) => {
          setComments(res.data);
          console.dir(res.data);
        })
        .catch((error) => console.error(error));
    }
  }, [data]);

  if (!data) {
    return <p>로딩중 ... </p>;
  }

  return (
    <Container>
      <h3>{data.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
      <hr className="my-5" />
      <ListGroup>
        {comments.map((ct, index) => (
          <ListGroup.Item key={index}>
            {ct.comment} [{ct.username}]
            <br />
            {ct.createDate}
            {ct.useremail === user.email ? "삭제버튼" : ""}
          </ListGroup.Item>
        ))}
      </ListGroup>
      {isAuthenticated ? (
        <CommentWrite postId={data.id} post={post} />
      ) : (
        <Login />
      )}
    </Container>
  );
};

export default View;
