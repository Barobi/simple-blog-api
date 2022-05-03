'use strict';

var utils = require('../utils/writer.js');
var BlogPostComment = require('../service/BlogPostCommentService');

module.exports.addBlogPostComment = function addBlogPostComment (req, res, next) {
  var body = req.swagger.params['body'].value;
  BlogPostComment.addBlogPostComment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBlogPostCommentsByBlogPostId = function getBlogPostCommentsByBlogPostId (req, res, next) {
  var id = req.swagger.params['id'].value;
  BlogPostComment.getBlogPostCommentsByBlogPostId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBlogPostComment = function updateBlogPostComment (req, res, next) {
  var body = req.swagger.params['body'].value;
  BlogPostComment.updateBlogPostComment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(501, response));
    });
};
