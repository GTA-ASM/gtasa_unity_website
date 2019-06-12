<template>
  <div class="container-fluid h-100">
	  <div class="row justify-content-center h-100 masthead-wrapper" id="main">
		  <div class="col-sm-12 col-md-10 text-center">
			  <img src="https://i.imgur.com/aIojfPW.png" class="img-fluid top-reveal">
			  <h1 class="text-uppercase text-white mt-3 right-reveal">
				  {{$t('page_messages.title')}}
			  </h1>
			  <hr class="divider bot-reveal">
		  </div>
		  <div class="col-sm-12 col-md-10 text-center my-3">
			<h4 class="text-white left-reveal">
				{{$t('page_messages.brand')}}
			</h4>
			<a data-scroll href="#welcome" class="btn btn-lg btn-primary find-out px-5 mt-5 bot-reveal">
				<p class="text-center mb-0">
					{{$t('menus.findout_btn')}}
				</p>
				<i class="fas fa-chevron-down"></i>
			</a>
		  </div>
	  </div>
	  <div class="row justify-content-center py-5" id="welcome">
		  <div class="col-sm-12 text-center top-reveal">
			  <h2 class="text-uppercase">{{$t('page_messages.welcome_title')}}</h2>
		  </div>
		  <div class="col-sm-12 col-md-10 my-5">
				<hr class="divider top-reveal">
				<p class="text-center right-reveal">
					{{$t('page_messages.welcomer')}}
				</p>
		  </div>
	  </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2';
import MixinSR from '../assets/js/VueMixins/ScrollReveal.mixin';
export default {
	name: 'home',
	mixins: [ MixinSR ],
	mounted: function() {
		this.$forceUpdate();
		this.updateReveal();
	},
};
</script>
