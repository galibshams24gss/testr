<template>
<div>
<div id="slides" class="carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
    <li data-target="#slides" data-slide-to="0" class="active"></li>
    <li data-target="#slides" data-slide-to="1"></li>
    <li data-target="#slides" data-slide-to="2"></li>
    </ul>

    <div class="carousel-inner">
    <div class="carousel-item active">
        <img :src="image1">
        <div class="carousel-caption">
            <h3>VUE.JS</h3>
            <a href="https://github.com"><button type="button" class="btn btn-outline-light btn-lg">View Demo</button></a>
            <a href="https://github.com"><button type="button" class="btn btn-primary btn-lg">Get Started</button></a>
        </div>
    </div>
    <div class="carousel-item">
      <img :src="image2">
    </div>
    <div class="carousel-item">
      <img :src="image3">
    </div>
  </div>
</div>

<div class="container-fluid">
    <div class="row jumbotron">
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p class="lead">Vue.js is an open-source JavaScript framework for building user interfaces. Integration into projects that use other JavaScript libraries is simplified with Vue because it is designed to be incrementally adoptable.</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a><router-link to="/about"><button type="button" class="btn btn-outline-secondary-light btn-md">Web Development</button></router-link></a>
        </div>   
    </div>
</div>

<div class="container-fluid padding">
    <div class="row welcome text-center">
        <div class="col-12">
            <h1 class="display-4">Built with Ease</h1>
        </div>
        <hr>
        <div class="col-12">
            <p class="lead">Vue can also function as a web application framework capable of powering advanced single-page applications.</p>
        </div>
    </div>
</div>

<div class="container-fluid padding">
    <div class="row text-center padding">
        <div class="col-xs-12 col-sm-6 col-md-4">
            <i style="font-size:24px" class="fa">&#xf13b;</i>
            <h3>HTML</h3>
            <p>Built with HTML5</p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
            <i style="font-size:24px" class="fa">&#xf13c;</i>
            <h3>CSS</h3>
            <p>Built with CSS3</p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
            <i class="material-icons">&#xe8eb;</i>
            <h3>Bootstrap</h3>
            <p>Built with Bootstrap4</p>
        </div>
    </div>
        <hr class="my-4">
</div>

<div class="container-fluid padding">
    <div class="row padding">
        <div class="col-lg-6">
            <h2>Built it once...</h2>
            <p>Vue.js is a popular JavaScript front-end framework that was built to organize and simplify web development.</p>
            <p>The project focuses on making ideas in web UI development (components, declarative UI, hot-reloading, time-travel debugging, etc.) more approachable. It attempts to be less opinionated and thus easier for developers to pick up.</p>
            <p>It features an incrementally adoptable architecture. The core library focuses on declarative rendering and component composition and can be embedded into existing pages.</p>
            <br>
            <button type="button" class="btn btn-primary btn-lg">Learn more</button>
        </div>
        <div class="col-lg-6">
            <img :src="image4" class="img-fluid">
        </div>
    </div>   
</div>

<hr class="my-4">
<figure>
    <div class="fixed-wrap">
        <div id="fixed">
        </div>
    </div>
</figure>

<button class="btn btn-success btn-lg" data-toggle="collapse" data-target="#emoji">Click here</button>
<div id="emoji" class="collapse">
    <div class="container-fluid padding">
        <div class="row text-center">
            <div class="col-sm-6 col-md-3">
                <a href="https://github.com"><img class="gif" :src="image5"></a>
            </div>
            <div class="col-sm-6 col-md-3">
                <a href="https://github.com"><img class="gif" :src="image6"></a>
            </div>
            <div class="col-sm-6 col-md-3">
                <a href="https://github.com"><img class="gif" :src="image5"></a>
            </div>
            <div class="col-sm-6 col-md-3">
                <a href="https://github.com"><img class="gif" :src="image6"></a>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid padding">
    <div class="row welcome text-center">
        <div class="col-12">
            <h1 class="display-4">Meet our team</h1>
        </div>
        <hr>
    </div>
</div>

<div class="container-fluid padding">
    <div class="row padding">
        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" :src="image1">
                <div class="card-body">
                    <h4 class="card-body">Vue.JS</h4>
                    <p class="card-text">Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM</p>
                    <a><router-link to="/about"><button type="button" class="btn btn-outline-secondary">View Profile</button></router-link></a>
                </div>    
            </div>
        </div>

        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" :src="image3">
                <div class="card-body">
                    <h4 class="card-body">Vuetify</h4>
                    <p class="card-text">Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM</p>
                    <a><router-link to="/about"><button type="button" class="btn btn-outline-secondary">View Profile</button></router-link></a>
                </div>    
            </div>
        </div>

        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" :src="image2">
                <div class="card-body">
                    <h4 class="card-body">Vuex</h4>
                    <p class="card-text">Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM</p>
                    <a><router-link to="/about"><button type="button" class="btn btn-outline-secondary">View Profile</button></router-link></a>
                </div>    
            </div>
        </div>
    </div>
</div>

<div class="container-fluid padding">
    <div class="row padding">
        <div class="col-lg-6">
            <h2>Experience it once...</h2>
            <p>Vue.js is a popular JavaScript front-end framework that was built to organize and simplify web development.</p>
            <p>The project focuses on making ideas in web UI development (components, declarative UI, hot-reloading, time-travel debugging, etc.) more approachable. It attempts to be less opinionated and thus easier for developers to pick up.</p>
            <p>It features an incrementally adoptable architecture. The core library focuses on declarative rendering and component composition and can be embedded into existing pages.</p>
        </div>
        <div class="col-lg-6">
            <img :src="image7" class="img-fluid">
        </div>
    </div> 
    <hr class="my-4">  
</div>

<div class="container-fluid padding">
    <div class="row text-center padding">
        <div class="col-12">
            <h2>Connect</h2>
        </div>
        <div class="col-12 social padding">
            <a href="https://github.com"><i style="font-size:24px" class="fa">&#xf230;</i></a>
            <a href="https://github.com"><i style="font-size:24px" class="fa">&#xf099;</i></a>
            <a href="https://github.com"><i style="font-size:24px" class="fa">&#xf08c;</i></a>
            <a href="https://github.com"><i style="font-size:24px" class="fa">&#xf09b;</i></a>
            <a href="https://github.com"><i style="font-size:24px" class="fa">&#xf1a0;</i></a>
        </div>
    </div>
</div>

<footer>
    <div class="container-fluid padding">
    <div class="row text-center">
        <div class="col-md-4">
            <img :src="image6">
            <hr class="light">
            <p>vproj@gmail.com</p>
            <p>100 Hill Street</p>
            <p>Sydney CBD, NSW-2000</p>
        </div>
        <div class="col-md-4">
            <hr class="light">
            <h5>Opening Hours</h5>
            <hr class="light">
            <p>Monday 09:00am - 05:00pm</p>
            <p>Tuesday 09:00am - 05:00pm</p>
            <p>Wednesday 09:00am - 05:00pm</p>
            <p>Thursday 09:00am - 05:00pm</p>
            <p>Friday 09:00am - 05:00pm</p>
            <p>Saturday 11:00am - 03:00pm</p>
            <p>Sunday 11:00am - 03:00pm</p>
        </div>
        <div class="col-md-4">
            <hr class="light">
            <h5>Our Branches</h5>
            <hr class="light">
            <p>Sydney CBD</p>
            <p>Central Melbourne</p>
            <p>Northern Canberra</p>
            <p>Eastern Queensland</p>
            <p>Central Gold Coast</p>
            <p>Western Perth</p>
            <p>Central Darwin</p>
        </div>
        <div class="col-md-12">
            <hr class="light">
            <h5>&copy; vue.js.com.au</h5>
        </div>
    </div>
</div>
</footer>

</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
        image1: require('../assets/background-vector-baby.jpg'),
        image2: require('../assets/officeview.png'),
        image3: require('../assets/background hd.jpg'),
        image4: require('../assets/account.png'),
        image5: require('../assets/logo.png'),
        image6: require('../assets/lg.png'),
        image7: require('../assets/accbg.jpg'),
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
    width: 100%;
    height: 100%;
    color: #222;
}

#app {
    width: 100%;
    height: 100%;
    color: #222;
}
.carousel-inner img {
      width: 100%;
      height: 450px;
}

.carousel-caption {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.carousel-caption h1{
    font-size: 500%;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px #000;
    padding-bottom: 1rem;
}

.carousel-caption h3{
    font-size: 200%;
    font-weight: 500;
    text-shadow: 1px 1px 10px #000;
}

.btn-primary {
    background-color: rgb(76, 0, 255);
    border: 1px solid rgb(76, 0, 255);
}

.btn-primary:hover {
    background-color: rgb(76, 0, 255);
    border: 1px solid rgb(76, 0, 255);
}

.jumbotron {
    padding: 1rem;
    border-radius: 0;
}

.padding {
    padding-bottom: 2rem;
}

.welcome {
    width: 75%;
    margin: 0 auto;
    padding-top: 2rem;
}

.welcome hr{
    border-top: 2px solid #b4b4b4;
    width: 95%;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
}

.material-icons {
    color: rgb(245, 61, 48);
}

.material-icons:hover {
    color: aqua;
}

.fa {
    color: rgb(245, 61, 48);
}

.fa:hover {
    color: aqua;
}

.btn-success {
    background-color: rgb(76, 0, 255);
    border: 1px solid rgb(76, 0, 255);
    width: 100%;
    margin-bottom: 2rem;
    color: white;
}

.gif {
    max-width: 100%;
}

.social a {
    font-size: 4.5em;
    padding: 3rem;
}

footer {
    background-color: #3f3f3f;
    color: #d5d5d5;
    padding-top: 2rem;
}

hr.light {
    border-top: 1px solid #d5d5d5;
    width: 75%;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
}

@media (max-width: 992px) {
    .social a {
    font-size: 4em;
    padding: 2rem;
}
}

@media (max-width: 768px) {
.carousel-caption {
    top: 45%;
}

.carousel-caption h1{
    font-size: 350%;
}

.carousel-caption h3{
    font-size: 140%;
    font-weight: 400;
    padding-bottom: 0.2rem;
}

.carousel-caption .btn{
    font-size: 95%;
    padding: 8px 14px;
}

.display-4 {
    font-size: 200%;
}

.social a {
    font-size: 3em;
    padding: 1.2rem;
}
}

@media (max-width: 576px) {
.carousel-caption {
    top: 40%;
}

.carousel-caption h1{
    font-size: 250%;
}

.carousel-caption h3{
    font-size: 110%;
}

.carousel-caption .btn{
    font-size: 90%;
    padding: 4px 8px;
}

.carousel-indicators {
    display: none;
}

.display-4 {
    font-size: 160%;
}

.social a {
    font-size: 2em;
    padding: 0.8rem;
}
}
</style>
