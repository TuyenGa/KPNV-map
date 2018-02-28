module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '172.17.0.1',
      port: 5432,
      user: 'postgres',
      password: 'anhtuyen9x',
      database: 'myservice'
    },
    searchPath: ['knex','public'],
    migrations: {
      directiory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: '',
      port: 5432,
      user: 'postgre',
      password: 'anhtuyen9x',
      database: 'myservice'
    },
    searchPath: ['knex','public'],
    migrations: {
      directiory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
}