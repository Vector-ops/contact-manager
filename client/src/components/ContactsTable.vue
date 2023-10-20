<template>
	<div class="table">
		<div class="headers">
			<p>Name</p>
			<p>Email</p>
			<p>Mobile</p>
			<p>Action</p>
		</div>
		<div
			v-for="(contact, index) in contacts"
			:key="index"
			class="contact-data"
		>
			<Contact :contact="contact" />
		</div>
	</div>
</template>

<script>
import Contact from "./Contact.vue";
export default {
	name: "ContactsTable",
	components: { Contact },
	props: {
		contacts: Array,
	},
};
</script>

<style scoped>
.table {
	display: flex;
	flex-direction: column;
	margin: 3em;
}

.headers {
	margin: 2em;
	font-weight: bold;
	color: #818b9fff;
	height: auto;
	width: auto;
	display: flex;
	flex-direction: row;
	flex: 1;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: flex-start;
}

.contact-data {
	height: auto;
	width: 100%;
}
</style>
