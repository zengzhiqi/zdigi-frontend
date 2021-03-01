import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from 'src/components/HelloWorld';
import zdigiRouter from 'submodule/zdigi/router/index';

var routers = [];
routers.push(
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	}
);

routers.push(...zdigiRouter());

Vue.use(VueRouter);

const router = new VueRouter({routes: routers});

export default router;
