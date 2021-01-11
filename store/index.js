const envProd = process.env.CONTEXT === 'production'
const envTest = Boolean(process.env.DEPLOY_PRIME_URL && !envProd)

export const state = () => ({
  host: envProd ? (process.env.URL || 'https://www.dalilmobarmg.com') :  'http://localhost:3000',
  envProd,
  envTest,
  isDev: !envProd && !envTest,
  visibleAffix: false,

  contributors: [
    {id: 'ebrahimmaher', name: 'Ebrahim Maher', github: 'ebrahimMaher'}
  ]
})

export const mutations = {
  toggle(state, key) {
    state[key] = !state[key]
  },
}
