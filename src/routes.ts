import { Router } from 'express';

const routes = Router();

import fs from 'fs';
const routePath = './src/modules/';
fs.readdirSync(routePath).forEach(async function(module) {
	if(module != '.DS_Store') {
		const route = './src/modules/'+module+'/routes/'+module+'Routes.ts';
		if(fs.existsSync(route)) {
            const moduleRoutes = await import(route.replace('./src', '.'));
            routes.use('/'+module, moduleRoutes.default);
        }      
	}
});

export default routes;