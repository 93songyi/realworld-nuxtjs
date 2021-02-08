import { request } from '@/plugins/request.js'
export const getUserProfiles = (username) => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`,
  })
}
