import React, { useState } from 'react';
import {
    AppBar,
    IconButton,
    Theme,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
    useTheme,
    TextField,
    Button,
    Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { saveAs } from 'file-saver';
import * as BLUIColors from '@brightlayer-ui/colors';

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
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'column',
            padding: theme.spacing(2),
        },
        imageContainer: {
            display: 'flex',
            height: 600,
            width: 600,
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                height: 450,
                width: 450,
            },
            [theme.breakpoints.down('sm')]: {
                height: 400,
                width: 400,
            },
            [theme.breakpoints.down('xs')]: {
                height: 300,
                width: 300,
            },
        },
        formRow: {
            display: 'flex',
            height: 72,
            width: 600,
            [theme.breakpoints.down('md')]: {
                width: 450,
            },
            [theme.breakpoints.down('sm')]: {
                width: 400,
            },
            [theme.breakpoints.down('xs')]: {
                width: 300,
            },
        },
        textField: {
            height: 72,
            width: '100%',
            flex: 4,
            [`& .MuiFilledInput-root`]: {
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
            },
        },
        button: {
            flex: 1,
            height: 56,
            boxShadow: 'none',
            '&:hover $buttonIcon': {
                fill: BLUIColors.black[500],
            },
        },
        buttonIcon: {
            fill: BLUIColors.white[50],
        },
    })
);

export const GenesisDEDownloadPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const [metadataRetrievalError, setMetadataRetrievalError] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [genesisId, setGenesisId] = useState(Math.floor(Math.random() * (9595 - 1 + 1) + 1));
    useGoogleAnalyticsPageView();

    const formatIdFromInput = (id: string): number => +id.slice(0, 4);

    const downloadImage = (event: any): void => {
        event.preventDefault();
        const source = `https://pa-genesis-previews.b-cdn.net/${genesisId}.jpg`;
        saveAs(source, `PA-${genesisId}`);
    };

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
                        Hi-Res Downloader (Divine Entities)
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    {genesisId ? (
                        <img
                            src={`https://pa-genesis-previews.b-cdn.net/${genesisId}.jpg`}
                            alt="Psychedelics Anonymous Genesis"
                            style={{ height: 'inherit', width: 'inherit', display: 'block' }}
                        />
                    ) : (
                        <Typography variant={'body1'}>Enter A Valid Genesis Id</Typography>
                    )}
                </div>
                <div className={classes.formRow}>
                    <TextField
                        required
                        className={classes.textField}
                        value={genesisId.toString().replace(/^0+/, '')}
                        label={'Genesis ID'}
                        variant={'filled'}
                        onChange={(e): void => setGenesisId(formatIdFromInput(e.target.value.replace(/^0+/, '')))}
                        InputLabelProps={{ required: false }}
                        id={'genesis-id-field'}
                        type={'number'}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 4 }}
                    />
                    <Button
                        className={classes.button}
                        variant={'contained'}
                        color={'primary'}
                        onClick={(e): void => downloadImage(e)}
                    >
                        <CloudDownload className={classes.buttonIcon} />
                    </Button>
                </div>
            </div>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={(): void => {
                    setSnackbarOpen(false);
                    setMetadataRetrievalError('');
                }}
            >
                <Alert severity="error">{metadataRetrievalError}</Alert>
            </Snackbar>
        </div>
    );
};
