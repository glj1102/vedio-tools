import Koa from "koa";
import { router } from "./route/router";
const koaBody = require("koa-body");


const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(koaBody({
    multipart: true
}));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log("app started at port 3000...");
