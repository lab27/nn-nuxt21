// plugins/bl-components.js

import Vue from 'vue'
import ProjectInfo from '~/components/projectInfo'
import ExternalLink from '~/components/externalLink'

const components = { ProjectInfo, ExternalLink }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})