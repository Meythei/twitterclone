<template>
  <!-- ポストするときのモーダル -->
  <div>
    <p>ポストするときのモーダル</p>
    <input type="text" v-model="postText" />
    <commonButton text="POST" />
  </div>
</template>

<script>
import commonButton from "@/components/buttons/commonButton.vue";
export default {
  name: "PostModal",
  components: {
    commonButton,
  },
  data() {
    return {
      postText: "",
    };
  },
};
</script>
