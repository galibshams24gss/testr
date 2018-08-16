<template>
<div class="container">
<div class="row">
    <div class="col-md-12 jumbotron">
        <div class="text-center">
            <h2>Logon to Account</h2>
            <input type="email" v-model="formData.email" class="form-control" placeholder="Email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="Password">
            <br>
            <button type="button" class="btn btn-outline-light btn-lg" @click="signIn">SignIn</button>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'signin',
  data() {
    return {
        formData:{
                    email:'',
                    password:''
                }
    }
  },
  methods: {
            signIn(){
                firebase.auth().signInWithEmailAndPassword(this.formData.email,this.formData.password)
                    .then((user)=>{
                      this.$router.replace('/clients')
                    })
                    .catch((e)=>{
                        alert(e.message)
                    })
            }
        },
        created(){
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    margin-top: 0px;
    margin-bottom: 0px;
}

.btn-primary {
    background-color: rgb(76, 0, 255);
    border: 1px solid rgb(76, 0, 255);
}

.jumbotron{
    background-image: url("accbg.jpg");
    background-attachment: fixed;
    margin-top: 0px;
    margin-bottom: 0px;
    background-size: cover;
    width: 100%;
	height: 768px;
    top: 0px;
    bottom: 0px;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
}
</style>
