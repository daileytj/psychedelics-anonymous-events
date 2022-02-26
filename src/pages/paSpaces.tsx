import React, { useEffect, useState } from 'react';
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
    Grid,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { EventCard, PAEvent } from '../components/EventCard';
import { getPAEvents } from '../api';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        eventContainer: {
            padding: theme.spacing(2),
            flexGrow: 1,
            justifyContent: 'center'
        }
    })
);

export const PASpacesPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const [events, setEvents] = useState<PAEvent[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;

        setIsLoading(true);
        const loadRoadmap = async (): Promise<void> => {
            const data = await getPAEvents('pa-spaces-events');
            if (isMounted) {
                setEvents(data || []);
            }
            setIsLoading(false);
        };
        void loadRoadmap();
        return (): void => {
            isMounted = false;
        };
    }, []);

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
                    <Typography variant={'h6'} style={{
                        color: '#FFFF00', fontWeight: 200,
                        letterSpacing: '5px',
                        textTransform: 'uppercase'
                    }}>&nbsp;/&nbsp;</Typography>
                    <Typography variant={'h6'} color={'inherit'} style={{
                        fontWeight: 200,
                        letterSpacing: '5px',
                        textTransform: 'uppercase'
                    }}>
                        Spaces
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.eventContainer}>
                {((!events || (events && events.length === 0)) && isLoading) && (
                    <Typography variant={'h6'} style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</Typography>
                )}
                {(!events || (events && events.length === 0)) && (
                    <Typography variant={'h6'} style={{ textAlign: 'center', marginTop: '2rem' }}>No Events Currently Scheduled</Typography>
                )}
                {(events && events.length > 0 && !isLoading) && (<Grid container spacing={2} alignItems={'stretch'}>
                    {events.map((item, index) => (
                        <Grid item sm={12} md={6} xl={4} key={index}>
                            <EventCard
                                title={item.title}
                                description={item.description}
                                date={new Date(item.date[0], item.date[1], item.date[2], item.date[3], item.date[4], item.date[5])}
                                twitterLink={item.twitterLink ? item.twitterLink : undefined}
                                twitterRecordingLink={item.twitterRecordingLink ? item.twitterRecordingLink : undefined}
                            />
                        </Grid>
                    ))
                    }
                </Grid>)}
            </div>
        </div>
    );
};
