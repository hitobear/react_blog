module.exports =[{
    id:1,
    router: '/admin/manage',
    name: '管理',
    icon: 'home'
  },
  {
    id:2,
    router: '/admin/publish',
    name: '发布',
    icon: 'edit'
  },
  {
    id:21,
    router: '/admin/publish',
    name: '发布1',
    icon: 'edit',
    menuParentId:2,
  },
  {
    id:22,
    router: '/admin/manage',
    name: '发布2',
    icon: 'edit',
    menuParentId:2,
  }
]