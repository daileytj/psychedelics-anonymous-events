import Event from '@material-ui/icons/Event';
// import People from '@material-ui/icons/People';
import Mic from '@material-ui/icons/Mic';
import AttachMoney from '@material-ui/icons/AttachMoney';
// import MusicNote from '@material-ui/icons/MusicNote';
import Lock from '@material-ui/icons/Lock';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
// import ExposureZero from '@material-ui/icons/ExposureZero';
import Portrait from '@material-ui/icons/Portrait';
// import FiberNew from '@material-ui/icons/FiberNew';
import AccountBalance from '@material-ui/icons/AccountBalance';
import ReportProblem from '@material-ui/icons/ReportProblem';
import Link from '@material-ui/icons/Link';
import {
    AugmentedRealityPrintsPage,
    // BeginnersGuidePage,
    DonationsPage,
    GenesisDownloadPage,
    // LoreTracksPage,
    // PACommunityEventsPage,
    PAOfficialEventsPage,
    PASpacesPage,
    SecurityPage,
    // DicklebuttsCounterPage,
    MemeAssetsPage,
    FeedbackPage,
    // EzuDownloadPage,
    LinksPage,
} from '../pages';
import { GenesisDEDownloadPage } from '../pages/genesisDownloaderDE';
import { VolunteerPage } from '../pages/volunteer';
import VolunteerIcon from '@material-ui/icons/Accessibility';

export const PAGES = [
    // {
    //     title: "Beginner's Guide",
    //     route: '/beginners-guide',
    //     component: BeginnersGuidePage,
    //     icon: FiberNew,
    // },
    {
        title: 'Links',
        route: '/links',
        component: LinksPage,
        icon: Link,
    },
    {
        title: 'Memes & Music',
        route: '/memes-and-music',
        component: MemeAssetsPage,
        icon: AccountBalance,
    },
    {
        title: 'Genesis Downloader',
        route: '/hi-res-de-genesis-downloader',
        component: GenesisDEDownloadPage,
        icon: InsertPhoto,
    },
    {
        title: 'Legacy Downloader',
        route: '/hi-res-genesis-downloader',
        component: GenesisDownloadPage,
        icon: InsertPhoto,
    },
    {
        title: 'Community Events',
        route: '/community-events',
        component: PAOfficialEventsPage,
        icon: Event,
    },
    // {
    //     title: 'Community Events',
    //     route: '/community-events',
    //     component: PACommunityEventsPage,
    //     icon: People,
    // },
    {
        title: 'Weekly Spaces',
        route: '/weekly-spaces',
        component: PASpacesPage,
        icon: Mic,
    },
    // {
    //     title: 'Ezu Hi-Res Downloader',
    //     route: '/hi-res-ezu-downloader',
    //     component: EzuDownloadPage,
    //     icon: InsertPhoto,
    // },
    {
        title: 'Volunteer',
        route: '/volunteer',
        component: VolunteerPage,
        icon: VolunteerIcon,
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
    // {
    //     title: 'Lore Tracks',
    //     route: '/lore-tracks',
    //     component: LoreTracksPage,
    //     icon: MusicNote,
    // },
    // {
    //     title: 'Dicklebutts Counter',
    //     route: '/juniors-dicklebutt-incident-counter',
    //     component: DicklebuttsCounterPage,
    //     icon: ExposureZero,
    // },
    {
        title: 'Tips / Donations',
        route: '/donations',
        component: DonationsPage,
        icon: AttachMoney,
    },
    {
        title: 'Submit Feedback',
        route: '/feedback',
        component: FeedbackPage,
        icon: ReportProblem,
    },
];
