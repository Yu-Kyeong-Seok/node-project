import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import { imageUpload } from "@/vendors/multer";

const uploadRouter = express.Router();

const UPLOD_ROUTES = {
    UPLOAD_IMAGE: "/api/upload/image",
    UPLOAD_IMAGES: "/api/upload/images",
} as const;

uploadRouter.post(
    extractPath(UPLOD_ROUTES.UPLOAD_IMAGE, ROUTES_INDEX.UPLOAD_API),
    imageUpload.single("filename"),
    (req, res, next) => {
        const SERVER_URL = process.env.SERVER_URL || "http://localhost:4000";

        const file = req.file as Express.Multer.File;

        res.json({
        url: `${SERVER_URL}/static/uploads/${file?.filename}`,
        });
    }
);

uploadRouter.post(
    extractPath(UPLOD_ROUTES.UPLOAD_IMAGES, ROUTES_INDEX.UPLOAD_API),
    imageUpload.array("filenames"),
    (req, res, next) => {
        try {
        const SERVER_URL = process.env.SERVER_URL || "http://localhost:4000";

        const files = req.files as Express.Multer.File[];

        res.json({
            files: files.map(
            (file) => `${SERVER_URL}/static/uploads/${file.filename}`
            ),
        });
        } catch (error) {
        console.error(error);
        next(error);
        }
    }
);

export default uploadRouter;
