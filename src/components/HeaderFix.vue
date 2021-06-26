<template>
    <div class="container">	
		<div class="top-bar-fixed">
			<div class="top-bar-content">
				<img alt="WeatherNow logo" src="../assets/logo.svg">
			</div>
		</div>
	</div>
</template>
<script>
    export default {
        name: 'HeaderFix'   
    }
</script>

<style scoped lang="scss">

.container {
  max-width: 100%;
  position: relative;
  padding-bottom: 20px;
}

.top-bar-fixed {
	height: 55px;
  	position: fixed;
  	right: 0;
  	left: 0;
    top:0;
    /* bottom: 0; */
  	/*margin: 0 30px;*/
}

.top-bar-content {
	text-align: center;
	max-width: 100%;
  	background-color: #ffffff;
}

.top-bar-content>img {
	margin: 15px;
	width: 180px;
	height: 27px;
}


</style>
