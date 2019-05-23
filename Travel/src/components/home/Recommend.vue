<template>
  <div class='recommend'>
    <div class="rc-group-title">
      <img class="rc-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span>猜你喜欢</span>
    </div>
    <ul class="rc-group-list">
      <li v-for="item in list" :key="item.id">
        <router-link  :to="/detail/+item.id">
           <div class="imgCon">
             <img src="http://img1.qunarzz.com/sight/p0/1502/f7/f7f32b8108836ce1.water.jpg_200x200_41f56cff.jpg" alt="">
           </div>
           <div class="imgInfo">
             <p class="imgInfo-title">{{item.title}}</p>
             <p class="imgInfo-address">{{item.address}}</p>
             <p class="imgInfo-price">${{item.price}}</p>
           </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      list: [
        {
          id: '0001',
          title: '中国福州',
          price: '159',
          address: '福鼎',
          url: 'http://touch.piao.qunar.com/touch/detail.htm?id=306843155&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/cd/cd5907320e7a1a1a.img.jpg_200x200_6de235db.jpg'
        },
        {
          id: '0002',
          title: '中国福州',
          price: '159',
          address: '福鼎',
          url: 'http://touch.piao.qunar.com/touch/detail.htm?id=306843155&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/cd/cd5907320e7a1a1a.img.jpg_200x200_6de235db.jpg'
        },
        {
          id: '0003',
          title: '中国福州',
          price: '159',
          address: '福鼎',
          url: 'http://touch.piao.qunar.com/touch/detail.htm?id=306843155&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/cd/cd5907320e7a1a1a.img.jpg_200x200_6de235db.jpg'
        }
      ]
    }
  },
  components: {

  }
}
</script>
<style lang="stylus" scoped>
  @import'~styles/common.styl'
  .recommend
    margin-top 0.1rem
    background-color #fff
    .rc-group-title
      padding: .24rem 0 .26rem;
      overflow hidden
      .rc-title-img
        width: 0.3rem
        height 0.3rem
        margin 0 0.12rem 0 0.24rem
      span
        color $txtColor
        font-size $txtSize
    .rc-group-list
      li
        padding 0.12rem 0
        a
          width 100%
          .imgCon
            float left
            width 1.8rem
            height 1.8rem
            margin-left 0.2rem
            img
              width 100%
          .imgInfo
            padding-left:2.4rem
            line-height 0.44rem
            color $txtColor
            font-size $txtSize
            .imgInfo-title
              margin-top 0.16rem
              ellipsis()
            .imgInfo-address
              margin-top 0.16rem
              ellipsis()
            .imgInfo-price
              margin-top 0.12rem
              color #ff8300
</style>
