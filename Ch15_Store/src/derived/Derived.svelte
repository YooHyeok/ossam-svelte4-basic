<script>
	import { time, elapsed } from '../store/derived'
	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	})
</script>
<div>
	<h1>04) derived - 타이머, 경과 예제</h1>
	<h4>현재 시각: {formatter.format($time)}</h4>
	<p>현재 페이지가 열린지 {$elapsed}초가 지났습니다.</p>
</div>