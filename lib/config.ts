function createCassandraConfig() {
  let hostnames = process.env.CASSANDRA_HOSTNAMES || 'localhost';

  let clientConfig = {
    contactPoints: hostnames.split(','),
    keyspace: process.env.CASSANDRA_KEYSPACE
  };

  if (process.env.CASSANDRA_CONFIG) {
    clientConfig = JSON.parse(process.env.CASSANDRA_CONFIG || '{}');
  }
}

function createConfig() {
  return {
    db: createCassandraConfig(),
  };
}

exports = module.exports = createConfig;
exports['@singleton'] = true;
