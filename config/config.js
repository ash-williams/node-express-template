const convict = require('convict');

let config = convict({
        authToken: {
            format: String,
            default: 'X-Authorization' //optional
        },
        db: {
            host: { // host, rather than hostname, as mysql connection string uses 'host'
                format: String,
                default: ""
            },
            user: {
                format: String,
                default: ''
            },
            password: {
                format: String,
                default: ''
            },
            database: {
                format: String,
                default: ''
            },
            multipleStatements:{
                format: Boolean,
                default: false 
            }
        }
    });


module.exports = config;
