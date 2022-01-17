const SquadService = require('../services/SquadService');

class SquadController {
    
    handleCreateSquad(request, response) {
        
        const service = new SquadService();
        const {body} = request;
        
        service.create(body, (res) => {
            return response.json(res)
        });

    }
}

module.exports = SquadController;
