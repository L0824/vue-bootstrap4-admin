<template>
  <div class="modle">
    <div class="cascading-admin-card card card-cascade">
      <div class="admin-up">
        <i icon="money" class="fa" :class="icon"></i>
        <div class="data">
          <p>{{SALES}}</p>
          <h4>
             <strong>{{money}}</strong>
           </h4>
        </div>
      </div>
      <div class="card-body">
        <div class="progress">
          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar" :class='bgColor' role="progressbar" :style='{width:width}'></div>
        </div>
        <span>{{progress}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modle',
  props: ['SALES', 'money', 'progress', 'icon', 'width', 'bgColor']
}
</script>
<style>
.cascading-admin-card {
  margin: 20px 0;
}
.card {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
  font-weight: 400;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: .25rem;
}

.admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}

.cascading-admin-card .admin-up .fa {
  padding: 28px;
  font-size: 30px;
  color: #fff;
  text-align: left;
  margin-right: 10px;
  border-radius: 3px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
}

.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}

.admin-up .data p {
  color: #999999;
  font-size: 12px;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
  padding-top: 0;
}

.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: .75rem;
  background-color: #e9ecef;
  border-radius: .25rem;
  margin-bottom: 8px;
}

.card-text {
  color: #747373;
  font-size: 14px;
  font-weight: 400;
}

</style>
