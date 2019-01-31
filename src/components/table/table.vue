<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Search：" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Per page" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table show-empty
       stacked="md"
       :items="items"
       :bordered="bordered"
       :fields="fields"
       :current-page="currentPage"
       :per-page="perPage"
       :filter="filter"
       :sort-by.sync="sortBy"
       :sort-desc.sync="sortDesc"
       :sort-direction="sortDirection"
       @filtered="onFiltered"
    >
      <template slot="name" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
      <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" class="mr-1" variant="success">
          Edior
        </b-button>
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1" variant="info">
          Info modal
        </b-button>
         <b-button size="sm" class="mr-1 " variant="danger">
          Delete
        </b-button>
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
          <!-- <b-form-select :options="pageOptions" v-model="perPage" /> -->
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>

  </b-container>
</template>

<script>
const items = [
  { 
  	ID:'01',
  	isActive: true,
    age: 40,
    dep:'政府与公共服务事业部',
    sex:'男',
    Jobtime:'2017-01-01',
    status:'在职',
    Emil:'123@qq.com',
    phone:'15111066634',
    leader:'王总', 
    name: { first: 'Dickerson', last: 'Macdonald' } 
  },
  { 
  	ID:'02',
  	isActive: false,
  	age: 21,
  	sex:'女',
  	Jobtime:'2007-06-19',
    status:'离职',
    phone:'15111066634',
    Emil:'123111@qq.com',
    leader:'王总', 
  	dep:'政府与公共服务事业部',
  	name: { first: 'Larsen', last: 'Shaw' } },
  {
  	ID:'03',
    isActive: false,
    age: 9,
    sex:'男',
    dep:'政府与公共服务事业部',
    Jobtime:'2017-01-01',
    Emil:'111123@qq.com',
    status:'在职',
    leader:'王总',
    name: { first: 'Mini', last: 'Navarro' }
    // _rowVariant: 'success'
  },
  { 
  	ID:'04',
	  isActive: false,
	  age: 89,
	  sex:'男',
	  phone:'15111066634',
    Emil:'123888@qq.com',
	  dep:'政府与公共服务事业部',
	  leader:'王总',
	  name: { first: 'Geneva', last: 'Wilson' } },
  { 
  	ID:'05',
    isActive: true, 
    age: 38,dep:'政府与公共服务事业部',
    leader:'王总',
    Emil:'1288883@qq.com',
    sex:'女',
    Jobtime:'2018-10-01',
    status:'在职',
    name: { first: 'Jami', last: 'Carney' } },
  { 
  	ID:'06',
    isActive: false, 
    age: 27,
    dep:'政府与公共服务事业部',
    leader:'王总',
    phone:'15111066634',
    sex:'女',
    Emil:'1200003@qq.com', 
    Jobtime:'2009-03-01',
    status:'离职',
    name: { first: 'Essie', last: 'Dunlap' } },
  { 
  	ID:'07',
    isActive: true, 
    age: 40, 
    dep:'政府与公共服务事业部',
    leader:'王总',
    Emil:'128876543@qq.com',
    phone:'15111066634',
    sex:'男',
    Jobtime:'2009-08-01',
    status:'离职',
    name: { first: 'Thor', last: 'Macdonald' } },
  {
  	ID:'08',
    isActive: true,
    age: 87,
    phone:'15111066634',
    sex:'男',
    Emil:'1234567823@qq.com',
    dep:'政府与公共服务事业部',
    name: { first: 'Larsen', last: 'Shaw' },
    leader:'王总',
    Jobtime:'2000-03-01',
    status:'离职',
    _cellVariants: { age: 'danger', isActive: 'warning' }
  },
  { 
  	ID:'09',
  	isActive: false, 
  	sex:'女',
  	age: 26,
  	dep:'政府与公共服务事业部',
  	leader:'王总',
  	Emil:'129876663@qq.com',
  	phone:'15111066634',
  	name: { first: 'Mitzi', last: 'Navarro' } },
  { 
  	ID:'10',
  	isActive: false, 
  	age: 22,
  	 sex:'男',
  	dep:'政府与公共服务事业部',
  	leader:'王总',
  	Emil:'1233333@qq.com',
  	phone:'15111066634', 
    status:'离职',
  	name: { first: 'Genevieve', last: 'Wilson' } },
  { 
  	ID:'11',
  	isActive: true, 
  	age: 38,
  	sex:'女',
  	dep:'政府与公共服务事业部',
  	leader:'王总', 
    status:'在职',
  	name: { first: 'John', last: 'Carney' } },
  { 
  	ID:'12',
  	isActive: false, 
  	age: 29,
  	Emil:'112333323@qq.com',
  	phone:'15111066634',
  	dep:'政府与公共服务事业部',
  	leader:'王总', 
  	name: { first: 'Dick', last: 'Dunlap' } }
]

export default {
  data () {
    return {
      items: items,
      fields: [
        { key: 'ID', label: 'ID' },
        { key: 'name', label: '姓名', sortable: true, sortDirection: 'desc' },
        { key: 'sex', label: '性别' },
        { key: 'age', label: '年龄', sortable: true, 'class': 'text-center' },
        { key: 'phone', label: '电话号码' },
        { key: 'Emil', label: '邮箱' },
        { key: 'dep', label: '部门',sortable: true },
        { key: 'Jobtime', label: '入职时间',sortable: true,sortDirection: 'desc' },
        { key: 'status', label: '状态' },
        { key: 'leader', label: '领导' },
        { key: 'actions', label: '操作' }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      bordered: true,
      modalInfo: { title: '', content: '' }
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
    info (item, index, button) {
      this.modalInfo.title = `Row index: ${index}`
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
<style>
table.b-table{
	margin-top: 15px;
}
.btn-secondary,
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:hover,
.btn-secondary.disabled, .btn-secondary:disabled
 {
	color: #fff;
	outline: none;
	background-color: #36a3f7;
	border-color:#36a3f7;
}
tr:hover{
	cursor: pointer;
}
tbody tr:hover{
	background-color:  #c3e6cb;
}
.custom-select{
  cursor: pointer;
}
.table-success, .table-success > th, .table-success > td{
	background-color: #fff;
}
.form-control:focus,.custom-select:focus{
	border: 1px solid #ced4da;
  box-shadow: none !important;
}
table.b-table > thead > tr > th,.table>tfoot>tr>td{
  text-align: center;
}
.table td{
  vertical-align: inherit;
}


</style>