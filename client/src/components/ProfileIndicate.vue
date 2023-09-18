<template>
  <router-link to="/profile" :style="linkStyle">
    <div class="profile-btn-container">
      <font-awesome-icon
        :icon="['fas', 'user']"
        size="xl"
        border
        style="border-radius: 12px"
      />
      <div class="profile-label-container">
        <p>
          {{ profile.username }}
        </p>
        <p>
          {{ profile.email }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProfileIndicate",
  props: {
    profile: Object,
  },
  data() {
    return {
      linkStyle: { "text-decoration": "none", color: "inherit" },
    };
  },
};
</script>

<style scoped>
.profile-btn-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2em;
  margin-right: 1em;
}

.profile-label-container p {
  margin: 0;
}
</style>
