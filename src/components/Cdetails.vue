<template>
  <div class="container">
    <h3 class="page-header">{{client.first_name}} {{client.last_name}}</h3>
    <span>
    <router-link class="btn btn-primary" v-bind:to="'/clients'"><i class="material-icons">&#xe5c4;</i></router-link>
    <router-link class="btn btn-warning" v-bind:to="'/edit/'+id"><i class="material-icons">&#xe3c9;</i></router-link>
    <button v-on:click="deleteClient(id)" class="btn btn-danger"><i class="material-icons">&#xe872;</i></button>
    </span>

    <hr>
    
    <div class="row">
      <div class="col">

    <ul class="list-group">
      <li class="list-group-item"><i class="fa fa-user"></i> {{client.first_name}} {{client.last_name}}</li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item"><i class="material-icons">local_phone</i> {{client.phone}}</li>
      <li class="list-group-item"><i class="material-icons">email</i> {{client.email}}</li>
      <li class="list-group-item"><i class="material-icons">home</i> {{client.address}}, {{client.city}}, {{client.state}}</li>
    </ul>
    
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cdetails',
  props: [
    'id'
  ],
  data() {
    return {
        client: ''
  }
  },
  methods: {
      fetchClient(id){
        this.$http.get('http://slimapp:8080/api/client/'+id).then(function(response){
        this.client = response.body;
        //console.log(this.client);
        //console.log(response.body);
      });
      },
      deleteClient(id){
        //console.log(id);
        this.$http.delete('http://slimapp:8080/api/client/delete/'+id).then(function(response){
        this.$router.push({path: '/clients',query: {alert: 'Client Deleted'}});
      });
      }
  },
  created: function(){
      this.fetchClient(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn{
    width: 95px;
    color: white;
    font-weight: bold;
}

.container{
    margin-top: 0px;
    margin-bottom: 0px;
}

.list-group-item{
  font-weight: bold;
}
</style>
