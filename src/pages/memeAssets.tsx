import React from 'react';
import {
    AppBar,
    IconButton,
    Theme,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
    useTheme,
    Button,
    useMediaQuery,
    Grid,
    Card,
    Tab,
    Tabs,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { saveAs } from 'file-saver';
import SwipeableViews from 'react-swipeable-views';

// meme-assets

// branding
import PAYellowAvatar from '../assets/meme-assets/brand/pa-yellow-avatar.png';
import PABlueAvatar from '../assets/meme-assets/brand/pa-blue-avatar.png';
import PALogoYellow from '../assets/meme-assets/brand/PA_logo_yellow.png';
import PALogoWhite from '../assets/meme-assets/brand/PA_logo_white.png';
import PALogoBlack from '../assets/meme-assets/brand/PA_logo_black.png';
import PALogoAmerican from '../assets/meme-assets/brand/PA_logo_america.png';
import PALogoAus1 from '../assets/meme-assets/brand/pa_logo_aus_1.png';
import PALogoAus2 from '../assets/meme-assets/brand/pa_logo_aus_2.png';
import PALogoAus3 from '../assets/meme-assets/brand/pa_logo_aus_3.png';
import PSYLogo1 from '../assets/meme-assets/brand/PSY_Logo.png';
import PSYLogo2 from '../assets/meme-assets/brand/PSY_Logo_Circle.png';
import EzuLogo from '../assets/meme-assets/brand/ezu_logo.png';
import EzuTextWhite from '../assets/meme-assets/brand/ezu_text_logo_white.png';
import EzuTextBlack from '../assets/meme-assets/brand/ezu_text.png';
import PASweatshirt from '../assets/meme-assets/brand/PA_Denim_Jacket.png';
import PASweatpants from '../assets/meme-assets/brand/PA_Sweatpants.png';
import PADenimJacket from '../assets/meme-assets/brand/PA_Sweatshirt.png';
import MELogo from '../assets/meme-assets/brand/ME_logo.png';
import MELogoWhite from '../assets/meme-assets/brand/ME_logo_white.png';
import MELogoBlack from '../assets/meme-assets/brand/ME_logo_black.png';

// heads
import VoltHead from '../assets/meme-assets/heads/volt_head.png';
import VoltNYC from '../assets/meme-assets/heads/NYC_Volt.png';
import TimmyTrumpet from '../assets/meme-assets/heads/Timmy_Trumpet.png';
import JBMutant from '../assets/meme-assets/heads/JB_Mutant.png';
import Dailey1130 from '../assets/meme-assets/heads/1130.png';
import JuniorProper from '../assets/meme-assets/heads/Junior.png';
import Junior7764 from '../assets/meme-assets/heads/7764.png';
import JuniorShades from '../assets/meme-assets/heads/Junior_Head_Shades.png';
import BrainGang from '../assets/meme-assets/heads/brain_gang.png';
import Ezu1 from '../assets/meme-assets/heads/ezu_head_1.png';
import Ezu2 from '../assets/meme-assets/heads/ezu_head_2.png';
import Ezu3 from '../assets/meme-assets/heads/ezu_head_3.png';
import GaryHead from '../assets/meme-assets/heads/gary_head.png';
import SmokingElon from '../assets/meme-assets/heads/smoking_elon.png';
import KevinHead from '../assets/meme-assets/heads/kevin_head.png';
import KlossHead from '../assets/meme-assets/heads/kloss.png';
import MalekHead from '../assets/meme-assets/heads/malek.png';
import MikeHead from '../assets/meme-assets/heads/Mike.png';
import Nicole from '../assets/meme-assets/heads/Nicole.png';
import JustineHead from '../assets/meme-assets/heads/justine.png';
import PACHead1 from '../assets/meme-assets/heads/PAC_Head_1.png';
import PACHead2 from '../assets/meme-assets/heads/PAC_Head_2.png';
import PACHead3 from '../assets/meme-assets/heads/PAC_Head_3.png';

// the good stuff
import Shoegate from '../assets/meme-assets/other/Shoegate.png';
import WalkingBillboard from '../assets/meme-assets/other/walking_billboard.png';
import GoldGirl from '../assets/meme-assets/other/gold_girl.png';
import Hendricks from '../assets/meme-assets/other/hendricks.png';
import Kangaroo from '../assets/meme-assets/other/kangaroo.png';
import PARocket from '../assets/meme-assets/other/PA_rocket.png';
import Spider from '../assets/meme-assets/other/spider.png';
import Sunglasses from '../assets/meme-assets/other/sunglasses.png';
import VoltFullApe from '../assets/meme-assets/other/volt_ape.jpeg';
import VoltOfWallStreet from '../assets/meme-assets/other/volt_of_wall_street.png';
import TimmyTrumpetFat from '../assets/meme-assets/other/fat_timmy.png';
import Stonks from '../assets/meme-assets/other/stonks.png';
import GenesisGunHands from '../assets/meme-assets/other/genesis_gun_hands.png';
import MunchyPizza from '../assets/meme-assets/other/munchy_pizza.png';
import PANerfGun from '../assets/meme-assets/other/PA_nerf_gun.png';
import AttackMode from '../assets/meme-assets/other/attack_mode.png';
import GaryVCNBC from '../assets/meme-assets/other/gary_v_on_cnbc.png';
import BatSignal from '../assets/meme-assets/other/Bat_Signal.jpg';
import CucumberGT from '../assets/meme-assets/other/cucumber_g_and_t.png';
import MortalKombat from '../assets/meme-assets/other/mortal_kombat.png';
import PAAvengers from '../assets/meme-assets/other/PA_avengers.png';
import PAWolfPack from '../assets/meme-assets/other/wolf_pack.png';
import Eggplant from '../assets/meme-assets/other/eggplant.png';
import GucciSneaks from '../assets/meme-assets/other/gucci_sneaks.png';
import ThugLife from '../assets/meme-assets/other/thuglife.png';
import Blunt from '../assets/meme-assets/other/blunt.png';
import Copium from '../assets/meme-assets/other/copium.png';
import Shades from '../assets/meme-assets/other/shades.png';
import SingleGun from '../assets/meme-assets/other/single_gun.png';
import SprayPaint from '../assets/meme-assets/other/spray_paint.png';
import KMoney from '../assets/meme-assets/other/Kmoney.png';

// audio
import WeAreTheNight from '../assets/meme-assets/audio/we-are-the-night.mp3';
import TheConnection from '../assets/meme-assets/audio/the-connection.mp3';
import TheTravelers from '../assets/meme-assets/audio/ezu_the_travelers.mp3';

const TabPanel = (props: { [x: string]: any; children: any; value: any; index: any }): JSX.Element => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
};

type MemeAsset = {
    name: string;
    source: string;
};

// just update this with new assets and they will populate
const headsAssets: MemeAsset[] = [
    { name: 'Voltura Head', source: VoltHead },
    { name: 'Voltura NYC', source: VoltNYC },
    { name: "JB's Mutant", source: JBMutant },
    { name: 'Timmy Trumpet', source: TimmyTrumpet },
    { name: 'Justine', source: JustineHead },
    { name: 'Kloss', source: KlossHead },
    { name: 'Malek', source: MalekHead },
    { name: 'Dailey 1130', source: Dailey1130 },
    { name: 'Brain Gang', source: BrainGang },
    { name: 'Junior Proper', source: JuniorProper },
    { name: 'Junior 7764', source: Junior7764 },
    { name: 'Junior Shades', source: JuniorShades },
    { name: 'Mike', source: MikeHead },
    { name: 'Ezu Light', source: Ezu1 },
    { name: 'Ezu Vapor', source: Ezu2 },
    { name: 'Ezu Liquid', source: Ezu3 },
    { name: 'PAC Head 1', source: PACHead1 },
    { name: 'PAC Head 2', source: PACHead2 },
    { name: 'PAC Head 3', source: PACHead3 },
    { name: 'Gary V', source: GaryHead },
    { name: 'Smoking Elon', source: SmokingElon },
    { name: 'Kevin', source: KevinHead },
    { name: 'Nicole', source: Nicole },
];

const brandAssets: MemeAsset[] = [
    { name: 'Yellow PA Logo', source: PALogoYellow },
    { name: 'White PA Logo', source: PALogoWhite },
    { name: 'Black PA Logo', source: PALogoBlack },
    { name: 'American PA Logo', source: PALogoAmerican },
    { name: 'Aus PA Logo 1', source: PALogoAus1 },
    { name: 'Aus PA Logo 2', source: PALogoAus2 },
    { name: 'Aus PA Logo 3', source: PALogoAus3 },
    { name: 'Magic Eden Logo', source: MELogo },
    { name: 'Magic Eden Logo White', source: MELogoWhite },
    { name: 'Magic Eden Logo Black', source: MELogoBlack },
    { name: '$PSY logo', source: PSYLogo1 },
    { name: '$PSY Logo Avatar', source: PSYLogo2 },
    { name: 'Yellow PA Avatar', source: PAYellowAvatar },
    { name: 'Blue PA Avatar', source: PABlueAvatar },
    { name: 'Ezu Logo', source: EzuLogo },
    { name: 'Ezu Text Black', source: EzuTextBlack },
    { name: 'Ezu Text White', source: EzuTextWhite },
    { name: 'Genesis Sweatshirt', source: PASweatshirt },
    { name: 'Genesis Sweatpants', source: PASweatpants },
    { name: 'Genesis Denim Jacket', source: PADenimJacket },
];

const theGoodStuffAssets: MemeAsset[] = [
    { name: 'Shoegate', source: Shoegate },
    { name: 'Walking Billboard', source: WalkingBillboard },
    { name: 'Gold Girl', source: GoldGirl },
    { name: 'Hendricks', source: Hendricks },
    { name: 'Kangaroo', source: Kangaroo },
    { name: 'PA Rocket', source: PARocket },
    { name: 'Spider', source: Spider },
    { name: 'Sunglasses', source: Sunglasses },
    { name: 'KMoney Build Hands', source: KMoney },
    { name: 'Volt Full Ape', source: VoltFullApe },
    { name: 'Volt Of Wall Street', source: VoltOfWallStreet },
    { name: 'Thug Life', source: ThugLife },
    { name: 'Stonks', source: Stonks },
    { name: 'Gucci Sneaks', source: GucciSneaks },
    { name: 'Timmy Trumpet', source: TimmyTrumpetFat },
    { name: 'Mortal Kombat', source: MortalKombat },
    { name: 'PA Avengers', source: PAAvengers },
    { name: 'Wolf Pack', source: PAWolfPack },
    { name: 'Genesis Gun Hands', source: GenesisGunHands },
    { name: 'Munchy Pizza', source: MunchyPizza },
    { name: 'PA Nerf Gun', source: PANerfGun },
    { name: 'Attack Mode', source: AttackMode },
    { name: 'Gary V on CNBC', source: GaryVCNBC },
    { name: 'Bat Signal', source: BatSignal },
    { name: 'Cucumber G & T', source: CucumberGT },
    { name: 'Eggplant', source: Eggplant },
    { name: 'Blunt', source: Blunt },
    { name: 'Copium', source: Copium },
    { name: 'Shades', source: Shades },
    { name: 'Single Gun', source: SingleGun },
    { name: 'Spray Paint', source: SprayPaint },
];

const audioAssets: MemeAsset[] = [
    { name: 'PA - We Are The Night', source: WeAreTheNight },
    { name: 'PA - The Connection', source: TheConnection },
    { name: 'Ezu - The Travelers', source: TheTravelers },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageBackground: {
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
        },
        body: {
            minHeight: `calc(100vh - ${theme.spacing(8)}px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${theme.spacing(3)}px`,
            [theme.breakpoints.down('xs')]: {
                minHeight: `calc(100vh - ${theme.spacing(7)}px)`,
            },
        },
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column',
            padding: theme.spacing(2),
        },
        button: {
            flex: 1,
            height: 56,
            boxShadow: 'none',
        },
        buttonContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'column',
            padding: theme.spacing(2),
        },
        starterKitLink: {
            width: '80%',
            maxWidth: '300px',
            marginBottom: theme.spacing(2),
        },
    })
);

export const MemeAssetsPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const [value, setValue] = React.useState(0);
    useGoogleAnalyticsPageView();

    const downloadImage = (image: MemeAsset): void => {
        saveAs(`${image.source}`, `${image.name}`);
    };

    const handleChange = (event: any, newValue: any): void => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number): void => {
        setValue(index);
    };

    return (
        <div className={classes.pageBackground}>
            <AppBar position={'sticky'}>
                <Toolbar className={classes.toolbar}>
                    {sm && (
                        <IconButton
                            color={'inherit'}
                            onClick={(): void => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(1) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography
                        variant={'h6'}
                        style={{
                            color: '#FFFF00',
                            fontWeight: 200,
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                        }}
                    >
                        &nbsp;/&nbsp;
                    </Typography>
                    <Typography
                        variant={'h6'}
                        color={'inherit'}
                        style={{
                            fontWeight: 200,
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        Meme Bank
                    </Typography>
                </Toolbar>
                <Toolbar style={{ paddingLeft: 8, paddingRight: 8 }}>
                    <Tabs
                        variant={'scrollable'}
                        value={value}
                        onChange={handleChange}
                        scrollButtons={sm ? 'on' : 'auto'}
                    >
                        <Tab label="Brand" />
                        <Tab label="Heads" />
                        <Tab label="The Good Stuff" />
                        <Tab label="Meme Starter Kit" />
                        <Tab label="Audio" />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <SwipeableViews
                enableMouseEvents
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <div className={classes.container}>
                        <Grid container spacing={2} alignItems={'stretch'}>
                            {brandAssets.map((asset: MemeAsset, index: number) => (
                                <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={index} style={{ width: '100%' }}>
                                    <Card
                                        style={{
                                            maxWidth: '100%',
                                            minHeight: '100%',
                                            overflow: 'hidden',
                                            backgroundColor: 'transparent',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderRadius: 0,
                                        }}
                                        elevation={4}
                                    >
                                        <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                            <img src={asset.source} style={{ width: '100%', padding: 8 }} />
                                        </div>
                                        <div style={{ display: 'flex', overflow: 'hidden' }}>
                                            <Button
                                                className={classes.button}
                                                variant={'contained'}
                                                color={'primary'}
                                                onClick={(): void => downloadImage(asset)}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    style={{ padding: 8, textOverflow: 'ellipsis' }}
                                                >
                                                    {asset.name}
                                                </Typography>
                                                <CloudDownload />
                                            </Button>
                                        </div>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className={classes.container}>
                        <Grid container spacing={2} alignItems={'stretch'}>
                            {headsAssets.map((asset: MemeAsset, index: number) => (
                                <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={index} style={{ width: '100%' }}>
                                    <Card
                                        style={{
                                            maxWidth: '100%',
                                            minHeight: '100%',
                                            overflow: 'hidden',
                                            backgroundColor: 'transparent',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderRadius: 0,
                                        }}
                                        elevation={4}
                                    >
                                        <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                            <img src={asset.source} style={{ width: '100%', padding: 8 }} />
                                        </div>
                                        <div style={{ display: 'flex', overflow: 'hidden' }}>
                                            <Button
                                                className={classes.button}
                                                variant={'contained'}
                                                color={'primary'}
                                                onClick={(): void => downloadImage(asset)}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    style={{ padding: 8, textOverflow: 'ellipsis' }}
                                                >
                                                    {asset.name}
                                                </Typography>
                                                <CloudDownload />
                                            </Button>
                                        </div>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className={classes.container}>
                        <Grid container spacing={2} alignItems={'stretch'}>
                            {theGoodStuffAssets.map((asset: MemeAsset, index: number) => (
                                <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={index} style={{ width: '100%' }}>
                                    <Card
                                        style={{
                                            maxWidth: '100%',
                                            minHeight: '100%',
                                            overflow: 'hidden',
                                            backgroundColor: 'transparent',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderRadius: 0,
                                        }}
                                        elevation={4}
                                    >
                                        <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                            <img src={asset.source} style={{ width: '100%', padding: 8 }} />
                                        </div>
                                        <div style={{ display: 'flex', overflow: 'hidden' }}>
                                            <Button
                                                className={classes.button}
                                                variant={'contained'}
                                                color={'primary'}
                                                onClick={(): void => downloadImage(asset)}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    style={{ padding: 8, textOverflow: 'ellipsis' }}
                                                >
                                                    {asset.name}
                                                </Typography>
                                                <CloudDownload />
                                            </Button>
                                        </div>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className={classes.buttonContainer}>
                        <Typography variant={'h6'} style={{ textAlign: 'center', marginBottom: 16 }}>
                            Get started with these resources:
                        </Typography>
                        <Button
                            className={classes.starterKitLink}
                            variant={'contained'}
                            color={'primary'}
                            href={
                                'https://twitter.com/JB__nfts/status/1544335887928070144?s=20&t=clWhgBUe3sIc4Rtf9BW8zQ'
                            }
                            target="_blank"
                        >
                            JB&apos;s Starter Kit Thread
                        </Button>
                        <Button
                            className={classes.starterKitLink}
                            variant={'contained'}
                            color={'primary'}
                            href={'https://www.mematic.net/'}
                            target="_blank"
                        >
                            Mematic
                        </Button>
                        <Button
                            className={classes.starterKitLink}
                            variant={'contained'}
                            color={'primary'}
                            href={'https://www.adobe.com/products/photoshop-express.html'}
                            target="_blank"
                        >
                            Photoshop Express
                        </Button>
                        <Button
                            className={classes.starterKitLink}
                            variant={'contained'}
                            color={'primary'}
                            href={'https://www.videoleapapp.com/'}
                            target="_blank"
                        >
                            Videoleap
                        </Button>
                        <Button
                            className={classes.starterKitLink}
                            variant={'contained'}
                            color={'primary'}
                            href={'https://www.bazaart.me/'}
                            target="_blank"
                        >
                            Bazaart
                        </Button>
                        <Button
                            className={classes.starterKitLink}
                            variant={'contained'}
                            color={'primary'}
                            href={'http://www.superimposeapp.com/'}
                            target="_blank"
                        >
                            Superimpose
                        </Button>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div className={classes.container}>
                        <Grid container spacing={2} alignItems={'stretch'}>
                            {audioAssets.map((asset: MemeAsset, index: number) => (
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index} style={{ width: '100%' }}>
                                    <Card
                                        style={{
                                            maxWidth: '100%',
                                            minHeight: '100%',
                                            overflow: 'hidden',
                                            backgroundColor: 'transparent',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderRadius: 0,
                                        }}
                                        elevation={4}
                                    >
                                        <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                            <audio controls style={{ margin: 16, width: '100%' }}>
                                                <source src={asset.source} type="audio/mp3" />
                                                Your browser does not support the audio element.
                                            </audio>
                                            {/* <img src={asset.source} style={{ width: '100%', padding: 8 }} /> */}
                                        </div>
                                        <div style={{ display: 'flex', overflow: 'hidden' }}>
                                            <Button
                                                className={classes.button}
                                                variant={'contained'}
                                                color={'primary'}
                                                onClick={(): void => downloadImage(asset)}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    style={{ padding: 8, textOverflow: 'ellipsis' }}
                                                >
                                                    {asset.name}
                                                </Typography>
                                                <CloudDownload />
                                            </Button>
                                        </div>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
};
