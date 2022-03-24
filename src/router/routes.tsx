import Event from '@material-ui/icons/Event';
import People from '@material-ui/icons/People';
import Mic from '@material-ui/icons/Mic';
import AttachMoney from '@material-ui/icons/AttachMoney';
import { DonationsPage, PACommunityEventsPage, PAOfficialEventsPage, PASpacesPage } from '../pages';

export const PAGES = [
    {
        title: 'Official Events',
        route: '/',
        component: PAOfficialEventsPage,
        icon: Event,
    },
    {
        title: 'Community Events',
        route: '/community-events',
        component: PACommunityEventsPage,
        icon: People,
    },
    {
        title: 'Daily Spaces',
        route: '/daily-spaces',
        component: PASpacesPage,
        icon: Mic,
    },
    {
        title: 'Donations',
        route: '/donations',
        component: DonationsPage,
        icon: AttachMoney,
    },
];
