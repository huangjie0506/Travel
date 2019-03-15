<template>
  <div class='icons'>
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="imgcontent" :src="item.imgUrl" alt="">
          </div>
          <p>{{item.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
 </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '热门景点'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '热门景点'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '热门景点'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '热门景点'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '热门景点'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '热门景点'
        },
        {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '热门景点'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '热门景点'
        },
        {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '热门景点'
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      var pages = []
      this.list.forEach((item, index) => {
        var page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  .icons
    width 100%
    height 0
    padding-bottom 44%
    margin-top .2rem
    overflow hidden
    box-sizing border-box
    .swiper-pagination
      bottom 0
    .swiper-slide
      display flex
      flex-wrap wrap
      .icon
        width 25%
        height 0
        padding-bottom 22%
        overflow: hidden;
        .icon-img
          width: 1.1rem;
          height: 1.1rem;
          margin 0 auto
          img
            display block
            height 100%
        p
          text-align center
          color #333
          line-height 0.44rem
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
</style>
