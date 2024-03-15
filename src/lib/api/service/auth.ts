import { GET, POST } from '..';

export type TwoFactorType = 'otp' | 'totp' | 'emailotp';

export const signIn = async (
	email: string,
	password: string
): Promise<
	| { state: 'success'; auth: string }
	| { state: 'twoFactor'; auth: string; requiresTwoFactorAuth: [TwoFactorType] }
	| { state: 'failed'; error: string }
> => {
	const basicAuth = btoa(`${encodeURIComponent(email)}:${encodeURIComponent(password)}`);
	const { data, error, response } = await GET('/auth/user', {
		headers: {
			Authorization: `Basic ${basicAuth}`
		}
	});

	if (error) return { state: 'failed', error: error.error?.message ?? 'Unknown error' };

	const auth = extractAuthCookie(response.headers);
	if (!auth) return { state: 'failed', error: 'No auth cookie found' };

	const { requiresTwoFactorAuth } = data as unknown as { requiresTwoFactorAuth: [TwoFactorType] };
	if (requiresTwoFactorAuth) return { state: 'twoFactor', requiresTwoFactorAuth, auth };

	return { state: 'success', auth };
};

export const verifyTwoFactor = async (
	type: TwoFactorType,
	code: string,
	auth: string
): Promise<{ state: 'success'; auth: string } | { state: 'failed'; error: string }> => {
	const { error } = await POST(`/auth/twofactorauth/${type}/verify`, { body: { code } });

	if (error) return { state: 'failed', error: error.error?.message ?? 'Unknown error' };

	return { state: 'success', auth };
};

const extractAuthCookie = (headers: Record<string, string>) => {
	const cookies = headers['set-cookie'].split(';');
	return cookies.find((cookie) => cookie.startsWith('auth='))?.split('=')[1];
};
