import Vue from 'vue'

// add translations directly to the application
Vue.i18n.add('ja', require('./ja-mock.json'))

// set the start locale to use
Vue.i18n.set('ja')

// set fallback for non-translated strings
Vue.i18n.fallback('ja')
