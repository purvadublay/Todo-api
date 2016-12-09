var Sequelize = require('Sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    completed: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
      }
});

sequelize.sync({
  //force:true
}).then(function(){
  console.log('Everthing is synced');

  Todo.findById(3).then(function(todo){
      if(todo){
          console.log(todo.toJSON());
      }
      else{
        console.log('todo not found');
      }
  });

  // Todo.create({
  //     description: 'Lets go for shopping',
  //     completed: false
  // }).then(function(todo){
  //     return Todo.create({
  //         description: 'clean the room'
  //     });
  // }).then(function(){
  //     //return Todo.findById(2);
  //     return Todo.findAll({
  //         where: {
  //             description: {
  //                 $like: '%shopping%'
  //             }
  //         }
  //     });
  // }).then(function(todos){
  //     if(todos){
  //         todos.forEach(function(todo) {
  //             console.log(todo.toJSON());
  //         });
  //     }else{
  //         console.log('not found');
  //     }
  // }).catch(function(e){
  //     console.log(e);
  // });

});
