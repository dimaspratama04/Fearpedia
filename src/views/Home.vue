<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="home">
    <!-- Jumbotron -->
    <section id="jumbotron" class="h-100 position-relative d-flex flex-row justify-content-center align-items-center">
      <img src="../assets/Jumbotron.webp" alt="Hero" class="img-jumbotron w-100 h-100" />
      <div class="position-absolute mt-5 d-flex flex-column justify-content-center align-items-center">
        <h2 class="jumbotron-title text-white mx-5">Find Exactly What You're Looking For. Explore and Discover Your Desired Products with Ease</h2>
        <button class="jumbotron-button p-1 w-25 mt-4 bg-white rounded-4">
          <router-link to="/category" class="nav-link fw-thin text-black">Find Now</router-link>
        </button>
      </div>
    </section>

    <!-- Section Fiture -->
    <section id="fiture" class="container mt-5">
      <h2 class="text-uppercase text-center mt-3 fw-medium">Our fiture</h2>
      <div id="fiture-list" class="d-md-flex ms-3 justify-content-between gap-5 mt-3">
        <div id="list-item" class="col">
          <div class="d-flex align-items-center gap-1">
            <img src="../assets/HandBag.svg" alt="" />
            <span class="fw-bold">30 + models</span>
          </div>
          <p class="mt-2">More than 30+ models in 3 category. Electronics, Fashion, and Jewelery.</p>
        </div>
        <div id="list-item" class="col">
          <div class="d-flex align-items-center gap-1">
            <img src="../assets/TagDiscount.svg" alt="" />
            <span class="fw-bold">Best Price</span>
          </div>
          <p class="mt-2">Unbeatable Discounts: <br />Save Big on Your Favorite Products!</p>
        </div>
        <div id="list-item" class="col">
          <div class="d-flex align-items-center gap-1">
            <img src="../assets/ListMenu.svg" alt="" />
            <span class="fw-bold">Select by category</span>
          </div>
          <p class="mt-2">Provides categories for your daily needs</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-5">
      <div id="footer-body" class="d-flex flex-column align-items-center justify-content-center">
        <h1 class="text-white">Catch me on</h1>
        <ul id="icon-list" class="d-flex mt-2 p-0 gap-4">
          <li class="twitter">
            <a href="/twitter">
              <img src="../assets/icon/Twitter.svg" alt="" />
            </a>
          </li>
          <li class="facebook">
            <a href="/facebook">
              <img src="../assets/icon/Facebook.svg" alt="" />
            </a>
          </li>
          <li class="instagram">
            <a href="/instagram">
              <img src="../assets/icon/Instagram.svg" alt="" />
            </a>
          </li>
          <li class="twitter">
            <a href="/github">
              <img src="../assets/icon/Github.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div id="footer-copyright">
        <p class="text-center">by Mas Amirul Dimas Daen Pratama</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home {
  padding-top: 10vh;
  max-width: 100vw;
  height: 100vh;
}

.img-jumbotron {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(50%);
}

.jumbotron-title {
  max-width: 600px;
  font-weight: bold;
  text-align: center;
}

#fiture-list span {
  margin-left: 5px;
  font-size: 20px;
}

#fiture-list p {
  font-weight: 500;
}

footer {
  width: 100%;
  height: 15rem;
}

#footer-body {
  background-color: #111111;
  height: 13rem;
}

#footer-copyright {
  border-top: 2px solid #eee;
  background-color: #000000;
  height: 2rem;
}

#icon-list li {
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: white;
  border-radius: 100%;
  list-style-type: none;
  text-decoration: none;
}

#icon-list li:hover {
  transform: translateY(-5px);
  transition: transform 0.5s ease;
}

/* Smartphone */
@media (max-width: 500px) {
  .jumbotron-title {
    font-size: 30px;
  }
}
</style>
