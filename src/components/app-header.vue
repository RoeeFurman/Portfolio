<template>
  <header class="main-header">
    <header class="main-nav">
      <div class="logo">
        <img src=".././assets/img/pp.jpg" class="my-img" />Roee Furman
      </div>
      <nav>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/">About me </router-link>
        <!-- <router-link class="link" to="/">Login </router-link> -->
        <!-- <img src="../assets/img/login.png" class="login-img" /> -->
      </nav>
    </header>
  </header>
</template>

<script>
export default {
  name: "app-header",
  computed: {},
};
</script>
