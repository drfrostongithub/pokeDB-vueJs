<template>
  <div id="app">
    <b-nav tabs>
      <b-nav-item active> <router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item>
        <router-link to="/about">About</router-link>
      </b-nav-item>
    </b-nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/colours_vars.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

body,
p,
li,
input,
select,
button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: $colourText;
}
</style>
