exports.handler = function(event, context, callback) {
    const date = new Date()
    const time = date.getTime()
    callback(null, {
        statCode:200,
        body: JSON.stringify(time)
    })
}