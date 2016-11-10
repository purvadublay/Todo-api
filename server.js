var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'Meet mom for lunch',
  completed: false
},
{
  id: 2,
  description: 'Pickup an item from market',
  completed: false
},
{
  id: 3,
  description: 'go for shopping',
  completed: true

}];

app.get('/', function(req, res){
    res.send('TODO API root');
});

// get / todos list
app.get('/todos', function(req, res){
    res.json(todos);
});

// get / individual todos/id
app.get('/todos/:id', function(req, res){
    var todoID = parseInt(req.params.id, 10);
    var matchedTodo;

    //iterate todos array
    todos.forEach(function(todo){
      if(todoID === todo.id)
      {
          matchedTodo = todo;
      }
    });

    if(matchedTodo){
        res.json(matchedTodo);
    }
    else {
        res.status(404).send();
    }
    
    res.send('to list ' + req.params.id);
});

app.listen(PORT, function(){
    console.log('Express listining on port ' + PORT + '!');
});
