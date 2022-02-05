const CategoryService = require('../services/CategoryService');

class CategoryController {
    
    handleGetCategory(request, response){
        const service = new CategoryService();
        service.get((res) => {
            return response.json(res);
        })
    }

    handleCreateCategory(request, response) {
        
        const service = new CategoryService();
        const {body} = request;
        
        service.create(body, (res) => {
            return response.json(res)
        });

    }
}

module.exports = CategoryController;