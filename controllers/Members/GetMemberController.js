import { GetMemberService } from "../../services/Members/GetMemberService";

class GetMemberController {
    async handle(request, response) {
        const service = new GetMemberService();
        const result = await service.execute();
        return response.json(result);
    }
}

export { GetMemberController };
