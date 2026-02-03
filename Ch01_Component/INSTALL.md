# *[README.md](README.md)*
# *Svelte4 프로젝트 세팅*
<details>
<summary>접기/펼치기</summary>
<br>

흔히 사용되는 webpack이 아닌 rollup 기반 번들러를 내장하고 있다.  
과거에는 svelte3 ~ svelte4 버전을 REPL에서 다운받을수 있었지만 현재는 REPL 지원이 중단되었다.  
따라서 깃허브로부터 svelte3 버전을 degit(복제) 한 후 svelte4.0.0 버전으로 업그레이드 한다.  

- svelte3 공식 템플릿 복제
  ```bash
  npx degit sveltejs/template {프로젝트명}
  ```
- svelte 4 버전업
  ```bash
  npm install svelte@4.0.0
  ```
- 프로젝트 기동
  ```bash
  npm run dev
  ```
이후 해당 버전을 개인 깃에 올린 후 다시 깃으로부터 degit(복제)하여 진행한다.
```bash
npx degit svelte4-repl-template {프로젝트명}
```
</details>
