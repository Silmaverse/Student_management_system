const express = require("express");
const router = express.Router();
const baseurl = process.env.BASE_URL;
const authRoutes = require("../routes/authRoutes/index");
const subRoutes = require("../routes/subjectRoutes/index");
const classRoutes = require("../routes/classRoutes/index");
const noticeRoutes = require("../routes/noticeRoutes/index");

router.use(baseurl, authRoutes);
router.use(baseurl, subRoutes);
router.use(baseurl, classRoutes);
router.use(baseurl, noticeRoutes);

module.exports = router;
