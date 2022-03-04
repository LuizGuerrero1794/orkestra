window._ = require("lodash");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

//window.axios = require("axios");

//window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

//const axios = require("axios");

// window.LaravelRoute = function(route,params){
//     if(params==undefined) params = {};
//     let rutas = Laravel.routes;
//     let r = rutas.filter((item)=>{
//         return item.name == route;
//     });
//     var url = r[0].uri;
//     var paramsRequired = url.match(/\{(.*?)\}/g);
//     var paramsCount = (paramsRequired==null)?0:paramsRequired.length;
//     var vars = Object.keys(params);
//     if(paramsCount>0){
//         if(typeof params === 'object' && params.constructor === Object){
//             if(vars.length==paramsCount){
//                 for(let i=0;i<paramsCount;i++){
//                     let key = vars[i];
//                     vars[i] = '{'+vars[i]+'}';
//                     if(vars.includes(paramsRequired[i])){
//                         url = url.replace(paramsRequired[i],params[key]);
//                     }else{
//                         console.log("Se requiere el parametro "+paramsRequired[i]);
//                         return null;
//                     }
//                 }
//                 return Laravel.public_path+'/'+url;
//             }else{
//                 console.log("Los parametros enviados no corresponden a los requeridos");
//                 return null;
//             }
//         }else{
//             console.log("Se requiere un Objeto para los parametros establecidos en la ruta");
//             return null;
//         }
//     }else{
//         return Laravel.public_path+'/'+url;
//     }
// }


import Vue from "vue";

Vue.filter("toMoney", function(
    amount,
    decimalCount = 2,
    decimal = ".",
    thousands = ",",
    symbol = "$ "
) {
    //   if (!amount) return ''
    // return formatMoney(amount, decimalCount, decimal, thousands, symbol);
    try {
        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(
            Math.abs(Number(amount) || 0).toFixed(decimalCount)
        ).toString();
        let j = i.length > 3 ? i.length % 3 : 0;

        symbol = decimal !== false ? symbol : "";

        return (
            negativeSign +
            symbol +
            (j ? i.substr(0, j) + thousands : "") +
            i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
            (decimalCount
                ? decimal +
                  Math.abs(amount - i)
                      .toFixed(decimalCount)
                      .slice(2)
                : "")
        );
    } catch (e) {
        console.log(e);
    }
});
