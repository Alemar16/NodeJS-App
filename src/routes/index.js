import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "My First page with NodeJS" })
);
router.get("/about", (req, res) => res.render("about", { title: "About" }));
router.get("/contact", (req, res) => res.render("contact", { title: "Contact" }));

export default router;
