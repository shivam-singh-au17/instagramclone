const express = require("express");
const Signup = require("../models/signup.model");
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        let signup = new Signup(req.body);
        signup = await signup.save();
        res.status(200).json({
            status: 200,
            data: signup,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/signup", async (req, res) => {
    try {
        let users = await Signup.find();
        res.status(200).json({
            status: 200,
            data: users,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/signup/:signupId", async (req, res) => {
    try {
        let signup = await Signup.findOne({
            _id: req.params.signupId,
        });
        if (signup) {
            res.status(200).json({
                status: 200,
                data: signup,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No signup found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.put("/signup/:signupId", async (req, res) => {
    try {
        let signup = await Signup.findByIdAndUpdate(req.params.signupId, req.body, {
            new: true,
        });
        if (signup) {
            res.status(200).json({
                status: 200,
                data: signup,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No signup found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.delete("/signup/:signupId", async (req, res) => {
    try {
        let signup = await Signup.findByIdAndRemove(req.params.signupId);
        if (signup) {
            res.status(200).json({
                status: 200,
                message: "Signup deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No signup found",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

module.exports = router;


