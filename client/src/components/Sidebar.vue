<template>
  <div class="sidebar">
    <SidebarIcon
      title="Profile"
      icon="user"
      color="#ffffff"
      :toggleBorder="profileBorder"
    />
    <SidebarIcon
      title="Contacts"
      icon="address-book"
      color="#ffffff"
      :toggleBorder="contactsBorder"
    />
  </div>
</template>

<script>
import SidebarIcon from "./SidebarIcon.vue";

export default {
  name: "Sidebar",
  components: { SidebarIcon },
  props: {},
  data() {
    return {
      profileBorder: false,
      contactsBorder: true,
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === "profile") {
        this.profileBorder = true;
        this.contactsBorder = false;
      } else if (to.name === "contacts") {
        this.profileBorder = false;
        this.contactsBorder = true;
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2em;
  color: #f6f6fa;
  background: #6f5cc3ff;
  height: 91.7vh;
  width: 25%;
  padding: 2em 2em;
}

img {
  height: 2em;
  width: 2em;
  background-color: white;
}
</style>
