<template>
	<div class="home-container">
		<div class="options-container">
			<h1>Contacts</h1>
			<Button text="Add new" />
			<div class="contacts-count-container">
				<p class="contacts">
					Total contacts:
					<span class="contacts-count">{{ totalMembers }}</span>
				</p>
			</div>
		</div>
		<ContactsTable :contacts="this.contacts" />
	</div>
</template>

<script>
import Button from "./Button.vue";
import ContactsTable from "./ContactsTable.vue";

export default {
	name: "Contacts",
	components: { Button, ContactsTable },
	props: {
		totalMembers: { String, default: 200 },
		contacts: Array,
	},
};
</script>

<style scoped>
.home-container {
	display: flex;
	flex-direction: column;
	padding: 2em;
	background-color: #d1d5dcff;
	width: 100%;
	height: 91.7vh;
}

.options-container {
	display: flex;
	align-items: center;
	gap: 2em;
}

h1 {
	color: #142749ff;
}

.contacts-count-container {
	margin-left: auto;
}

.contacts {
	color: gray;
	font-weight: 600;
}

.contacts-count {
	color: #142749ff;
}
</style>
