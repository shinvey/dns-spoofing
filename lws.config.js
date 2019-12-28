// todo 设定劫持的域名。主要是确保除了指定劫持的URL，源域名被劫持后依然可以正常工作
const origin = 'https://web.example.com'

/**
 * Configuration Management
 * https://github.com/lwsjs/local-web-server/wiki/Configuration-Management
 */
module.exports = {
  /**
   * How to serve a Single Page Application (SPA)
   * https://github.com/lwsjs/local-web-server/wiki/How-to-serve-a-Single-Page-Application-(SPA)
   * SPA首页，/path/to/somewhere 此类路径全部交给index.html来处理
   * 下方的rewrite规则例外
   */
  // spa: 'index.html',
  directory: 'www', // SPA首页相对位置的目录，dist/index.html
  https: true,
  port: 443,
  rewrite: [
    // 路由规则
    {
      // todo 劫持指定URL
      from: '/api/v5/chat/chatbox(.*)',
      // 跳转到劫持页面，也可以填写外部站点的URL
      to: '/hijack/index.html'
    },
    {
      // 匹配除/hijack外的所有path，确保原域名依然可以正常工作
      from: /^((?!\/?hijack).+)$/,
      // 转发给原域名
      to: origin + '$1'
    },
  ]
}
