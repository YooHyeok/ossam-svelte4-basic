<script>
	import Application from './components/v0/Application.svelte';
	import Application1 from './components/v1/Application.svelte';
	import Application2 from './components/v0_1/Application.svelte';
	import Application3 from './components/v1_1/Application.svelte';
</script>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 16px;">
	<style>
		.bucketbox { position: relative !important; }
	</style>
	<Application />
	<Application1 />
	<Application2 />
	<Application3 />
</div>
