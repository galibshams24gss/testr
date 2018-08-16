<template>
<div class="container">
  <div class="text-center">
    <h3 class="page-header">File Uploading Section</h3>
    <router-link class="btn btn-primary" v-bind:to="'/clients'"><i class="material-icons">&#xe5c4;</i></router-link>
    <button v-on:click="exportPdf" class="btn btn-danger"><i class="material-icons">&#xe415;</i></button>
    </div>
    <hr>

    <form>
      <div class="form-group">
          <div class="panel-heading"> 
          <h4>Import File</h4>
          <hr>
          </div>
          <input type="file" id="csv_file" name="csv_file" class="form-control" @change="loadCSV($event)">
      </div>
    </form>

    <form>
      <div class="form-group">
          <div class="checkbox-inline"> 
          <label for="header_rows"><input type="checkbox" id="header_rows"> File contains any header row?</label>
          </div>
          <div class="col-sm-offset-3 col-sm-9">
          <a><router-link class="btn btn-primary" v-bind:to="'/clients'">File Parse</router-link></a>
          </div>
      </div>
    </form>

        <hr>

        <div class="row">
        <div class="col">
        <table class="gridtable" v-if="parse_csv">
          <thead>
            <tr>
              <th v-for="key in parse_header"
                  @click="sortBy(key)"
                  :class="{ active: sortKey == key }" :key="key.id">
                {{ key | capitalize }}
                <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                </span>
              </th>
            </tr>
          </thead> 
          <tr v-for="csv in parse_csv" :key="csv.id">
            <td v-for="key in parse_header" :key="key.id">
              {{csv[key]}}
            </td>
          </tr>
        </table>
        </div>
        </div>
      </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  name: 'upload',
  data() {
    return {
      channel_name: '',
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      sortOrders:{},
      sortKey: '',
      selectedfile: null
  };
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      var vm = this
      vm.sortKey = key
      vm.sortOrders[key] = vm.sortOrders[key] * -1
    },
    csvJSON(csv){
      var vm = this
      var lines = csv.split("\n")
      var result = []
      var headers = lines[0].split(",")
      vm.parse_header = lines[0].split(",") 
      //console.log(vm.parse_header);
      lines[0].split(",").forEach(function (key) {
        vm.sortOrders[key] = 1
      })
      
      lines.map(function(line, indexLine){
        if (indexLine < 1) return // Jump header line
        
        var obj = {}
        //console.log(obj);
        var currentline = line.split(",")
        //console.log(currentline);
        
        headers.map(function(header, indexHeader){
          obj[header] = currentline[indexHeader]
        })
        
        result.push(obj)

      })
      
      result.pop() // remove the last item because undefined values
      
      return result // JavaScript object
    },

    loadCSV(e) {
      console.log(e);
      this.selectedfile = e.target.files[0]
      var vm = this
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        // Handle errors load
        reader.onload = function(event) {
          var csv = event.target.result;
          vm.parse_csv = vm.csvJSON(csv)
          //console.log(csv);
          //console.log(vm.parse_csv);
        };
        reader.onerror = function(evt) {
          if(evt.target.error.name == "NotReadableError") {
            alert("Cannot read file !");
          }
        };
      } else {
        alert('FileReader are not supported in this browser.');
      }
    },

    /*onUpload() {
    // upload file
    const formData = new FormData()
    formData.append('myFile', this.selectedFile)
    axios.post('http://localhost:3000/?#/upload', formData,
      {
    onUploadProgress: progressEvent => {
      console.log(progressEvent.loaded / progressEvent.total)
    }
  })
    },*/

    exportPdf(){
      var vm = this;
      //console.log(vm.parse_csv);
      var columns = [
        {title: "FName", dataKey: "FName"},
        {title: "Surname", dataKey: "Surname"},
        {title: "Phone", dataKey: "Phone"},
        {title: "Email", dataKey: "Email"},
        {title: "Address", dataKey: "Address"},
        {title: "City", dataKey: "City"},
        {title: "State", dataKey: "State"}
      ];
      var doc = new jsPDF('p','pt');
      doc.autoTable(columns, vm.parse_csv);
      doc.save('uploadedfile.pdf');
    }
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

html, body {
  margin: 0;
  padding: 0;
}

.panel {
  margin: 0px;
}

.panel-heading h1, .panel-heading h2, .panel-heading h3, .panel-heading h4, .panel-heading h5, .panel-heading h6 {
  margin: 0;
  padding: 0;
}

.panel-body .checkbox-inline {
  padding: 0px 0px;
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
    color:black;         
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
