<script setup></script>
<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <router-link to="/" class="nav-link">
          <span class="link-text logo-text">RBN</span>
          <img src="./icons/RHODYBOARDNATOR.png" alt="Lumosity" class="icon-img" />
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <img src="./icons/house.png" alt="Lumosity" class="icon-img" />
          <span class="link-text">Home</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/lumosity" class="nav-link">
          <img
            src="./icons/lumosity.png"
            alt="Lumosity"
            class="icon-img"
          />
          <span class="link-text">Lumosity</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/duolingo" class="nav-link">
          <img src="./icons/duolingo.png" alt="Aliens Icon" class="icon-img" />
          <span class="link-text">Duolingo</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/flip" class="nav-link">
          <img src="./icons/flip.png" alt="Aliens Icon" class="icon-img" style="border-radius: 0.5rem;" />
          <span class="link-text">Flip</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/chess" class="nav-link">
          <img src="./icons/chess.png" alt="Aliens Icon" class="icon-img" />
          <span class="link-text">Chess</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  background-color: #23232e;
  transition: width 600ms ease;
  overflow: scroll;
  z-index: 999;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
}

.icon-img {
  width: 50px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 15px;
  height: 5rem;
  color: #b6b6b6;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.9);
  transition: 600ms;
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: #141418;
  color: #ececec;
}

.link-text {
  display: none;
  margin-left: 1rem;
}

.nav-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: #ececec;
  background: #161623;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo .nav-link img {
  transform: rotate(0deg);
  transition: 600ms;
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: 600ms;
}

.navbar:hover .logo .nav-link img {
  transform: rotate(-180deg);
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }

  main {
    margin: 0;
  }
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  .navbar:hover {
    width: 10rem;
  }

  .navbar:hover .link-text {
    display: inline;
  }

  .navbar:hover .logo .nav-link img {
    margin-left: 5rem;
  }

  .navbar:hover .logo-text {
    left: 0px;
  }
}

.navbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.navbar::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
