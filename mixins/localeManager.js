// export default {
//   computed: {
//     locales () {
//       return [
//         { text: 'English', locale: 'en', path: 'https://www.dalilmobarmg.com' + this.$route.path },
//         { text: 'Français', locale: 'fr', path: 'https://fr.dalilmobarmg.com' + this.$route.path },
//         { text: '简体中文', locale: 'zh', path: 'https://zh.dalilmobarmg.com' + this.$route.path },
//         { text: '日本語', locale: 'ja', path: 'https://ja.dalilmobarmg.com' + this.$route.path },
//         { text: '한국어', locale: 'ko', path: 'https://ko.dalilmobarmg.com' + this.$route.path },
//         { text: 'Русский', locale: 'ru', path: 'https://ru.dalilmobarmg.com' + this.$route.path },
//         { text: 'Indonesian', locale: 'id', path: 'https://id.dalilmobarmg.com' + this.$route.path }
//       ]
//     },
//     currentLang: {
//       get () {
//         return this.locales.map(l => l.locale).indexOf(this.$store.state.locale)
//       },
//       set (index) {
//         const lang = this.locales[index]
//         if (!lang) {
//           return
//         }
//         window.location.href = lang.path
//       }
//     }
//   }
// }
