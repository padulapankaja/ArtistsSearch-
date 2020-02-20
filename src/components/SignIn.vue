<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin" action=""  method="post"   v-on:submit.prevent="login" >
              <div class="row mb-4">
                  <div class="col-md-3">
                      <label> Email </label>
                  </div>
                  <div class="col-md-9">

                <div class="form-label-group ">
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control pl-4"
                    placeholder="Email address"
                    required
                    autofocus v-model="formdata.email"
                  />
                </div>
                  </div>
                    <div class="col-md-3">
                      <label> Password </label>
                  </div>
                  <div  class="col-md-6"> 
                <div class="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control pl-4"
                    placeholder="Password"
                    required  v-model="formdata.password"
                  />
                </div>
                
                </div>
                <div class="col-md-3" style="">
                  <button type="button" class="btn btn-sm btn_view_show" id="viewPassword" @mousedown="ViewPassword" @mouseup="HidePassword">  Show</button>
                   </div>
                  
              </div>
              <center>
                <button
                  class="btn btn-sm btn-primary btn-block text-uppercase"
                  type="submit"
                  style="padding:5px; width:100px;" 
                 v-on:click="login">
                  Sign in
                </button>
              </center>
              <hr class="my-4" />
             <router-link to="/signup" class="float-right text-white ">Create Account</router-link>  
 
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      title: "Form lOGIN",
      formdata: [],
      email : "",
      password: ""
      
    };
  },


methods:{
  ViewPassword(){
                  console.log(event);
 
        document.getElementById('inputPassword').type = 'text';

  },
  HidePassword(){
                  console.log(event);
 
        document.getElementById('inputPassword').type = 'password';

  },
    login(e){
         e.preventDefault();

        var  username = this.formdata.email;
        var password =this.formdata.password;



        console.log("User name : " +username);
        console.log("Password : " +password);
        
        if(username == "" || password == ""){
          alert("Empty not allow");
        }


           axios
        .post("http://localhost:9000/users/login", {username, password})
        .then(response => {

      console.log(response.data);

          if(response.data == "User Not Found"){
          
          console.log("User not found ---------------------------");
          alert("Invalid User Name or PassWord");

            this.formdata.email ="";
           this.formdata.password="";
            

          }
          else{
            console.log("User  found ---------------------------------");
              window.location.replace("#/home");
          }
       
     
        })
        .catch(function(error) {
          console.log(error);
        });
  

     


       

  }
}

    
};
</script>

<style scoped>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062e6, #33aeff);
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}
.btn_view_show{
  height: 10px;
  margin: 0px !important;
  padding: 0px !important ;
  transform: translateY(-5px);
  text-align: left;
  
}
/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
