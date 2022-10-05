exports.handler = function(event, context, callback) {
    const date = new Date()
    const key = process.env.REACT_APP_API_KEY
    console.log(key)
    callback(null, {
        statusCode:200,
        body: JSON.stringify(date)
    })
}


