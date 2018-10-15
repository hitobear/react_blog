import Publish from '../containers/publish/publish'
import Manage from '../containers/manage/manage'

export const routes = [{
    key: '管理博客',
    path: '/admin/manage',
    component: Manage
  }, {
    key: '发布博客',
    path: '/admin/publish',
    component: Publish
  }]