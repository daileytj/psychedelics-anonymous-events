import { PAEvent } from '../components/EventCard';

function getNextMondayShowtime(): number[] {
    const d = new Date();
    const currentDay = d.getUTCDay();
    const daysUntilMonday = (7 - currentDay + 1) % 7;
    d.setDate(d.getUTCDate() + daysUntilMonday);
    d.setHours(19, 0, 0); // 7pm EST
    return [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];
}

function getNextTuesdayShowtime(): number[] {
    const d = new Date();
    const currentDay = d.getUTCDay();
    const daysUntilTuesday = (7 - currentDay + 2) % 7;
    d.setDate(d.getUTCDate() + daysUntilTuesday);
    d.setHours(18, 0, 0); // 6pm EST
    return [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];
}

function getNextWednesdayShowtime(): number[] {
    const d = new Date();
    const currentDay = d.getUTCDay();
    const daysUntilWednesday = (7 - currentDay + 3) % 7;
    d.setDate(d.getUTCDate() + daysUntilWednesday);
    d.setHours(17, 0, 0); // 5pm EST
    return [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];
}

function getNextThursdayShowtime(): number[] {
    const d = new Date();
    const currentDay = d.getUTCDay();
    const daysUntilThursday = (7 - currentDay + 4) % 7;
    d.setDate(d.getUTCDate() + daysUntilThursday);
    d.setHours(18, 0, 0); // 6pm EST
    return [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];
}

function getNextFridayShowtime(): number[] {
    const d = new Date();
    const currentDay = d.getUTCDay();
    const daysUntilFriday = (7 - currentDay + 5) % 7;
    d.setDate(d.getUTCDate() + daysUntilFriday);
    d.setHours(17, 0, 0); // 5pm EST
    return [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];
}

const getNextShowtime = (day: string): number[] => {
    let showtime: number[];

    switch (day) {
        case 'monday':
            showtime = getNextMondayShowtime();
            break;
        case 'tuesday':
            showtime = getNextTuesdayShowtime();
            break;
        case 'wednesday':
            showtime = getNextWednesdayShowtime();
            break;
        case 'thursday':
            showtime = getNextThursdayShowtime();
            break;
        case 'friday':
            showtime = getNextFridayShowtime();
            break;
        default:
            showtime = [0, 0, 0, 0, 0, 0];
    }

    return showtime;
};

const getPASpacesEvents = (): PAEvent[] => {
    const events = [
        {
            title: 'PA Monday',
            description: 'Hosted by BTabs(@Psilocybrain) and H20Bill(@HamiltonCordon)',
            date: getNextShowtime('monday'), // [2022, 11, 19, 24, 0, 0], // 7pm EST
            twitterLink: 'https://twitter.com/paspaces',
        },
        {
            title: 'PA NFTuesday',
            description: 'Hosted by @DCoopOfficial @what3verman',
            date: getNextShowtime('tuesday'), // [2022, 11, 20, 23, 0, 0], // 6pm EST
            twitterLink: 'https://twitter.com/paspaces',
        },
        {
            title: 'PA Wednesday',
            description: 'Hosted by TBD',
            date: getNextShowtime('wednesday'), // [2022, 11, 21, 22, 0, 0], // 5pm EST
            twitterLink: 'https://twitter.com/paspaces',
        },
        {
            title: 'PA Theory Thursday',
            description: 'Hosted by @miamimalek and @kloss_eth',
            date: getNextShowtime('thursday'), // [2022, 11, 22, 23, 0, 0], // 6pm EST
            twitterLink: 'https://twitter.com/paspaces',
        },
        {
            title: 'Ric Flair Friday',
            description: 'Hosted by @tweetdeez757 and @REALLeviCooper',
            date: getNextShowtime('friday'), // [2022, 11, 23, 22, 0, 0], // 5pm EST
            twitterLink: 'https://twitter.com/paspaces',
        },
    ];

    return events;
};

export default getPASpacesEvents;
