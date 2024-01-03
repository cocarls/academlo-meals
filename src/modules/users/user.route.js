import express from "express";
import { createUser, login, updateprofile, deleteUser, findUserOrders, findOneOrder } from "./user.controller.js";


export const router = express.Router()

router.post('/signup',createUser)

router.post('/login', login)

router.patch('/:id', updateprofile)

router.delete('/:id', deleteUser)

router.get('/orders', findUserOrders)

router.get('/orders/:id', findOneOrder)