const connection = require('./connection');

const allItems = async () =>
  (await connection).execute('SELECT * FROM projectmanager.project');

module.exports = allItems;
