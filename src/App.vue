<template>
	<div id="app">
		<img src="./assets/logo.png">
		<router-view/>
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*,
::before,
::after {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    /*清除移动端默认的 点击高亮效果*/
    -webkit-tap-highlight-color: transparent;
    /*设置所有的都是以边框开始计算宽度 百分比*/
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

:focus {
    outline: none;
}

::-moz-focus-inner {
    border-color: transparent;
}

body,
html {
    width: 100%;
    height: 100%;
}

body {
    font-size: 16px;
    color: #333;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-flow: column;
    min-height: 100vh;
}

a {
    text-decoration: none;
    color: #3e3e3e;
}

a:hover {
    text-decoration: none;
}

input {
    border: none;
    outline: none;
    /*清除移动端默认的表单样式*/
    -webkit-appearance: none;
}

input,
textarea {
    -webkit-appearance: none;
    appearance: none;
}


img {
    display: block;
    border-style: none;
}

ul,
li {
    list-style: none;
}

.w {
    width: 92%;
    margin: 0 auto;
}

.l {
    float: left;
}

.r {
    float: right;
}
</style>
