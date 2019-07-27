export const sessionStorage = {
  getItem (key) {
    let _r = window.sessionStorage.getItem(key)
    if (/^\{.*\}$/.test(_r)) _r = JSON.parse(_r)
    return _r
  },
  setItem (key, value) {
    if (typeof value === typeof {}) value = JSON.stringify(value)
    window.sessionStorage.setItem(key, value)
  },
  removeItem (key) {
    if (Object.prototype.toString.call(key) === '[object String]') {
      window.sessionStorage.removeItem(key)
      return
    }
    if (Object.prototype.toString.call(key) === '[object Array]' && key.length === 0) {
      window.sessionStorage.removeItem(key)
      return false
    } else {
      key.map(index => {
        window.sessionStorage.removeItem(index)
      })
    }
  }
}
export const localStorage = {
  getItem (key) {
    let _r = window.localStorage.getItem(key)
    if (/^\{.*\}$/.test(_r)) _r = JSON.parse(_r)
    return _r
  },
  setItem (key, value) {
    if (typeof value === typeof {}) value = JSON.stringify(value)
    window.localStorage.setItem(key, value)
  },
  removeItem (key) {
    if (Object.prototype.toString.call(key) === '[object String]') {
      window.localStorage.removeItem(key)
      return
    }
    if (Object.prototype.toString.call(key) === '[object Array]' && key.length === 0) {
      window.localStorage.removeItem(key)
      return false
    } else {
      key.map(index => {
        window.localStorage.removeItem(index)
      })
    }
  }
}
export const isObject = (target) => {
  return Object.prototype.toString.call(target) === '[object Object]'
}
export const merge = (...arg) => {
  if (arg.length === 0) {
    throw Error(`merge error=>请传入需要合并的对象`)
  }
  let target = arg[0] || {}
  let depath = false
  let length = arg.length
  let i = 1

  if (Object.prototype.toString.call(target) === '[object Boolean]') {
    depath = target
    target = arg[i]
    i++
  }

  if (typeof target !== 'object') {
    target = {}
  }

  if (i === 2 && length <= 1) {
    throw Error(`merge error=>请传入需要合并的对象`)
  }

  for (; i < length; i++) {
    let source = arg[i] || {}
    if (source != null) {
      for (let key in source) {
        let src = target[key]
        let copy = source[key]
        if (target === copy) {
          continue
        }
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (depath && copy && (isObject(copy) || Array.isArray(copy))) {
            let clone
            if (Array.isArray(copy)) {
              clone = src && Array.isArray(src) ? src : []
            } else {
              clone = src && isObject(src) ? src : {}
            }
            target[key] = merge(depath, clone, copy)
          } else if (copy !== void 0) {
            target[key] = copy
          }
        }
      }
    }
  }
  return target
}
