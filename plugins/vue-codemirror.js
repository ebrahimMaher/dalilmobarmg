import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'
// codemirror language
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/matchbrackets.js'
// import 'codemirror/addon/hint/show-hint.js'

// codemirror active-line.js
import 'codemirror/addon/selection/active-line.js'
// more codemirror resource...

Vue.use(VueCodemirror)
