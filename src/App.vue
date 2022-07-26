<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.title {
  /* display: flex;
  justify-content: center; */
  color: rgb(33, 39, 6);
  margin: 15px;
}

.box {
  margin: 20px;
  border: 2px solid rgb(33, 39, 6);
  border-radius: 30px;
  padding: 20px;
}

.butt {
  width: 150px;
  height: 20px;
}
</style>
