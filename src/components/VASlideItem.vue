<template>
  <router-link tag="li" v-if="router && router.name" :to="router">
    <a href="#">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container" v-show="badge">
        <small class="label pull-right" :class="[badge.type==='String'?'bg-green':'label-primary']">{{ badge.data }}</small>
      </span>
    </a>
  </router-link>
  <li :class="getType" v-else>
    {{ isHeader ? name : '' }}
    <a href="#" v-if="!isHeader">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container">
        <small v-if="badge && badge.data" class="label pull-right" :class="[badge.type==='String'?'bg-green':'label-primary']">{{ badge.data }}</small>
        <i v-else class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu" v-if="items.length > 0">
      <router-link tag="li" v-for="(item,index) in items" :data="item" :key="index" :to="item.router" v-if="item.router && item.router.name">
        <a>
          <i :class="item.icon"></i> {{ item.name }}
        </a>
      </router-link>
      <li v-else>
        <a>
          <i :class="item.icon"></i> {{ item.name }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'va-slide-item',
  props: {
    type: {
      type: String,
      default: 'item'
    },
    isHeader: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String
    },
    badge: {
      type: Object,
      default () {
        return {}
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    router: {
      type: Object,
      default () {
        return {
          name: ''
        }
      }
    },
    link: {
      type: String,
      default: ''
    }
  },
  created () {

  },
  computed: {
    getType () {
      if (this.isHeader) {
        return 'header'
      }
      return this.type === 'item' ? '' : 'treeview'
    }
  }
}
</script>

<style scoped>
.skin-blue .sidebar-menu>li.header{
  color: rgb(255, 255, 255);
}
@media (min-width: 768px){
 .sidebar-menu>li.header,.sidebar-menu>li{ 
  width: 255px; 
  } 
  .sidebar-menu>li>a{
    font-size: 16px;
  }
 .sidebar-menu>li>a,.sidebar-menu>li.header{
   padding: 25px 5px 25px 25px; 
  } 
  .treeview-menu>li>a{
    padding: 15px 5px 15px 30px;
  }
  .sidebar-mini.sidebar-collapse .sidebar-menu>li>.treeview-menu{
    z-index: 9999;
    margin-left: 25px !important;
    margin-top: 25px !important;
  }
  .sidebar-mini:not(.sidebar-mini-expand-feature).sidebar-collapse .sidebar-menu>li:hover>a>span{
    top: 10px;
    margin-left: 20px;
  }
  .sidebar-mini:not(.sidebar-mini-expand-feature).sidebar-collapse .sidebar-menu>li:hover>a>.pull-right-container{
    left: -25px !important;
    top: -4px !important;
  }
}
.skin-blue .sidebar-menu>li:hover>a, .skin-blue .sidebar-menu>li.active>a {
    color: #fff;
    background: #1e282c;
    border-left-color: #3c8dbc;
}

 @media (max-width: 767px){
  .sidebar-menu>li.header,.sidebar-menu>li>a{
   padding: 20px 5px 20px 20px;
  }
  .treeview-menu>li>a{
    padding: 15px 5px 15px 30px;
  }
 }

</style>
