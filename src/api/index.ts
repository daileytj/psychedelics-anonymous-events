import axios from 'axios';
import { PAEvent } from '../components/EventCard';

export const GenesisMetadata = axios.create({
    baseURL: 'https://ipfs.io/ipfs/QmdRAvWJa2Ck3pQPVni1DhYHc1zZNvJnZWAacS3vfWuDYA/',
    timeout: 10000,
});

export const getGenesisMetadata = async (id: number): Promise<any> => {
    try {
        const response = await GenesisMetadata.get(`${id}`);
        if (response && response.status === 200) return response.data;
        return undefined;
    } catch (thrown) {
        if (axios.isCancel(thrown)) {
            // request canceled
            return undefined;
        }
        return undefined;
    }
};

export const EzuMetadata = axios.create({
    baseURL: 'https://ipfs.io/ipfs/QmbBZqA1QdbMtXDHUeC7Qnb5TSiNvJn6AqJDreaQHipx3k/',
    timeout: 10000,
});

export const getEzuMetadata = async (id: number): Promise<any> => {
    try {
        const response = await EzuMetadata.get(`${id}.json`);
        if (response && response.status === 200) return response.data;
        return undefined;
    } catch (thrown) {
        if (axios.isCancel(thrown)) {
            // request canceled
            return undefined;
        }
        return undefined;
    }
};

export const IconzMetadata = axios.create({
    baseURL: 'https://ipfs.io/ipfs/QmNncjXAoyQ6zRcxAXqrAN27meg797wsbHLxrTp9XPfFAR/',
    timeout: 10000,
});

export const getIconzMetadata = async (id: number): Promise<any> => {
    try {
        const response = await IconzMetadata.get(`${id}.json`);
        if (response && response.status === 200) return response.data;
        return undefined;
    } catch (thrown) {
        if (axios.isCancel(thrown)) {
            // request canceled
            return undefined;
        }
        return undefined;
    }
};

export const PAEvents = axios.create({
    baseURL: 'https://raw.githubusercontent.com/daileytj/psychedelics-anonymous-events/dev/data/',
    timeout: 5000,
});

export const getPAEvents = async (eventType: string): Promise<PAEvent[] | undefined> => {
    try {
        const response = await PAEvents.get(`/${eventType}.json`);
        if (response && response.status === 200) return response.data.events;
        return undefined;
    } catch (thrown) {
        if (axios.isCancel(thrown)) {
            // request canceled
            return undefined;
        }
        return undefined;
    }
};

const IRLPassCheckBaseURL = 'https://psychedelicsanonymous.com/.netlify/functions/check-irl-claim';

export const IRLPassCheck = axios.create({
    baseURL: IRLPassCheckBaseURL,
    timeout: 5000,
});

export const checkIRLPass = async (passId: number): Promise<any> => {
    const body = { token: passId };

    try {
        const response = await IRLPassCheck.post(IRLPassCheckBaseURL, body);
        if (response && response.status === 200) return response.data;
        return undefined;
    } catch (thrown) {
        if (axios.isCancel(thrown)) {
            // request canceled
            return undefined;
        }
        return undefined;
    }
};
