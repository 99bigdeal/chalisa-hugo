import { NetlifyAuthenticator } from '@decap/backend-netlify/dist/implementation.js';

export const onRequest = async ({ request, env }) => {
  const authenticator = new NetlifyAuthenticator({
    base_url: new URL(request.url).origin,
    client_id: env.GITHUB_CLIENT_ID,
    secret: env.GITHUB_CLIENT_SECRET,
    auth_endpoint: 'auth',
    token_endpoint: 'auth_token',
  });

  const { type, provider } = Object.fromEntries(new URL(request.url).searchParams);

  if (type === 'token') {
    return authenticator.getAccessToken(request, provider);
  } else {
    return authenticator.authenticate(request, provider, 'repo');
  }
};