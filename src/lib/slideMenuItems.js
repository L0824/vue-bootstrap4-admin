module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'item',
    icon: 'fa fa-dashboard',
    name: '首页',
    router: {
      name: 'home'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-files-o',
    name: '控件'
  },
  {
    type: 'tree',
    icon: 'fa fa-laptop',
    name: '组件',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Sliders',
        router: {
          name: 'Sliders'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Timeline',
        router: {
          name: 'Timeline'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Modals',
        router: {
          name: 'Modals'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-edit',
    name: '表格',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '表格一',
        router: {
          name: 'AdvancedElements'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-pie-chart',
    name: '图标'
  },
  {
    type: 'tree',
    icon: 'fa fa-map',
    name: '地图',
    items: [
      {
        type: 'item',
        icon: 'fa fa-map-o',
        name: '谷歌地图',
        router: {
          name: ''
        }
      }
    ]
  }
]
