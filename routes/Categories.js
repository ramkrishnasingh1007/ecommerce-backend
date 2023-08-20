const express = require('express');
const { fetchCategories, createCategory } = require('../controller/Category');

const router = express.Router();
//categorys is already added in base path
router.get('/', fetchCategories)
      .post('/', createCategory);

exports.router = router;