/*
Student name: Stella Kwate
Student Id: 301262367
File name: WEEK3F
Date : 30/09/2023
*/

exports.render = function(req, res) { 
if (req.session.lastVisit) { 
      console.log(req.session.lastVisit); 
   }
req.session.lastVisit = new Date();
}; 
