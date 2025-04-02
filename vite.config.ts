import createPlugins from './presets'
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd()
	const env = loadEnv(mode, root) as ImportMetaEnv
	const { VITE_API_BASE_URL, VITE_SERVER_URL } = env
	const regex = RegExp(`/^\/${VITE_API_BASE_URL}/`)

	return {
		plugins: [createPlugins(env)],
		server: {
			proxy: {
				[VITE_API_BASE_URL]: {
					target: VITE_SERVER_URL,
					changeOrigin: true, // 允许跨域
					ws: true, // 开启 websockets 代理
					secure: false, // 不验证 SSL 证书
					rewrite: (path) => path.replace(regex, ''),
				},
			},
		},
		build: {
			rollupOptions: {
				output: {
					entryFileNames: 'assets/js/[name]-[hash].js', //入口文件
					chunkFileNames: 'assets/js/chunk/[name]-[hash].js', //分包引入文件
					assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', //静态文件
				},
			},
		},
	}
})
