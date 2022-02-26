import Event from '@material-ui/icons/Event';
import People from '@material-ui/icons/People';
import Mic from '@material-ui/icons/Mic';
import { PACommunityEventsPage, PAOfficialEventsPage, PASpacesPage } from '../pages';

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
        title: 'Weekly Spaces',
        route: '/weekly-spaces',
        component: PASpacesPage,
        icon: Mic,
    },
];
