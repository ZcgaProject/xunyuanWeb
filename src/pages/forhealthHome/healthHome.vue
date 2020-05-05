<template>
    <div class="healthBox">
        <div class="headBoxSheet">
            <van-search
                    v-model="value"
                    shape="round"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    style="width: 100%;height: 100%;"
            >
                <div slot="action" @click="onSearch">
                    <img style="width: 70%;height: 70%;" src="../../assets/healthHome/shuaxin.png" alt="">
                </div>
            </van-search>
        </div>

        <div class="jianlangLogo">
            <div class="logoBox">
                <img style="width: 94%;height: 100%" src="../../assets/healthHome/1.jpg" alt="">
            </div>
            <div class="fontBox">栏目官网</div>
            <div class="weiboBox">
                <div class="weiboBoximg">
                    <img style="width: 50%;height: 50%" src="../../assets/healthHome/icon_wb.png" alt="">
                </div>
                <div class="weiboBoximg">
                    <img style="width: 50%;height: 50%" src="../../assets/healthHome/icon_ss.png" alt="">
                </div>
            </div>
            <div class="sangangBox">
                <img style="width: 55%;height: 50%" src="../../assets/healthHome/sangang.png" alt="">
            </div>
        </div>
        <div class="danhaoBox" id="searchBar"  :class="searchBarFixed == true ? 'isFixed' :''">
            <div class="danhaoBoxTopBox">
                <div class="danhaoBoxTop">
                    <span>首页</span>
                    <span>直播</span>
                    <span>节目单</span>
                    <span>寻源看点</span>
                    <span>公益体检</span>
                </div>
            </div>
            <div class="danhaoBoxnavOne">
                <div class="navOneHong">类别</div>
                <div class="navOneLie">
                    <van-tabs>
                        <van-tab title-style="flex-basis: 26%" v-for="(item,index) in toptitle" :key="index" :title="item.title">
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
            <div class="danhaoBoxnavOne">
                <div class="navOneHong">版块</div>
                <div class="navOneLie">
                    <van-tabs>
                        <van-tab title-style="flex-basis: 33%" v-for="(item,index) in bottitle" :key="index" :title="item.title">
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <div class="healthBigBox">
            <div class="xunyuanTab">
                <div class="xunyuanTab_left">
                    <div class="yuanTab_leftImg">
                        <img style="width: 44%;height: 50%;" src="../../assets/healthHome/icon_3.png" alt="">
                    </div>
                    <div class="yuanTab_leftFont">寻源看点</div>
                </div>
                <div class="xunyuanTab_right" v-if="zhankaitwo" @click="shouqi('qi')">收起筛选
                    <img style="width: 15%;height: 40%" src="../../assets/healthHome/shang.png" alt="">
                </div>
                <div class="xunyuanTab_right" v-if="zhankai" @click="shouqi('kai')">展开筛选
                    <img style="width: 15%;height: 40%" src="../../assets/healthHome/xia.png" alt="">
                </div>
            </div>
            <div class="kandianBox" v-if="zhankaitwo">
                <div class="kandianbigBox">
                    <div class="dianbigBox" v-for="(item,index) in xunyuan" :key="index">
                        <div class="dianbigBox_top">
                            <img style="width: 100%;height: 100%" :src=item.img alt="">
                        </div>
                        <div class="dianbigBox_bot">{{item.text}}</div>
                    </div>
                </div>
            </div>
            <div class="intergrityBox_focus">
                <div class="rityBoxFocusBox">
                    <div class="focusBox_top">
                        <span style="color: #ff0033">新闻</span>
                        <span style="color: #999999">&#12288;News</span>
                    </div>
                    <div class="focusBox_nav">
                        <div class="focusBoxnavBox" :style="{borderBottomWidth:item.borderWidth,borderBottomStyle:item.borderStyle,borderBottomColor:item.borderColor}" v-for="(item, index) in xinwen" :key='index' @click="yaoWenDj(item.location)">
                            <div class="navBox_leftImg">
                                <img style="width: 100%;height: 100%" :src="require(`../../assets/healthHome/${item.imgid}`)" alt="">
                            </div>
                            <div class="navBox_leftFont">{{item.fonttext}}</div>
                        </div>
                    </div>
                    <div class="focusBox_footer">
                        <div class="focusBox_footerBox">
                            <span v-if="iisfontYw" @click="jiazaiMoreYw">加载查看更多</span>
                            <span v-if="iisfonttwoYw">
                                    <van-loading size="24px">加载中...</van-loading>
                                </span>
                            <span v-if="iisfontthrYw">没有更多</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footerSheet">
                <div class="footerSheet_img">
                    <div class="footerSheet_imgbox">
                        <img style="width: 80%;height: 66%" src="../../assets/footer/footer-1.jpg" alt="">
                    </div>
                    <div class="footerSheet_imgbox">
                        <img style="width: 80%;height: 66%" src="../../assets/footer/footer-2.png" alt="">
                    </div>
                </div>
                <div class="footerSheet_font">《为健康寻源》栏目  版权所有</div>
                <div class="footerSheet_font"></div>
                <div class="footerSheet_font" @click="beianhao">ICP备案号：琼ICP备19004493号-1</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "healthHome",
        data() {
            return {
                searchBarFixed:false,
                iisfontYw:true,
                iisfonttwoYw:false,
                iisfontthrYw:false,
                zhankai:false,
                zhankaitwo:true,
                value:'',
                toptitle:[
                    {
                        title:"新闻"
                    },
                    {
                        title:"论坛"
                    },
                    {
                        title:"访谈"
                    },
                    {
                        title:"宣传片"
                    },
                    {
                        title:"寻源之旅"
                    },
                    {
                        title:"微电影"
                    }
                ],
                bottitle:[
                    {
                        title:"健康大讲堂"
                    },
                    {
                        title:"健康寻源之旅"
                    },
                    {
                        title:"健康直播间"
                    },
                    {
                        title:"寻找最美传承人"
                    },
                    {
                        title:"寻源好产品"
                    },
                    {
                        title:"真假好辩"
                    },
                    {
                        title:"吃出健康"
                    }
                ],
                xinwen:[
                    {
                        imgid:'6.jpg',
                        fonttext:'《为健康寻源》栏目新闻发布 会在京举行 ',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        // location:'http://bj.people.com.cn/n2/2017/0330/c233086-29946261.html'
                    },
                    {
                        imgid:'7.jpg',
                        fonttext:'习近平铺设“健康之路”',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        // location:'http://www.xinhuanet.com/politics/2018-08/12/c_1123258002.htm'
                    },
                    {
                        imgid:'8.jpg',
                        fonttext:'中铁妙天集团携手国普惠民工程',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        // location:'http://www.wzbtv.cn/gysp/qzf/content_46596.shtml'
                    },
                    {
                        imgid:'9.jpg',
                        fonttext:'万州小村大爱：上百户村民自 发捐助抗疫一线医护人员',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        // location:'https://baijiahao.baidu.com/s?id=1659870504313720997&wfr=spider&for=pc'
                    }
                ],
                xunyuan:[
                    {
                        img:require('../../assets/healthHome/2.jpg'),
                        text:'健康寻源之旅'
                    },
                    {
                        img:require('../../assets/healthHome/3.jpg'),
                        text:'寻源好产品'
                    },
                    {
                        img:require('../../assets/healthHome/4.jpg'),
                        text:'寻找最美传承人'
                    },
                    {
                        img:require('../../assets/healthHome/5.jpg'),
                        text:'癌症康复与早期干预'
                    }
                ]
            }
        },
        created() {},
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            handleScroll () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let offsetTop = document.querySelector('#searchBar').offsetTop
                if(scrollTop > offsetTop) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                }
            },
            beianhao(){
                location.href = 'http://www.beian.miit.gov.cn/'
            },
            onSearch(){
                console.log('搜索')
            },
            jiazaiMoreYw(){
                this.iisfontYw = false
                this.iisfonttwoYw = true
                setTimeout(() =>{
                    this.iisfonttwoYw = false
                    this.iisfontthrYw = true
                        // configuration.jiazai().then(res => {
                        //     this.yaoWen = this.yaoWen.concat(res.data.yaoWenTwo)
                        //     // this.iisfonttwo=false
                        // }) .catch(error => {
                        //     console.log(error)
                        // })
                },1000)
            },
            shouqi(index){
                console.log(index)
                if(index==='qi'){
                    this.zhankaitwo = false
                    this.zhankai = true
                }else if(index==='kai'){
                    this.zhankai = false
                    this.zhankaitwo = true
                }
            },
        },
        destroyed () {//离开该页面需要移除这个监听的事件
            window.removeEventListener('scroll', this.handleScroll)
        },

    }
</script>
<style src="../../style/fothealthHome/healthHome.css" scoped></style>
<style>
    .van-tabs{
        width: 100% !important;
    }
    .van-field__left-icon{
        width: 20px !important;
        height: 100% !important;
    }
    .van-search__action{
        width: 10% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    .my-swipe .van-swipe-item {
        /*width: 100% !important;*/
        height: 100% !important;
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        /*background-color: #39a9ed;*/
    }
    .van-swipe{
        height:100% !important;
    }
    .van-search--show-action{
        width: 100% !important;
        height: 100% !important;
    }
    .van-search{
        background-color: #ffffff !important;
    }
    .van-dropdown-menu{
        height: 10px !important;
    }
    .van-search__action{
        font-size: 12px !important;
    }
    .van-tabbar{
        z-index: -1 !important;
    }
    .van-tabs--line .van-tabs__wrap{
        height: 34px !important;
    }
    .van-tabs__wrap--scrollable .van-tab{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /*.van-tabs__wrap--scrollable .van-tab{*/
        /*flex-basis: 26% !important;*/
    /*}*/

</style>
