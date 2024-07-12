import React from 'react';
import { AppBar, IconButton, Theme, Toolbar, Typography, createStyles, makeStyles, useTheme } from '@material-ui/core';
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
        contentContainer: {
            padding: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        productCard: {
            display: 'flex',
            height: '400px',
            padding: theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
                height: 'auto',
            },
        },
        productImage: {
            [theme.breakpoints.down('xs')]: {
                maxWidth: '50%',
            },
        },
        productInfo: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
                marginLeft: 'auto',
                marginTop: theme.spacing(2),
            },
        },
        productButton: {
            [theme.breakpoints.down('xs')]: {
                marginTop: theme.spacing(2),
            },
        },
    })
);

export const VolunteerPage = (): JSX.Element => {
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
                        Volunteer
                    </Typography>
                </Toolbar>
            </AppBar>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    marginTop: '64px',
                    marginBottom: '64px',
                }}
            >
                <Typography variant={'h6'} style={{ marginLeft: '24px', marginRight: '24px', marginBottom: '32px' }}>
                    If you wish to volunteer for Psychedelics Anonymous, please fill out and submit the following form:
                </Typography>
                <iframe
                    height={'600px'}
                    style={{ width: '80%' }}
                    src={'https://sneqilla6sh.typeform.com/to/ckGGN2hC'}
                />
            </div>
        </div>
    );
};
