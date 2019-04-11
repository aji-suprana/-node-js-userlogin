
class ErrorHandler {
    Initialize(expressApp) {
        this.express = expressApp;
        console.log( this.name + " class is initialized");
        this.RoutesHandler();
    }

    RoutesHandler() {
        //Prevent CORS ERROR
        this.express.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers',
                'Origin,X-Requested-With, Content-Type,Accept,Authorization'
            );
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
                return res.status(200).json({});
            }
            next();
        });
        //Handling all Errors
        this.express.use((req, res, next) => {
            const error = new Error('Not found');
            error.status = 404;
            next(error);
        })

        this.express.use((error, req, res, next) => {
            res.status(error.status || 500);
            res.json({
                error: {
                    message: error.message
                }
            });
        })

    }
}

var classInstance = new ErrorHandler();
var name = classInstance.name;
module.exports = classInstance;
