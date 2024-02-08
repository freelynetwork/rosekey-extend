<!--
SPDX-FileCopyrightText: syuilo and other misskey contributors
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<MkStickyContainer>
	<template #header><MkPageHeader :actions="headerActions" :tabs="headerTabs"/></template>
	<div style="overflow: clip;">
		<MkSpacer :contentMax="600" :marginMin="20">
			<div class="_gaps_m znqjceqz">
				<div v-panel class="about">
					<div ref="containerEl" class="container" :class="{ playing: easterEggEngine != null }">
						<img src="/client-assets/about-icon.png" alt="" class="icon" draggable="false" @load="iconLoaded" @click="gravity"/>
						<div class="misskey">Rosekey</div>
						<div class="version">v{{ version }}</div>
						<div class="version">v{{ miversion }} (Based on Misskey)</div>
						<span v-for="emoji in easterEggEmojis" :key="emoji.id" class="emoji" :data-physics-x="emoji.left" :data-physics-y="emoji.top" :class="{ _physics_circle_: !emoji.emoji.startsWith(':') }">
							<MkCustomEmoji v-if="emoji.emoji[0] === ':'" class="emoji" :name="emoji.emoji" :normal="true" :noStyle="true"/>
							<MkEmoji v-else class="emoji" :emoji="emoji.emoji" :normal="true" :noStyle="true"/>
						</span>
					</div>
					<button v-if="thereIsTreasure" class="_button treasure" @click="getTreasure"><img src="/fluent-emoji/1f3c6.png" class="treasureImg"></button>
				</div>
				<div style="text-align: center;">
					{{ i18n.ts._aboutMisskey.about }}<br><a href="https://misskey-hub.net/docs/about-misskey/" target="_blank" class="_link">{{ i18n.ts.learnMore }}</a>
				</div>
				<div v-if="$i != null" style="text-align: center;">
					<MkButton primary rounded inline @click="iLoveMisskey">I <Mfm text="$[jelly ❤]"/> #Rosekey</MkButton>
				</div>
				<FormSection>
					<div class="_gaps_s">
						<FormLink to="https://github.com/freelynetwork/rosekey" external>
							<template #icon><i class="ti ti-code"></i></template>
							{{ i18n.ts._aboutMisskey.source }}
							<template #suffix>GitHub</template>
						</FormLink>
						<FormLink to="https://github.com/misskey-dev/misskey" external>
							<template #icon><i class="ti ti-code"></i></template>
							{{ i18n.ts._aboutMisskey.source }}
							<template #suffix>Misskey GitHub</template>
						</FormLink>
					</div>
				</FormSection>
				<FormSection>
					<template #label>{{ i18n.ts._aboutMisskey.projectMembers }}</template>
					<div :class="$style.contributors">
						<a href="https://github.com/16439s" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/146170742?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@16439s</span>
						</a>
						<a href="https://github.com/1STEP621" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/86859447?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@1STEP621</span>
						</a>
						<a href="https://github.com/syuilo" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/4439005?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@syuilo</span>
						</a>
						<a href="https://github.com/tamaina" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/7973572?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@tamaina</span>
						</a>
						<a href="https://github.com/acid-chicken" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/20679825?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@acid-chicken</span>
						</a>
						<a href="https://github.com/kakkokari-gtyih" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/67428053?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@kakkokari-gtyih</span>
						</a>
						<a href="https://github.com/tai-cha" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/40626578?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@tai-cha</span>
						</a>
						<a href="https://github.com/samunohito" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/46447427?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@samunohito</span>
						</a>
						<a href="https://github.com/anatawa12" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/22656849?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@anatawa12</span>
						</a>
					</div>
				</FormSection>
				<FormSection>
					<template #label>{{ i18n.ts._aboutMisskey.contributors }}</template>
					<div :class="$style.contributors" style="margin-bottom: 8px;">
						<a href="https://github.com/mei23" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/30769358?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@mei23</span>
						</a>
						<a href="https://github.com/rinsuki" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/6533808?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@rinsuki</span>
						</a>
						<a href="https://github.com/robflop" target="_blank" :class="$style.contributor">
							<img src="https://avatars.githubusercontent.com/u/8159402?v=4" :class="$style.contributorAvatar">
							<span :class="$style.contributorUsername">@robflop</span>
						</a>
					</div>
					<MkLink url="https://github.com/freelynetwork/rosekey/graphs/contributors">{{ i18n.ts._aboutMisskey.allContributors }}</MkLink>
				</FormSection>
			</div>
		</MkSpacer>
	</div>
</MkStickyContainer>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, ref, shallowRef, computed } from 'vue';
import { version, miversion } from '@/config.js';
import FormLink from '@/components/form/link.vue';
import FormSection from '@/components/form/section.vue';
import MkButton from '@/components/MkButton.vue';
import MkLink from '@/components/MkLink.vue';
import { physics } from '@/scripts/physics.js';
import { i18n } from '@/i18n.js';
import { defaultStore } from '@/store.js';
import * as os from '@/os.js';
import { definePageMetadata } from '@/scripts/page-metadata.js';
import { claimAchievement, claimedAchievements } from '@/scripts/achievements.js';
import { $i } from '@/account.js';

const thereIsTreasure = ref($i && !claimedAchievements.includes('foundTreasure'));

let easterEggReady = false;
const easterEggEmojis = ref<{
	id: string,
	top: number,
	left: number,
	emoji: string
}[]>([]);
const easterEggEngine = ref<{ stop: () => void } | null>(null);
const containerEl = shallowRef<HTMLElement>();

function iconLoaded() {
	const emojis = defaultStore.state.reactions;
	const containerWidth = containerEl.value.offsetWidth;
	for (let i = 0; i < 32; i++) {
		easterEggEmojis.value.push({
			id: i.toString(),
			top: -(128 + (Math.random() * 256)),
			left: (Math.random() * containerWidth),
			emoji: emojis[Math.floor(Math.random() * emojis.length)],
		});
	}

	nextTick(() => {
		easterEggReady = true;
	});
}

function gravity() {
	if (!easterEggReady) return;
	easterEggReady = false;
	easterEggEngine.value = physics(containerEl.value);
}

function iLoveMisskey() {
	os.post({
		initialText: 'I $[jelly ❤] #rosekey',
		instant: true,
	});
}

function getTreasure() {
	thereIsTreasure.value = false;
	claimAchievement('foundTreasure');
}

onBeforeUnmount(() => {
	if (easterEggEngine.value) {
		easterEggEngine.value.stop();
	}
});

const headerActions = computed(() => []);

const headerTabs = computed(() => []);

definePageMetadata({
	title: i18n.ts.aboutMisskey,
	icon: null,
});
</script>

<style lang="scss" scoped>
.znqjceqz {
	> .about {
		position: relative;
		border-radius: var(--radius);

		> .treasure {
			position: absolute;
			top: 60px;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: min-content;

			> .treasureImg {
				width: 25px;
				vertical-align: bottom;
			}
		}

		> .container {
			position: relative;
			text-align: center;
			padding: 16px;

			&.playing {
				&, * {
					user-select: none;
				}

				* {
					will-change: transform;
				}

				> .emoji {
					visibility: visible;
				}
			}

			> .icon {
				display: block;
				width: 80px;
				margin: 0 auto;
				border-radius: 16px;
				position: relative;
				z-index: 1;
			}

			> .misskey {
				margin: 0.75em auto 0 auto;
				width: max-content;
				position: relative;
				z-index: 1;
			}

			> .version {
				margin: 0 auto;
				width: max-content;
				opacity: 0.5;
				position: relative;
				z-index: 1;
			}

			> .emoji {
				position: absolute;
				z-index: 1;
				top: 0;
				left: 0;
				visibility: hidden;

				> .emoji {
					pointer-events: none;
					font-size: 24px;
					width: 24px;
				}
			}
		}
	}
}
</style>

<style lang="scss" module>
.contributors {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 12px;
}

.contributor {
	display: flex;
	align-items: center;
	padding: 12px;
	background: var(--buttonBg);
	border-radius: 6px;

	&:hover {
		text-decoration: none;
		background: var(--buttonHoverBg);
	}

	&.active {
		color: var(--accent);
		background: var(--buttonHoverBg);
	}
}

.contributorAvatar {
	width: 30px;
	border-radius: 100%;
}

.contributorUsername {
	margin-left: 12px;
}

.patronsWithIcon {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 12px;
}

.patronWithIcon {
	display: flex;
	align-items: center;
	padding: 12px;
	background: var(--buttonBg);
	border-radius: 6px;
}

.patronIcon {
	width: 24px;
	border-radius: 100%;
}

.patronName {
	margin-left: 12px;
}
</style>
