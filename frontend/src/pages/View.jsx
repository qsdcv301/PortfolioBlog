import React, { useState, useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import KakaoLoginButton from '../components/KakaoLoginButton'
import { useAuthValue } from '../context/AuthContext'

const View = () => {
  const { post } = useParams();  
  const { isLogged, userAuth, role, logout, login } = useAuthValue();
  const [ data, setData ] = useState();

  useEffect(()=>{
     axios.get(`http://localhost:8080/api/posts/${post}`)
          .then(res => { setData(res.data)})
          .catch(error => console.error(error));
  }, [post]);

  if(!data) {
    return <p>로딩중 ... </p>
  }

  return (
    <Container>
       <h3>{data.title}</h3>
       <div dangerouslySetInnerHTML={{__html:data.content}} />
       <br />
       {!isLogged ? (
            <div className="loginbutton">
                <KakaoLoginButton />
            </div>
       ):(
          <>
          <h4>{userAuth?.name || '사용자'}님 반값습니다.</h4>
              {role === 'admin' && <p>관리자로 로그인 중</p>}
          </>
          )
       }
    </Container>    
  )
}

export default View