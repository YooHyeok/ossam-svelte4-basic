<script>
  import Icon from "@iconify/svelte"
  import { v4 as uuidv4 } from 'uuid'

  import { buckets  } from './store'

  let chkId = uuidv4();
  export let bucket;

  const { onToggle, onRemove, onEditMode, onEditItem } = buckets

  const onEditKeyup = (e, editBucket) => {
		if (e.keyCode === 13) {
			onEditItem(editBucket);
      // offEditMode();
		}
	}

</script>
<div class="bucketitem">
  <!-- 화면 밖으로 날림 -->
  <input 
        type="checkbox" id={chkId}
        bind:checked={bucket.chk}
    />
    <label 
        for={chkId}
        class="checkcircle"
        role="presentation"
        on:click={() => onToggle(bucket.id)}
        on:keydown={() => onToggle(bucket.id)}
    >
        <Icon icon="ic:round-check" />
    </label>
  {#if $buckets.editMode === bucket.id && !bucket.chk}
    <input type="text" 
      bind:value={bucket.text}
      on:keyup={(e) => onEditKeyup(e, bucket)}
    >
  {:else}
     <p 
      on:dblclick={() => onEditMode(bucket.id)}
    >
      {bucket.text}
    </p>
  {/if}
  <button class="remove" on:click={() => {onRemove(bucket.id)}}>
    <Icon icon="gridicons:trash" />
  </button>
</div>