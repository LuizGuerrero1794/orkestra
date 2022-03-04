import axios from '@/plugins/axios'
export default {
    getCustomers({commit}, payload){
        commit('SET_OVERLAY', true);
        console.log(payload) 
        let url = '/api/v1/directory/customers';

        if (payload.only_search === 1) {
            url = `${url}?page=${payload.page}&search=${payload.search}&only_search=1`
        }else{
            url = `${url}?page=${payload.page}`
        }

        console.log(url, payload.only_search)
        return axios.get(url).then(response=>{
            if(response.data.status == 'success'){
                setTimeout(() =>{
                    commit('SET_OVERLAY', false);
                    return commit('SET_CUSTOMERS',response.data);
                }, 2000)
            }
        }).catch(err=> console.log(err))
    }
}
