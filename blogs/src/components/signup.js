import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import './signup.scss'

 function SignUp() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));
  const [state,setState] = useState({
    UserName:"",
    Email : "",
    Password : "",
    Mobile : ""
})
//

const handleChange = (e) => {
  const {id , value} = e.target   
  setState(prevState => ({
      ...prevState,
      [id] : value
  }))
}

  return (
<div id="form1" class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
      <h2>Registration Form</h2>
    </div>

    <div class="row clearfix">
      <div class="">
    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
            <input type="email" name="email" placeholder="Email" required    {...register("Email")}/>
    </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
     
        
      <input type="Password" 
                
                id="Password" 
                placeholder="Password"
                value={state.Password}
                onChange={handleChange} 
            />
            </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
          
      <input {...register("Mobile")} placeholder="Mobile" />

      </div>
      <div class="row clearfix">
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" name="name" placeholder="First Name" />
              </div>
            </div>
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" name="name" placeholder="Last Name" required />
              </div>
            </div>
          </div>
            	<div class="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Female</label>
              </div>
              <div class="input_field select_option">
                <select>
                  <option>Select a country</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div class="select_arrow"></div>
              </div>
           
            
                     <p>{result}</p>
                     <input class="button" type="submit" value="Register" />
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default SignUp;