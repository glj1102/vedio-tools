const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
import ffmpeg from "fluent-ffmpeg";
ffmpeg.setFfmpegPath(ffmpegPath);
import path from "path";

class FileService {
    public async upload(ctx) {
        const file = ctx.request.files.file;
        const name: string = file.name;
        const fileName = name.substring(0, name.length - 4);
        const process = ffmpeg(file.path)
            .toFormat("mp4")
            .saveToFile(
                path.join(__dirname, "/../public/upload/") + `/${fileName}.mp4`
            );
        return await ctx.render("index");
    }
}

export const fileService = new FileService();
