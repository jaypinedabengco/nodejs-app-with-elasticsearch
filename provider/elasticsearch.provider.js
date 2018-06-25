var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

////

exports.getClient = getClient;

/////

/**
 * 
 */
function getClient(){
    return new Promise(resolve => {
        return resolve(client);
    });
}