import React, {useState, useEffect} from 'react'
import {Container, Image} forom 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {
    const {post} = useParams();
    const [data, setData] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/posts/${post}`)
        .then(res => {setData(res.data)})
        .catch(error => console.error(error));
    }, [post]);

    if(!data){
        return <p>로딩중 ...</p>
    }
    
  return (
    <Container>
        {post}</Container>
  )
}

export default View