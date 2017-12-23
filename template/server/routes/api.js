import Router from "koa-router";

export default function() {
  const router = new Router();

  router.prefix("/api");

  router.get("/hello", async ctx => {
    ctx.body = "Hello React";
  });

  return router.routes();
}
