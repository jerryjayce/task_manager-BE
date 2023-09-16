import express from 'express';
import {TaskController} from './controllers';

const router = express.Router({mergeParams: true});


router.post('/task/add', TaskController.add_task);


export default router;
