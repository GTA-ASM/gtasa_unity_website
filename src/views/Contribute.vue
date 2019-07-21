<template>
    <div class="container-fluid h-100">
        <div class="row justify-content-center py-5 bg-wt shadow-lg">
            <div class="col-sm-12 text-center top-reveal">
                <h2 class="text-uppercase">{{$t('contribute_page_messages.title')}}</h2>
                <hr class="divider top-reveal">
            </div>
            <div class="col-sm-12 col-md-10 my-5">
                <h5 class="text-center right-reveal">
                    {{$t('contribute_page_messages.main_text')}}
                </h5>
            </div>
        </div>
    </div>
</template>
<script>
import MixinSR from '../assets/js/VueMixins/ScrollReveal.mixin';
export default {
	name: 'contribute',
	mixins: [MixinSR],
	mounted: function() {
		this.$forceUpdate();
		this.updateReveal();
	},
};
</script>
