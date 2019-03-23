<template> 
    <div class="on">
      <section class="msite">
        <!--首页头部-->
        <HeaderTop :title="address.name">
            <router-link slot="search" to="/search" class="header_search">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
            <router-link slot="login" to="/login" class="header_login">
                <span class="header_login_text">登录 | 注册</span>
            </router-link>
        </HeaderTop>

        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categorysArr.length>0">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(cs,index) in categorysArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(c,index2) in cs" :key="index2">
                  <div class="food_container">
                    <img :src="imgBaseUrl+c.image_url">
                  </div>
                  <span>{{c.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
        </div>
      </section>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'

export default {
    data(){
      return{
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    components: {
        HeaderTop,
        ShopList
    },
    mounted () {
        this.$store.dispatch('getCategorys')
        this.$store.dispatch('getShops')
    },
    computed: {
        ...mapState(['address','categorys']),

        categorysArr(){ //整理成二维数组
          const max = 8
          const arr = []
          const {categorys} = this
          let smallArr = []
          categorys.forEach(c =>{
            //如果smallArr是空的，将小数组保存到大数组中
            if(smallArr.length === 0){
              arr.push(smallArr)
            }
            //将当前分类保存到小数组中
            smallArr.push(c)
            //如果smallArr是满的，创建一个新的
            if(smallArr.length === max)
              smallArr = []
          })
          return arr
        }
    },
    watch: {
      categorys(value) { //categorys数组中有数据，在异步更新界面之前执行
        //界面更新就立即创建Swiper对象
        this.$nextTick(()=>{ //一旦完成界面更新，立即调用(此条语句写在更新界面之后)
          new Swiper('.swiper-container',{
            pagination: {
              el:'.swiper-pagination',
            },
            loop: true
          })
        })
      }
    }
}
</script>


<style lang="stylus" rel="stylesheet/stylus"> 
    @import "../../common/stylus/mixins.styl"
        &.msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #007ACC
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
</style>