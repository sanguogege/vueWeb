<template>
  <div class="home">
    <Swiper></Swiper>
    <Item></Item>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/Item.vue';
import Swiper from '@/components/Swiper.vue';


export default {
  name: 'home',
  components: {
    Item,
    Swiper
  }
}

</script>
