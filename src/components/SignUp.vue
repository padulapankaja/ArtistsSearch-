<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-10 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>

            <form
              class="form-signin"
              method="post"
              action=""
              v-on:submit.prevent="register"
            >
              <div class="row mb-4">
                <div class="col-md-2">
                  <label> First Name </label>
                </div>
                <div class="col-md-4">
                  <div class="form-label-group ">
                    <input
                      type="text"
                      id="inputEmail"
                      class="form-control pl-4"
                      placeholder="Email address"
                      required
                      autofocus
                      v-model="formdata.fname"
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <label> Last Name </label>
                </div>
                <div class="col-md-4">
                  <div class="form-label-group ">
                    <input
                      type="text"
                      id="inputEmail"
                      class="form-control pl-4"
                      placeholder="Email address"
                      required
                      v-model="formdata.lname"
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <label> Email </label>
                </div>
                <div class="col-md-4">
                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputPassword"
                      class="form-control pl-4"
                      placeholder="Email"
                      required
                      v-model="formdata.email"
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <label> Tel </label>
                </div>
                <div class="col-md-4">
                  <div class="form-label-group">
                    <input
                      type="tel"
                      id=""
                      class="form-control pl-4"
                      placeholder=""
                      
                    
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <label> DOB </label>
                </div>
                <div class="col-md-4">
                  <div class="form-label-group ">
                    <input
                      type="date"
                      id="bday"
                      class="form-control pl-4"
                      placeholder="Email address"
                      required
                      v-model="formdata.dob"
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <label> Gender </label>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <select
                      class="custom-select"
                      style="border-radius:55px; height:28px; font-size:14px; margin:0px ; padding:0px 0px 0px 10px "
                      required
                      v-model="formdata.gender"
                    >
                      <option selected="" default>Open this select menu</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-2">
                  <label> Password </label>
                </div>
                <div class="col-md-4">
                  <div class="form-label-group ">
                    <input
                      type="password"
                      id="pwd"
                      class="form-control pl-4"
                      placeholder="password"
                      required
                      v-model="formdata.password"
                    />
                     <password v-model="formdata.password" v-bind:is-badge="true"  :strength-meter-only="true" :toggle="true" />
                  </div>
                </div>
                <div class="col-md-2">
                  <label> Confirm&nbsp;Password </label>
                </div>
                <div class="col-md-4">
                  <div class="form-label-group ">
                    <input
                      type="password"
                      id="conpwd"
                      class="form-control pl-4"
                      placeholder="Confirm password"
                      required
                      v-model="formdata.confirmpass"
                    />
                  </div>
                </div>
              </div>
              <center>
                <button
                  class="btn btn-sm btn-primary btn-block text-uppercase"
                  type="submit"
                  style="padding:10px; width:150px;"
                >
                  Sign Up
                </button>
              </center>
              <lable style="color:red">  {{ passwordText }} </lable>
              <hr class="my-4" />
              <router-link to="/login" class="float-right text-white "
                >Already have account</router-link
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
  import Password from 'vue-password-strength-meter';

export default {
  components: { Password 

    
  },
  data() {
    return {
    password: null,
      title: "Form Register",
      formdata: [],
      message: "",
      sucess: 0,
      passwordText : null,
    

    };
  },

  methods: {
    register(e) {

      var pas = this.formdata.password;
      var conpas = this.formdata.confirmpass;

      if(pas != conpas){

      this.passwordText  = "Password did not match";

        return false;
      }else{


      }
      


      e.preventDefault();

      const newuser = {
        fname: this.formdata.fname,
        lname: this.formdata.lname,
        email: this.formdata.email,
        dob: this.formdata.dob,
        gender: this.formdata.gender,
        password: this.formdata.password
      };
      console.log("this.newuser");
      console.log(newuser);
      console.log("this.newuser");
      axios
        .post("http://localhost:9000/users/regiser", newuser)
        .then(response => {
          window.location.replace("#/login");
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    showFeedback ({suggestions, warning}) {
        console.log('🙏', suggestions)
        console.log('⚠', warning)
      },
      showScore (score) {
        console.log('💯', score)
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
