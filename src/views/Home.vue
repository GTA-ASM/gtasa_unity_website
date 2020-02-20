<template>
	<div id="home" class="container-fluid">
		<div id="main" class="row justify-content-center h-100 masthead-wrapper">
			<div class="col-sm-12 col-md-10 text-center">
				<img src="https://i.imgur.com/aIojfPW.png" class="img-fluid animated slower fadeInUp" />
				<h1 class="text-uppercase text-white mt-3 animated slower fadeInRight">
					{{ $t('home_page_messages.title') }}
				</h1>
				<hr class="divider animated slower fadeInDown" />
			</div>
			<div class="col-sm-12 col-md-10 text-center my-3">
				<h4 class="text-white animated slower fadeInLeft">{{ $t('home_page_messages.brand') }}</h4>
				<a
					data-scroll
					href="#welcome"
					class="btn btn-lg btn-primary find-out px-5 mt-5 animated slower fadeInDown"
				>
					<p class="text-center mb-0">{{ $t('menus.findout_btn') }}</p>
					<i class="fas fa-chevron-down"></i>
				</a>
			</div>
		</div>
		<div id="welcome" class="row justify-content-center py-5 bg-wt shadow-lg">
			<div class="col-sm-12 text-center animated slower fadeInUp">
				<h2 class="text-uppercase">{{ $t('home_page_messages.welcome_title') }}</h2>
				<hr class="divider animated slower fadeInUp" />
			</div>
			<div class="col-sm-12 col-md-10 my-5">
				<h5 class="text-center animated slower fadeInRight">{{ $t('home_page_messages.welcomer') }}</h5>
			</div>
		</div>
		<div id="about" class="row justify-content-center py-5 bg-bk">
			<div class="col-sm-12 text-center animated slower fadeInUp">
				<h2 class="text-uppercase">{{ $t('home_page_messages.about_title') }}</h2>
				<hr class="divider animated slower fadeInUp" />
			</div>
			<div class="col-sm-12 col-md-6 my-5 px-5">
				<h5 class="text-center text-md-left animated slower fadeInRight">
					{{ $t('home_page_messages.about') }}
				</h5>
			</div>
			<div class="col-sm-12 col-md-6 my-3">
				<img
					src="https://cloud.githubusercontent.com/assets/557828/24571348/d964f098-1670-11e7-8759-0160dbf5bcb5.png"
					alt="Example Alpha Screenshot"
					class="img-fluid animated slower fadeInLeft"
				/>
			</div>
		</div>
		<div id="gallery" class="row justify-content-center py-5 bg-wt shadow-lg">
			<div class="col-sm-12 text-center animated slower fadeInUp">
				<h2 class="text-uppercase">{{ $t('home_page_messages.gallery_title') }}</h2>
				<hr class="divider animated slower fadeInUp" />
			</div>
			<div class="col-sm-10 my-5">
				<h4 class="text-center animated slower fadeInRight">{{ $t('home_page_messages.gallery.start') }}</h4>
				<div
					v-for="(row, index) in galleryBuilded"
					:key="`RowG${index}`"
					class="row justify-content-center my-4"
				>
					<div v-for="(item, i) in row" :key="`GalItem${i}`" class="col-sm-12 col-md-6 my-2">
						<img v-if="item.type == 'picture'" :src="item.source" :alt="item.alt" class="img-fluid" />
						<template v-else-if="item.type == 'video'">
							<vue-plyr v-if="item.kind == 'embed'">
								<video :poster="item.poster">
									<source :src="item.source" type="video/mp4" size="720" />
								</video>
							</vue-plyr>
							<div v-if="item.kind == 'youtube'" class="embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" :src="item.source" allowfullscreen></iframe>
							</div>
						</template>
					</div>
				</div>
			</div>
			<div class="col-sm-8 my-5">
				<hr class="divider animated slower fadeInUp" />
				<h4 class="text-center animated slower fadeInRight">{{ $t('home_page_messages.gallery.end') }}</h4>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import { items as galleryList } from '@/assets/data/gallery_list.json';
export default Vue.extend({
	name: 'Home',
	data: function() {
		return {
			galleryBuilded: [] as Array<Array<object>>,
		};
	},
	mounted: function(): void {
		this.buildGallery(galleryList);
	},
	methods: {
		buildGallery: function(galleryItems: Array<object>) {
			const chunkedItems = _.chunk(galleryItems, 2);
			this.galleryBuilded = chunkedItems;
		},
	},
});
</script>
