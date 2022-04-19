import Event from '@material-ui/icons/Event';
import People from '@material-ui/icons/People';
import Mic from '@material-ui/icons/Mic';
import AttachMoney from '@material-ui/icons/AttachMoney';
import MusicNote from '@material-ui/icons/MusicNote';
import Lock from '@material-ui/icons/Lock';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import {
    DonationsPage,
    GenesisDownloadPage,
    LoreTracksPage,
    PACommunityEventsPage,
    PAOfficialEventsPage,
    PASpacesPage,
    SecurityPage,
} from '../pages';

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
        title: 'Hi-Res Downloader',
        route: '/hi-res-genesis-downloader',
        component: GenesisDownloadPage,
        icon: InsertPhoto,
    },
    {
        title: 'Security',
        route: '/security',
        component: SecurityPage,
        icon: Lock,
    },
    {
        title: 'Lore Tracks',
        route: '/lore-tracks',
        component: LoreTracksPage,
        icon: MusicNote,
    },
    {
        title: 'Donations',
        route: '/donations',
        component: DonationsPage,
        icon: AttachMoney,
    },
];
