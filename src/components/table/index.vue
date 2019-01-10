<template>
	<div class="m-portlet m-portlet--mobile tableBox">
		<div class="m-portlet__head tableHead">
			<div class="m-portlet__head-caption">
				<div class="m-portlet__head-title">
					<h3 class="m-portlet__head-text tableTitle">Search & Paginations</h3>
				</div>
			</div>
		</div>
		<div class="m-portlet__body">
			<v-table-data></v-table-data>
		</div>
	</div>
</template>

<script>
import VTableData from './table'
	export default{
		name:'Vtable',
		components:{
			VTableData
		}
	}
</script>

<style scoped>
	.tableBox{
		width: 100%;
	}
	.tableTitle{
		color: #34495e;
	}
	.tableHead{
		border-bottom: 1px solid #ebedf2;
	}
	.m-portlet__body{
		padding:22px 30px ;
	}
</style>