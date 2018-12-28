import request from '@/utils/request'
//会议室预定 
export function room(info) {
return request({
    url: '/room',
    method: 'get',
    params: {
      	need_available_hours:info.need_available_hours 
    }
})
} 
//获取会议室的当日及未来的使用、预约情况 
export function distributions(info) {
    return request({
        url: '/room/distributions',
        method: 'get',
        params: {
            room_id:info.room_id 
        }
    })
} 
///room/my/distributions我预约的会议，当日及未来的预约
export function mineInfo(info) {
    return request({
        url: '/room/my/distributions',
        method: 'get',
        params: {
            user_id:info.user_id  
        }
    })
} 
//room/distributions/{distribution_id}取消预约
export function cancleInfo(distribution_id,user_id ) {
    return request({
        url: '/room/distributions/' + distribution_id,
        method: 'DELETE',
        params: { 
            user_id:user_id   
        }
    })
} 
//api/v1/room/{room_id}/available-half-hours获取会议室指定日期的有效时间段
export function available(room_id,date) {
    return request({
        url: '/room/' + room_id + '/available-half-hours',
        method: 'get',
        params: { 
            date:date   
        }
    })
} 
//room/distributions 预约会议室
export function order(info) {
    return request({
        url: '/room/distributions',
        method: 'post',
        params: { 
            room_id:info.room_id, 
            start_at:info.start_at,   
            end_at:info.end_at,   
            member_number:info.member_number,   
            type:info.type,   
            has_external_staff:info.has_external_staff,   
            theme:info.theme,   
            booker:info.booker,   

        }
    })
} 