import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (res, req) => res.setEncoding("Videos"));
videoRouter.get(routes.upload, (res, req) => res.setEncoding("Upload"));
videoRouter.get(routes.videoDetail, (res, req) => res.setEncoding("Video Detail"));
videoRouter.get(routes.editVideo, (res, req) => res.setEncoding("Edit Video"));
videoRouter.get(routes.deleteVideo, (res, req) => res.setEncoding("Delete Video"));

export default videoRouter;