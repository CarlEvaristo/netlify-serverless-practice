exports.handler = function(event, context, callback) {
    const date = new Date()
    const year = date.getFullYear()
    callback(null, {
        statCode:200,
        body: JSON.stringify("Hello World")
    })
}


