import axios from 'axios'
let token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI1MDc1MDU3YTBiODY0NDY2YjQ3NjYxNjQ4OTA4ODIwYTYxNjcwZmU3MDIzOGU3ZjY4NDIyNWM2YzgwZjdkNWVjNzcxYTVlZGEwYjlmNzgzIn0.eyJhdWQiOiI1IiwianRpIjoiYjUwNzUwNTdhMGI4NjQ0NjZiNDc2NjE2NDg5MDg4MjBhNjE2NzBmZTcwMjM4ZTdmNjg0MjI1YzZjODBmN2Q1ZWM3NzFhNWVkYTBiOWY3ODMiLCJpYXQiOjE2NDYxNjY3NDMsIm5iZiI6MTY0NjE2Njc0MywiZXhwIjo0ODAxODQwMzQzLCJzdWIiOiIxIiwic2NvcGVzIjpbImNvbXBhbnlfdG9rZW4iXX0.OrdDYHzXdWqs9lGrP8_Wze07mNmhEnILvDuTfQrkLX5k3uMYfxHCBaUuZD5XXn7xBm2yJfaOwKLDo5sIf6J3FCQzzgjAFcr_wDrVt8zWdyQqq8DToqzdU06OB_htE0qJ-TyQEhED9ORRBDoROKMFIeKz_psBwQPjyH8AS34jrELrwW-6X9DioMqTk3Go976EMSL9PvyCBY1VkjVvkexc3eFfoHMiZXHVfmG89fr7ZhAEH81j9mH8Nd_tk3lSBrIBjda5JLm0ec-qWKjn7KNOOoQSbhWL3kyMG9eUT43JGMA-8Qy-OgBn0p2h4i2VuppJ8CD-O9IxaBOYOM9C7o6LuRwlGibb94UIAvbbTGC_i2x_DSfj8TkXstqSvKoZiSQo87M6FBNqngI8nuBxHCFNuPUzJJhRuj4D3YVmZsfzDaJLoV3SgP7ICK8YdUxRyAHpzsCtfbxgpwEFKQDY5LWdJwAvWN-sM3utz92fdHwZVqXLEDC37Be8eVbnNF29Lua4O3N8eBGix8XJ3GpZERy9kDJPQBbG32OOCAT0_c7u6KJaOdjoJ8Gnb6fws2CvBYW8arDgubwcHqu_SOpElupSU4aYhwp60-TiiEdarb82006r9XMHUSiNKAi02rq2wifbqhA-q995G3Y1O-tyKqSNqYRDILFcVjYfKwqzSQBsobE`

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_HOST, // Local
    headers: {
        common : {
            'Authorization': `Bearer ${token}`,
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    }
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {

        if (error.response.status === 401) {

            //vm.$router.push({name: 'auth.login'});

        } else if (error.response.status === 422 || error.response.status === 429) {

            if (error.response.data.errors){
                /*
                for(let key in error.response.data.errors){

                    //app.$validator.errors.add({field: key, msg: error.response.data.errors[key]})
                }

                 */
            }

        } else {

            console.error(error)
        }
        //this.loading = false;

        return Promise.reject(error);
    })

export default instance
