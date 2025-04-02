/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string
	readonly VITE_API_BASE_URL: string
	readonly VITE_SERVER_URL: string
	readonly VITE_APP_MARKDOWN: boolean
	readonly VITE_APP_DEV_TOOLS: boolean
	readonly VITE_APP_MOCK_IN_PRODUCTION: boolean
	readonly VITE_APP_COMPRESSINON_ALGORITHM:
		| 'gzip'
		| 'brotliCompress'
		| 'deflate'
		| 'deflateRaw'
	readonly VITE_APP_API_AUTO_IMPORT: boolean
	readonly VITE_APP_DIR_API_AUTO_IMPORT: boolean
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
