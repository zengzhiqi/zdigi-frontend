let subRouter = function () {
	return [
		{
			path: '/admin',
			title: 'index',
			name: '首页',
			component: () => import('../views/index/index.vue')
		}
	];
};
export default subRouter;
