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
    name: 'Forms'
  },
  {
    type: 'tree',
    icon: 'fa fa-clone',
    name: 'Page',
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
    icon: 'fa fa-table',
    name: 'Table',
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
    name: 'Icons'
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
