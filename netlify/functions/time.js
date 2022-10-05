exports.handler = function(event, context, callback) {
    const date = new Date()
    const fullDate = date.getDate()
    callback(null, {
        statusCode:200,
        body: JSON.stringify(fullDate)
    })
}


