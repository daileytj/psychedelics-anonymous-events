import Event from '@material-ui/icons/Event';
import People from '@material-ui/icons/People';
import Mic from '@material-ui/icons/Mic';
import AttachMoney from '@material-ui/icons/AttachMoney';
import MusicNote from '@material-ui/icons/MusicNote';
import Lock from '@material-ui/icons/Lock';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import ExposureZero from '@material-ui/icons/ExposureZero';
import Portrait from '@material-ui/icons/Portrait';
import FiberNew from '@material-ui/icons/FiberNew';
import RecentActors from '@material-ui/icons/RecentActors';
import {
    AugmentedRealityPrintsPage,
    BeginnersGuidePage,
    DonationsPage,
    GenesisDownloadPage,
    LoreTracksPage,
    PACommunityEventsPage,
    PAOfficialEventsPage,
    PASpacesPage,
    SecurityPage,
    DicklebuttsCounterPage,
    MemeAssetsPage,
} from '../pages';

export const PAGES = [
    {
        title: "Beginner's Guide",
        route: '/beginners-guide',
        component: BeginnersGuidePage,
        icon: FiberNew,
    },
    {
        title: 'Official Events',
        route: '/official-events',
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
        title: 'Meme Bank',
        route: '/meme-bank',
        component: MemeAssetsPage,
        icon: RecentActors,
    },
    {
        title: 'Hi-Res Downloader',
        route: '/hi-res-genesis-downloader',
        component: GenesisDownloadPage,
        icon: InsertPhoto,
    },
    {
        title: 'AR Prints',
        route: '/augmented-reality-prints',
        component: AugmentedRealityPrintsPage,
        icon: Portrait,
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
        title: 'Dicklebutts Counter',
        route: '/juniors-dicklebutt-incident-counter',
        component: DicklebuttsCounterPage,
        icon: ExposureZero,
    },
    {
        title: 'Donations',
        route: '/donations',
        component: DonationsPage,
        icon: AttachMoney,
    },
];
