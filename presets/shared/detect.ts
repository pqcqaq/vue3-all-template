/**
 * 侦察模块
 * @description 自动检测环境并智能生成
 */

import { r } from './path'
import browserslist from 'browserslist'
import { isPackageExists } from 'local-pkg'
import type { ComponentResolver } from 'unplugin-vue-components'

const { loadConfig: browserslistLoadConfig } = browserslist

/**
 * 默认打包目标 (浏览器兼容程度)
 */
export const defaultBuildTargets = browserslistLoadConfig({
	path: r('./'),
}) || ['last 2 versions and not dead, > 0.3%, Firefox ESR']

type Arrayable<T> = T | Array<T>

interface Options {
	onlyExist?: [Arrayable<ComponentResolver>, string][]
	include?: ComponentResolver[]
}

/**
 * 发现 resolvers
 */
export function detectResolvers(options: Options = {}) {
	const { onlyExist = [], include = [] } = options

	const existedResolvers = []
	for (let i = 0; i < onlyExist.length; i++) {
		const [resolver, packageName] = onlyExist[i]
		if (
			isPackageExists(packageName, {
				paths: [r('./')],
			})
		) {
			existedResolvers.push(resolver)
		}
	}
	existedResolvers.push(...include)

	return existedResolvers
}