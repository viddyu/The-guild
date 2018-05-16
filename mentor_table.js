module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.create('mentor_table', [{
        name: 'John',
        field: 'Engineering',
        job: 'Engineer',
        education: 'Bachelor of Science, Computer Engineering',
        projectDescription: 'Building a full-stack app'
      }], {});
  },
};