<template>
<div class="container">
<div class="row">
    <div class="col-md-12 jumbotron">
        <div class="text-center">
            <h1>About Web Application</h1>
            <p>This is a Client Management Application built in Vue.js Framework</p>
            <div class="form-group">
                    <div class="expanded button-group">
                    </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
    background-image: url("background hd.jpg");
    margin-top: 0px;
    margin-bottom: 0px;
    background-size: cover;
    width: 100%;
	height: 768px;
    top: 0px;
    bottom: 0px;
    font-weight: bold;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
}

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
