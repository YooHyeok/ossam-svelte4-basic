<script>
	import BucketHeader from './components/BucketHeader.svelte';
	import BucketList from './components/BucketList.svelte';
	import BucketCreate from './components/BucketCreate.svelte'
	import { initialBuckets } from "./bucketData"

	let buckets = initialBuckets;
	$:chkCount = buckets.filter(bucket => !bucket.chk).length;

  const onToggle = () => {
  	buckets = buckets; // 재할당으로 반응성 트리거
	}

	const onRemove = (id) => {
		buckets = buckets.filter(bucket => bucket.id !== id)
	}

</script>
<div class="bucketbox">
	<BucketHeader {chkCount} />
	<BucketList {buckets} {onToggle} {onRemove}/>
	<BucketCreate />
</div>