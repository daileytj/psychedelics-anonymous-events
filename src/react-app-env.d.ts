/// <reference types="react-scripts" />
declare module '*.mp3';
declare module '*.wav';
declare module '*.mp4' {
    const src: string;
    export default src;
}
