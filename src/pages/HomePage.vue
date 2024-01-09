<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-5">
        <form @submit.prevent="postGift()">
          <label for="name">Gift Name</label>
          <input v-model="tagName" required maxlength="40" type="text">
          <label for="picture">Gift Picture Url</label>
          <input v-model="giftPic" required maxlength="300" type="text" name="picture" id="">
          <button>Post Gift</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div v-for="gift in gifts" class="col-3">
        <GiftCard :giftProp="gift"/>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import GiftCard from '../components/GiftCard.vue';
import {api} from '../services/AxiosService.js';
import {giftService} from '../services/GiftService.js'
import { AppState } from '../AppState';

export default {

  setup() {
    onMounted(()=>{
      getGifts()
    })
    const tagName = ref('')
    const giftPic = ref('')
    
    async function getGifts(){
      await giftService.getGifts()
    }

    async function postGift(){
      await giftService.postGift(giftPic.value, tagName.value)
      getGifts()
      tagName.value = ''
      giftPic.value = ''
    }
    return {
      tagName,
      giftPic,
      getGifts,
      postGift,
      gifts: computed(()=> AppState.gifts)
    }
  },
  components: {GiftCard}
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
