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
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { saveAs } from 'file-saver';

// meme-assets
import PAYellowAvatar from '../assets/meme-assets/pa-yellow-avatar.png';
import PABlueAvatar from '../assets/meme-assets/pa-blue-avatar.png';
import Shoegate from '../assets/meme-assets/Shoegate.png';
import Junior6858 from '../assets/meme-assets/6858.png';
import JBMutant from '../assets/meme-assets/JB_Mutant.png';
import Dailey1130 from '../assets/meme-assets/1130.png';
import PALogoYellow from '../assets/meme-assets/PA_logo_yellow.png';
import PALogoWhite from '../assets/meme-assets/PA_logo_white.png';
import PALogoBlack from '../assets/meme-assets/PA_logo_black.png';

type MemeAsset = {
    name: string;
    source: string;
};

// just update this with new assets and they will populate
const memeAssets: MemeAsset[] = [
    { name: 'Yellow PA Logo', source: PALogoYellow },
    { name: 'White PA Logo', source: PALogoWhite },
    { name: 'Black PA Logo', source: PALogoBlack },
    { name: "JB's Mutant", source: JBMutant },
    { name: 'Dailey 1130', source: Dailey1130 },
    { name: 'Yellow PA Avatar', source: PAYellowAvatar },
    { name: 'Blue PA Avatar', source: PABlueAvatar },
    { name: 'Shoegate', source: Shoegate },
    { name: 'Junior 6858', source: Junior6858 },
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
    useGoogleAnalyticsPageView();

    const downloadImage = (image: MemeAsset): void => {
        saveAs(`${image.source}`, `${image.name}`);
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
                        Meme Assets
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <Grid container spacing={2} alignItems={'stretch'}>
                    {memeAssets.map((asset: MemeAsset, index: number) => (
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
