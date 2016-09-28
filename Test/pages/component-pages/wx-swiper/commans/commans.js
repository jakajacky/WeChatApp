function fetchApi(url, callback) {
    wx.request({url, data: {}, header: { 'Content-Type': 'application/json' }, success (res) {
        callback(null, res.data)
    },
    fail (e) {
        console.error(e)
        callback(e)
    }
    })
}

module.exports = {
    fetchApi:fetchApi
}