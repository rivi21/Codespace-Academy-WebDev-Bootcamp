const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
    const from = req.query.from || 0;
    const limit = req.query.limit || 3;

    User.find({ state: true }, "username email role _id")
        .skip(Number(from))//para paginacion: 10 por pagina
        .limit(Number(limit))
        .exec((error, usersDB) => {
            if (error) {
                res.status(400).json({
                    ok: false,
                    error
                });
            } else {
                res.status(201).json({
                    ok: true,
                    user: usersDB
                });
            }
        });
});

router.post("/", (req, res) => {
    const { username, email, password, role } = req.body;

    const user = new User({ username, email, password, role });

    user.save((error, userDB) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error
            });
        } else {
            res.status(201).json({
                ok: true,
                user: userDB
            });
        }
    })
});

router.put("/:id", (req, res) => {
    //A los parámetros definidos como ":id" se accede por params
    //A los definidos como "?page=2" se accede por queryparams
    const id = req.params.id;

    User.findByIdAndUpdate(
        id,
        { username, email, password, role },
        {
            new: true,
            runValidators: true,
            context: "query"// para validaciones por campo único
        },
        (error, userDB => {
            if (error) {
                res.status(400).json({
                    ok: false,
                    error
                });
            } else {
                res.status(201).json({
                    ok: true,
                    user: userDB
                });
            }
        })
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    //hard delete
    // User.findByIdAndDelete(
    //     id,
    //     (error, userDB) => {
    //         if (error) {
    //             res.status(400).json({
    //                 ok: false,
    //                 error
    //             });
    //         } else {
    //             res.status(204).json({
    //                 ok: true,
    //                 user: userDB
    //             });
    //         }
    //     }
    // );

    //soft delete
    User.findByIdAndUpdate(
        id,
        { state: false },
        { new: true },
        (error, userDB) => {
            if (error) {
                res.status(400).json({
                    ok: false,
                    error
                });
            } else {
                res.status(201).json({
                    ok: true,
                    user: userDB
                });
            }
        }
    );
});

module.exports = router;