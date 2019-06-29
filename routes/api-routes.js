// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var dogsJson = require('../tempdb');
module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  /*
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });
  */
  app.post('/api/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      console.log('USET', user)
      if (err) { return next(err); }
      // if (!user) { return res.redirect('/login'); }
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        res.json(user)
        // return res.redirect('/users/' + user.username);
      });
    })(req, res, next);
  })
  //
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function (user) {
      res.json(user);
      // res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
  //
  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
  //
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/login",

  passport.authenticate('local', { successRedirect: '/',
      failureRedirect: '/api/login' }));


  //     app.post('/login', passport.authenticate('local', { successRedirect: '/',
  //     failureRedirect: '/api/login' }));



  //     if (err) {
  //       res.status(404).json(err);
  //       return;
  //     }

  //     if (user) {
  //       res.status(200);
  //       res.json({
  //         user: user,
  //         success: true
  //       });
  //       console.log(user);
  //     } else {
  //       console.log('wrong');
  //       res.status(401).json(info);
  //     }
  //   })(req, res);
  // });
  //
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });
  //
  // Route for logging user out
  app.get("/api/logout", function (req, res) {
    req.logout();
    res.json({ success: true });
  });
  //
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //find dog by id
  //returns shelter by id
  app.get("/details/:dogId", function (req, res) {
    //modify this to return desired data.
    let SheltersRes= {
      name:'Sheler ',
      id:0,
      zipcode:0,
      phone:0
    };
    let dogRes = {
      id:0,
      shelter:0,
      breed:"",
      gender:"",
      image:"",
      video:"",
      booked_timestamp:0
    };
    db.dog.findAll({
      where: {
        ID:req.params.dogId
      }
    }).then(dogs => {
      let dogdb = JSON.stringify(dogs);
      let dogObj = JSON.parse(dogdb);
      dogRes.id = dogObj[0].ID;
      dogRes.shelter = dogObj[0].ID;
      dogRes.breed = dogObj[0].BREED;
      dogRes.booked_timestamp = dogObj[0].BOOKED_TIMESTAMPED;
      dogRes.gender = dogObj[0].GENDER;
      dogRes.image = dogObj[0].IMAGE;
      dogRes.video = dogObj[0].VIDEO;
      dogRes.gender = dogObj[0].GENDER;
      console.log(dogObj[0].ID);
    });
    
    db.shelter.findAll({
      where: {
        ID:req.params.dogId
      }
      }).then(shelters => {
        let shelterdb = JSON.stringify(shelters);
        let shelterObj = JSON.parse(shelterdb);
        SheltersRes.zipcode = shelterObj[0].ZIPCODE;
        SheltersRes.id = shelterObj[0].ID;
        SheltersRes.name = 'Shelter ' + shelterObj[0].ID
        SheltersRes.phone = shelterObj[0].PHONE;
        console.log(SheltersRes);

        }).then(()=>{
         res.send({SheltersRes,dogRes});
        })
 
      });

  app.post("/details/new/:entry", function (req, res) {
    db.dog.findAll({
      where: {
        ID:req.params.ID
      }
    }).then(dogs => {
      let dogdb = JSON.stringify(dogs);
      let dogObj = JSON.parse(dogdb);
      console.log(dogObj[0].ID);
    });
    db.shelter.findAll({

    }).then(shelters => {
        let shelterdb = JSON.stringify(shelters);
        let shelterObj = JSON.parse(shelterdb);
        console.log(shelterObj[0].ZIPCODE);
    });
  });

  app.get("/api/all", function (req, res) {
    let dogData;
        db.dog.findAll({}).then(response => {
           dogData = response;
      });
      db.shelter.findAll({}).then(shelter_res =>{
        let dataRes = {
          dogData,
          shelter_res
        }
        res.json(dataRes);
    });
  });

  app.get('/details/shelterszip/:ZIPCODE', (req, res) => {
    db.shelter.findAll({
      where: {
        ZIPCODE:req.params.ZIPCODE
      }
    }).then(shelters => {
     console.log(shelters.data);  
     data.controls.getShelters();
    });
 });

  app.get('/details/shelters/:ID', (req, res) => {
    db.shelter.findAll({
      where: {
        ID:req.params.ID
      }
    }).then(shelters => {
      let shelterdb = JSON.stringify(shelters);
      let shelterObj = JSON.parse(shelterdb);
     console.log(shelterObj);  
    });
  });

  app.get('/details/shelterszip/:ZIPCODE', (req, res) => {
    db.shelter.findAll({
      where: {
        ZIPCODE:req.params.ZIPCODE
      }
    }).then(shelters => {
     console.log(shelters.data);  
     data.controls.getShelters();
    });
  });
  // app.get('/api/shelters/:ID?', (req, res) => {
  //   let query;
  //   if (req.params.ID) {
  //     query = db.Shelter.findAll({
  //       include: [
  //         { model: db.Dog, where: { id: req.params.ID } },
  //       ]d
  //     })
  //   } else {
  //     query = db.Shelter.findAll({ include: [db.Dog] })
  //   }
  //   return query.then(shelters => res.json(shelters))
  // });
  
};