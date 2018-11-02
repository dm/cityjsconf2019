import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({store, req, isDev}) => {
  createPersistedState({
      key: 'your_key',
      paths: ['state1', 'state2',...so_on],
      storage: {
        getItem: (key) => process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie||'')[key],
        setItem: (key, value) => Cookies.set(key, value, { expires: 365, secure: !isDev }),
        removeItem: (key) => Cookies.remove(key)
      }
  })(store)
}