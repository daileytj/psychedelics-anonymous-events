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
    Grid,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { EventCard } from '../components/EventCard';

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

    const data = [
        {
            title: "Mindfulness Monday",
            description: "Mindfulness Monday description blah blah blah. And some more stuff about it, but mostly more blah.",
            date: new Date(2022, 1, 1, 17, 0, 0),
            twitterRecordingLink: "https://twitter.com/paspaces/status/1495857332907085827?s=20&t=mon2_3rjNqQoSixx6cJ6iw"
        },
        {
            title: "Mindfulness Monday",
            description: "Mindfulness Monday description blah blah blah. And some more stuff about it, but mostly more blah.",
            date: new Date(2022, 2, 1, 17, 0, 0),
            twitterLink: "https://twitter.com/paspaces"
        },
        {
            title: "Mindfulness Monday",
            description: "Mindfulness Monday description blah blah blah. And some more stuff about it, but mostly more blah.",
            date: new Date(2022, 2, 7, 17, 0, 0),
            twitterLink: "https://twitter.com/paspaces"
        },
        {
            title: "Mindfulness Monday",
            description: "Mindfulness Monday description blah blah blah. And some more stuff about it, but mostly more blah.",
            date: new Date(2022, 2, 15, 17, 0, 0),
            twitterLink: "https://twitter.com/paspaces"
        },
        {
            title: "Mindfulness Monday",
            description: "Mindfulness Monday description blah blah blah. And some more stuff about it, but mostly more blah.",
            date: new Date(2022, 2, 22, 17, 0, 0),
            twitterLink: "https://twitter.com/paspaces"
        },
        {
            title: "Mindfulness Monday",
            description: "Mindfulness Monday description blah blah blah. And some more stuff about it, but mostly more blah.",
            date: new Date(2022, 2, 29, 17, 0, 0)
        },
        {
            title: "Mindfulness Monday",
            description: "Mindfulness Monday description blah blah blah. And some more stuff about it, but mostly more blah.",
            date: new Date(2022, 4, 1, 17, 0, 0)
        },
        {
            title: "Mindfulness Monday",
            description: "Mindfulness Monday description blah blah blah. And some more stuff about it, but mostly more blah.",
            date: new Date(2022, 5, 1, 17, 0, 0)
        },
        {
            title: "Mindfulness Monday",
            description: "Mindfulness Monday description blah blah blah. And some more stuff about it, but mostly more blah.",
            date: new Date(2022, 7, 1, 17, 0, 0)
        }
    ]

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
                <Grid container spacing={2} alignItems={'stretch'}>
                    {data.map((item, index) => (
                        <Grid item sm={12} md={6} xl={4} key={index}>
                            <EventCard
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                twitterLink={item.twitterLink ? item.twitterLink : undefined}
                                twitterRecordingLink={item.twitterRecordingLink ? item.twitterRecordingLink : undefined}
                            />
                        </Grid>
                    ))
                    }
                </Grid>
            </div>
        </div>
    );
};
