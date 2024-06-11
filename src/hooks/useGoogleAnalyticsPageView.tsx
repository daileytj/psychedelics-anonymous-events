import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const useGoogleAnalyticsPageView = (): void => {
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    }, []);
};
