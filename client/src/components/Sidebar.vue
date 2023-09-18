<template>
  <div class="sidebar">
    <SidebarIcon
      @sidebar-icon-click="iconClick"
      title="Profile"
      icon="user"
      color="#ffffff"
      :toggleBorder="profileSelect"
    />
    <SidebarIcon
      @sidebar-icon-click="iconClick"
      title="Contacts"
      icon="address-book"
      color="#ffffff"
      :toggleBorder="contactsSelect"
    />
  </div>
</template>

<script>
import SidebarIcon from "./SidebarIcon.vue";

export default {
  name: "Sidebar",
  components: { SidebarIcon },
  props: {
    profileSelect: Boolean,
    contactsSelect: Boolean,
  },
  data() {
    return {
      profileBorder: false,
      contactsBorder: true,
    };
  },
  methods: {
    iconClick(page) {
      this.$emit("icon-click", page);
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
