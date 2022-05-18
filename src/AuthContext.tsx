import React, { useContext, ReactElement } from 'react'

import { AuthServiceProps, AuthService } from './AuthService'

export type AuthContextProps<T extends any> = {
  authService: AuthService & T
}

export type AuthContextType = AuthContextProps<any> | undefined

export const AuthContext = React.createContext<AuthContextProps<any> | undefined>(
  undefined
)

export const useAuth = <T extends any>(): AuthContextProps<T> => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export function withAuth<T>(
  ComponentToWrap: React.ComponentType<T & AuthServiceProps>
): React.FC<T & AuthServiceProps> {
  const WrappedComponent = (props: T & AuthServiceProps): ReactElement => {
    const authProps = useAuth()
    return <ComponentToWrap {...authProps} {...props} />
  }
  WrappedComponent.displayName =
    'withAuth_' + (ComponentToWrap.displayName || ComponentToWrap.name)
  return WrappedComponent
}
