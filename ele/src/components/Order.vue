<template>
    <div class="order">
        <p class="tabnavigation">
            <a class="tabnavigation-navitem active">最近订单</a>
            <a href="" class="tabnavigation-navitem">待评价饿单</a>
            <a href="" class="look">查看全部订单></a>
        </p>
        <div class="order-restaurant">
            <div v-for='item in orderList' class=" order-list">
                <div class="order-right">
                 <div class="order-list-item time">
                     <p>{{ item.created_date }}</p>
                     <p>{{ item.created_time }}</p>
                 </div>
                 <div class="order-list-item play">
                     <p class="total">{{ item.total }}</p>
                     <p class="type">{{ item.pay_method }}</p>
                 </div>
                 <div class="order-list-item status">
                     <p>订单已完成</p>
                     <a href='' class="link">订单详情</a>
                 </div> 
             </div>
             <div class="order-left order-list-item title">
                <a href=''>
                    <img src='{{ item.restaurant.image_path}}' class="order-list-logo">
                </a>
                <div class="order-content">
                    <p><a href="" class="name"> {{ item.restaurant_name }} </a></p>
                    <p>
                        <span v-for="group in item.basket.group[0]">
                            <a>{{ group.name }}{{ group.quantity }}份</a>
                        </span >
                    </p>    
                    <p>共<span class="count">2</span>个菜品></p>
                </div>              
            </div>
        </div>    
    </div>

</div>
</div>
</template>
<script>
    export default {
      data() {
        return {
            orderList: [
            {
                id: 100938899510202600,
                restaurant_id: 386621,
                restaurant_name: "焦耳外卖（十里河店）",
                user_id: 17138642,
                user_name: "31d95289e",
                total: 10.2,
                deliver_fee: 2,
                is_online_paid: 1,
                settled_at: "2016-07-19T17:31:24+0800",
                address: "北京工业大学平乐园100号四号楼",
                phone: "13381216414",
                description: "",
                unique_id: "100938899510202596",
                status_code: 11,
                refund_status: 0,
                is_book: 0,
                deliver_time: "",
                created_date: "2016-07-17",
                created_time: "16:23:29",
                invoice: "",
                active_at: "2016-07-17T16:24:10+0800",
                consignee: "李勇",
                is_cancelable: false,
                complaint_status: 0,
                is_refund_valid: 0,
                is_phone_refund_valid: 0,
                is_rateable: false,
                rateable_text: "当前订单不可点评",
                phone_bk: "",
                is_co_order: false,
                pay_method: "在线支付",
                rate_status: 2,
                deliver_time_text: "尽快送出",
                timeline_status_name: "DELIVERED",
                pay_expired_time: "",
                delivery_type_text: "",
                has_courier_info: false,
                courier_name: "",
                courier_phone: "",
                courier_avatar: "",
                is_deliver_station: false,
                delivery_type: "",
                is_time_spent_rateable: true,
                is_rider_rateable: false,
                delivery_type_color: "",
                basket: {
                    abandoned_extra: [
                    {
                        description: "已享受更优惠活动",
                        name: "在线支付立减优惠",
                        price: -10,
                        id: 11052963,
                        category_id: 12,
                        type: 102,
                        stats_quantity: 1,
                        quantity: 1
                    }
                    ],
                    is_new_user: false,
                    risk: [ ],
                    extra: [
                    {
                        description: "特价双拼12.9元",
                        name: "(不与其它活动同享)特价双拼12.9元",
                        price: -13.1,
                        id: 1147200,
                        category_id: 11,
                        type: 4,
                        stats_quantity: 1,
                        quantity: 1
                    },
                    {
                        description: "",
                        price: 1,
                        name: "餐盒费",
                        category_id: 102,
                        id: -70000,
                        quantity: 1
                    },
                    {
                        description: "",
                        price: 2,
                        name: "配送费",
                        category_id: 2,
                        id: -10,
                        quantity: 1
                    },
                    {
                        description: "",
                        quantity: 1,
                        price: -5.7,
                        category_id: 13,
                        type: 0,
                        id: 939737703620,
                        name: "使用红包"
                    }
                    ],
                    not_new_user_reason: 1,
                    phone: "13381216414",
                    hongbao: {
                        new_user_only: false,
                        exclusive_with_activity: false,
                        id: 939737703620
                    },
                    cart_id: "b6a989364bf711e68c7858605f24217a",
                    come_from: "android",
                    group: [
                    [
                    {
                        category_id: 2,
                        name: "小炒肉/鲜椒鸡蛋双拼饭",
                        price: 26,
                        sale_mode: 0,
                        id: 62490520,
                        garnish: [ ],
                        specs: [ ],
                        quantity: 1
                    }
                    ]
                    ],
                    daily_promotion_used_count: 0,
                    payment_constitution: {
                        amount: 0,
                        records: [ ]
                    }
                },
                restaurant: {
                    id: 386621,
                    name: "焦耳·川式快餐（十里河店）",
                    latitude: 39.863802671481,
                    longitude: 116.46361887114,
                    description: "焦耳外卖，线上外卖销量领先品牌。",
                    phone: "18311082565",
                    order_mode: 6,
                    promotion_info: "想吃辣，订焦耳。焦耳，地道川式快餐。直营门店超过100家，服务顾客人次超过500万。既辣又好吃，当然更受欢迎。焦耳，地道川式快餐。",
                    name_for_url: "slhjewm",
                    flavors: "",
                    is_time_ensure: false,
                    is_premium: true,
                    time_ensure_full_description: "",
                    recent_order_num: 3287,
                    image_path: "https://fuss10.elemecdn.com/1/e9/3ff8421a343c20b8b33e02a18ba44png.png",
                    is_free_delivery: false,
                    minimum_order_amount: 0,
                    order_lead_time: 37,
                    is_support_invoice: true,
                    is_new: false,
                    is_third_party_delivery: false,
                    is_in_book_time: true,
                    rating_count: 540,
                    address: "北京市里人家酒楼",
                    month_sales: 4213,
                    delivery_fee: 4,
                    minimum_free_delivery_amount: 0,
                    minimum_order_description: "",
                    minimum_invoice_amount: 300,
                    is_open_time: false,
                    opening_hours: [
                    "10:00/14:00",
                    "16:00/20:00"
                    ],
                    book_times: [
                    "10:30:00",
                    "10:45:00",
                    "11:00:00",
                    "11:15:00",
                    "11:30:00",
                    "11:45:00",
                    "12:00:00",
                    "12:15:00",
                    "12:30:00",
                    "12:45:00",
                    "13:00:00",
                    "13:15:00",
                    "13:30:00",
                    "13:45:00",
                    "16:30:00",
                    "16:45:00",
                    "17:00:00",
                    "17:15:00",
                    "17:30:00",
                    "17:45:00",
                    "18:00:00",
                    "18:15:00",
                    "18:30:00",
                    "18:45:00",
                    "19:00:00",
                    "19:15:00",
                    "19:30:00",
                    "19:45:00"
                    ],
                    is_online_payment: true,
                    status: 5,
                    distance: null,
                    supports: [
                    {
                        id: 7,
                        name: "外卖保",
                        description: "已加入“外卖保”计划，食品安全有保障",
                        icon_color: "4B9A18",
                        icon_name: "保"
                    },
                    {
                        id: 3,
                        name: "在线支付",
                        description: "可使用支付宝、微信、手机QQ进行在线支付",
                        icon_color: "FF4E00",
                        icon_name: "付"
                    },
                    {
                        id: 4,
                        name: "开发票",
                        description: "该商家支持开发票，开票订单金额300元起，请在下单时填写好发票抬头",
                        icon_color: "9071CB",
                        icon_name: "票"
                    }
                    ],
                    food_tips: "(540) 月售4213份",
                    restaurant_tips: "0元起送 / 37分钟 / ",
                    next_business_time: "10:00",
                    is_coupon_enabled: false,
                    is_insurance: true,
                    delivery_mode: {
                        id: 1,
                        text: "蜂鸟专送",
                        color: "4CA9FF",
                        is_solid: true
                    },
                    business_district: "",
                    only_use_poi: true,
                    closing_count_down: 0
                },
                order_rate: {
                    time_spent: 0,
                    service_rating: 0,
                    service_rating_text: "",
                    service_reply_text: "",
                    service_reply_time: "",
                    rider_rating: 0,
                    rider_rating_text: "",
                    time_spent_text: "准时送达",
                    time_spent_point: 10,
                    service_rating_point: 10,
                    total_rating_point: 30,
                    rated_point: 0,
                    is_all_rated: false,
                    point_explain_url: "eleme://web?url=https%3A%2F%2Fm.ele.me%2Fprofile%2Fexplain%2Fpointtext&animation_type=1",
                    rider_point: 10,
                    rider_rates: {
                        rating_text: "",
                        rating_item: [ ]
                    }
                }
            },
            {
                id: 100935762067002100,
                restaurant_id: 734295,
                restaurant_name: "成都美食",
                user_id: 17138642,
                user_name: "31d95289e",
                total: 57,
                deliver_fee: 4,
                is_online_paid: 1,
                settled_at: "2016-07-18T20:16:46+0800",
                address: "北京工业大学平乐园100号四号楼",
                phone: "13381216414",
                description: "",
                unique_id: "100935762067002102",
                status_code: 11,
                refund_status: 0,
                is_book: 0,
                deliver_time: "",
                created_date: "2016-07-16",
                created_time: "19:01:48",
                invoice: "",
                active_at: "2016-07-16T19:03:06+0800",
                consignee: "李勇",
                is_cancelable: false,
                complaint_status: 0,
                is_refund_valid: 1,
                is_phone_refund_valid: 0,
                is_rateable: false,
                rateable_text: "当前订单不可点评",
                phone_bk: "",
                is_co_order: false,
                pay_method: "在线支付",
                rate_status: 2,
                deliver_time_text: "尽快送出",
                timeline_status_name: "DELIVERED",
                pay_expired_time: "",
                delivery_type_text: "",
                has_courier_info: false,
                courier_name: "",
                courier_phone: "",
                courier_avatar: "",
                is_deliver_station: false,
                delivery_type: "",
                is_time_spent_rateable: true,
                is_rider_rateable: false,
                delivery_type_color: "",
                basket: {
                    abandoned_extra: [ ],
                    is_new_user: false,
                    risk: [ ],
                    extra: [
                    {
                        description: "",
                        name: "在线支付立减优惠",
                        price: -12,
                        id: 10687389,
                        category_id: 12,
                        type: 102,
                        stats_quantity: 1,
                        quantity: 1
                    },
                    {
                        description: "",
                        price: 3,
                        name: "餐盒费",
                        category_id: 102,
                        id: -70000,
                        quantity: 1
                    },
                    {
                        description: "",
                        price: 4,
                        name: "配送费",
                        category_id: 2,
                        id: -10,
                        quantity: 1
                    }
                    ],
                    not_new_user_reason: 1,
                    phone: "13381216414",
                    hongbao: [ ],
                    cart_id: "a765f7a64b4411e69103e4a8b6cc4ab2",
                    come_from: "android",
                    group: [
                    [
                    {
                        category_id: 1,
                        name: "小炒肉盖饭",
                        price: 20,
                        sale_mode: 0,
                        specs: [ ],
                        garnish: [ ],
                        id: 66685881,
                        quantity: 1
                    },
                    {
                        category_id: 1,
                        name: "米饭",
                        price: 2,
                        sale_mode: 0,
                        specs: [ ],
                        garnish: [ ],
                        id: 66720077,
                        quantity: 1
                    }
                    ]
                    ],
                    daily_promotion_used_count: 0,
                    payment_constitution: {
                        amount: 0,
                        records: [ ]
                    }
                },
                restaurant: {
                    id: 734295,
                    name: "成都美食",
                    latitude: 39.862788290236,
                    longitude: 116.46095253585,
                    description: "欢迎使用饿了么订餐",
                    phone: "87376200",
                    order_mode: 3,
                    promotion_info: "配送问题已经解决，欢迎新老客户光临",
                    name_for_url: "blbj-cdmsct",
                    flavors: "",
                    is_time_ensure: false,
                    is_premium: false,
                    time_ensure_full_description: "",
                    recent_order_num: 2826,
                    image_path: "https://fuss10.elemecdn.com/8/b3/520c3ac362425638f70d67df1baa8jpeg.jpeg",
                    is_free_delivery: false,
                    minimum_order_amount: 20,
                    order_lead_time: 37,
                    is_support_invoice: false,
                    is_new: false,
                    is_third_party_delivery: false,
                    is_in_book_time: false,
                    rating_count: 444,
                    address: "北京市朝阳区十里河村2号",
                    month_sales: 7782,
                    delivery_fee: 4,
                    minimum_free_delivery_amount: 0,
                    minimum_order_description: "",
                    minimum_invoice_amount: 0,
                    is_open_time: true,
                    opening_hours: [
                    "09:00/23:50"
                    ],
                    book_times: [ ],
                    is_online_payment: true,
                    status: 1,
                    distance: null,
                    supports: [
                    {
                        id: 7,
                        name: "外卖保",
                        description: "已加入“外卖保”计划，食品安全有保障",
                        icon_color: "4B9A18",
                        icon_name: "保"
                    },
                    {
                        id: 3,
                        name: "在线支付",
                        description: "可使用支付宝、微信、手机QQ进行在线支付",
                        icon_color: "FF4E00",
                        icon_name: "付"
                    }
                    ],
                    food_tips: "(444) 月售7782份",
                    restaurant_tips: "20元起送 / 37分钟 / ",
                    next_business_time: "",
                    is_coupon_enabled: false,
                    is_insurance: true,
                    delivery_mode: {
                        id: 1,
                        text: "蜂鸟专送",
                        color: "4CA9FF",
                        is_solid: true
                    },
                    business_district: "",
                    only_use_poi: true,
                    closing_count_down: 0
                },
                order_rate: {
                    time_spent: 0,
                    service_rating: 0,
                    service_rating_text: "",
                    service_reply_text: "",
                    service_reply_time: "",
                    rider_rating: 0,
                    rider_rating_text: "",
                    time_spent_text: "准时送达",
                    time_spent_point: 10,
                    service_rating_point: 10,
                    total_rating_point: 30,
                    rated_point: 0,
                    is_all_rated: false,
                    point_explain_url: "eleme://web?url=https%3A%2F%2Fm.ele.me%2Fprofile%2Fexplain%2Fpointtext&animation_type=1",
                    rider_point: 10,
                    rider_rates: {
                        rating_text: "",
                        rating_item: [ ]
                    }
                }
            }
            ]
        }
    },
    computed() {
    }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    .order {
        padding: 20px 20px 0;
        background: white;
        margin-bottom: 20px;
    }
    .order-restaurant {

    }
    .order-content .name {
        font-size: 16px;
        font-weight: 700;
    }
    .order-list {
        overflow: hidden;
        padding: 20px 0 15px;
        /*width: 100%;*/
        text-align: center;
        border-top: 1px solid #eee;
    }
    .order-list-item {
        /*float: left;*/
    }
    .order-content {
        display: inline-block;
    }
    .look {
        position: absolute;
        right: 0;
    }
    .order-content .count {
        color: #f04240;
        font-style: normal;
    }
    .order-list-item.time {
        /*float: none;*/
        /*overflow: hidden;*/
        width: 85px;
        color: #999;
        font-size: 12px;
    }
    .order-right {
        float: right;
    }
    .order-right .order-list-item {
        /*float: left;*/
        display: table-cell;
        vertical-align: middle;
        height: 70px;
    }
    .order-left {
        overflow: hidden;
        text-align: left;
    }
    .play,
    .status,
    .time {
        text-align: center;
    }
    .play {
        width: 190px;
    }
    .play .total {
        font-family: arial;
        font-size: 16px;
    }
    .play .type {
        color: #999;
        font-size: 12px;
    }
    .status {
        width: 100px;
    }
    .order-list-item0{
        /*float: none;*/
        overflow: hidden;
    }
    .order-list-logo{
        width: 70px;
        height: 70px;
        vertical-align: top;
        margin-right: 20px;
    }
</style>

