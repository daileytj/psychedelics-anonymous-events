import axios from 'axios';
import { PAEvent } from '../components/EventCard';

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