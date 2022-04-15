import React, { useEffect, useState } from 'react';
import { DrawerContext } from './contexts/drawerContextProvider';
import { NavigationDrawer } from './router/drawer';
import { MainRouter } from './router/main';
import { DrawerLayout } from '@brightlayer-ui/react-components';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

// const firebaseApiKey = process.env.FIREBASE_API_KEY;
// const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN;
// const firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
// const firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET;
// const firebaseMessagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
// const firebaseAppId = process.env.FIREBASE_APP_ID;
// const firebaseMeasurementId = process.env.FIREBASE_MEASUREMENT_ID;

// const firebaseConfig = {
//     apiKey: firebaseApiKey,
//     authDomain: firebaseAuthDomain,
//     projectId: firebaseProjectId,
//     storageBucket: firebaseStorageBucket,
//     messagingSenderId: firebaseMessagingSenderId,
//     appId: firebaseAppId,
//     measurementId: firebaseMeasurementId,
// };

// const firebaseApp = initializeApp(firebaseConfig);
// /* eslint-disable */
// const analytics = getAnalytics(firebaseApp);
// /* eslint-enable */

export const App = (): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
 

    const triggerDisclaimer = (): void => {
        setShowDisclaimer(true);
    };

    const handleClose = (): void => {
        setShowDisclaimer(false);
    };

    useEffect(() => {
        triggerDisclaimer();
    }, []);

    return (
        <DrawerContext.Provider
            value={{
                drawerOpen,
                setDrawerOpen,
            }}
        >
            <DrawerLayout drawer={<NavigationDrawer />} style={{ height: '100%' }}>
                <Dialog
                    open={showDisclaimer}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth={'md'}
                >
                    <DialogTitle id="alert-dialog-title">{'Disclaimer'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            The PASPACES account and this dashboard are run by Psychedelics Anonymous community members
                            and are for entertainment purposes only. We are not in any way affiliated with or sponsored
                            by Psychedelics Anonymous or Voltura Labs. Our only connection to Psychedelics Anonymous is
                            that each of the members own one or more Psychedelics Anonymous NFTs. The views and opinions
                            expressed on any PASPACES spaces are those of the particular speaker and not those of
                            Psychedelics Anonymous or Voltura Labs. Any external links provided on this dashboard are
                            not to be construed as an endorsement by PASPACES of any of those external sites or their
                            respective content.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Sounds Good
                        </Button>
                    </DialogActions>
                </Dialog>
                <MainRouter />
            </DrawerLayout>
        </DrawerContext.Provider>
    );
};
