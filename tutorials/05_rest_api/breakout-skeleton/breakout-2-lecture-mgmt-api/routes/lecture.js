var express = require('express');
var router = express.Router();

let DatabaseService = require('../service/DatabaseService');
let databaseService = new DatabaseService();

/**
 * returns all lectures
 * TODO make this resource filterable e.g. by professor
 */
router.get('/', (req,res)=> {
    databaseService.getAllLectures(lectures => {
        res.send(lectures);
    });
});

/**
 * returns a lecture by its slug
 */
router.get('/:slug', (req,res)=>{
    databaseService.getLecture(req.params['slug'], lecture => {
        if(lecture){
            res.send(lecture);
        }
        else {
            res.status(404).send();
        }
    })
});

/**
 * returns all assignments for a lecture
 */
router.get('/:slug/assignments', (req,res) => {
    databaseService.getAllAssignmentsForLecture(req.params['slug'], assignments => {
        if (assignments){
            res.send(assignments)
        }
        else {
            res.status(404).send();
        }
    })
});


/*
    TODO create a route to access an assignment by its id (e.g. assignment1)
    you can retrieve stored assignment objects with the DatabaseService class' method getAssignmentById
 */


/*
    TODO create a route to upload an assignment. The user should have to specify an id and the assignment object
    you can store assignment objects with the DatabaseService class' method addAssignmentForLecture
 */


module.exports = router;