const SquadService = require('../services/SquadService');

class SquadController {
    
    handleCreateSquad(request, response) {
        
        const service = new SquadService();
        const body = request.body;
        
        service.create(response, body).then(result => {
            response.send(result);
        });

    }
}

module.exports = SquadController;