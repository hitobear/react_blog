module.exports =[{
    id:1,
    router: '/admin/manage',
    name: '管理',
    icon: 'home'
  },
  {
    id:2,
    router: '/admin/publish',
    name: '文章管理',
    icon: 'edit'
  },
  {
    id:21,
    router: '/admin/manage',
    name: '文章列表',
    icon: 'edit',
    menuParentId:2,
  },
  {
    id:22,
    router: '/admin/publish',
    name: '发布文章',
    icon: 'edit',
    menuParentId:2,
  }
]