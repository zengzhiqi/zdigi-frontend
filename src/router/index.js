import Vue from 'vue';
import VueRouter from 'vue-router';
import zdigiRouter from 'submodule/zdigi/router/index';
import zdigiManagementRouter from 'submodule/zdigiManagement/router/index';

var routers = [];

routers.push(...zdigiRouter());
routers.push(...zdigiManagementRouter());

Vue.use(VueRouter);

const router = new VueRouter({routes: routers});

export default router;
