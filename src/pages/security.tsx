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
    useMediaQuery,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import Ledger from '../assets/ledger-promo.png';
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

export const SecurityPage = (): JSX.Element => {
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
                        Security
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.contentContainer}>
                <Card className={classes.productCard}>
                    <img src={Ledger} className={classes.productImage} />
                    <div className={classes.productInfo}>
                        <Typography variant={'h6'}>Ledger</Typography>
                        <Divider style={{ marginTop: theme.spacing(), marginBottom: theme.spacing() }} />
                        <Typography variant={'body1'}>
                            Secure your valuable assets with Ledger hardware products, then manage and grow them with
                            the Ledger Live app. It&apos;s simple to get started.
                        </Typography>
                        <Spacer />
                        <Button
                            className={classes.productButton}
                            variant={'contained'}
                            color={'primary'}
                            target="_blank"
                            href={'https://shop.ledger.com?r=be84164cfba2'}
                        >
                            Buy Now
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};
