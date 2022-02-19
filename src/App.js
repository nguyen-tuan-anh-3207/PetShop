// routes
import React, { Suspense } from 'react';
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import Notification from './components/Notification';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <Notification />
        <Router />
      </ThemeConfig>
    </Suspense>
  );
}
