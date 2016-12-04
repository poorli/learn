<template>
	<div class="info">
        <div class="info-right">
            <div class="info-item">
                <a href="" class="">
                    <p>我的红包</p>
                    <p class="hongbao">
                        <span class="number">{{ info.balance }}</span>个
                    </p>
                </a>
                <a href="" class="btn stress">邀请拿红包</a>
            </div>
            <div class="info-item">
                <a href="">
                    <p>我的积分</p>
                    <p class="score">
                        <span class="number">{{ info.point }}</span>分
                    </p>
                </a>
                <a href="" class="btn">兑换礼物</a>
            </div>
            <div class="info-item">
                <a href="">
                    <p>账户余额</p>
                    <p class="balance">
                        <span class="number">{{ info.current_invoice_id }}</span>元
                    </p>
                </a>
                <a href="" class="btn">充值</a>
            </div> 
        </div>
        <div class="info-item info-main info-left">
            <div class="head">
                <img src="https://static11.elemecdn.com/eleme/desktop/media/img/default-avatar.38e40d.png">
            </div>
            <div class="">
                <p class="info-name">早上好，<strong>{{ info.username }}</strong> </p>
                <p class="info-hello">早餐吃得好， 全天没烦恼！</p>
                <p class="info-security">账号安全：{{ info.range }} <a href="" class="link">提升等级</a></p>
                <p>
                    <a href=""></a>
                    <a href=""></a>
                </p>
            </div>
        </div>
        

    </div>
</template>

<script>
    export default {
      data () {
        return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      info: {
        current_address_id: 31813819,
        balance: 0,
        point: 70,
        email: '',
        range: '高',
        is_email_valid: false,
        mobile: '13381216414',
        is_mobile_valid: true,
        avatar: '',
        current_invoice_id: 0,
        user_id: 17138642,
        payment_quota: 50,
        referal_code: 'aj16d',
        username: '31d95289e',
        is_active: true,
        brand_member: false,
        brand_member_new: 0
    }
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		color: #42b983;
	}
    .btn {
        display: inline-block;
        width: 120px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #eee;
        border-radius: 1px;
        color: #666;
    }
    .stress {
        border-color: #f74342;
        background-color: #f74342;
        color: #fff;
    }
    .info {
        overflow: hidden;
        padding: 20px 20px;
        background: white;
        margin-bottom: 20px;
    }
    .info-left{
        overflow: hidden;
    }
    .info-name {
        font-size: 16px;
        max-width: 190px;
        font-weight: 400;
    }
    .info-name strong{
        /*font-weight: 700;*/
    }
    .info-hello {
        margin: 6px 0 10px;
        color: #999;
        font-size: 12px;
        font-weight: 400;
    }
    .hongbao {
        color: #fc463f;
    }
    .score {
        color: #5db423;
    }
    .balance {
        color: #ff9c00;
    }
    .info-security {
        margin-bottom: 20px;
        font-size: 12px;
    }
    .info-left > div {
        /*float: left;*/
    }
    .info-right {
        float: right;

    }
    .info-right .info-item {
        /*float: right;*/
        width: 203px;
        text-align: center;
        border-left: 1px solid #eee;
    }
    .info-item.info-main {
        /*width: auto;*/
        /*text-align: left;*/
    }
    .info-main > div {
        /*float: right;*/
        /*display: inline-block;*/
        display: table-cell;
        vertical-align: middle;
    }
    .info-item {
        /*float: left;*/
        display: table-cell;
        vertical-align: middle;
        height: 112px;
        
    }
    .head {
        /*position: relative;*/
        /*display: none;*/
        display: inline-block;
        width: 112px;
        height: 112px;
        cursor: pointer;
        border-radius: 50%;
        /*overflow: hidden;*/
    }
    .head img{
        width: 112px;
        height: 112px;
        border-radius: 50%;
        margin-right: 20px;
    }
    .number {
        font-weight: 600;
        font-size: 30px;
        height: 60px;
        line-height: 60px;
    }
</style>