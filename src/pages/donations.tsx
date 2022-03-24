import React, { useState } from 'react';
import {
    AppBar,
    Hidden,
    IconButton,
    Theme,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
    // useMediaQuery,
    useTheme,
    Button,
    Snackbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';
import AttachMoney from '@material-ui/icons/AttachMoney';

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
    })
);

export const DonationsPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    // const xs = useMediaQuery(theme.breakpoints.down('xs'));

    const copyWalletAddress = (): any => {
        navigator.clipboard.writeText('0xF90F8725237125ecefE5696cd2B54D9D6934D467').then(() => {
            setSnackbarOpen(true);
        });
    };

    return (
        <div className={classes.pageBackground}>
            <AppBar position={'sticky'}>
                <Toolbar className={classes.toolbar}>
                    <Hidden mdUp={true}>
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
                    </Hidden>
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
                        Donations
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ flex: '1 1 0px' }}>
                <EmptyState
                    icon={<AttachMoney fontSize={'inherit'} color={'secondary'} />}
                    title={'Like what you see and want more features?!'}
                    description={
                        'Support the project by donating Ethereum to dailey.eth or 0xF90F8725237125ecefE5696cd2B54D9D6934D467'
                    }
                    actions={
                        <Button variant={'contained'} color={'primary'} onClick={copyWalletAddress}>
                            Copy Address
                        </Button>
                    }
                />
            </div>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={(): void => setSnackbarOpen(false)}
                message="Wallet address copied to clipboard"
            />
        </div>
    );
};
