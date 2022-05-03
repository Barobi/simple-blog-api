'use strict';

var db = require('./db');


/**
 * Add a new blog post comment
 *
 * body BlogPostComment Blog post comment object to add
 * returns BlogPostComment
 **/
exports.addBlogPostComment = function(body) {
  return new Promise(function(resolve, reject) {
    var comment = body;
    var comments = db.get('blogPostComments')
    var nextFreeId = comments.maxBy('id').value().id + 1;
    comment.id = nextFreeId;
    comments.push(comment).write();
    resolve(comment);
  });
}


/**
 * Get all blog post comments
 *
 * id Integer ID of blog post to return comments for
 * returns List
 **/
exports.getBlogPostCommentsByBlogPostId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve(db.get('blogPostComments').filter({blogPostId:id}).value());
  });
}


/**
 * Update an existing blog post comment
 *
 * body BlogPostComment Blog post comment object to update
 * no response value expected for this operation
 **/
exports.updateBlogPostComment = function(body) {
  return new Promise(function(resolve, reject) {
    reject();
  });
}

