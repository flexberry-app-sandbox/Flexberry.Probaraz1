import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbarazЖурналЗаказовLForm from './forms/i-i-s-probaraz-журнал-заказов-l';
import IISProbarazЗаказLForm from './forms/i-i-s-probaraz-заказ-l';
import IISProbarazКонтрагентLForm from './forms/i-i-s-probaraz-контрагент-l';
import IISProbarazМастерLForm from './forms/i-i-s-probaraz-мастер-l';
import IISProbarazНоменклатураLForm from './forms/i-i-s-probaraz-номенклатура-l';
import IISProbarazЖурналЗаказовEForm from './forms/i-i-s-probaraz-журнал-заказов-e';
import IISProbarazЗаказEForm from './forms/i-i-s-probaraz-заказ-e';
import IISProbarazКонтрагентEForm from './forms/i-i-s-probaraz-контрагент-e';
import IISProbarazМастерEForm from './forms/i-i-s-probaraz-мастер-e';
import IISProbarazНоменклатураEForm from './forms/i-i-s-probaraz-номенклатура-e';
import IISProbarazЖурналЗаказовModel from './models/i-i-s-probaraz-журнал-заказов';
import IISProbarazЗаказModel from './models/i-i-s-probaraz-заказ';
import IISProbarazКонтрагентModel from './models/i-i-s-probaraz-контрагент';
import IISProbarazМастерModel from './models/i-i-s-probaraz-мастер';
import IISProbarazНоменклатураModel from './models/i-i-s-probaraz-номенклатура';
import IISProbarazРасчетЗаказаModel from './models/i-i-s-probaraz-расчет-заказа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probaraz-журнал-заказов': IISProbarazЖурналЗаказовModel,
    'i-i-s-probaraz-заказ': IISProbarazЗаказModel,
    'i-i-s-probaraz-контрагент': IISProbarazКонтрагентModel,
    'i-i-s-probaraz-мастер': IISProbarazМастерModel,
    'i-i-s-probaraz-номенклатура': IISProbarazНоменклатураModel,
    'i-i-s-probaraz-расчет-заказа': IISProbarazРасчетЗаказаModel
  },

  'application-name': 'Probaraz',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probaraz',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probaraz',
          title: 'Probaraz'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-probaraz-журнал-заказов-l': {
              caption: 'Журнал заказов',
              title: 'Журнал заказов'
            },
            'i-i-s-probaraz-заказ-l': {
              caption: 'Заказ',
              title: 'Заказ'
            }
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-probaraz-контрагент-l': {
              caption: 'Контрагент',
              title: 'Контрагент'
            },
            'i-i-s-probaraz-мастер-l': {
              caption: 'Мастер',
              title: 'Мастер'
            },
            'i-i-s-probaraz-номенклатура-l': {
              caption: 'Номенклатура',
              title: 'Номенклатура'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probaraz-журнал-заказов-l': IISProbarazЖурналЗаказовLForm,
    'i-i-s-probaraz-заказ-l': IISProbarazЗаказLForm,
    'i-i-s-probaraz-контрагент-l': IISProbarazКонтрагентLForm,
    'i-i-s-probaraz-мастер-l': IISProbarazМастерLForm,
    'i-i-s-probaraz-номенклатура-l': IISProbarazНоменклатураLForm,
    'i-i-s-probaraz-журнал-заказов-e': IISProbarazЖурналЗаказовEForm,
    'i-i-s-probaraz-заказ-e': IISProbarazЗаказEForm,
    'i-i-s-probaraz-контрагент-e': IISProbarazКонтрагентEForm,
    'i-i-s-probaraz-мастер-e': IISProbarazМастерEForm,
    'i-i-s-probaraz-номенклатура-e': IISProbarazНоменклатураEForm
  },

});

export default translations;
