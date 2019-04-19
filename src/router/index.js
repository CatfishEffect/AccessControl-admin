import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'login',
			component: resolve => require(['./../components/page/login.vue'],resolve),
		},
		{
			path: '/home',
			name: 'home',
			component: resolve => require(['./../components/index.vue'],resolve),
			children: [
				{
					path: '/overalldata',
					name: 'overalldata',
					component: resolve => require(['./../components/data/overalldata.vue'],resolve),
				},
				{
					path: '/salesDepartmentData',
					name: 'salesDepartmentData',
					component: resolve => require(['./../components/data/salesDepartmentData.vue'],resolve)
				},
				{
					path: '/customerInfo',
					name: 'customerInfo',
					component: resolve => require(['./../components/custom/customerInfo.vue'],resolve)
				},
				{
					path: '/customerArrangement',
					name: 'customerArrangement',
					component: resolve => require(['./../components/custom/customerArrangement.vue'],resolve)
				},
				{
					path: '/visitingRecord',
					name: 'visitingRecord',
					component: resolve => require(['./../components/custom/visitingRecord.vue'],resolve)
				},
				{
					path: '/companyInfo',
					name: 'companyInfo',
					component: resolve => require(['./../components/organization/companyInfo.vue'],resolve)
				},
				{
					path: '/department',
					name: 'department',
					component: resolve => require(['./../components/organization/department.vue'],resolve)
				},
				{
					path: '/device',
					name: 'device',
					component: resolve => require(['./../components/organization/device.vue'],resolve)
				},
				{
					path: '/announcement',
					name: 'announcement',
					component: resolve => require(['./../components/setting/announcement.vue'],resolve)
				}
			]
		},
	]
})
