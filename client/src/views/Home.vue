<template>
	<div class="container">
		<Navbar title="Contact Manager" :profile="profile" />
		<div class="body-container">
			<Sidebar />
			<router-view :totalMembers="100" :contacts="contacts" />
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
			contacts: [
				{
					id: 1,
					name: "John",
					email: "john@email.com",
					mobile: "123456",
				},
				{
					id: 2,
					name: "Jake",
					email: "john@email.com",
					mobile: "123456",
				},
				{
					id: 3,
					name: "Jack",
					email: "john@email.com",
					mobile: "123456",
				},
			],
		};
	},
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
