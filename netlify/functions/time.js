exports.handler = function(event, context, callback) {
    const date = new Date()
    callback(null, {
        statusCode:200,
        body: JSON.stringify(date)
    })
}


