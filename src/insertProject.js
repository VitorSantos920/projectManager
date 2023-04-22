const connection = require('./connection');

const insertProject = async (name, description, responsible) => {
  (await connection).execute(
    `INSERT INTO project (name, description, responsible) VALUES ('${name}', '${description}', '${responsible}')`
  );
};

module.exports = insertProject;
