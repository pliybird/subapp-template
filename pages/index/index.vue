<!--
 * @Description: 模块
 * @Author: pliybird
 * @LastEditors: pliybird
 * @Date: 2022-08-10 17:18:01
 * @LastEditTime: 2022-08-12 14:36:08
-->
<template>
	<view class="content">
		<nav-bar ref="navBar" backState="2000" homeState="3000" type="fixed">
			{{$t('competitor.title')}}
			<view style="margin-left:50upx" @click="switchLang">
				{{$t('lang.intro')}} 
			</view>
		</nav-bar>
		<view class="search">
			<u-search placeholder="竞争对手名称" placeholderColor="#CCCCCC" :showAction="false" shape="square" :clearabled="true" v-model="keyword"></u-search>
		</view>
		<view>
			<text>{{vuex_page_title}}</text>
			<text style="margin-left: 100upx;" @click="modifyVuex">点击通过vuex修改变量</text>
		</view>
		<view class="list-box">
			<view class="item" v-for="item in listData" :key="item.id">
				<view class="img"></view>
				<view class="info">
					<text class="name">{{item.name}}</text>
					<text class="remark">{{item.url}}</text>
					<text class="remark">{{item.address}}</text>
				</view>
				<view class="action">
					<u-icon name="more-dot-fill" color="#000000"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getCompetitorList } from '@/common/config/api.js';
	import navBar from '@/components/vyung-navBar/index.vue'
	export default {
		components:{
			navBar
		},
		data() {
			return {
				listData:[],
				keyword:'',
			}
		},
	
		onLoad() {
			this.getCompetitorList()
		},
		methods: {
			// 获取竞争对手列表
			getCompetitorList(){
				getCompetitorList().then(data=>{
					console.log("res======",data)
					this.listData = data
				})
			},
			// 切换多语言
			switchLang() {
				console.log(this.$i18n.locale )
				if(this.$i18n.locale === 'en'){
					// 设置中文
					this.$i18n.locale = 'zh'
					this.$u.toast('已切换至中文')
				}else{
					// 切换为英文
					this.$i18n.locale = 'en';
					this.$u.toast('Switched to English')
				}
			},
			// vuex修改store
			modifyVuex(){
				this.$u.vuex('vuex_page_title', '变量已修改');
				this.$u.toast('值已修改')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.search{
			width: 100%;
			padding:20upx 30upx;
			box-sizing: border-box;
		}
	}
	.list-box{
		width: 100%;
		.item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 40upx 30upx;
			border-bottom: 1px solid #EEEEEE;
			&:last-child{
				border-bottom: none;
			}
			.img{
				width: 100upx;
				height: 100upx;
				max-width: 100upx;
				background-color: rgba(0, 102, 255, .1);
				.name{
					font-size: 28upx;
					color: #333333;
				}
				.remark{
					font-size: 24upx;
					color: #606172;
				}
			}
			.info{
				display: flex;
				flex-direction: column;
				margin-left: 20upx;
				margin-right: 20upx;
				flex:1
			}
		}
	}
</style>
