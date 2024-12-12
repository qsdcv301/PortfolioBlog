import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const SERVICE_ID = "서비스아이디";
  const TEMPLATE_ID = "템플릿아이디";
  const ADMIN_EMAIL = "내이메일";

  const [formData, setFormData] = useState({
     email: "",
     name: "",
     message: "",
     loading: false,
     show: false,
     alertmessage:"",
     variant: ""
  });
  
  const handleChange = (e) =>{
     setFormData({
       ...formData, 
       [e.target.name] : e.target.value
     });
  }
 
  const handleSubmit = (e) => {
      
    setFormData({ loading: true });
    const templateParams  = {
       from_name : formData.email, 
       user_name : formData.name,
       to_name : ADMIN_EMAIL,
       message : formData.message
    }
    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', templateParams, {
       publicKey: 'Your Public key'
    }).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          alertmessage: '전송되었습니다. 곧 연락드릴께요.' ,
          variant: 'success',
          show: true
        });
      },
      (error) => {
        console.log('FAILED...', error);
        setFormData({
          alertmessage: `전송에 실패했습니다. (${error})` ,
          variant: 'danger',
          show: true
        });
        document.getElementsByClassName('co-alert')[0].scrollIntoView();
      },
    );
  }

  return (
    <div>
       <Alert
          variant={formData.variant}
          className={ `rounded-0 co-alert ${
            formData.show? "d-block":"d-none"
          }`}
          onClose={()=>setFormData({show: false})}
          dismissible
       >
          <p className="my-0">{formData.alertmessage}</p>
       </Alert>
       <form onSubmit={handleSubmit}>
          <Form.Control type="text" 
                        name="name"
                        placeholder='이름'
                        className="mb-4 input-name"
                        onChange={handleChange}
                        value={formData.name||""}
                        required />

          <Form.Control type="email" 
                        name="email"
                        placeholder='이메일'
                        className="mb-4 input-email"
                        onChange={handleChange}
                        value={formData.email||""}
                        required />
            <Form.Control
              as="textarea"
              name="message"
              placeholder="메시지"
              style={{ height: '100px' }}
              value={formData.message||""}
              onChange={handleChange}
            />      
            <div className="text-center mt-4">
              <Button variant="secondary" className="px-5 me-4">취소</Button>
              <Button type="submit" variant="dark" className="px-5 ms-4">
                 {formData.loading ? "전송중..." : " 전송 "}  
              </Button>   
            </div>   
        </form>                  
    </div>
  )
}
export default ContactForm