
exports.handler = function(event, context, callback){
    // event === React request(body) object (contains stuff like: headers,http method(get post etc),)
    // context === authentication and identity information (id's, keys, etc)
    // callback === React response object
    callback(null, {    //=> 1st param = error object (set to null -no error)  => 2nd param = response object
        statusCode: 200,
        body: JSON.stringify("Hello World")         //=> response body === json object !!
    })
}