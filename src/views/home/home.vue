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
    <row>
      <div class="col-xl-4 ">
         <v-user-box blog='Blog'> </v-user-box>
      </div>
      <div class="col-xl-4">
        <v-card-info 
          ProjectName='Project Name'
          :des='des '
        >
        </v-card-info>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <piechart></piechart>
           <div class="links-light profile-card-footer card-footer">
            <span class="right" style="text-align:center;display:inline-block;">
              <a href="" class="p-a" >More Info Charts</a>
              <i class="fa fa-photo"></i>
            </span>
          </div>
        </div>
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
       <div class="col-xl-4"></div>
    </row>
  </div>
</template>

<script>
import VUserBox from 'src/components/UserBox'
import Model from 'src/components/Model'
import VCardInfo from 'src/components/CardInfo'
import ToDoList from 'src/components/TodoList/index'
import piechart from 'src/components/PieChart'
import VProjectOne from 'src/components/Project/ProjectOne'
import VProjectTwo from 'src/components/Project/projectTwo'
import VProjectThr from 'src/components/Project/ProjectThr'
import CardBoxOne from 'src/components/cardBox/cradBoxOne'
import CardBoxTwo from 'src/components/cardBox/cardBoxTwo'
export default {
  name: 'home',
  components:{
  	VUserBox,
    Model,
    VCardInfo,
    ToDoList,
    piechart,
    VProjectOne,
    VProjectTwo,
    VProjectThr,
    CardBoxOne,
    CardBoxTwo
  },
  data(){
    return{
      des:'Some quick example text to build on the card title and make up the bulk of the cards content.',
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
</style>
