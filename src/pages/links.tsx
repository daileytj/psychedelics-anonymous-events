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
        link: {
            width: '80%',
            maxWidth: '300px',
            marginBottom: theme.spacing(2),
        },
    })
);

export const LinksPage = (): JSX.Element => {
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
                        Links
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.buttonContainer}>
                <Typography variant={'h6'} style={{ textAlign: 'center', marginBottom: 16 }}>
                    Just some helpful links to navigate the PA fam ecosystem:
                </Typography>
                <Typography variant={'body1'} style={{ textAlign: 'center', marginBottom: 32 }}>
                    Disclaimer: These links are legit, but always be safe when clicking links. Its best to keep a
                    bookmarked link of the official links provided from reputable sources.
                </Typography>
                <Button
                    className={classes.link}
                    variant={'contained'}
                    color={'primary'}
                    href={'https://linktr.ee/psychedelics.anonymous'}
                    target="_blank"
                >
                    PA Link Tree
                </Button>
                <Button
                    className={classes.link}
                    variant={'contained'}
                    color={'primary'}
                    href={'https://rareboy.com/wallpapers/psychedelics-anonymous-genesis'}
                    target="_blank"
                >
                    PA Wallpapers
                </Button>
                <Button
                    className={classes.link}
                    variant={'contained'}
                    color={'primary'}
                    href={'https://linktr.ee/ezu.xyz'}
                    target="_blank"
                >
                    EZU Link Tree
                </Button>
                <Button
                    className={classes.link}
                    variant={'contained'}
                    color={'primary'}
                    href={'https://twitter.com/daileytj'}
                    target="_blank"
                >
                    {`My Twitter... go follow ;)`}
                </Button>
            </div>
        </div>
    );
};
