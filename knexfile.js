module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/tessaract',
    pool: {
      min: 2,
      max: 10
    }
  }

};
