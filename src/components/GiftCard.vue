<template>
    <div class="card mt-2">
        <img :src="giftProp.url" alt="Picture">
        <h3>{{ giftProp.tag }}</h3>
        <div>
            <button v-if="giftProp.opened == false" @click="openGift(`${giftProp.id}`)">Open</button>
            <button v-if="giftProp.creatorId == accountId">Delete</button>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Gift } from '../models/Gift';
import {giftService} from '../services/GiftService.js'
export default {
    props: {giftProp: {required: true, type: Gift}},
    setup(){
        let accountId = AppState.account.id

        async function openGift(giftId){
            await giftService.openGift(giftId)
            giftService.getGifts()
        }
    return { 
        openGift,
        accountId
     }
    }
};
</script>


<style scoped>

</style>