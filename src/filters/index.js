/* 自 定 义 过 滤 器 模 块
*/
// import moment from 'moment' 
import format  from 'date-fns/format'
import Vue from 'vue'
Vue.filter('date-format', function (value, formatStr='YYYY-MM-DD HH:mm:ss') { 
    return format(value,formatStr) 
})
