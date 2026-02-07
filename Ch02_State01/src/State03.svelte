<script>
  let str = '문자열 태그 인식 문법 {@html}을 위한 <strong>Html strong 태그</strong> 입니다.'
</script>
<div>
  <h1>State03) @html 문법</h1>
  <p>{@html str}</p> <!-- @html: 문자열로 된 html 태그를 자식 태그로 삽입하여 렌더링하는 문법으로 vue의 v-html과 유사하다 -->
</div>