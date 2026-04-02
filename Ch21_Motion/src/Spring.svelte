<script>
    import { spring } from 'svelte/motion'
    const coords = spring(
      { x: 50, y: 50 },
      {
        stiffness: 0.1,
        damping: 0.25,
      }
    )
    // let x, y;
</script>

<!-- <svg on:mousemove={(e) => { x = e.clientX; y = e.clientY; }}>
    <circle cx={x} cy={y} r="10" />
</svg> -->
<svg on:mousemove={(e) => { coords.set({ x: e.clientX, y: e.clientY })}}>
    <circle cx={$coords.x} cy={$coords.y} r="10" />
</svg>

<style>
    svg{ width: 100%; height: 100%; margin: -8px; }
    circle{ fill: #ff3e00; }
</style>