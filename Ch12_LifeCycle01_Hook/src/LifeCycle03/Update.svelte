<script>
    import { afterUpdate, beforeUpdate } from "svelte";

  let num = 0;
  /**
    beforeUpdate와 afterUpdate 훅은 컴포넌트가 마운트 되는 시점인 처음부터 호출된다.  
    Vue에서 update 훅은 실제로 Virtual Dom(가상돔)이 생성/수정 되는 시점(render effect)을 기준으로 전/후에 실행된다.  
    dom 영역에 할당되지 않고 상태값만 변경된다면 훅이 실행되지 않는다.  
    반면 Svelte에서는 Virtual Dom이 존재하지 않지만 Dom이 생성/수정 되는 시점(render effect) 기준으로 전/후에 실행되는것은 같다.  
    하지만 dom 영역에 할당되지 않고 순수 상태값만 변경하더라도 훅이 실행된다.  
   */
  beforeUpdate(()=>console.log("[Update] - beforeUpdate"))
  afterUpdate(()=>console.log("[Update] - afterUpdate"))
  
</script>
<div>
  <h1>03) update </h1>
  <h4>F12를 눌러 개발자도구 콘솔을 확인하세요.</h4>
  <button on:click={() => num++}>숫자증가++</button>
  <!-- <p>현재 숫자 : {num}</p> -->
</div>