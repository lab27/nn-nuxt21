// plugins/bl-components.js

import Vue from 'vue'
import ProjectInfo from '~/components/projectInfo'
import ExternalLink from '~/components/externalLink'
import Footer from '~/components/footer'

const components = { ProjectInfo, ExternalLink, Footer }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})