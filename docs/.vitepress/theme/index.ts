import DefaultTheme from 'vitepress/theme'

import './custom.css'
import Badge from './components/Badge.vue'
import ComparisonTable from './components/ComparisonTable.vue'
import ConfigCard from './components/ConfigCard.vue'

import type { Theme, EnhanceAppContext } from 'vitepress'

const theme = {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('Badge', Badge)
    app.component('ConfigCard', ConfigCard)
    app.component('ComparisonTable', ComparisonTable)
  },
}

export default theme as Theme
