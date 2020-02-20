<template>
  <div class="row">

    <div class=" col-md-6 " v-for="actor in resList" :key="actor.id">

      <div class="formCard mt-2 mb-2 pl-3 pt-2">
      <div class="row">
        <div  class="col-md-2">
          <img :src="actor.images[0].url" style="width: 60px; height:60px;"  />
         
        </div>
        <div  class="col-md-10 cardMusic">
              <label>   Name : </label> <h5> {{ actor.name }}</h5>
              
              <p> Popularity : {{ actor.popularity }}</p>
              <a href="https://www.google.com/" target="_blank">
              </a>
        </div>
        <div  class="col-md-6">
          <table>
            <tr>
              <td>
              <p>Type  : </p>
              </td>
              <td>
                <p>{{ actor.type }} </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Followers  : </p>
              </td>
              <td>
                  <p> {{ actor.followers.total }} </p>
              </td>
            </tr>
          </table>
           
             
              
              
              <a href="https://www.google.com/" target="_blank">
              </a>
        </div>
        <div  class="col-md-6">
             
              <p >Genres : <ul class="_list_type" style="width:100%;  ">
                <li  v-for="gen in actor.genres.slice(0,3)" :key="gen">
                  {{gen}} 
                </li>
              </ul></p>
              
             
        </div>

      <div class="col-md-12">
        <router-link to="/profile">
       <button type="button" class="btn btn-info mr-1 mb-1" style="float:right">View Profile</button>
        </router-link>

      </div>

      </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ["resList"],
  listgeners: []
};
</script>

<style  scoped>

.formCard{
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 5px #ffffff;
  box-shadow: 5px 5px 2px 1px rgba(110, 110, 110, 0.2);


}
.cardMusic .label{
  display: inline-block;

}
.cardMusic h5{
  display: inline-block;
  font-size: 15px;
  letter-spacing: 0.5px;
}
._list_type{

list-style: none;
margin-left: 0px;
padding-left: 15px;
}


</style>
