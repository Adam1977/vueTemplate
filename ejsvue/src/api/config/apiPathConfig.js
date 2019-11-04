/**
 * API 路径前缀配置
 * dev  本地测试环境api前缀
 * test 正式环境中的测试包api前缀
 * prod 正式环境中的api前缀
 * 可另自定义名称
 */
export default {
  apiA: {
    // 走代理
    dev: '/api',
    // 不走代理，后台需处理跨域
    // dev: 'http://localhost:3000',
    test: 'http://localhost:3000/apiA',
    prod: 'http://localhost:3000/apiA'
  },
  apiB: {
    dev: 'http://localhost:3000/apiB',
    test: 'http://localhost:3000/apiB',
    prod: 'http://localhost:3000/apiB'
  }
}
