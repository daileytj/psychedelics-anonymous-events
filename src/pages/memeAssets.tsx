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
    // Tab,
    // Tabs,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { saveAs } from 'file-saver';
// import { TabPanel } from '@material-ui/lab';

// meme-assets

// branding
import PAYellowAvatar from '../assets/meme-assets/brand/pa-yellow-avatar.png';
import PABlueAvatar from '../assets/meme-assets/brand/pa-blue-avatar.png';
import PALogoYellow from '../assets/meme-assets/brand/PA_logo_yellow.png';
import PALogoWhite from '../assets/meme-assets/brand/PA_logo_white.png';
import PALogoBlack from '../assets/meme-assets/brand/PA_logo_black.png';
import PSYLogo1 from '../assets/meme-assets/brand/PSY_Logo.png';
import PSYLogo2 from '../assets/meme-assets/brand/PSY_Logo_Circle.png';

// heads
import VoltHead from '../assets/meme-assets/heads/volt_head.png';
import JBMutant from '../assets/meme-assets/heads/JB_Mutant.png';
import Dailey1130 from '../assets/meme-assets/heads/1130.png';
import JuniorProper from '../assets/meme-assets/heads/Junior.png';
import Junior6858 from '../assets/meme-assets/heads/6858.png';
import Ezu1 from '../assets/meme-assets/heads/ezu_head_1.png';
import Ezu2 from '../assets/meme-assets/heads/ezu_head_2.png';
import GaryHead from '../assets/meme-assets/heads/gary_head.png';
import KevinHead from '../assets/meme-assets/heads/kevin_head.png';
import KlossHead from '../assets/meme-assets/heads/kloss.png';
import MalekHead from '../assets/meme-assets/heads/malek.png';
import MikeHead from '../assets/meme-assets/heads/Mike.png';
import Nicole from '../assets/meme-assets/heads/Nicole.png';

// other
import Shoegate from '../assets/meme-assets/other/Shoegate.png';
import GoldGirl from '../assets/meme-assets/other/gold_girl.png';
import Hendricks from '../assets/meme-assets/other/hendricks.png';
import Kangaroo from '../assets/meme-assets/other/kangaroo.png';
import PARocket from '../assets/meme-assets/other/PA_rocket.png';
import Spider from '../assets/meme-assets/other/spider.png';
import Sunglasses from '../assets/meme-assets/other/sunglasses.png';
import VoltFullApe from '../assets/meme-assets/other/volt_ape.jpeg';
import VoltOfWallStreet from '../assets/meme-assets/other/volt_of_wall_street.png';

type MemeAsset = {
    name: string;
    source: string;
};

// just update this with new assets and they will populate
const headsAssets: MemeAsset[] = [
    { name: 'Voltura Head', source: VoltHead },
    { name: "JB's Mutant", source: JBMutant },
    { name: 'Kloss', source: KlossHead },
    { name: 'Malek', source: MalekHead },
    { name: 'Dailey 1130', source: Dailey1130 },
    { name: 'Junior Proper', source: JuniorProper },
    { name: 'Junior 6858', source: Junior6858 },
    { name: 'Mike', source: MikeHead },
    { name: 'Ezu Light', source: Ezu1 },
    { name: 'Ezu Vapor', source: Ezu2 },
    { name: 'Gary V', source: GaryHead },
    { name: 'Kevin', source: KevinHead },
    { name: 'Nicole', source: Nicole },
];

const brandAssets: MemeAsset[] = [
    { name: 'Yellow PA Logo', source: PALogoYellow },
    { name: 'White PA Logo', source: PALogoWhite },
    { name: 'Black PA Logo', source: PALogoBlack },
    { name: '$PSY logo', source: PSYLogo1 },
    { name: '$PSY Logo Avatar', source: PSYLogo2 },
    { name: 'Yellow PA Avatar', source: PAYellowAvatar },
    { name: 'Blue PA Avatar', source: PABlueAvatar },
];

const otherAssets: MemeAsset[] = [
    { name: 'Shoegate', source: Shoegate },
    { name: 'Gold Girl', source: GoldGirl },
    { name: 'Hendricks', source: Hendricks },
    { name: 'Kangaroo', source: Kangaroo },
    { name: 'PA Rocket', source: PARocket },
    { name: 'Spider', source: Spider },
    { name: 'Sunglasses', source: Sunglasses },
    { name: 'Volt Full Ape', source: VoltFullApe },
    { name: 'Volt Of Wall Street', source: VoltOfWallStreet },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageBackground: {
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
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
    })
);

export const MemeAssetsPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    // const [value, setValue] = React.useState(0);
    useGoogleAnalyticsPageView();

    const downloadImage = (image: MemeAsset): void => {
        saveAs(`${image.source}`, `${image.name}`);
    };

    // const handleChange = (event: any, newValue: any): void => {
    //     setValue(newValue);
    // };

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
                        Meme Assets
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Brand" />
                    <Tab label="Heads" />
                    <Tab label="Other" />
                </Tabs>
            </AppBar>
            <TabPanel value={'Brand'}>Item One</TabPanel>
            <TabPanel value={'Heads'}>Item Two</TabPanel>
            <TabPanel value={'Other'}>Item Three</TabPanel> */}
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
                                        <Typography variant="body1" style={{ padding: 8, textOverflow: 'ellipsis' }}>
                                            {asset.name}
                                        </Typography>
                                        <CloudDownload />
                                    </Button>
                                </div>
                            </Card>
                        </Grid>
                    ))}
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
                                        <Typography variant="body1" style={{ padding: 8, textOverflow: 'ellipsis' }}>
                                            {asset.name}
                                        </Typography>
                                        <CloudDownload />
                                    </Button>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                    {otherAssets.map((asset: MemeAsset, index: number) => (
                        <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={index} style={{ width: '100%' }}>
                            <Card
                                style={{
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    overflow: 'hidden',
                                    backgroundColor: 'transparent',
                                    display: 'flex',
                                    flexDirection: 'column',
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
                                        <Typography variant="body1" style={{ padding: 8, textOverflow: 'ellipsis' }}>
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
        </div>
    );
};
