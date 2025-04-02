<script setup lang="ts">
import { getRandomInt } from '~/utils/number'
const randomNumber = getRandomInt(1, 33)
const { t } = useI18n()
const route = useRoute()
const current = route.path
const typedRef = useTyped([t("isNotFound")])
</script>

<template>
	<div class="h-screen flex flex-wrap items-center justify-around text-center">
		<div class="desc font-blod">
			<div class="code text-7xl">404</div>
			<div ref="typedRef" class="content mb-5 text-3xl">
				{{ $t("thePage") }} "{{ current }}"
			</div>
			<RouterLink :to="safeResolve('/')">
				<button
					class="rounded bg-light-800 px-5 py-2 text-lg transition"
					hover="shadow-md"
					dark="text-black"
				>
					{{ $t("goHome") }}
				</button>
			</RouterLink>
		</div>
		<img
			:src="safeResolve(`/notFound/${randomNumber}.svg`)"
			class="cover"
			alt="page not found"
		/>
	</div>
</template>

<style>
.code {
	margin-bottom: 20px;
}

.content {
	height: 40px;
}

.cover {
	height: auto;
	width: 700px;
	margin: 0 5px;
	max-width: 100%;
	max-height: 100%;
}

.desc {
	flex: 1;
	width: 300px;
}
</style>

<route lang="json">
{
	"meta": {
		"title": "404",
		"layout": "notFound"
	}
}
</route>
