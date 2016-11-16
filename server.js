var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

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

//post request todos
app.post('/todos', function(req, res){
    var body = req.body;

    body.id = todoNextId;
    todoNextId = todoNextId++;

    todos.push(body);
    console.log('description: ' + body.description);
    res.json(body);
});


app.listen(PORT, function(){
    console.log('Express listining on port ' + PORT + '!');
});
