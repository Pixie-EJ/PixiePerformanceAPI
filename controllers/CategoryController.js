const CategoryService = require('../services/categoryService');

class CategoryController {
    
    handleCreateCategory(request, response) {
        
        const service = new CategoryService();
        const body = request.body;
        
        service.create(response, body).then(result => {
            response.send(result);
        });

    }
}

module.exports = CategoryController;