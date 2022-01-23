const PointService = require('../services/PointService');

class PointController {
    handleGetCards(request, response) {
        const service = new PointService();
        service.getCards((res) => {
            return response.json(res)
        })            
    }
}

module.exports = PointController;
