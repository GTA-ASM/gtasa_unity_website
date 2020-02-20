<template>
	<footer id="appFooter" class="container-fluid bg-bk py-5">
		<div class="row justify-content-center py-2">
			<div class="col-md-4 col-sm-12">
				<h3 class="text-center animated fadeInLeft slow">
					<a class="text-white" href="https://discordapp.com/invite/p6jjud5">
						<i class="fab fa-discord"></i>
						{{ $t('menus.footer.discord') }}
					</a>
				</h3>
			</div>
			<div class="col-md-4 col-sm-12">
				<h3 class="text-center animated fadeInUp slow">
					<a class="text-white" href="https://github.com/GTA-ASM/SanAndreasUnity">
						<i class="fab fa-github"></i>
						{{ $t('menus.footer.github') }}
					</a>
				</h3>
			</div>
			<div class="col-md-4 col-sm-12">
				<h3 class="text-center animated fadeInRight slow">
					<a class="text-white" href="https://www.youtube.com/channel/UCsslP7vqD06AMh6JlEy0pkg">
						<i class="fab fa-youtube"></i>
						{{ $t('menus.footer.youtube') }}
					</a>
				</h3>
			</div>
			<div class="col-md-8 col-sm-12 my-5">
				<h4 class="text-white text-center animated fadeInDown slow">Copyright GTA-ASM &copy; 2020</h4>
			</div>
		</div>
		<div class="row justify-content-center py-3 px-2">
			<div class="col-md-8 col-sm-12">
				<h5 class="text-muted text-center animated fadeInDown slow">{{ $t('menus.footer.legal') }}</h5>
			</div>
		</div>
	</footer>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'Footer',
});
</script>
