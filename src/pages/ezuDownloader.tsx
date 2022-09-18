import React, { useEffect, useState } from 'react';
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
    CircularProgress,
    Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import MenuIcon from '@material-ui/icons/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import { getEzuMetadata } from '../api';
import Search from '@material-ui/icons/Search';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { saveAs } from 'file-saver';
import EzuLogo from '../assets/meme-assets/brand/ezu_logo.png';

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
        },
    })
);

export const EzuDownloadPage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const [metadata, setMetadata] = useState<any>({});
    const [isLoading, setIsLoading] = useState(false);
    const [imageRendered, setImageRendered] = useState(false);
    const [metadataRetrievalError, setMetadataRetrievalError] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [ezuId, setEzuId] = useState(Math.floor(Math.random() * (1500 - 1 + 1) + 1));
    useGoogleAnalyticsPageView();

    const formatIdFromInput = (id: string): number => +id.slice(0, 5);

    const downloadImage = (): void => {
        const source = metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
        saveAs(source, `${metadata.name}`);
    };

    const fetchMetadata = (): void => {
        setImageRendered(false);
        setMetadataRetrievalError('');
        setIsLoading(true);
        const loadMetadata = async (): Promise<void> => {
            const data = await getEzuMetadata(ezuId);

            if (typeof data === 'undefined') {
                setMetadataRetrievalError(
                    'There was an error retrieving your Ezu metadata and image. This is likely an issue with IPFS. Please try again later.'
                );
                setSnackbarOpen(true);
                setIsLoading(false);
                setImageRendered(true);
            }

            setMetadata(data || {});
            setTimeout((): void => setIsLoading(false), 5000);
        };
        void loadMetadata();
    };

    useEffect(() => {
        fetchMetadata();
    }, []);

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
                        EZU Hi-Res Downloader
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    {(isLoading || !imageRendered) && <CircularProgress style={{ width: 80, height: 80 }} />}
                    {!isLoading && metadata.image && (
                        <img
                            src={metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
                            alt="Ezu"
                            style={{ height: 'inherit', width: 'inherit', display: imageRendered ? 'block' : 'none' }}
                            onLoad={(): void => setImageRendered(true)}
                        />
                    )}
                    {!isLoading && !metadata.image && (
                        <img src={EzuLogo} alt="Ezu" style={{ height: 'inherit', width: 'inherit', padding: 32 }} />
                    )}
                </div>
                <div className={classes.formRow}>
                    <TextField
                        required
                        className={classes.textField}
                        value={ezuId}
                        label={'Ezu ID'}
                        variant={'filled'}
                        onChange={(e): void => setEzuId(formatIdFromInput(e.target.value))}
                        InputLabelProps={{ required: false }}
                        id={'ezu-id-field'}
                        type={'number'}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 4 }}
                    />
                    <Button
                        className={classes.button}
                        variant={'contained'}
                        color={'primary'}
                        disabled={ezuId < 1 || ezuId > 15000}
                        onClick={fetchMetadata}
                    >
                        <Search />
                    </Button>
                    <Button
                        className={classes.button}
                        variant={'contained'}
                        color={'primary'}
                        disabled={!metadata.image}
                        onClick={downloadImage}
                    >
                        <CloudDownload />
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
