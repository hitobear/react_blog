module.exports =[{
    id:'1',
    router: '/admin/manage',
    name: '管理',
    icon: 'home'
  },
  {
    id:'2',
    router: '/admin/article',
    name: '文章管理',
    icon: 'edit'
  },
  {
    id:'21',
    router: '/admin/article/list',
    name: '文章列表',
    icon: 'edit',
    menuParentId:'2',
  },
  {
    id:'22',
    router: '/admin/article/publish',
    name: '发布文章',
    icon: 'edit',
    menuParentId:'2',
  },
  {
    id:'31',
    router: '/admin/manage',
    name: '文章列表',
    icon: 'edit',
    menuParentId:1,
  },
  {
    id:'32',
    router: '/admin/publish',
    name: '发布文章',
    icon: 'edit',
    menuParentId:1,
  }
]