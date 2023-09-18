<template>
  <div class="container">
    <Navbar title="Contact Manager" :profile="profile" />
    <div class="body-container">
      <Sidebar />
      <router-view :totalMembers="100" />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Contacts from "../components/Contacts.vue";

export default {
  name: "Home",
  components: { Navbar, Sidebar, Contacts },
  data() {
    return {
      profileSelect: false,
      contactsSelect: true,
      profile: {
        username: "Sumith",
        email: "newmail@email.com",
      },
    };
  },
  // fix issue: on reload sidebar component updates but route remains
  mounted() {
    this.$router.push("/contacts");
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.body-container {
  display: flex;
  flex-direction: row;
}
</style>
