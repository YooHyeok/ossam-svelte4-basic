<script>
  import { fade, slide } from "svelte/transition"

  import BucketItem from "./BucketItem.svelte";

  export let buckets;
  export let onToggle;
  export let onRemove;

  export let editMode;
  export let onEditMode;
  export let onEditKeyup;

  const blink = (node, value) => {
    let prev = value;
    let animating = false;
    return {
      update: (newValue) => {
        if (prev !== newValue && !animating) {
          animating = true;
          node.style.position = 'relative';
          node.style.overflow = 'hidden';
          const line = document.createElement('div');
          line.style.cssText = `
            position:absolute; left:0; right:0; bottom:0;
            height:100%; pointer-events:none;
            background: rgba(255,255,255,0.65);
            transform: translateY(100%);
          `;
          node.appendChild(line);
          line.animate([
            { transform: 'translateY(100%)' },
            { transform: 'translateY(-100%)' }
          ], { duration: 300, easing: 'ease-out' }).onfinish = () => {
            line.remove();
            animating = false;
          };
        }
        prev = newValue;
      }
    }
  }
</script>
<div class="bucketlist">
  {#each buckets as bucket (bucket.id)}
  <div out:slide use:blink={bucket.chk}>
      <BucketItem 
        
        {bucket} {onToggle} {onRemove}
        {editMode} {onEditMode} {onEditKeyup}
      />
  </div>
{/each}
</div>