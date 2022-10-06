export const handler = function(event, context, callback){
    callback(null, {    
        statusCode: 200,
        body: JSON.stringify("Hello World")       
    })
}