import {Client} from 'cassandra-driver';

function createClient(config:any) {
  return new Client(config.db);
}

exports = module.exports = createClient;
exports['@singleton'] = true;
exports['@require'] = ['config'];

