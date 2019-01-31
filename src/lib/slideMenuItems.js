module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'item',
    icon: 'fa fa-home',
    name: 'Home',
    router: {
      name: 'home'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-edit',
    name: 'Forms',
    items: [
       {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Resource Form',
        router: {
          name: 'ResourceForm'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-bar-chart-o',
    name: 'Echart',
    items: [
       {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Echart',
        router: {
          name: 'Echart'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-table',
    name: 'Table',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'tables',
        router: {
          name: 'Table'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'tab',
        router: {
          name: 'Tab'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-map',
    name: 'Map',
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
