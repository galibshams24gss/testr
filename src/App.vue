<template>
<div id="app">
<div class="navbar navbar-expand-lg navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
      <div class="container">
      <a class="navbar-brand"><router-link to="/"><b>VPROJ</b></router-link></a>
        <button class="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item active" v-if="authUser">
              <a class="nav-link"><router-link to="/clients"><b>Data</b></router-link></a>
            </li>
            <li class="nav-item" v-if="authUser">
              <a class="nav-link"><router-link to="/add"><b>Insert</b></router-link></a>
            </li>
            <li class="nav-item" v-if="!authUser">
              <a class="nav-link"><router-link to="/signin"><b>SignIn</b></router-link></a>
            </li>
            <li class="nav-item" v-if="!authUser">
              <a class="nav-link"><router-link to="/signup"><b>SignUp</b></router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/about"><b>About</b></router-link></a>
            </li>
            <li class="nav-item" v-if="authUser">
              <a class="nav-link" @click="logout"><b>LogOut</b></a>
              <a class="nav-link"><router-link to="/signin"><b>{{authUser.identifier}}</b></router-link></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  <div class="container">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      authUser:null
    }
  },
  watch:{
    '$route':'setAuthUser'
  },
  methods:{
    setAuthUser(){
      this.authUser=firebase.auth().currentUser;
    },
    logout(){
      firebase.auth().signOut()
        .then(()=>{
          this.$router.replace('/signin')
        })
        .catch((e)=>{
          alert(e.message)
        })
    }
  },
  created(){
    this.setAuthUser();
    // this.authUser=firebase.auth().currentUser;
  }
}
</script>

<style>
</style>