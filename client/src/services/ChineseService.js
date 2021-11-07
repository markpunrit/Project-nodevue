import Api from '@/services/Api'

export default {
    index() {
        return Api().get('chineses')
    },
    show(chineseId){
        return Api().get('chinese/'+chineseId)
    },
    post(chinese){
        return Api().post('chinese', chinese)
    },
    put(chinese){
        return Api().put('chinese/'+chinese.id, chinese)
    },
    delete(chinese){
        return Api().delete('chinese/'+chinese.id, chinese)
    },
}