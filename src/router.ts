import { Router } from "express";
import { createUser, deleteManyUser } from "./controller/UserController";
import { createAccess, getAllAccesses, getAllAccesseslogin, site } from "./controller/AccessController";





export const router = Router();

router.get("/", site)//AcessControler
router.post("/user", createUser);
router.post("/access", createAccess);
router.get("/accesses", getAllAccesses);
router.delete("/delete-users", deleteManyUser);
router.post("/login", getAllAccesseslogin)//AcessControler
router.post("/login", getAllAccesseslogin)//AcessControler

//TESTES GIT
//ROTA=>CONTROLER/BANCO


