const RuleService = require('../services/RuleService');

class RuleController {
    handleGetRule(request, response) {
        const service = new RuleService();
        service.getRule((res) => {
            return response.json(res)
        })            
    }
}

module.exports = RuleController;
