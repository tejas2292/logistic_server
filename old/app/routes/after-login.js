//after logins
const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        error: null,
        data: {
            title: "User dashboard",
            content: "after login",
        },
    });
});

module.exports = router;