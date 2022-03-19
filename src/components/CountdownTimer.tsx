import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export type CountdownTimerProps = {
    date: Date;
};

export type TimeRemaining = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(),
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        timeComponent: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center'
        },
        timeLabel: {

        },
        timeNumber: {

        }
    })
);

const calculateTimeLeft = (eventDate: Date): TimeRemaining => {
    const difference = +new Date(eventDate) - +new Date();
  
    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }

export const CountdownTimer: React.FC<CountdownTimerProps> = (
    props: CountdownTimerProps
) => {
    const {
        date,
    } = props;
    const theme = useTheme();
    const classes = useStyles(theme);
    const [timeUntilEvent, setTimeUntilEvent] = useState(calculateTimeLeft(date));

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeUntilEvent(calculateTimeLeft(date));
        }, 1000);
      
        return (): void => {
            
            clearTimeout(timer);
        }
      });

    return (
        <div className={classes.root}>
            {timeUntilEvent.days === 0 && timeUntilEvent.hours === 0 && timeUntilEvent.minutes === 0 && timeUntilEvent.seconds === 0 && (
            <Typography variant={'h4'} style={{marginTop: 28, marginBottom: 10}}>You&apos;re late, run!</Typography>
            )}
            {!(timeUntilEvent.days === 0 && timeUntilEvent.hours === 0 && timeUntilEvent.minutes === 0 && timeUntilEvent.seconds === 0) && (
            <><div className={classes.timeComponent}>
                <Typography className={classes.timeLabel} variant={'body1'}>{timeUntilEvent.days === 1 ? 'Day' : 'Days'}</Typography>
                <div className={classes.timeNumber}>
                    <Typography variant={'h3'}>{timeUntilEvent.days}</Typography>
                </div>
            </div>
            <div className={classes.timeComponent}>
                <Typography className={classes.timeLabel} variant={'body1'}>{timeUntilEvent.hours === 1 ? 'Hour' : 'Hours'}</Typography>
                <div className={classes.timeNumber}>
                    <Typography variant={'h3'}>{timeUntilEvent.hours}</Typography>
                </div>
            </div>
            <div className={classes.timeComponent}>
                <Typography className={classes.timeLabel} variant={'body1'}>{timeUntilEvent.minutes === 1 ? 'Minute' : 'Minutes'}</Typography>
                <div className={classes.timeNumber}>
                    <Typography variant={'h3'}>{timeUntilEvent.minutes}</Typography>
                </div>
            </div>
            <div className={classes.timeComponent}>
                <Typography className={classes.timeLabel} variant={'body1'}>{timeUntilEvent.seconds === 1 ? 'Second' : 'Seconds'}</Typography>
                <div className={classes.timeNumber}>
                    <Typography variant={'h3'}>{timeUntilEvent.seconds}</Typography>
                </div>
            </div> 
            </>)}
        </div>
    );
};
