import React from 'react';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PIconWhite from '../assets/p-icon-white.svg';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CountdownTimer } from './CountdownTimer';

export type EventCardProps = {
    title: string;
    description: string;
    date: Date;
};

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            borderRadius: 0
        },
        title: {
            color: '#FFFF00'
        },
        avatar: {
            width: 48,
            height: 48,
            backgroundColor: theme.palette.primary.main
        },
        avatarImage: {
            width: 24,
            height: 24,
            paddingLeft: 2
        }
    })
);


export const EventCard: React.FC<EventCardProps> = (
    props: EventCardProps
) => {
    const {
        title,
        description,
        date,
    } = props;
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="PA Logo" className={classes.avatar} src={PIconWhite} classes={{img: classes.avatarImage}}/>
                }
                title={title}
                subheader={`${date.toDateString()} ${date.toLocaleTimeString()}`}
                classes={{title: classes.title}}
            />
            <CardContent>
                <CountdownTimer date={date} />
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};
