import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PIconWhite from '../assets/p-icon-white.svg';
import PIconBlack from '../assets/p-icon-black.svg';
import PIconBlue from '../assets/p-icon-blue.svg';
import PIconYellow from '../assets/p-icon-yellow.svg';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CountdownTimer } from './CountdownTimer';
import { Button, CardActions, Divider } from '@material-ui/core';
import { ReactComponent as TwitterIcon } from '../assets/twitter-icon.svg';
import * as BLUIColors from '@brightlayer-ui/colors';

export type EventCardProps = {
    title: string;
    description: string;
    date: Date;
    iconColor?: 'white' | 'black' | 'blue' | 'yellow';
    avatarBackgroundColor?: string;
    titleColor?: string;
    twitterLink?: string;
    twitterRecordingLink?: string;
    eventLink?: string;
};

const useStyles = makeStyles<Theme, EventCardProps>((theme) =>
    createStyles({
        root: {
            borderRadius: 0,
            height: '100%'
        },
        title: {
            color: (props): string => props.titleColor || '#FFFF00',
            fontSize: '1rem',
            fontWeight: 600
        },
        avatar: {
            width: 48,
            height: 48,
            backgroundColor: (props): string => props.avatarBackgroundColor || theme.palette.primary.main
        },
        avatarImage: {
            width: 24,
            height: 24,
            paddingLeft: 2
        },
        divider: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
        },
        twitterLink: {
            width: '100%'
        },
        twitterIcon: {
            width: '1.25rem',
            height: '1.25rem',
            marginRight: 8,
            fill: BLUIColors.white[50],
        },
        twitterIconHover: {
            width: '1.25rem',
            height: '1.25rem',
            marginRight: 8,
            fill: BLUIColors.black[500],
        }
    })
);

const getIconByColor = (color: string): string => {
    let icon: string;

    switch (color) {
        case 'blue':
            icon = PIconBlue;
            break;
        case 'yellow':
            icon = PIconYellow;
            break;
        case 'black':
            icon = PIconBlack;
            break;
        case 'white':
        default:
            icon = PIconWhite;
    }

    return icon;
}

export const EventCard: React.FC<EventCardProps> = (
    props: EventCardProps
) => {
    const {
        title,
        description,
        date,
        iconColor = 'white',
        twitterLink,
        twitterRecordingLink,
        eventLink
    } = props;
    const classes = useStyles(props);
    const [isTwitterButtonHovered, setIsTwitterButtonHovered] = useState(false);

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="PA Logo" className={classes.avatar} src={getIconByColor(iconColor)} classes={{ img: classes.avatarImage }} />
                }
                title={title}
                subheader={`${date.toDateString()} ${date.toLocaleTimeString()}`}
                classes={{ title: classes.title }}
            />
            <CardContent>
                <CountdownTimer date={date} />
                <Divider className={classes.divider} />
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {twitterLink && (
                    <Button
                        className={classes.twitterLink}
                        variant={'contained'}
                        color={'primary'}
                        target="_blank"
                        href={twitterLink}
                        onMouseOver={(): void => {setIsTwitterButtonHovered(true)}}
                        onMouseOut={(): void => {setIsTwitterButtonHovered(false)}}
                        >
                         <TwitterIcon
                             className={isTwitterButtonHovered ? classes.twitterIconHover : classes.twitterIcon}
                             fill='inherit' />
                        Twitter
                    </Button>)}
                    {twitterRecordingLink && (
                    <Button
                        className={classes.twitterLink}
                        variant={'contained'}
                        color={'primary'}
                        target="_blank"
                        href={twitterRecordingLink}
                        onMouseOver={(): void => {setIsTwitterButtonHovered(true)}}
                        onMouseOut={(): void => {setIsTwitterButtonHovered(false)}}
                        >
                         <TwitterIcon
                             className={isTwitterButtonHovered ? classes.twitterIconHover : classes.twitterIcon}
                             fill='inherit' />
                        Go To Recording
                    </Button>)}
                    {eventLink && (
                    <Button
                        className={classes.twitterLink}
                        variant={'contained'}
                        color={'primary'}
                        target="_blank"
                        href={eventLink}
                        >
                        View Event
                    </Button>)}
            </CardActions>
        </Card>
    );
};
