import { CreateEventService } from "../../services/Events/CreateEventService";

class CreateEventController {
    async handle(request, response) {
        const { name, type, date} = request;
        const service = new CreateEventService(name, type, date);
        const result = await service.execute();
        return response.json(result);
    }
}

export { CreateEventController };