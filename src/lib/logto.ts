import LogtoClient, { UserScope } from '@logto/browser';

export const baseUrl = window.location.origin;
export const redirectUrl = `${baseUrl}/callback`;

export const appId = '<your-app-id>'; // Register the sample app in Logto dashboard and replace with your own app id
export const endpoint = 'http://localhost:3001'; // Replace with your own Logto endpoint

export const resourceIndicators = ['https://portal.brainiacs.chat']; // Replace with your own resource indicators registered in Logto dashboard
export const resourceScopes = ['read', 'write']; // Replace with your own resource scopes registered with the resource indicators in Logto dashboard

export const client = new LogtoClient({
  endpoint,
  appId,
  resources: resourceIndicators,
  scopes: [
    UserScope.Email,
    UserScope.Phone,
    UserScope.CustomData,
    UserScope.Identities,
    UserScope.Organizations,
    ...resourceScopes,
  ],
});
