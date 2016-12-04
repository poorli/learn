<template>
	<ul class="sidebar">
		<li class="sidebar-item active">
			<ul>
				<li class="sidebar-item-title">
					<p>
						<i class="icon-line-home"></i>个人中心
					</p>
				</li>
			</ul>
		</li>
		<li class="sidebar-item">
			<ul>
				<li class="sidebar-item-title">
					<p>
						<i class="icon-line-order"></i>我的饿单
					</p>
				</li>
				<ul class="sidebar-item-list">
					<li><a href="">全部饿单</a></li>
					<li><a href="">待评价饿单</a></li>
					<li><a href="">退单记录</a></li>
				</ul>
			</ul>
		</li>
		<li class="sidebar-item">
			<ul>
				<li class="sidebar-item-title">
					<p>
						<i class="icon-yen"></i>我的资产
					</p>
				</li>
				<ul class="sidebar-item-list">
					<li><a href="">我的红包</a></li>
					<li><a href="">邀请好友拿红包</a></li>
					<li><a href="">账户余额</a></li>
					<li><a href="">我的积分</a></li>
				</ul>
			</ul>
		</li>
		<li class="sidebar-item">
			<ul>
				<li class="sidebar-item-title">
					<p>
						<i class="icon-line-profile"></i>我的资料
					</p>
				</li>
				<ul class="sidebar-item-list">
					<li><a href="">地址管理</a></li>
					<li><a href="">个人资料</a></li>
					<li><a href="">饿配送会员</a></li>
					<li><a href="">安全中心</a></li>
				</ul>
			</ul>
		</li>
		<li class="sidebar-item">
			<ul>
				<li class="sidebar-item-title">
					<p>
						<i class="icon-order-favor"></i>我的收藏
					</p>
				</li>
			</ul>
		</li>
		<li class="sidebar-item">
			<ul>
				<li class="sidebar-item-title">
					<p>
						<i class="icon-mobile"></i>我的消息
					</p>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
	export default {
		components: {
		}
	}
</script>

<style lang="css" scoped>
	.sidebar {
		float: left;
		margin-top: 20px;
		width: 170px;
	}
	.sidebar-item {
		margin-bottom: 32px;
	}
	.sidebar-item.active i{
		color: #0089dc
	}
	.active {
		color: #0089dc
	}
	.sidebar-item-title {
		margin-bottom: 8px;
		font-weight: 700;
		font-size: 18px;
	}  
	.sidebar-item-title i {
		display: inline-block;
		width: 30px;
		color: #aaa;
		font-size: 16px;
		line-height: 26px;
	}
	.sidebar-item-list {
		padding-left: 30px;
	}
	.sidebar-item-list li{
		padding: 4px 0;
		
	}
	.sidebar-item-list >li >a {
		color: #666;
	}
</style>