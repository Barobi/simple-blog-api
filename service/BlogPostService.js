'use strict';

var db = require('./db');


/**
 * Add a new blog post
 *
 * body BlogPost Blog post object to add
 * no response value expected for this operation
 **/
exports.addBlogPost = function(body) {
  return new Promise(function(resolve, reject) {
    reject();
  });
}


/**
 * Get blog post by ID
 *
 * id Integer ID of blog post to return
 * returns BlogPost
 **/
exports.getBlogPostById = function(id) {
  return new Promise(function(resolve, reject) {
    var post = db.get('blogPosts').find({id:id}).value();
    enrichBlogPost(post);
    resolve(post);
  });
}


/**
 * Get all blog posts
 *
 * returns List
 **/
exports.getBlogPosts = function() {
  return new Promise(function(resolve, reject) {
    var posts = db.get('blogPosts').value();
    posts.forEach(enrichBlogPost);
    resolve(posts);
  });
}


/**
 * Update an existing blog post
 *
 * body BlogPost Blog post object to update
 * no response value expected for this operation
 **/
exports.updateBlogPost = function(body) {
  return new Promise(function(resolve, reject) {
    reject();
  });
}


/**
 * Blog post helper function
 **/
 function enrichBlogPost(post) {
  var comments = db.get('blogPostComments').filter({blogPostId:post.id}).value();
  post.numComments = comments.length;
}
