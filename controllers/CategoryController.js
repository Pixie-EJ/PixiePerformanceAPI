const CategoryService = require('../services/CategoryService');

class CategoryController {
    
    handleCreateCategory(request, response) {
        
        const service = new CategoryService();
        const {body} = request;
        
        service.create(body, (res) => {
            return response.json(res)
        });

    }
}

module.exports = CategoryController;