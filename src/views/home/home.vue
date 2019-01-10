<template>
  <div class="home">
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
    <row>
      <div class="col-xl-6 col-lg-12">
        <active :activeArr='activeArr'></active>
      </div>
      <div class="col-xl-6 col-lg-12">
        <task :taskArr='taskArr'></task>
      </div>
    </row>
    <row>
      <div class="col-xl-12">
         <v-table></v-table>
      </div>
    </row>
  </div>
</template>

<script>
import Model from 'src/components/Model'
import ToDoList from 'src/components/TodoList/index'
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
    ToDoList,
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

<style>
a:hover,a:active{
  text-decoration: none !important;
}
.fa-line-chart{
  background-color: #ffbb33 !important;
}
.fa-money{
  background-color: #4285f4 !important;
}
.modle .fa-pie-chart{
  background-color: #29b6f6 !important;
}
.fa-bar-chart{
  background-color: #ff5252 !important;
}
.bg-primary {
    background-color: #4285f4 !important;
}
.bg-grey{
  background-color: #616161 !important;
}
.card{
   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .m-portlet{
    box-shadow: 0px 1px 15px 1px rgba(69,65,78,0.08);
    background-color: #fff;
  }
  .m-portlet__body{
    color: #575962;
  }
  .project{
    margin-left: 0;
    margin-right: 0;
  }
  .color{
    color: #716aca;
  }
  .colorTwo{
    color: #f4516c;
  }
  .colorThr{
    color: #34bfa3;
  }
  @media (min-width: 1025px){
    .m-portlet__head{
      height: calc(100% - 2.2rem);
    }
  }
  @media (max-width: 1200px){
    .col-xl-4{
      margin-bottom: 15px;
    }
    .m-widget2,.m-widget {
      border-bottom: 2px solid #f2f3f8;
     border-left: none !important;
   }
   .m-widget3{
     border-left: none !important;

   }
  }
</style>
