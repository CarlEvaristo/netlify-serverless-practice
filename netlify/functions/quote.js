import { axios } from "axios"

exports.handler = function(event, context, callback) {
    axios.get("https://ron-swanson-quotes.herokuapp.com/V2/QUOTES")
        .then(res =>  callback(null,{
            statusCode: 200,
            body: JSON.stringify(res.data)
            })
        )
}