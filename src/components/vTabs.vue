<script setup lang="ts">
import { provide, shallowReactive, shallowRef, readonly } from "vue";
import { Tabs } from '@/constants/tabs'
import type { ProcessTab } from '@/types/tabs'

const tabs = shallowReactive<string[]>([]);
const currentTab = shallowRef<string>('');

const setCurrentTab: ProcessTab = (tab) => {
  currentTab.value = tab;
};

const expandTabs: ProcessTab = (tab) => {
  if (tabs.includes(tab)) return

  tabs.push(tab);
};

provide(Tabs, {
  expandTabs,
  setCurrentTab,
  currentTab: readonly(currentTab),
});
</script>

<template>
  <div class="tabs">
    <div class="tab-trigger-wrapper">
      <!--
        This should not be hardcoded but dynamic based on 
        the title of each of the <Tab> components based in the slot
      -->
      <button
          v-for="tab in tabs"
          :key="tab"
          type="button"
          class="tab-trigger"
          :class="{
            active: currentTab === tab,
          }"
          @click="setCurrentTab(tab)"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
