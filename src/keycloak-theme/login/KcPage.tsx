import type { ClassKey } from 'keycloakify/login'
import DefaultPage from 'keycloakify/login/DefaultPage'
import Template from 'keycloakify/login/Template'
import { Suspense, lazy } from 'react'
import '../../index.css'
import type { KcContext } from './KcContext'
import { useI18n } from './i18n'
import Login from './pages/Login.tsx'
const UserProfileFormFields = lazy(
  () => import('keycloakify/login/UserProfileFormFields'),
)

const doMakeUserConfirmPassword = true

export default function KcPage(props: { kcContext: KcContext }) {
  const { kcContext } = props

  const { i18n } = useI18n({ kcContext })

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case 'login.ftl':
            return (
              <Login
                {...{ kcContext, i18n, classes }}
                Template={Template}
                doUseDefaultCss={true}
              />
            )
          default:
            return (
              <DefaultPage
                kcContext={kcContext}
                i18n={i18n}
                classes={classes}
                Template={Template}
                doUseDefaultCss={true}
                UserProfileFormFields={UserProfileFormFields}
                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
              />
            )
        }
      })()}
    </Suspense>
  )
}

const classes = {
  kcBodyClass: 'dark',
  kcInputGroup: '',
  kcInputClass: '',
  kcFormPasswordVisibilityButtonClass: '',
  kcButtonClass: '',
  kcButtonDefaultClass: '',
  kcFormSocialAccountListButtonClass: '',
  // kcCommonLogoIdP: '',
  // kcInputWrapperClass: '',
} satisfies { [key in ClassKey]?: string }
