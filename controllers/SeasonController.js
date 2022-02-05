const SeasonService = require('../services/SeasonService');

class SeasonController {
    handleCreateSeason(request, response) {
        const service = new SeasonService();
        const body = request.body;
        service.create(body,(res) => {
            return response.json(res)
        })            
    }
    handleGetSeason(request, response) {
        const service = new SeasonService();
        service.getSeason((res) => {
            return response.json(res)
        })            
    }

}
module.exports = SeasonController;