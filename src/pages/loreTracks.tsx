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
    Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';

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
            padding: theme.spacing(2),
            flexGrow: 1,
            justifyContent: 'center',
            textAlign: 'center',
        },
    })
);

export const LoreTracksPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
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
                        Lore Tracks
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <Grid container spacing={2} alignItems={'stretch'}>
                    <Grid item sm={12} lg={6} xl={6} style={{ width: '100%', maxWidth: '100%', overflow: 'scroll' }}>
                        <iframe
                            width={sm ? '364' : '560'}
                            height={sm ? '204.75' : '315'}
                            src="https://www.youtube.com/embed/XTLwkCydegc"
                            title="We Are The Night"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Grid>
                    <Grid item sm={12} lg={6} xl={6} style={{ width: '100%', maxWidth: '100%', overflow: 'scroll' }}>
                        <iframe
                            width={sm ? '364' : '560'}
                            height={sm ? '204.75' : '315'}
                            src="https://www.youtube.com/embed/F7u-B8YgA6U"
                            title="The Connection"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Grid>
                    <Grid item sm={12} lg={6} xl={6} style={{ width: '100%', maxWidth: '100%', overflow: 'scroll' }}>
                        <iframe
                            width={sm ? '364' : '560'}
                            height={sm ? '204.75' : '315'}
                            src="https://www.youtube.com/embed/jRW_NI223z0"
                            title="The Travelers [ l i g h t ]"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Grid>
                    <Grid item sm={12} lg={6} xl={6} style={{ width: '100%', maxWidth: '100%', overflow: 'scroll' }}>
                        <iframe
                            width={sm ? '364' : '560'}
                            height={sm ? '204.75' : '315'}
                            src="https://www.youtube.com/embed/pWzNhK7BNYc"
                            title="The Changelings [ v a p o r ]"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
