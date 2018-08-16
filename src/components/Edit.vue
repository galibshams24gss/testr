<template>
  <div class="container">
    <div class="text-center">
    <h3 class="page-header">Edit Data</h3>
    </div>
    <br>
    <div class="text-center">
    <form class="form-horizontal" v-on:submit="updateClient">
        <div class="form-group">
                  <label class="control-label col-sm-2" for="first_name"><b>FName </b></label>
                  <span class="inline">
                      <input type="text" class="inputbold" id="first_name" name="first_name" v-model="client.first_name">
                    </span>
          </div>
  
          <div class="form-group">
                  <label class="control-label col-sm-2" for="last_name"><b>Surname </b></label>
                <span class="inline">
                    <input class="inputbold" type="text" id="last_name" name="last_name" v-model="client.last_name"/>
                </span>
            </div>
  
              <div class="form-group">
                    <label class="control-label col-sm-2" for="phone"><b>Phone </b></label>
                <span class="inline">
                  <input type="text" class="inputbold" id="phone" name="phone" v-model="client.phone">
                </span>
            </div>
  
            <div class="form-group">
                    <label class="control-label col-sm-2" for="email"><b>Email </b></label>
                <span class="inline">
                  <input type="text" class="inputbold" id="email" name="email" v-model="client.email">
                </span>
            </div>
  
            <div class="form-group">
                    <label class="control-label col-sm-2" for="address"><b>Address </b></label>
                <span class="inline">
                  <input type="text" class="inputbold" id="address" name="address" v-model="client.address">
                </span>
            </div>
  
            <div class="form-group">
                    <label class="control-label col-sm-2" for="city"><b>City</b></label>
                <span class="inline">
                  <input type="text" class="inputbold" id="city" name="city" v-model="client.city">
                </span>
        </div>

            <div class="form-group">
              <label class="control-label col-sm-2" for="state"><b>State</b></label>
            <span class="inline">
              <input type="text" class="inputbold" id="state" name="state" v-model="client.state">
            </span>
            </div>
  
            <div class="form-group">
              <div class="expanded button-group">
                <router-link class="btn btn-warning" v-bind:to="'/clients'"><i class="material-icons">&#xe5c4;</i></router-link>
                <button class="btn btn-danger"><i class="material-icons">&#xe923;</i></button>
              </div>
            </div>
    </form>
        </div>
        </div>
</template>

<script>
export default {
  name: 'edit',
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
       /* var i, len, text;
        //console.log(this.client[0].first_name);
        for (i = 0, len = this.client.length, text = ""; i < len; i++) {
            text = this.client[i];
            //console.log(text.first_name);
        }
        console.log(text);*/
        });
      },
      updateClient(e){
          //console.log(123);
         if(!this.client.first_name || !this.client.last_name || !this.client.phone || !this.client.email || !this.client.address || !this.client.city || !this.client.state){
          } else{
             // console.log(this.client);
              let updClient = {
                  first_name : this.client.first_name,
                  last_name : this.client.last_name,
                  phone : this.client.phone,
                  email : this.client.email,
                  address : this.client.address,
                  city : this.client.city,
                  state : this.client.state
              }
              //console.log(updClient);
              this.$http.put('http://slimapp:8080/api/client/update/'+this.$route.params.id, updClient).then(function(response){
                  this.$router.push({path: '/clients',query: {alert: 'Client Updated'}});
                  //console.log(id);
                  //console.log(this.$route.params.id);
              })
              e.preventDefault();
          }
          e.preventDefault();
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
</style>
