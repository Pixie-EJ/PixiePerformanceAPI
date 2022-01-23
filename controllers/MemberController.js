const MemberService = require('../services/MemberService');

class MemberController {

    handleGetMember(request, response) {
        const service = new MemberService();
        service.get((res) => {            
            return response.json(res)
        })      
    }
    
    handleCreateMember(request, response) { 
        const service = new Tourada();
        const body = request.body;
        service.create(body,  (res) => {
            return response.json(res)
        })    
    }

}

module.exports = MemberController;