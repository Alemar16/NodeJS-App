import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", { title: "NodeJS Project" }));
router.get("/about", (req, res) => res.render("about", { title: "NodeJS Project" }));
router.get("/contact", (req, res) => res.render("contact", { title: "NodeJS Project" }));

export default router;
