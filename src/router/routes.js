import Empty from '@/views/Empty';

export default [
  {
    path: '/',
    components: {
      default: () => import('@/views/Home'),
    },
  },
  {
    path: '/accounts',
    components: {
      default: () => import('@/views/Accounts'),
    },
  },
  {
    path: '/personal-account',
    components: {
      default: () => import('@/views/PersonalAccount'),
    },
  },
  {
    path: '/checking-account',
    components: {
      default: () => import('@/views/CheckingAccount'),
    },
  },
  {
    path: '/easy-checking',
    components: {
      default: () => import('@/views/EasyChecking'),
    },
  },
  {
    path: '/profile',
    components: {
      default: () => import('@/views/Profile'),
    },
  },
  {
    path: '/user-verified',
    components: {
      default: () => import('@/views/Profile/user-verified'),
    },
  },
  {
    path: '*',
    component: Empty,
  },
];
