<template>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
		<router-link :to="{name: 'home'}" class="navbar-brand">
			<img src="../assets/img/unitylogo.png" width="30" height="30" class="d-inline-block align-top" alt="">
			GTA SA UNITY
		</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link :to="{name: 'home'}" class="nav-link">{{$t("menus.home")}}</router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{name: 'members'}" class="nav-link">{{$t("menus.members")}}</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script>
export default {
	props:['locales'],
	data: function() {
		return {
			
		};
	},
};
</script>
