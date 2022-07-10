import React from 'react';
import {
    AppBar,
    IconButton,
    Theme,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import BeginnerGuide1 from '../assets/beginners_guide_1.jpeg';
import BeginnerGuide2 from '../assets/beginners_guide_2.jpeg';
import BeginnerGuide3 from '../assets/beginners_guide_3.jpeg';
import BeginnerGuide4 from '../assets/beginners_guide_4.jpeg';

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
        link: {
            color: '#61dafb',
            textDecoration: 'none',
            '&:visited': { color: '#61dafb' },
        },
        image: {
            maxWidth: '100%',
        },
    })
);

export const BeginnersGuidePage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    useGoogleAnalyticsPageView();

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
                        Beginner&apos;s Guide
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ flex: '1 1 0px' }}>
                <Typography variant={'h5'} style={{ margin: '32px', textAlign: 'center' }}>
                    Content graciously provided by{' '}
                    <a href="https://twitter.com/kloss_eth" className={classes.link}>
                        @kloss_eth
                    </a>
                </Typography>
                <img src={BeginnerGuide1} className={classes.image} />
                <img src={BeginnerGuide2} className={classes.image} />
                <img src={BeginnerGuide3} className={classes.image} />
                <img src={BeginnerGuide4} className={classes.image} />
            </div>
        </div>
    );
};
