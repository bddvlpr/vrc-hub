import createClient from 'openapi-fetch-tauri';
import type { paths } from './vrchat';

export const { GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH, TRACE, use, eject } =
	createClient<paths>({
		baseUrl: 'https://api.vrchat.cloud/api/1',
		headers: {
			'User-Agent': 'VRC-Hub/1.0.0 (Tauri)'
		}
	});
