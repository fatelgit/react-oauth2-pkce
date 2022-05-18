import React from 'react';
import { AuthServiceProps, AuthService } from './AuthService';
export declare type AuthContextProps<T extends any> = {
    authService: AuthService & T;
};
export declare type AuthContextType = AuthContextProps<any> | undefined;
export declare const AuthContext: React.Context<AuthContextProps<any> | undefined>;
export declare const useAuth: <T extends unknown>() => AuthContextProps<T>;
export declare function withAuth<T>(ComponentToWrap: React.ComponentType<T & AuthServiceProps>): React.FC<T & AuthServiceProps>;
