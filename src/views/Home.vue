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
	  <div class="row justify-content-center py-5 bg-wt shadow-lg" id="welcome">
		  <div class="col-sm-12 text-center top-reveal">
			  <h2 class="text-uppercase">{{$t('page_messages.welcome_title')}}</h2>
			  <hr class="divider top-reveal">
		  </div>
		  <div class="col-sm-12 col-md-10 my-5">
				<p class="text-center right-reveal">
					{{$t('page_messages.welcomer')}}
				</p>
		  </div>
	  </div>
	  <div class="row justify-content-center py-5 bg-bk" id="about">
		  <div class="col-sm-12 text-center top-reveal">
			  <h2 class="text-uppercase">{{$t('page_messages.about_title')}}</h2>
			  <hr class="divider top-reveal">
		  </div>
		  <div class="col-sm-12 col-md-6 my-5 px-5">
				<p class=" text-center text-md-left right-reveal">
					{{$t('page_messages.about')}}
				</p>
		  </div>
		  <div class="col-sm-12 col-md-6 my-3">
			  <img src="https://cloud.githubusercontent.com/assets/557828/24571348/d964f098-1670-11e7-8759-0160dbf5bcb5.png" alt="Example Alpha Screenshot" class="img-fluid left-reveal">
		  </div>
	  </div>
	  <div class="row justify-content-center py-5 bg-wt shadow-lg" id="gallery">
		  <div class="col-sm-12 text-center top-reveal">
			  <h2 class="text-uppercase">{{$t('page_messages.gallery_title')}}</h2>
			  <hr class="divider top-reveal">
		  </div>
		  <div class="col-sm-12 my-5">
				<p class="text-center right-reveal">
					{{$t('page_messages.gallery.start')}}
				</p>
				<div class="container-fluid">
					<div v-for="(row, index) in galleryBuilded" :key="'RowG'+index" class="row justify-content-center">
						<div v-for="(item, index) in row" :key="'GalItem'+index" class="col-sm-12 col-md-3">
							<img v-if="item.type == 'picture'" :src="item.source" :alt="item.alt" class="img-fluid">
							<template v-else-if="item.type == 'video'">
								<vue-plyr :options="{hideControls: true }" v-if="item.kind == 'embed'">
									<video poster="https://www.rockstargames.com/sanandreas/desktops/wallpapers/1600x1200/SA_guntable1600x1200.jpg">
										<source :src="item.source" type="video/mp4" size="720">
									</video>
								</vue-plyr>
								<vue-plyr :options="{hideControls: true, hideYouTubeDOMError: true }" v-if="item.kind == 'youtube'">
									<div class="plyr__video-embed">
										<iframe :src="`${item.source}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`"
											allowfullscreen allowtransparency allow="autoplay">
										</iframe>
									</div>
								</vue-plyr>
							</template>
						</div>
					</div>
				</div>
		  </div>
	  </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2';
import MixinSR from '../assets/js/VueMixins/ScrollReveal.mixin';
import Gallery from '../assets/docs/gallery-list.json';
import _ from 'lodash';
export default {
	name: 'home',
	mixins: [ MixinSR ],
	mounted: function() {
		this.$forceUpdate();
		this.updateReveal();
		this.buildGallery(Gallery);
	},
	data: function() {
		return {
			galleryBuilded: '',
		};
	},
	methods: {
		buildGallery(galleryList) {
			console.log('Gallery Build');
			const chunkedItems = _.chunk(galleryList.items, 3);
			this.galleryBuilded = chunkedItems;
		},
	},
};
</script>
