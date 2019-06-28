import Router from "koa-router";
import views from "koa-views";
import { fileService } from "../services/file";

const router = new Router();

router.use(views(__dirname + "/../views"));

router.get("/", async (ctx, next) => {
    await ctx.render("index");
});

router.post("/upload", async (ctx, next) => {
    return await fileService.upload(ctx);
});

export { router };