<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper">
    <!-- Content Header (Page header) -->
   <!--  <section class="content-header">
      <h1>
        Dashboard
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section> -->

    <section class="content">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
export default {
  name: 'layout',
  created () {

  }
}
</script>

<style>
 .page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
@media (min-width: 768px){
 .content-wrapper{
   margin-left: 255px;
   margin-top: 70px;
 }
 .sidebar-mini.sidebar-collapse .content-wrapper{
  margin-left: 80px !important;
 }
}

@media (max-width: 768px){
  .content-wrapper{
    margin-top: 70px;
  }
}
</style>
