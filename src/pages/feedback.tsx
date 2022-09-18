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
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';
import ReportProblem from '@material-ui/icons/ReportProblem';
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
    })
);

export const FeedbackPage = (): JSX.Element => {
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
                        Feedback / Feature Request
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ flex: '1 1 0px' }}>
                <EmptyState
                    icon={<ReportProblem fontSize={'inherit'} color={'secondary'} />}
                    title={'Have an issue, feedback, or want a new feature?!'}
                    description={'Submit a formal request using the form linked below'}
                    actions={
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            href={
                                'https://docs.google.com/forms/d/e/1FAIpQLSf9w3JcGqeZVnpJknH-mutG72Y6GJ6oy1mb8Dw-3tTBeUxZ9w/viewform?usp=sf_link'
                            }
                            target="_blank"
                        >
                            Feedback / Feature Request Form
                        </Button>
                    }
                    style={{ maxWidth: '600px', margin: '0 auto' }}
                />
            </div>
        </div>
    );
};
