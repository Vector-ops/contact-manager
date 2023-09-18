<template>
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
</template>

<script>
export default {
  name: "ProfileIndicate",
  props: {
    profile: Object,
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
