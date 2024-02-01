<template>
  <div>
    <h1>My Page</h1>
    <!-- postarea -->
    <div>
      <p>PostArea</p>
      <postModal />
    </div>
  </div>
</template>

<script>
import postModal from "@/components/modal/postModal.vue";

export default {
  name: "MyPostpage",
  components: {
    postModal,
  },
};
</script>
