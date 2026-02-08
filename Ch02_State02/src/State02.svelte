<script>
  let artist = {
      name: '진',
      age: 31,
      height: 179,
      group: '방탄소년단',
      img: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fw.namu.la%2Fs%2F8152fad7a07738b7d11b8fe1b44b3cd0db34d5fa5c35abee4deae2fd163a4218f003e753532e1edd20a4db12e88382c0f3342d054cba5a0d38ba8bd9be593138ae4b6404caf7373e92540f2688467b825caa89de860dccc282395d440f6f72db&type=fff264_180'
  }
  let {name, age, height, group, img} = artist
</script>
<div>
  <h1>State02) 객체 타입 State</h1>
  <h2>객체 접근 01 - 일반/동적</h2>
  <h3><img src={artist["img"]} alt="사진"></h3>
  <h3>이름 : {artist.name}</h3>
  <h3>나이 : {artist.age}</h3>
  <h3>키 : {artist.height}</h3>
  <h3>소속그룹 : {artist.group}</h3>
  <hr>
  <h2>객체 접근 02 - 구조분해할당</h2>
  <h3><img src={img} alt="사진"></h3>
  <h3>이름 : {name}</h3>
  <h3>나이 : {age}</h3>
  <h3>키 : {height}</h3>
  <h3>소속그룹 : {group}</h3>
</div>