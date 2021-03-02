let subRouter = function () {
	return [
		{
			path: '/',
			title: 'index',
			name: '首页',
			component: () => import('../views/index/index.vue')
		}
	];
};
export default subRouter;
