<script>
  import Icon from "@iconify/svelte"
  import { v4 as uuidv4 } from 'uuid'

  let chkId = uuidv4();
  export let bucket;
  export let onToggle;
  export let onRemove;

  export let editMode;
  export let onEditMode;
  export let onEditKeyup;

</script>
<div class="bucketitem">
  <!-- 화면 밖으로 날림 -->
  <input 
        type="checkbox" id={chkId}
        bind:checked={bucket.chk}
        on:change={onToggle}
    />
    <label 
        for={chkId}
        class="checkcircle"
        role="presentation"
    >
        <Icon icon="ic:round-check" />
    </label>
  {#if editMode === bucket.id && !bucket.chk}
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