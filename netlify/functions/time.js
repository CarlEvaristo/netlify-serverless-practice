exports.handler = function(event, context, callback) {
    const date = new Date()
    const year = date.getFullYear()
    callback(null, {
        statusCode:200,
        body: JSON.stringify(year)
    })
}


