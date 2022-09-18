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
    Card,
    Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import ARPromo from '../assets/soundwave-art-nft-promo.jpeg';
import { Spacer } from '@brightlayer-ui/react-components';

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
        contentContainer: {
            padding: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        productCard: {
            display: 'flex',
            padding: theme.spacing(2),
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                height: 'auto',
            },
        },
        productImage: {
            maxWidth: '65%',
            height: 'auto',
            [theme.breakpoints.down('md')]: {
                maxWidth: '100%',
            },
        },
        productInfo: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: theme.spacing(2),
            [theme.breakpoints.down('md')]: {
                marginLeft: 'auto',
                marginTop: theme.spacing(2),
            },
        },
        productButton: {
            marginTop: theme.spacing(2),
        },
    })
);

export const AugmentedRealityPrintsPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    useGoogleAnalyticsPageView();

    return (
        <div className={classes.pageBackground}>
            <AppBar position={'sticky'}>
                <Toolbar className={classes.toolbar}>
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
                        AR Prints
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.contentContainer}>
                <Card className={classes.productCard}>
                    <img src={ARPromo} className={classes.productImage} />
                    <div className={classes.productInfo}>
                        <Typography variant={'h6'}>Soundwave Art</Typography>
                        <Divider style={{ marginTop: theme.spacing(), marginBottom: theme.spacing() }} />
                        <Typography variant={'body1'}>
                            Print your NFT, display it on your wall. Even make them playable! Soundwave Art™ has been
                            creating and printing art since 2012. We offer Standard Prints which are meant for you to
                            frame yourself and Prints adhered to aluminum which come ready to hang. By adding our
                            augmented reality feature (see example video below) you can enhance your art using an audio
                            file or even a video, making your printed NFT playable by merging the digital and physical
                            world. We&apos;ve built relationships with manufactures around the world giving us the
                            ability to offer FREE shipping to over 50 Countries! Choose a product to learn more about
                            it.
                        </Typography>
                        <Spacer />
                        <Button
                            className={classes.productButton}
                            variant={'contained'}
                            color={'primary'}
                            target="_blank"
                            href={'https://soundwaveart.com/nft'}
                        >
                            Buy Now
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};
