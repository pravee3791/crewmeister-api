import express, { Router } from 'express';
import members from "../controller/members.controller";
import absences from "../controller/absences.controller";

const router = express.Router();

router
    .route(`/members`)
    .get(members)

router
    .route(`/absences`)
    .get(absences)

export default router;