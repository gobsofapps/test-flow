import Empty from '@/views/Empty';
import Home from '@/views/Home';
import Accounts from '@/views/Accounts';
import PersonalAccount from '@/views/PersonalAccount';
import CheckingAccount from '@/views/CheckingAccount';
import EasyChecking from '@/views/EasyChecking';
import Profile from '@/views/Profile';
import UserVerified from '@/views/Profile/user-verified';

export default [
  {
    path: '/',
    components: {
      default: Home,
    },
  },
  {
    path: '/accounts',
    components: {
      default: Accounts,
    },
  },
  {
    path: '/personal-account',
    components: {
      default: PersonalAccount,
    },
  },
  {
    path: '/checking-account',
    components: {
      default: CheckingAccount,
    },
  },
  {
    path: '/easy-checking',
    components: {
      default: EasyChecking,
    },
  },
  {
    path: '/profile',
    components: {
      default: Profile,
    },
  },
  {
    path: '/user-verified',
    components: {
      default: UserVerified,
    },
  },
  {
    path: '*',
    component: Empty,
  },
];
