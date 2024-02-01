<template>
  <nav>
    <router-link to="/signin">sign in</router-link> |
    <router-link to="/signout">sign out</router-link> |
    <router-link to="/mypage">Mypage</router-link> |
  </nav>
  <router-view />
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #444;
  color: #fff;
  a {
    text-decoration: none;
    color: #fff;
  }
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
