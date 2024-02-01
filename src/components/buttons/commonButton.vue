<template>
  <!-- button -->
  <button class="common-button" @click="openModal">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "commonButton",
  props: {
    text: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.common-button {
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
