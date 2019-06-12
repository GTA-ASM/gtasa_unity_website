<template>
  <div class="container-fluid h-100">
	  <div class="row justify-content-center h-100 mb-wrapper">
		  <div class="col-sm-12 col-md-10 text-center">
			  <img src="https://i.imgur.com/aIojfPW.png" class="img-fluid">
			  <h1 class="text-uppercase text-white mt-3">
				  {{$t('page_messages.title')}}
			  </h1>
			  <hr class="divider">
		  </div>
		  <div class="col-sm-12 col-md-10 text-center my-3">
			<h4 class="text-white">
				{{$t('page_messages.brand')}}
			</h4>
			<a data-scroll href="#welcome" class="btn btn-lg btn-primary find-out px-5 mt-5 ">
				<p class="text-center mb-0">
					{{$t('menus.findout_btn')}}
				</p>
				<i class="fas fa-chevron-down"></i>
			</a>
		  </div>
	  </div>
	  <div class="row justify-content-center py-5" id="welcome">
		  <div class="col-sm-12 text-center">
			  <h3 class="text-uppercase">Welcome!</h3>
		  </div>
	  </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2';

export default {
	name: 'home',
  
};
</script>
