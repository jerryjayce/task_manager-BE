import express from 'express';
import {TaskController} from './controllers';

const router = express.Router({mergeParams: true});


router.post('/task/add', TaskController.add_task);
router.get('/task', TaskController.fetch_user_tasks);
router.get('/task/:task_id', TaskController.fetch_task);


export default router;
