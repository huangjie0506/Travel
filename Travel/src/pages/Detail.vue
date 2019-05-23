<template>
  <div class='detail'>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="dataList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from '../components/detail/Banner'
import DetailHeader from '../components/detail/Header'
import DetailList from '../components/detail/List'
export default {
  data () {
    return {
      dataList: [{
        title: '广州十大美景',
        children: [
          {title: '长隆动植物园'},
          {title: '长隆动植物园'}
        ]
      }, {
        title: '广州十大美景',
        children: [{
          title: '长隆动植物园',
          children: [
            {title: '长隆动植物园'}
          ]
        }]
      }, {
        title: '广州十大美景'
      }]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>
