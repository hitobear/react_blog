import { cloneDeep } from 'lodash'
import pathToRegexp from 'path-to-regexp'

export function arrayToTree(
    array,
    id = 'id',
    parentId = 'pid',
    children = 'children'
  ) {
    const result = []
    const hash = {}
    const data = cloneDeep(array)
  
    data.forEach((item, index) => {
      hash[data[index][id]] = data[index]
    })
  
    data.forEach(item => {
      const hashParent = hash[item[parentId]]
      if (hashParent) {
        !hashParent[children] && (hashParent[children] = [])
        hashParent[children].push(item)
      } else {
        result.push(item)
      }
    })
    return result
  }


  export function queryAncestors(array, current, parentId, id = 'id') {
    const result = [current]
    const hashMap = new Map()
    console.log('array')
    console.log(array)
    array.forEach(item => hashMap.set(item[id], item))
    console.log('listarray')
    console.log(hashMap)
    const getPath = current => {
      console.log('currentin..')
      console.log(current)
      const currentParentId = hashMap.get(current[id])[parentId]
      if (currentParentId) {
        console.log('currentparentid')
        console.log(currentParentId)
        result.push(hashMap.get(currentParentId))
        getPath(hashMap.get(currentParentId))
      }
    }
  
    getPath(current)
    return result
  }

  export function pathMatchRegexp(regexp, pathname) {
    return pathToRegexp(regexp).exec(pathname)
  }