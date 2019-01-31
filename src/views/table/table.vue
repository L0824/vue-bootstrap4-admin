<template>
  <div class="boxTable">
    <row >
      <div class="col-xl-4 baseTable">
         <base-table></base-table>
      </div>
      <div class="col-xl-8 baseTable">
         <solt-table></solt-table>
      </div>
    </row>
      <row>
        <div class="col-xl-12 ">
           <v-table></v-table>
        </div>
    </row>
  </div>
</template>

<script>
import VTable from 'src/components/table/index'
import BaseTable from 'src/components/table/baseTable'
import SoltTable from 'src/components/table/soltTable'
export default {
  name: 'advanced-elements',
  created () {

  },
  components:{
  	VTable,
    BaseTable,
    SoltTable
  }
}
</script>

<style >
.m-portlet__head{
  position: relative;
  z-index: 2;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 22px;
  height: 66px;
}
.m-portlet__head-caption{
  display: flex;
  align-items: center;
  align-content: flex-start;
}
.m-portlet__head-title{
  display: flex;
  align-items: center;
  color: #fff;
}
.m-portlet__head-text{
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
}
.tableTitle{
    color: #34495e;
}
.baseTable table.b-table {
    margin-top: 0px;
}
.table td {
    vertical-align: middle;
    text-align: center;
}
</style>