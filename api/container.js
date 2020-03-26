const {asClass,createContainer,asFunction,asValue} = require('awilix');

const config = require('../config/environments');
const StartUp = require('./startup');
const Server = require('./server');
const Routes = require('../api/routes');
const db = require('../dal/entities');

const {UserController} = require('../api/controllers');
const UserRoutes = require('../api/routes/user.routes');
const {UserRepository} = require('../dal/repositories');
const {UserServices} = require('../services')

const container = createContainer();

container.register({
    app : asClass(StartUp).singleton(),
    server : asClass(Server).singleton()
})
    .register({
        UserController: asClass(UserController).singleton()
    })
    .register({
        router:asFunction(Routes).singleton(),
        config:asValue(config)
    })
    .register({
        db : asValue(db)
    })
    .register({
        UserRoutes : asFunction(UserRoutes).singleton()
    })
    .register({
        UserService : asClass(UserServices).singleton()
    })
    .register({
        UserRepository : asClass(UserRepository).singleton()
    });




module.exports = container;