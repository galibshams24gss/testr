<template>
  <div class="container">
    
    <div class="text-center">
      <Alert v-if="alert" v-bind:message="alert"/>
    <hr> 
    <h3 class="page-header">Clients List</h3>
    <button v-on:click="exportPdf" class="btn btn-warning"><i class="material-icons">&#xe415;</i></button>
    <router-link class="btn btn-primary" v-bind:to="'/upload'"><i class="material-icons">&#xe2c3;</i></router-link>
    <router-link class="btn btn-danger" v-bind:to="'/pie'"><i class="material-icons">&#xe6c4;</i></router-link>
    </div>
    <hr>
    <form>
      <div class="form-group">
          <input type="text" name="search" v-model="filterInput" placeholder="Search by First Name" class="form-control">
      </div>
    </form>

    <br>
    <div class="row">
        <div class="col">
            <table class="gridtable">
              <thead>
                <tr >
                    <th>FName</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="client in filterBy(clients, filterInput)" :key="client.id">
                  <td>{{client.first_name}}</td>
                  <td>{{client.last_name}}</td>
                  <td>{{client.phone}}</td>
                  <td>{{client.email}}</td>
                  <td>{{client.address}}</td>
                  <td>{{client.city}}</td>
                  <td>{{client.state}}</td>
                  <td><router-link class="btn btn-primary" v-bind:to="'/client/'+client.id"><i class="material-icons">&#xe8ef;</i></router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  </div>
</template>

<script>
import Alert from './Alert';
import jsPDF from 'jspdf';

export default {
  name: 'clients',
  data() {
    return {
      clients: [],
      alert: '',
      filterInput: '',
      errmsg: "Server is turned off",
      validTable: false
   }
  },
  methods: {
    exportPdf(){
      var vm = this;
      var columns = [
        {title: "FName", dataKey: "first_name"},
        {title: "Surname", dataKey: "last_name"},
        {title: "Phone", dataKey: "phone"},
        {title: "Email", dataKey: "email"},
        {title: "Address", dataKey: "address"},
        {title: "City", dataKey: "city"},
        {title: "State", dataKey: "state"}
      ];
      var doc = new jsPDF('p','pt');
      doc.autoTable(columns, vm.clients);
      doc.save('clients.pdf');
    },
    fetchClients(){
      this.$http.get('http://slimapp:8080/api/clients').then(function(response){
        //console.log(response.body);
        this.clients = response.body;
        //console.log(this.clients.length);
      },
      (err) => {
          //console.log(this.errmsg, err);
        })
      .catch((e) => {
        console.log("Caught", e);
      }
    );
},
    filterBy(list, value){
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(client){
        return client.first_name.indexOf(value) > -1;

      })
    }
  },
  created: function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert;
    }
    this.fetchClients();
  },
  updated: function(){
    this.fetchClients();
  },
  components: {
    Alert
  }
}
</script>

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

.row{
    margin:0 auto; 
    width: 100%;
    overflow: auto; }
    
    table.gridtable {    
    margin:0 auto;
    overflow: auto;         
    width:90%;        
    font-size:14px;
    font-weight: bold;         
    color:#000000;         
    border-width: 1px;         
    border-color: black;         
    border-collapse: collapse;         
    text-align: left;    }
    
     table.gridtable th {         
     border-width: 1px;
     color: navy;
     text-decoration: underline;
     padding: 8px;
     font-weight: bold;          
     border-style: solid;         
     border-color: #ffffff;         
     background-color: #ffffff;     }     
     
     table.gridtable td {         
     border-width: 1px;         
     padding: 8px;
     font-weight: bold;        
     border-style: solid; 
     border-color: #ffffff;        
     background-color: #ffffff;     }
     
     @media only screen and (min-width : 768px)  and (max-width : 1024px) {     
     #row{ width:100%; }  
     table.gridtable {           
     width:100%;
     font-weight: bold;           
     font-size:13px; } 
     table.gridtable th {           
     background-color: #ffffff; } }
     
     @media only screen and (min-width : 569px)  and (max-width : 767px) {     
     #row{ width:100%; }  
     table.gridtable {           
     width:100%;
     font-weight: bold;           
     font-size:12px; } 
     table.gridtable th {           
     background-color: #ffffff; } }
     
     @media only screen and (min-width : 240px)  and (max-width : 568px) {     
     #row{ width:100%; }  
     table.gridtable {           
     width:100%; } 
     table thead {           
     display: none; } 
     table tr {           
     display: block;           
     margin-top: 5px;           
     padding-bottom:5px;           
     border-bottom: 2px solid black; } 
     table td {           
     display: block;
     text-align: right;           
     font-size: 13px;           
     border-radius:5px;           
     margin-bottom:1px;           
     min-height: 14px;         
     }
    table td:before {           
    content: attr(colname);           
    float: left;
    color: black;           
    font-weight: bold;         
	} }

</style>
