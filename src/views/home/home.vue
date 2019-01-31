<template>
  <div class="home">
    <!-- 头部 -->
    <row>
     <div class="col-lg-3 col-xs-6">
       <model
        bgColor='bg-primary'
        icon="fa-money"
        SALES="SALES"
        money="800"
        width='45%'
        progress='Better than last week (45%)'
       >
       </model>
     </div>
      <div class="col-lg-3 col-xs-6">
       <model
        bgColor='bg-grey'
        icon="fa-line-chart"
        SALES="SUBSCRIP"
        money="200"
        width='25%'
        progress='Worse than last week (25%)'
       >
       </model>
     </div>
      <div class="col-lg-3 col-xs-6">
       <model
        bgColor='bg-grey'
        icon="fa-pie-chart"
        SALES="TRAFFIC"
        money="18000"
        width='75%'
        progress='Better than last week (75%)'
       >
       </model>
     </div>
      <div class="col-lg-3 col-xs-6">
       <model
        bgColor='bg-primary'
        icon="fa-bar-chart"
        SALES="ORGANIC"
        money="2000"
        width='25%'
        progress='Better than last week (25%)'
       >
       </model>
     </div>
    </row>
    <!-- list -->
    <div class="m-portlet" style="margin-bottom:15px;">
      <div class="m-portlet__body">
        <row class='project'>
          <div class="col-xl-4">
            <v-project-one :widgetArr='widgetArr'></v-project-one>
          </div>
           <div class="col-xl-4">
            <v-project-two title='project name' desc='Check out each collumn for more details'></v-project-two>
          </div>
          <div class="col-xl-4">
            <v-project-thr title='project name' desc='Check out each collumn for more details'></v-project-thr>
          </div>
        </row>
      </div>
    </div>
    <!-- 三大项目 -->
    <row>
       <div class="col-xl-4">
         <card-box-one></card-box-one>
       </div>
       <div class="col-xl-4">
         <card-box-two></card-box-two>
       </div>
       <div class="col-xl-4">
         <card-box-thr></card-box-thr>
       </div>
    </row>
    <!-- 时间线 -->
    <row>
      <div class="col-xl-6 col-lg-12">
        <active :activeArr='activeArr'></active>
      </div>
      <div class="col-xl-6 col-lg-12">
        <task :taskArr='taskArr'></task>
      </div>
    </row>
    <!-- 表格 -->
    <row>
      <div class="col-xl-12">
         <v-table></v-table>
      </div>
    </row>
  </div>
</template>

<script>
import Model from 'src/components/Model'
import VProjectOne from 'src/components/Project/ProjectOne'
import VProjectTwo from 'src/components/Project/projectTwo'
import VProjectThr from 'src/components/Project/ProjectThr'
import CardBoxOne from 'src/components/cardBox/cradBoxOne'
import CardBoxTwo from 'src/components/cardBox/cardBoxTwo'
import CardBoxThr from 'src/components/cardBox/cardBoxThr'
import Active from "../layout/active/active"
import Task from "../layout/active/task"
import VTable from "src/components/table/index"
export default {
  name: 'home',
  components:{
    Model,
    VProjectOne,
    VProjectTwo,
    VProjectThr,
    CardBoxOne,
    CardBoxTwo,
    CardBoxThr,
    Active,
    Task,
    VTable
  },
  data(){
    return{
      widgetArr:[
         {
           title:'Member Profit',
           desc:'Awerage Weekly Profit',
           number:"+$2,000",
           color:'color'
         },
         {
           title:'Orders',
           desc:'Weekly Customer Orderst',
           number:"-180,000",
           color:'colorTwo'
         },
         {
           title:'Issue Reportst',
           desc:'System bugs and issues',
           number:"22,000",
           color:'colorThr'
         }
      ],
      taskArr:[
       {
        time:'09:00',
        className:'line-info',
        desc:' Lorem ipsum dolor sit amit,consectetur eiusmdd tempor ',
        user:'By Bob'
       },
       {
        time:'10:00',
        className:'line-warn',
        desc:' Lorem ipsum dolor sit amit',
        user:'By Sram'
       },
       {
        time:'11:00',
        className:'line-succes',
        desc:' Lorem ipsum dolor',
        user:'By Lay'
       },
       {
        time:'13:00',
        className:'line-danger',
        desc:' Good Good study,Day Day Up',
        user:'By JJ'
       },
       {
        time:'14:00',
        className:'line-info',
        desc:' Lorem ipsum dolor sit amit,consectetur eiusmdd tempor ',
        user:'By Bob'
       },
       {
        time:'15:00',
        className:'line-warn',
        desc:' Lorem ipsum dolor sit amit',
        user:'By Sram'
       },
       {
        time:'18:00',
        className:'line-danger',
        desc:' Good Good study,Day Day Up',
        user:'By JJ'
       }
      ],
      activeArr:[
        {
          className:'line-info',
          desc:'Make Metronic Great Again.Lorem Ipsum Amet',
          user:'By JJ'
        },
        {
          className:'line-danger',
          desc:'Placed a new order in SIGNATURE MOBILE marketplace.',
          user:'By Kimi'
        },
        {
          className:'line-succes',
          desc:'Production server up',
          user:'By LOG'
        },
        {
          className:'line-info',
          desc:'Make Deposit USD 700 To ESL.',
          user:'By baby'
        },
        {
          className:'line-danger',
          desc:'Make Metronic Great Again',
          user:'By Lay'
        },
        {
          className:'line-warn',
          desc:'Completa Financial Report For Emirates Airlines',
          user:'By Bob'
        }
      ]
    }
  },
  methods: {
  }
}
</script>