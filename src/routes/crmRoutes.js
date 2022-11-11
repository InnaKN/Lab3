import crmController from '../controllers/crmController'

const routes = (app)=>{
    app.route('/book')
        //.get(crmController.getBook)
        .post(crmController.addNewBook)
    app.route('/book/all')
        .get(crmController.getAllBooks)
    app.route('/book/:bookTitle')
        .get(crmController.getBook)
        .put(crmController.changeBook)
        .delete(crmController.deleteBook)
}

export default routes;