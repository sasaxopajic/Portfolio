import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const AboutMe = lazy(() => import('../about-me/AboutMe'));
const Home = lazy(() => import('../home/Home'));
const Experience = lazy(() => import('../experience/Experience'));
const SelectedWork = lazy(() => import('../selected-work/SelectedWork'));
const Contact = lazy(() => import('../contact/Contact'));
const Project = lazy(() => import('../selected-work/project/Project'));

export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route index element={<Navigate to="/home" replace />} />
                <Route path='home' element={<Home />} />
                <Route path='about-me' element={<AboutMe />} />
                <Route path='projects' element={<SelectedWork />}>
                    <Route path="/projects/:projectId" element={<Project />} />
                </Route>
                <Route path='experience' element={<Experience />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </Suspense>

    );
}