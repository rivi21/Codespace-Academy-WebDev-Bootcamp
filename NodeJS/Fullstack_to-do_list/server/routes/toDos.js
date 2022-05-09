const express = require("express");
const router = express.Router();


const ToDo = require("../models/toDo");



router.get("/", (req, res) => {
    ToDo.find({ active: true }, "title completed id"),
        (err, todoDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err,
                });
            }
            res.status(201).json({
                ok: true,
                todo: todoDB,
            });

        };
});

router.post("/", (req, res) => {
    const body = req.body;

    let toDo = new ToDo({
        title: body.title,
        completed: body.completed,
        active: body.active,
    });

    toDo.save((err, toDoDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err,
            });
        } else {
            res.json({
                ok: true,
                todo: toDoDB
            });
        }
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const { completed } = req.body;

    ToDo.findByIdAndUpdate(
        id,
        { title, completed, active },
        {
            new: true, //devuelve el objeto actualizado
            runValidators: true, //aplica las validaciones del esquema del modelo
            context: 'query'  //necesario para las disparar las validaciones de mongoose-unique-validator
        },
        (err, todoDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err,
                });
            }
            res.status(201).json({
                ok: true,
                todo: todoDB,
            });
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    ToDo.findByIdAndUpdate(
        id,
        { active: false },
        { new: true },
        (err, todoDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err,
                });
            }
            res.status(201).json({
                ok: true,
                todo: todoDB,
            });

        }

    );
});

module.exports = router;