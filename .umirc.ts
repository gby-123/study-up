import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: './login',
      component: '@/pages/login',
    },
    {
      path: './signup',
      component: '@/pages/signup',
    },
    {
      path: '/',
      component: '@/layouts/index.tsx',
      routes: [
        { path: '/', component: '@/pages/home' },
        {
          path: '/list',
          component: '@/pages/list',
        },
      ],
    },
  ],
  fastRefresh: {},
});
