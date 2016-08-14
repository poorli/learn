<template>
  <div class="track">
    <p class="track-title  tabnavigation" >
        <span class="tabnavigation-navitem active">美食足迹</span>
        <span class="tabnavigation-navitem">我的收藏</span>
    </p>
    <div>
        <div v-for="item in trackList" class="track-container">
            <a href="" class="track-list">
                <div class="track-list-item center track-left">
                <div class="track-img-container">
                    <img src="{{ item.image_path}}" class="track-img">
                </div>
                    <p>{{ item.float_minimum_order_amount }}分钟</p>    
                </div>
                <div class="track-list-item">
                    <p class="name">{{ item.name}}</p>
                    <p class="other">{{ item.piecewise_agent_fee.description}}/免费配送</p>
                    <p class="other">月售{{ item.recent_order_num }}份</p>
                    <!-- <p>{{}}</p> -->
                </div>
            </a>
        </div >
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
      trackList: [{
        "address": "北京市海淀区韩家村韩家川路121号",
        "closing_count_down": 0,
        "description": "本店已加盟饿了么！！！",
        "distance": 2431,
        "float_delivery_fee": 0,
        "float_minimum_order_amount": 10,
        "id": 674879,
        "image_path": "https://fuss10.elemecdn.com/1/e9/3ff8421a343c20b8b33e02a18ba44png.png",
        "is_new": false,
        "is_premium": false,
        "latitude": 40.034351,
        "longitude": 116.241958,
        "name": "渝乡妹子",
        "next_business_time": "09:00",
        "only_use_poi": false,
        "opening_hours": ["09:00/23:55"],
        "order_lead_time": 31,
        "phone": "18612369172",
        "piecewise_agent_fee": {
            "description": "免配送费",
            "extra_fee": 0,
            "is_extra": false,
            "rules": [{
                "fee": 0,
                "price": 10
            }]
        },
        "promotion_info": "本店已加盟饿了么！！！",
        "rating": 4.4,
        "rating_count": 51,
        "recent_order_num": 393,
        "status": 5,
        "supports": []
    }, {
        "address": "北京市海淀区韩家川东路临4号",
        "closing_count_down": 0,
        "description": "开店一年半左右时间，符合大众口味，价格公道，超级好吃！公交330路 518路 584路 特6路 968路 952路 回民公墓下车东行50米左右！303路 346路 909路 375路 384路 449路 512路  633路 651路 697路  西行200米左右！即可到店！",
        "distance": 1326,
        "float_delivery_fee": 0,
        "float_minimum_order_amount": 25,
        "id": 1228893,
        "image_path": "https://fuss10.elemecdn.com/8/b3/520c3ac362425638f70d67df1baa8jpeg.jpeg",
        "is_new": true,
        "is_premium": false,
        "latitude": 40.045125,
        "longitude": 116.248817,
        "name": "啤酒烤鸭",
        "next_business_time": "09:00",
        "only_use_poi": false,
        "opening_hours": ["09:00/21:00"],
        "order_lead_time": 24,
        "phone": "18612806456",
        "piecewise_agent_fee": {
            "description": "免配送费",
            "extra_fee": 0,
            "is_extra": false,
            "rules": [{
                "fee": 0,
                "price": 25
            }]
        },
        "promotion_info": "盛世徐福啤酒烤鸭",
        "rating": 0,
        "rating_count": 2,
        "recent_order_num": 21,
        "status": 5,
        "supports": []
    }, {
        "address": "北京市里人家酒楼",
        "closing_count_down": 0,
        "delivery_mode": {
            "color": "57A9FF",
            "id": 1,
            "is_solid": true,
            "text": "蜂鸟专送"
        },
        "description": "焦耳外卖，线上外卖销量领先品牌。",
        "distance": 26704,
        "float_delivery_fee": 4,
        "float_minimum_order_amount": 0,
        "id": 386621,
        "image_path": "https://fuss10.elemecdn.com/1/e9/3ff8421a343c20b8b33e02a18ba44png.png",
        "is_new": false,
        "is_premium": true,
        "latitude": 39.863802671481,
        "longitude": 116.46361887114,
        "name": "焦耳·川式快餐（十里河店）",
        "next_business_time": "10:00",
        "only_use_poi": false,
        "opening_hours": ["10:00/14:00", "16:00/20:00"],
        "order_lead_time": 37,
        "phone": "18311082565",
        "piecewise_agent_fee": {
            "description": "配送费¥4",
            "extra_fee": 0,
            "is_extra": false,
            "rules": [{
                "fee": 4,
                "price": 0
            }]
        },
        "promotion_info": "想吃辣，订焦耳。焦耳，地道川式快餐。直营门店超过100家，服务顾客人次超过500万。既辣又好吃，当然更受欢迎。焦耳，地道川式快餐。",
        "rating": 4.4,
        "rating_count": 540,
        "recent_order_num": 3287,
        "status": 5,
        "supports": [{
            "description": "已加入“外卖保”计划，食品安全有保障",
            "icon_color": "4B9A18",
            "icon_name": "保",
            "id": 7,
            "name": "外卖保"
        }, {
            "description": "该商家支持开发票，开票订单金额300.0元起，请在下单时填写好发票抬头",
            "icon_color": "9071CB",
            "icon_name": "票",
            "id": 4,
            "name": "开发票"
        }, {
            "description": "准时必达，超时秒赔",
            "icon_color": "57A9FF",
            "icon_name": "准",
            "id": 9,
            "name": "准时达"
        }]
    }]
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .track {
        padding: 20px 20px 0;
        background: white;
        margin-bottom: 20px;
        overflow: hidden;
    }
    .track-title {
        /*overflow: hidden;*/
    }
    .track-container {
        float: left;
        /*background: white;*/
    }
    .track-left {
        padding: 24px 18px;
    }

    .track-list {
        display: block;
        float: left;
        width: 323px;
        overflow: hidden;
    }
    .track-list-item {
        /*float: left;*/
        display: table-cell;
        /*width: 160px;*/
        vertical-align: middle;
    }
    .track-list-item .other {
        margin: 6px 0;
        color: #999;
    }    
    .track-list-item .name{
        font-size: 16px;
        font-weight: 700;
    }
    .track-img-container {
        /*display: inline-block;*/
        width: 112px;
        height: 112px;
        cursor: pointer;
        border-radius: 50%;
        margin-bottom: 5px;
    }
    .track-img {
        /*display: block;*/
        width: 112px;
        height: 112px;
        border-radius: 50%;
        
    }
    .center {
        text-align: center;
    }
</style>



