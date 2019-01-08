<template>
	<div class="form-group with-icon-left">
		<div class="input-group">
			<input id="input-icon-left" name="input-icon-left" v-model="filterText"  @keyup="doFilter()" required/>
			<i class="fa fa-search icon-left input-icon search-icon"></i>
			<label class="control-label" for="input-icon-left">{{label}}</label><i class="bar"></i>
		</div>
	</div>
</template>

<script>
export default{
	 name: 'filterBar',
	 props: {
	    label: {
	      type: String
	    }
	  },
	 data(){
	  return{
 		filterText:'',
	 	typingTimeout:'',
        typingDelay:250
	  }
	 },
	 methods:{
      doFilter() {
        this.typingTimeout && clearTimeout(this.typingTimeout)
        this.typingTimeout = setTimeout(() => this.$emit('filter', this.filterText), this.typingDelay)
    }
  }
}
</script>

<style>
.form-group{
	position: relative;
	display: flex;
	flex-direction: row;
	min-height: 2.25rem;
	margin-top: .2rem;
}
.form-group .input-group {
    align-self: flex-end;
}
.form-group input {
    display: block;
    background: none;
    padding: .125rem .125rem .0625rem;
    font-size: 1rem;
    border-width: 0;
    border-color: transparent;
    line-height: 1.9;
    width: 100%;
    transition: all .28s ease;
    box-shadow: none;
    padding-left: 20px;
}
.form-group .input-icon {
    position: absolute;
    top: .4375rem;
    color: #b3b3b3;
}
.form-group .control-label {
    position: absolute;
    top: .25rem;
    left: 0;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    pointer-events: none;
    z-index: 1;
    color: #b3b3b3;
    font-size: 1rem;
    font-weight: 400;
    transition: all .28s ease;
    padding-left: 20px;
}
.form-group .bar {
    position: relative;
    border-bottom: .0625rem solid #999;
    display: block;
    width: 100%;
}
.form-group .bar:after {
    content: "";
    height: .125rem;
    width: 0;
    left: 50%;
    bottom: -.0625rem;
    position: absolute;
    background: #555;
    transition: left .28s ease,width .28s ease;
    z-index: 2;
}
.search-icon {
    transform: rotate(90deg);
  }

  .form-group {
    min-width: 7rem;
  }

</style>