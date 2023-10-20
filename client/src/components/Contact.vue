<template>
	<div class="contact-container">
		<p>{{ this.contact.name }}</p>
		<p>{{ this.contact.email }}</p>
		<p>{{ this.contact.mobile }}</p>
		<div class="actions">
			<p>D</p>
			<p>E</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contact",
	props: {
		contact: Object,
	},
};
</script>

<style scoped>
.contact-container {
	margin: 2em;
	font-weight: bold;
	color: #142749ff;
	height: auto;
	width: auto;
	display: flex;
	flex-direction: row;
	flex: 1;
	flex-wrap: nowrap;
	overflow: hidden;
	justify-content: space-between;
	align-items: flex-start;
}

.contact-container > p {
	text-align: start;
}

.actions {
	display: flex;
	gap: 1em;
}
</style>
