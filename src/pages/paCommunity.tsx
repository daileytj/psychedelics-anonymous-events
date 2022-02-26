import React from 'react';
import {
    AppBar,
    IconButton,
    Theme,
    Hidden,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
    useTheme,
} from '@material-ui/core';
import { EmptyState } from '@brightlayer-ui/react-components';
import Menu from '@material-ui/icons/Menu';
import Event from '@material-ui/icons/Event';
import { useDrawer } from '../contexts/drawerContextProvider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        // eventContainer: {
        //     padding: theme.spacing(2),
        //     flexGrow: 1,
        //     justifyContent: 'center'
        // }
    })
);

export const PACommunityEventsPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <AppBar position={'sticky'}>
                <Toolbar className={classes.toolbar}>
                    <Hidden mdUp={true}>
                        <IconButton
                            color={'inherit'}
                            onClick={(): void => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(3) }}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                    <Typography variant={'h6'} style={{color: '#FFFF00', fontWeight: 200,
                        letterSpacing: '5px',
                        textTransform: 'uppercase'}}>&nbsp;/&nbsp;</Typography>
                    <Typography variant={'h6'} color={'inherit'} style={{
                        fontWeight: 200,
                        letterSpacing: '5px',
                        textTransform: 'uppercase'
                    }}>
                        Community Events
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ flex: '1 1 0px' }}>
                <EmptyState
                    icon={<Event fontSize={'inherit'} />}
                    title={'Community Events Coming Soon'}
                />
            </div>
            {/* <div className={classes.eventContainer}>
                <Grid container spacing={2}>
                    {data.map((item, index) => (
                        <Grid item sm={12} md={6} xl={4} key={index}>
                            <EventCard
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                iconColor={'yellow'}
                                avatarBackgroundColor={theme.palette.background.default}
                                titleColor={theme.palette.primary.main}
                            />
                        </Grid>
                    ))
                    }
                </Grid>
            </div> */}
        </div>
    );
};
