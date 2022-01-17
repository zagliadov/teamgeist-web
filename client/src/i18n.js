import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// for commit
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            logIn: 'Sign In',
            pswrd: "Password:",
            forgotPswrd: 'Forgot password?',
            users: 'Users',
            PleaseInputYourEmail:'Please input your email!',
            signInBtn: 'Sign In',
            signUp: 'Sign Up',
            pswrdMessage: 'Please input your password!',
          }
        }
      },
      ru: {
        translation: {
          description: {
            logIn: 'Вход в систему',
            pswrd: "Пароль:",
            forgotPswrd: 'Забыли пароль?',
            users: 'Пользователи',
            PleaseInputYourEmail: 'Пожалуйста, введите ваш e-mail!',
            signInBtn: 'Вход',
            signUp: 'Регистрация',
            pswrdMessage: 'Пожалуйста, введите свой пароль!',
          }
        }
      }
    }
  });

export default i18n;