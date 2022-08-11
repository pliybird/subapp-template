<!--
 * @Description: 模块
 * @Author: pliybird
 * @LastEditors: pliybird
 * @Date: 2022-08-10 17:18:01
 * @LastEditTime: 2022-08-11 10:59:19
-->
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			console.log('uview version',uni.$u.config.v)
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss"; // 导入uview全局样式
</style>
