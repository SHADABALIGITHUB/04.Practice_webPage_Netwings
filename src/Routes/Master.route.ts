import express,{Router} from 'express'

const route:Router=express.Router();

import CreateUserRoute from "./AuthenticationRoutes/CreateUser.route";
import DeleteUserRoute from "./AuthenticationRoutes/DeleteUser.route";

route.use('/v1/create',CreateUserRoute);
route.use('/v1/delete',DeleteUserRoute);

export  default route;
