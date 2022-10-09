<template>
    <div class="collection animate__animated animate__fadeIn">
        <div class="top">
            <div class="leftImg">
                <img src="../../assets/images/space.jpeg" alt="">
            </div>
            <div class="rightInfo">
                <div class="titlePart">
                    <h1>Marco carrillo®</h1>
                    <div class="line">

                    </div>
                    <h3>最新成交价 <span>1HT</span></h3>
                </div>
                <div class="creatorPart">
                    <div class="creator">
                        <img src="../../assets/images/2.gif" alt="">
                        <div class="creatorRightPart">
                            <div class="up">Creator</div>
                            <div class="down">Enrico Cole</div>
                        </div>
                    </div>
                    <div class="instantPrice">
                        <img src="../../assets/images/1.gif" alt="">
                        <div class="instantPriceRightPart">
                            <div class="up">Instant price</div>
                            <div class="down">3.5 <span>ETH</span></div>
                        </div>
                    </div>
                </div>
                <div class="bidInfo">
                    <div class="up">
                        <span class="currentBid">Current Bid</span>
                        <h1>1.00 ETH</h1>
                        <span class="price">$3,618.36</span>
                    </div>
                    <div class="down">
                        <h3>Auction ending in</h3>
                        <div class="countDown">

                        </div>
                    </div>
                </div>
                <div class="btns">
                    <div class="placeBid">
                        Place a bid
                    </div>
                    <div class="viewItem">
                        View item
                    </div>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="left">
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <Transition enter-active-class="animate__animated animate__fadeIn"
                        leave-active-class="animate__animated animate__fadeOut">
                        <el-tab-pane label="描述" name="first">
                            <div class="describeArea" v-if="desAndHisShowTag">
                                春江潮水连海平，海上明月共潮生。
                                滟滟随波千万里，何处春江无月明！
                                江流宛转绕芳甸，月照花林皆似霰；
                                空里流霜不觉飞，汀上白沙看不见。
                                江天一色无纤尘，皎皎空中孤月轮。
                                江畔何人初见月？江月何年初照人？
                                人生代代无穷已，江月年年望相似。
                                不知江月待何人，但见长江送流水。
                                白云一片去悠悠，青枫浦上不胜愁。
                                谁家今夜扁舟子？何处相思明月楼？
                                可怜楼上月裴回，应照离人妆镜台。
                                玉户帘中卷不去，捣衣砧上拂还来。
                                此时相望不相闻，愿逐月华流照君。
                                鸿雁长飞光不度，鱼龙潜跃水成文。
                                昨夜闲潭梦落花，可怜春半不还家。
                                江水流春去欲尽，江潭落月复西斜。
                                斜月沉沉藏海雾，碣石潇湘无限路。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                                不知乘月几人归，落月摇情满江树。
                            </div>
                            <div class="loadMore" v-if="desAndHisShowTag">
                                查看更多
                                <svg t="1653898191472" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2133" width="22" height="22">
                                    <path
                                        d="M486.4 537.6C492.8 544 505.6 544 512 544s19.2 0 25.6-6.4l224-224c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0L512 467.2 313.6 262.4C300.8 256 275.2 256 262.4 262.4S256 300.8 262.4 313.6L486.4 537.6z"
                                        p-id="2134"></path>
                                    <path
                                        d="M710.4 486.4 512 691.2 313.6 486.4c-12.8-12.8-32-12.8-44.8 0S256 524.8 262.4 537.6l224 224C492.8 768 505.6 768 512 768s19.2 0 25.6-6.4l224-224c12.8-12.8 12.8-32 0-44.8S723.2 480 710.4 486.4z"
                                        p-id="2135"></path>
                                </svg>
                            </div>
                        </el-tab-pane>
                    </Transition>
                    <Transition enter-active-class="animate__animated animate__fadeIn"
                        leave-active-class="animate__animated animate__fadeOut">
                        <el-tab-pane label="历史成交记录" name="second">
                            <div class="history" v-if="!desAndHisShowTag">
                                这里是历史记录
                            </div>
                            <div class="loadMore" v-if="!desAndHisShowTag">
                                查看更多
                                <svg t="1653898191472" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2133" width="22" height="22">
                                    <path
                                        d="M486.4 537.6C492.8 544 505.6 544 512 544s19.2 0 25.6-6.4l224-224c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0L512 467.2 313.6 262.4C300.8 256 275.2 256 262.4 262.4S256 300.8 262.4 313.6L486.4 537.6z"
                                        p-id="2134"></path>
                                    <path
                                        d="M710.4 486.4 512 691.2 313.6 486.4c-12.8-12.8-32-12.8-44.8 0S256 524.8 262.4 537.6l224 224C492.8 768 505.6 768 512 768s19.2 0 25.6-6.4l224-224c12.8-12.8 12.8-32 0-44.8S723.2 480 710.4 486.4z"
                                        p-id="2135"></path>
                                </svg>
                            </div>
                        </el-tab-pane>
                    </Transition>
                </el-tabs>

            </div>
            <div class="right">
                <div class="title">
                    最新出价记录
                </div>
                <ul class="bidList">
                    <li v-for="(item, index) in bidList" :key="index">
                        <img :src="item.avatar" alt="">
                        <div class="bidInfo">
                            <h3><span class="priceTitle">出价</span> <span class="price">{{ item.bidPrice + 'CTXC'
                            }}</span></h3>
                            <span class="time">{{ item.time }}</span>
                        </div>
                    </li>
                </ul>
                <div class="loadMore" v-if="desAndHisShowTag">
                    查看更多
                    <svg t="1653898191472" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2133" width="22" height="22">
                        <path
                            d="M486.4 537.6C492.8 544 505.6 544 512 544s19.2 0 25.6-6.4l224-224c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0L512 467.2 313.6 262.4C300.8 256 275.2 256 262.4 262.4S256 300.8 262.4 313.6L486.4 537.6z"
                            p-id="2134"></path>
                        <path
                            d="M710.4 486.4 512 691.2 313.6 486.4c-12.8-12.8-32-12.8-44.8 0S256 524.8 262.4 537.6l224 224C492.8 768 505.6 768 512 768s19.2 0 25.6-6.4l224-224c12.8-12.8 12.8-32 0-44.8S723.2 480 710.4 486.4z"
                            p-id="2135"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="title">
                图层
            </div>
            <ul class="layerList">
                <li v-for="(item, index) in layers" :key="index">
                    <img :src="item.layer" alt="" class="layerImage">
                    <div class="layerName">{{ item.layerName }}</div>
                </li>
            </ul>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue'
import Footer from "../../components/Footer/Footer.vue";
import 'animate.css'
const desAndHisShowTag = ref(true)
const activeName = ref('first')
const bidList = ref([
    {
        avatar: require('../../assets/images/3.gif'),
        bidPrice: '1800',
        time: '1分钟前'
    }, {
        avatar: require('../../assets/images/4.gif'),
        bidPrice: '1800',
        time: '1分钟前'
    }, {
        avatar: require('../../assets/images/5.gif'),
        bidPrice: '1800',
        time: '1分钟前'
    },
    {
        avatar: require('../../assets/images/6.gif'),
        bidPrice: '1800',
        time: '1分钟前'
    }, {
        avatar: require('../../assets/images/7.gif'),
        bidPrice: '1800',
        time: '1分钟前'
    }
])
const layers = ref([
    {
        layer: require('../../assets/images/1.gif'),
        layerName: 'pepe-1'
    },
    {
        layer: require('../../assets/images/2.gif'),
        layerName: 'pepe-2'

    }, {
        layer: require('../../assets/images/3.gif'),
        layerName: 'pepe-3'

    }
])
const handleClick = (tab, event) => {
    if (tab.props.label == '描述') {
        desAndHisShowTag.value = true;
    } else {
        desAndHisShowTag.value = false;
    }
}
</script>

<style lang='less' scoped>
@import url('../../assets/Style/CollectionInfo.less');
</style>
