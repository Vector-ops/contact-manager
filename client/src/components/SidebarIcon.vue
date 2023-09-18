<template>
  <div :style="toggleBorder ? borderStyle : ''">
    <font-awesome-icon :icon="['fas', icon]" :style="{ color: color }" />
    <router-link style="text-decoration: none; color: inherit" :to="route">
      {{ title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SidebarIcon",
  props: {
    icon: String,
    color: String,
    title: String,
    toggleBorder: Boolean,
  },
  data() {
    return {
      route: "/" + this.title.toLowerCase(),
      borderStyle: { "border-bottom": "2px solid white" },
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  gap: 1em;
  font-weight: 500;
  padding-bottom: 0.2em;
}
</style>
