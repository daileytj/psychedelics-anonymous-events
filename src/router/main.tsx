import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { IconzDownloadPage, MemeAssetsPage } from '../pages';
import { PAGES } from './routes';

export const MainRouter = (): JSX.Element => (
    <Routes>
        {PAGES.map((page) => (
            <Route key={`route_${page.route}`} path={`${page.route}`} element={<page.component />} />
        ))}
        <Route key={`route_meme-bank-brand`} path={`meme-bank/brand`} element={<MemeAssetsPage />} />
        <Route key={`route_meme-bank-heads`} path={`meme-bank/heads`} element={<MemeAssetsPage />} />
        <Route key={`route_meme-bank-the-good-stuff`} path={`meme-bank/the-good-stuff`} element={<MemeAssetsPage />} />
        <Route key={`route_meme-bank-starter-kit`} path={`meme-bank/meme-starter-kit`} element={<MemeAssetsPage />} />
        <Route key={`route_meme-bank-audio`} path={`meme-bank/audio`} element={<MemeAssetsPage />} />
        <Route key={`iconz`} path={`iconz`} element={<IconzDownloadPage />} />
        <Route path={'/'} element={<Navigate to="/daily-spaces" replace />} />
    </Routes>
);
