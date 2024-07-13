import type { Readonly, Ref } from 'vue'

export type ProcessTab = (tab: string) => void;
export interface Tabs {
    currentTab: Readonly<Ref<string>>;
    setCurrentTab: ProcessTab;
    expandTabs: ProcessTab;
}