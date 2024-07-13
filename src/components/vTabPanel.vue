<script setup lang="ts">
import { inject, shallowRef, getCurrentInstance, onBeforeMount, computed } from "vue";
import { Tabs } from '@/constants/tabs'

interface Props {
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
});

const { title } = props;
const tabsProvider = inject(Tabs, {
  currentTab: shallowRef<string>(''),
  expandTabs: () => {},
  setCurrentTab: () => {},
});

onBeforeMount(() => {
  const instance = getCurrentInstance();

  if (instance?.parent?.type?.__name !== 'vTabs') {
    throw new Error(
        `The current vTabPanel component has to be used only in the 'vTabs' component!`
    );
  }

  tabsProvider.expandTabs(title);

  if (tabsProvider.currentTab.value) {
    return
  }

  tabsProvider.setCurrentTab(title);
});

const isActive = computed<boolean>(() => {
  return tabsProvider.currentTab.value === title
});
</script>
<template>
  <div v-show="isActive" class="tab-content">
    <slot></slot>
  </div>
</template>
