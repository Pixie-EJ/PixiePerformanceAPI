const MemberService = require('../services/memberService');

class MemberController {

    handleGetMember(request, response) {
        const service = new MemberService();
        service.getMember((res) => {            
            return response.json(res)
        })            
    }
    
    handleCreateMember(request, response) {
        
        const service = new MemberService();
        const body = request.body;
        
        service.create(body,  (res) => {
            return response.json(res)
        })    
    }
}

module.exports = MemberController;