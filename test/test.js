const supertest = require("supertest");
const expect = require("chai").expect;


const request = supertest("http://localhost:8080");


describe("Simple Blog API", function() {


  it("Access documentation (Swagger UI)", async function()
  {
    const response = await request.get("/docs/");
    expect(response.status).to.eql(200);
    expect(response.text).to.include("Swagger UI");
  });


  it("Get all blog posts", async function()
  {
    const response = await request.get("/v1/blog-posts");
    expect(response.status).to.eql(200);
    expect(response.body).to.be.an("array");
  });


  it("Store and retrieve blog post comment", async function()
  {
    const response = await request.post("/v1/blog-post-comment").send({
      "id": 0,
      "blogPostId": 1,
      "parentId": 0,
      "dateCreated": "2000-01-23T04:56:07.000+00:00",
      "content": "content",
      "user": "user"
    });
    expect(response.status).to.eql(200);

    const response2 = await request.get("/v1/blog-post/1/comments");
    expect(response2.status).to.eql(200);
    expect(response2.body).to.be.an("array");
    expect(response2.body.length).to.be.greaterThan(0);
    expect(response2.body.at(-1).id).to.be.greaterThan(0);
    expect(response2.body.at(-1).blogPostId).to.eql(1);
    expect(response2.body.at(-1).parentId).to.eql(0);
    expect(response2.body.at(-1).dateCreated).to.eql("2000-01-23T04:56:07.000+00:00");
    expect(response2.body.at(-1).content).to.eql("content");
    expect(response2.body.at(-1).user).to.eql("user");
  });


});
