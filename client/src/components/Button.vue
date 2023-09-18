<template>
  <div class="btn-container">
    <button :style="{ background: color, color: textColor }">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    size: String,
    color: {
      type: String,
      default: "#50428fff",
    },
    textColor: {
      type: String,
      default: "#f7f6f6ff",
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  border-radius: 0.3em;
  height: 3em;
  width: 8em;
  font-size: medium;
  font-weight: bold;
}
</style>
