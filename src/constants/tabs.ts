import type { InjectionKey } from 'vue'
import type { Tabs as ITabs } from '../types/tabs.d'

export const Tabs = Symbol("Tabs") as InjectionKey<ITabs>;