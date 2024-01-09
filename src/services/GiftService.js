import { AppState } from '../AppState.js'
import { Gift } from '../models/Gift'
import {api} from '../services/AxiosService.js'



class GiftService{

    async getGifts(){
        let response = await api.get('api/gifts')
        // console.log('got em', response)
        const allGifts = await response.data.map(gift => new Gift(gift))
        // console.log(allGifts)
        AppState.gifts = allGifts
      }

    async postGift(giftPic, tagName){
        let newGift = await new Gift()
        newGift.url = await giftPic
        newGift.tag = tagName
        console.log(newGift)
        // let response = await api.post('api/gifts', newGift)
        // console.log(response)
    }

}


export const giftService = new GiftService()