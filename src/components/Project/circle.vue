<template>
  <div class="" :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from 'src/lib/utils'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '160px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data:['one','two','three','four']
            },
            graphic:{
              type:"text",
              left:"center",
              top:"center",
              z:2,
              zlevel:100,
              style:{
                  text:"类型",
                  textAlign:"center",
                  fill:"#000",
                  fontSize: '100%'
              }

          },
            color:['#e56b59', '#f1a92c','#f1e817','#45c6eb'],
            series: [
                {   
                    type:'pie',
                    radius: ['70%', '100%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    data:[
                        {value:111.3,name:'one'},
                        {value:100.75,name:'two'},
                        {value:75.4,name:'three'},
                        {value:54.3,name:'four'}
                    ]
                }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          })
    }
  }
}
</script>

<style>
  .chart{
    background-color: #fff;
  }
</style>
