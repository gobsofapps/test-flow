import Empty from '@/views/Empty';
import Home from '@/views/Home';
import Accounts from '@/views/Accounts';
import PersonalAccount from '@/views/PersonalAccount';
import EasyChecking from '@/views/EasyChecking';
import Profile from '@/views/Profile';
import UserVerified from '@/views/Profile/user-verified';
import RedirectPage from '@/views/RedirectPage';
import Account from '@/views/Profile/account';
import OIDCAuthRedirect from '@/views/Profile/oidc-auth-redirect';

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
    path: '/account',
    components: {
      default: Account,
    },
  },
  {
    path: '/user-verified',
    components: {
      default: UserVerified,
    },
  },
  {
    path: '/redirect',
    components: {
      default: RedirectPage,
    },
  },
  {
    path: '/oidc-response',
    components: {
      default: OIDCAuthRedirect,
    },
  },
  {
    path: '*',
    component: Empty,
  },
];
