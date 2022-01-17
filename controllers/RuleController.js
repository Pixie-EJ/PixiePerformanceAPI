const RuleService = require('../services/RuleService');

class RuleController {
    handleGetRule(request, response) {
        const service = new RuleService();
        service.getRule((res) => {
            return response.json(res)
        })            
    }

    handleCreateRule(request, response){
        const service = new RuleService();
        const {body} = request;
        service.create(body, (res) => {
            return response.json(res)
        })
    }
}

module.exports = RuleController;
