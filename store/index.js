const envProd = process.env.CONTEXT === 'production'

export const state = () => ({
  host: envProd ? (process.env.URL || 'https://www.dalilmobarmg.com') :  'http://localhost:3000',
  envProd,
  isDev: !envProd,
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
