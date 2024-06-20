import express from 'express';
import repository from '../../infrastructure/repositories/index.js';

const router = express.Router();

router.get('/users', async (req, res) => {
    const users = await repository.user.findAll();
    res.json(users);
});

router.post('/users', async (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email
    };
    const user = await repository.user.save(newUser);
    let response = newUser || 404;
    let index = user ? 'json' : 'sendStatus';
    res[index](response);
});

router.get('/users/:id', async (req, res) => {
    const user = await repository.user.findById(req.params.id);
    let response = user || 404;
    let index = user ? 'json' : 'sendStatus';
    res[index](response);
});

router.put('/users/:id', async (req, res) => {
    const updatedUser = {
        username: req.body.username,
        email: req.body.email
    };
    const user = await repository.user.update(req.params.id, updatedUser);
    let response = updatedUser || 404;
    let index = user ? 'json' : 'sendStatus';
    res[index](response);
});

router.delete('/users/:id', async (req, res) => {
    const userDeleted = await repository.user.delete(req.params.id);
    let response = userDeleted ? {succes: userDeleted} : 404;
    let index = userDeleted ? 'json' : 'sendStatus';
    res[index](response);
});


export default router;