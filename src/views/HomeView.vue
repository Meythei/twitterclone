<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MainScreen />
  </div>
</template>

<script>
// @ is an alias to /src
import MainScreen from "@/components/MainScreen.vue";

export default {
  name: "HomeView",
  components: {
    MainScreen,
  },
};
</script>
