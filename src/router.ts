import { Router } from "express";
import { createUser, deleteManyUser } from "./controller/UserController";
import { createAccess, getAllAccesses, getAllAccesseslogin } from "./controller/AccessController";




export const router = Router();

router.post("/user", createUser);
router.post("/access", createAccess);
router.get("/accesses", getAllAccesses);
router.delete("/delete-users", deleteManyUser);
router.get("/login", getAllAccesseslogin)//AcessControler


//TESTES GIT
//ROTA=>CONTROLER/BANCO

