import React from 'react';
import { AppBar, IconButton, Theme, Toolbar, Typography, createStyles, makeStyles, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import Dicklebutt from '../assets/dicklebutt3594.png';

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
        dicklebuttsImage: { height: '300px', width: '300px', pointerEvents: 'none' },
        dicklebuttsLink: {
            color: '#61dafb',
            textDecoration: 'none',
            '&:visited': { color: '#61dafb' },
        },
    })
);

export const DicklebuttsCounterPage = (): JSX.Element => {
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
                        Dicklebutts Counter
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ flex: '1 1 0px' }}>
                <EmptyState
                    icon={<img src={Dicklebutt} className={classes.dicklebuttsImage} />}
                    title={'Dicklebutts Counter'}
                    description={
                        <Typography variant={'body1'}>
                            Days since Junior last mentioned{' '}
                            <a href="https://twitter.com/Dicklebutts" className={classes.dicklebuttsLink}>
                                @Dicklebutts
                            </a>{' '}
                            on spaces:
                        </Typography>
                    }
                    actions={<Typography variant={'h3'}>0</Typography>}
                    style={{ maxWidth: '600px', margin: '0 auto' }}
                />
            </div>
        </div>
    );
};
