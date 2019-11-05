const express = require('express');
const movieController = require('../contoller/movies');
const router = express.Router();
const { celebrate, Joi, errors } = require('celebrate');

router.get('/', movieController.GetAllMovies);
router.post('/add-movie',  
celebrate({
  body: Joi.object({
    IMDbID: Joi.string().required()
  })
})
, movieController.CreateMovie);

router.use(errors())
module.exports = router;