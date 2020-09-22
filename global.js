import Vue from 'vue'
export const userKey = '__UserKeyAplication'
export const domainApi = 'http://poptvnews.local'
// export const domainApi = 'http://ogirassol.gestaobytes.com'
export const baseApiUrl = domainApi + '/api'
export const versionApi = '/v1'
export const baseApiUrlWithVersion = baseApiUrl + versionApi
export const baseApiUrlAdmin = baseApiUrlWithVersion + '/admin'
export const baseApiUrlPublic = baseApiUrlWithVersion + '/public'
export function showError(e) {
    if (e && e.response && e.response.data) {
        var message = Object.values(e.response.data)
        Vue.toasted.global.defaultError({ msg: message[0] })
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { domainApi, baseApiUrl, baseApiUrlWithVersion, baseApiUrlAdmin, baseApiUrlPublic, showError, userKey }

