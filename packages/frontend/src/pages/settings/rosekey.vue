<!--
SPDX-FileCopyrightText: syuilo and noridev and other misskey, cherrypick contributors
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
	<div class="_gaps_m">
		<FormSection first>
			<template #label>独自機能</template>
			<template #description>Rosekeyが提供する独自機能がご利用になれる。</template>
			<div class="_gaps_m">
				<MkSwitch v-model="nicknameEnabled">
					ニックネーム機能
					<template #caption>ニックネーム機能が使えるようになる。</template>
				</MkSwitch>
				<MkSwitch v-model="useEnterToSend">
					<template #label>{{ i18n.ts.useEnterToSend }}</template>
					<template #caption>{{ i18n.ts.useEnterToSendDescription }}</template>
				</MkSwitch>
			</div>
		</FormSection>
	</div>
	</template>
	
	<script lang="ts" setup>
	import { computed, watch } from 'vue';
	import MkSwitch from '@/components/MkSwitch.vue';
	import MkSelect from '@/components/MkSelect.vue';
	import MkRadios from '@/components/MkRadios.vue';
	import FormSection from '@/components/form/section.vue';
	import { defaultStore } from '@/store.js';
	import * as os from '@/os.js';
	import { unisonReload } from '@/scripts/unison-reload.js';
	import { i18n } from '@/i18n.js';
	import { definePageMetadata } from '@/scripts/page-metadata.js';
	
	async function reloadAsk() {
		const { canceled } = await os.confirm({
			type: 'info',
			text: i18n.ts.reloadToApplySetting,
		});
		if (canceled) return;
	
		unisonReload();
	}
	
	const nicknameEnabled = computed(defaultStore.makeGetterSetter('nicknameEnabled'));
	const useEnterToSend = computed(defaultStore.makeGetterSetter('useEnterToSend'));
	
	const headerActions = computed(() => []);
	
	const headerTabs = computed(() => []);
	
	definePageMetadata({
		title: 'Rosekey',
		icon: 'ti ti-bulb-filled',
	});
	</script>