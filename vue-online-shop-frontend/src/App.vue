<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav_left">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/admin">Admin</router-link>
          </li>
          <li>
            <router-link to="/cart">Cart</router-link>
          </li>
          <li>
            <router-link to="/demo">DEMO</router-link>
          </li>
          <li>
            <router-link to="/imageColor">ImageColor</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav_left {
  display: flex;
  width: 100%;
  padding: 50px;
}
.nav_left > li {
  flex: 1;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}
</style>
