<script>
	import BucketHeader from './BucketHeader.svelte';
	import BucketList from './BucketList.svelte';
	import BucketCreate from './BucketCreate.svelte'
	
</script>
<svelte:head>
	<title>My Bucket List</title>
</svelte:head>
<div class="bucketbox">
	<BucketHeader />
	<BucketList />
	<BucketCreate />
</div>
