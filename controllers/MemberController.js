const MemberService = require('../services/memberService');

class MemberController {
    
    handleCreateMember(request, response) {
        
        const service = new MemberService();
        const body = request.body;
        
        service.create(body,  (res) => {
            return response.json(res)
        })    
    }
}

module.exports = MemberController;