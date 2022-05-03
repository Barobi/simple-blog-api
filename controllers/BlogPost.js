'use strict';

var utils = require('../utils/writer.js');
var BlogPost = require('../service/BlogPostService');

module.exports.addBlogPost = function addBlogPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  BlogPost.addBlogPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(501, response));
    });
};

module.exports.getBlogPostById = function getBlogPostById (req, res, next) {
  var id = req.swagger.params['id'].value;
  BlogPost.getBlogPostById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBlogPosts = function getBlogPosts (req, res, next) {
  BlogPost.getBlogPosts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBlogPost = function updateBlogPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  BlogPost.updateBlogPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(501, response));
    });
};
