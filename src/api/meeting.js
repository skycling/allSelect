import request from '@/utils/request' 
export function room(info) {
return request({
    url: '/room',
    method: 'get',
    params: {
      	need_available_hours:info.need_available_hours 
    }
})
}   