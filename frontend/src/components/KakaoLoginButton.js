import React from 'react'
import KakaoLogin from 'react-kakao-login'


const KakaoLoginButton = () => {

   const kakaoOnSuccess = async (data) => {
      console.log(data);
      const idToken = data.response.access_token;
   } 
   const kakaoOnFailure = (error) => {
      console.log(error);
   }

  return (
    <>
       <KakaoLogin
           token={process.env.REACT_APP_KAKAO_CLIENT_ID}
           onSuccess={ kakaoOnSuccess}
           onFail={kakaoOnFailure}
       />    
    </>
  )
}

export default KakaoLoginButton