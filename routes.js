import { Router } from 'express';

import { CreateEventController } from './controllers/Events/CreateEventController';
import { GetMemberController } from './controllers/Members/GetMemberController';

const router = Router();

router.post("/events/create", new CreateEventController().handle);

router.get("/members", new GetMemberController().handle);

export { router }