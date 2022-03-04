export default {
    SET_CUSTOMERS(state, data) {
        state.customers = data.customers.data;
    },
    SET_OVERLAY(state, data){
        state.overlay = data
    }
}
