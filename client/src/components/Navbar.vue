<template>
  <nav>
    <div class="title">
      <router-link to="/contacts" style="text-decoration: none; color: inherit">
        {{ title }}
      </router-link>
    </div>
    <ProfileIndicate :profile="profile" />
  </nav>
</template>

<script>
import ProfileIndicate from "./ProfileIndicate.vue";

export default {
  name: "Navbar",
  props: {
    title: String,
    profile: Object,
  },
  components: {
    ProfileIndicate,
  },
};
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  height: 5em;
  width: 100%;
  background-color: #50428fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f6f6fa;
  letter-spacing: 2px;
}

.title {
  margin-left: 0.5em;
  font-size: xx-large;
  font-weight: 500;
}
</style>
