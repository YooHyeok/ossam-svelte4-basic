<script>
	import { time } from '../../../store/readable'
	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	})
</script>
<div>
	<h1>03) Readable - 타이머 예제</h1>
	<h4>현재 시각: {formatter.format($time)}</h4>
	<button on:click={() => time.stop()}>stop</button>
	<button on:click={() => time.start()}>start</button>
</div>