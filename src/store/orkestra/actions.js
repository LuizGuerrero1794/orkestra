import axios from '@/plugins/axios'
export default {
    getCustomers({commit}, payload){
        commit('SET_OVERLAY', true);
        
        let url = '/api/v1/directory/customers';

        if (payload.only_search === 1) {
            url = `${url}?page=${payload.page}&search=${payload.search}&only_search=1`
        }else{
            url = `${url}?page=${payload.page}`
        }

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
