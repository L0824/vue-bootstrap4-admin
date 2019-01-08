<template>
	<div class="vuestic-data-table table-responsive" :class="{'data-loading' : loading }">
		<!-- 搜索 -->
		<div class="d-flex flex-md-row flex-column align-items-center">
			<filter-bar :label="filterInputLabel" @filter="onFilterSet"></filter-bar>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
// import Vuetable from '../../../node_modules/_vuetable-2@1.7.5@vuetable-2/src/components/Vuetable'
// import VuetablePagination from '../../../node_modules/_vuetable-2@1.7.5@vuetable-2/src/components/VuetablePagination'
import FilterBar from './filterBer'
	export default{
		name:'VtableData',
		props:{
		  filterInputLabel: {
		      type: String,
		      default: 'Search'
	     }
		},
		data(){
			return{
				loading:false
			}
		},
		components:{
			FilterBar
		},
		methods:{
			onFilterSet (filterText) {
		      this.filterText = filterText
		      Vue.nextTick(() => this.$refs.vuetable.refresh())
		    }
		}
	}
</script>

<style>
.vuestic-data-table {
   min-height: 36rem;
}
</style>