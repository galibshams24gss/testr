<template>
<div class="container">
    <div class="text-center">
    <h3 class="page-header">Chart for 2018</h3>
    <router-link class="btn btn-primary" v-bind:to="'/clients'"><i class="material-icons">&#xe5c4;</i></router-link>
    <router-link class="btn btn-warning" v-bind:to="'/gmap'"><i class="material-icons">&#xe55b;</i></router-link>
    </div>
    <hr>
<div class="card">
    <chartjs-doughnut 
      v-bind:labels="clients_states"
      v-bind:datasets="datasets"
      v-bind:option="option"
      v-bind:bind="true"/>
  </div>
</div>
</template>

<script>
export default {
  name: 'pie',
  data() {
    return {
        clients: [],
        cl: [],
        clients_states: [],
        dt: [],
        nswc: 0,
        vicc: 0,
        qldc: 0,
        datasets: [
        {
          data: [],
          backgroundColor: ["#FF3C33", "#C70039", "#FFC300"],
          hoverBackgroundColor: ["#900C3F", "#00CDBE", "#6DCD00"]
        }
      ],
      option: {}
    }
  },
  methods: {
    fetchClients(){
      this.$http.get('http://slimapp:8080/api/clients').then(function(response){
        this.clients = response.body;
        this.vicc = this.clients.filter(function(o) { return o.state == "VIC" }).length;
        //console.log(this.vicc);
        this.nswc = this.clients.filter(function(o) { return o.state == "NSW" }).length;
        //console.log(this.nswc);
        this.qldc = this.clients.filter(function(o) { return o.state == "QLD" }).length;
        //console.log(this.qldc);
        //this.dt.push(this.vicc,this.nswc,this.qldc);
        //console.log(this.dt);

        //console.log(this.datasets[0].data[0]);
        //console.log(this.datasets[0].data[1]);
        //console.log(this.datasets[0].data[2]);
        this.datasets[0].data.push(this.vicc,this.nswc,this.qldc);
        var flength = this.clients.length;
        for(var i=0; i<flength; i++){
            this.cl.push(this.clients[i].state);
        }
        this.clients_states = this.cl.filter((el, i, a) => i === a.indexOf(el))
      });
},
  },
  created: function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert;
    }
    this.fetchClients();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
    color: white;
    font-weight: bold;
    width: 95px;
}

.container{
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>
