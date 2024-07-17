/* eslint-disable react-refresh/only-export-components */
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase
/*
import { getKcContextMock } from "./keycloak-theme/login/KcPageStory";

if (import.meta.env.DEV) {
    window.kcContext = getKcContextMock({
        pageId: "register.ftl",
        overrides: {}
    });
}
*/

const KcLoginThemePage = lazy(() => import('./keycloak-theme/login/KcPage'))
const KcAccountThemePage = lazy(() => import('./keycloak-theme/account/KcPage'))
const App = lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense>
      {(() => {
        switch (window.kcContext?.themeType) {
          case 'login':
            return <KcLoginThemePage kcContext={window.kcContext} />
          case 'account':
            return <KcAccountThemePage kcContext={window.kcContext} />
        }
        return <App />
      })()}
    </Suspense>
  </StrictMode>,
)

declare global {
  interface Window {
    kcContext?:
      | import('./keycloak-theme/login/KcContext').KcContext
      | import('./keycloak-theme/account/KcContext').KcContext
  }
}
