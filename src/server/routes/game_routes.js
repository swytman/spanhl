import GameDB from '../gamedb'
import TeamDB from '../teamdb'


module.exports = function(app, db){

  var gamedb = new GameDB(db);
  var teamdb = new TeamDB(db);
  // list games
  app.get('/api/games', function(req, res){
      console.log('list games request');
      gamedb.list( (rows) => {res.send(rows)} );
  });

  // create game
  app.post('/api/games', function(req, res){
    console.log('create game request');
    gamedb.create(req.body);
    gamedb.list((rows) => {res.send(rows)});
  });

  // update game
  app.patch('/api/games/:id', function(req, res){
    console.log('update game request');
    if (req.body.id){
        gamedb.update(req.body);
    }
    gamedb.list((rows) => {res.send(rows)});
  })

  // get game
  app.get('/api/games/:id', function(req, res){
    console.log('get game request');

  })

    // new game
    app.get('/api/game/new', function(req, res){
        console.log('new game request');
        teamdb.list((rows) => {res.send({teams:rows})});
    })

  // delete game
  app.delete('/api/games/:id', function(req, res){
    if (req.params.id){
      gamedb.delete(req.params.id);
      db.run(sql);
    }
    gamedb.list((rows) => {res.send(rows)});
  });

}
