<script>
    let visible = false;
    function typewriter(node, { speed = 1 }) {
      if(!(node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE)) 
        throw new Error('이 전환은 자손으로 텍스트 노드가 혼자있는 요소에서만 작동합니다.');
      const text = node.textContent;
      const duration = text.length / (speed * 0.01)
      return {
        duration,
        tick: (t, u) => { // t가 0 ~ 1 까지 증가하여 반복실행됨 (duration 증가량에 따라 증가량은 달라짐 - 클수록 낮음 = 더 많이 반복)
          const i = ~~(text.length * t) // ~~: 틸트연산자: 더블일 경우 정수로 반환
          node.textContent = text.slice(0, i);
        }
      }
    }
</script>

<div class="wrapper">
  <h2>02) Javascript</h2>
  <label>
    <input type="checkbox" bind:checked={visible} /> 보임
</label>

{#if visible}
    <p transition:typewriter>안녕하세요!!! 유혁스쿨 입니다.</p>
{/if}
  
</div>
<style>
</style>