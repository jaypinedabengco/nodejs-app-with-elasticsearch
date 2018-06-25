var elastic_search_provider = require('./../provider/elasticsearch.provider');

exports.test = test;
exports.save = save;
exports.get = get;
exports.search = search;

/**
 * 
 */
function test() {
    return elastic_search_provider.getClient()
        .then(client => {
            return client.ping({
                requestTimeout: 1000
            })
                .then(result => {
                    console.log('hey', result);
                    return result;
                });
        });
}

/**
 * 
 * @param {*} data 
 */
function save(data) {
    return elastic_search_provider.getClient()
        .then(client => {
            return client.bulk({
                body: data
            });
        });
}

/**
 * 
 * @param {*} query 
 */
function get(query) {
    return elastic_search_provider.getClient()
        .then(client => {
            return client.get(query);
        });
}

/**
 * 
 * @param {*} query 
 */
function search(query) {
    return elastic_search_provider.getClient()
        .then(client => {
            return client.search(query);
        });
}