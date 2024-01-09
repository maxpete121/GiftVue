<template>
    <div class="card">
        <img :src="giftProp.url" alt="Picture">
        <h3>{{ giftProp.tag }}</h3>
        <button v-if="giftProp.opened == false">Open</button>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Gift } from '../models/Gift';
export default {
    props: {giftProp: {required: true, type: Gift}},
    setup(){
    return {  }
    }
};
</script>


<style scoped>

</style>