import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.заказы.документация.caption'),
            title: i18n.t('forms.application.sitemap.заказы.документация.title'),
            children: [{
              link: 'i-i-s-probaraz-журнал-заказов-l',
              caption: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probaraz-журнал-заказов-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probaraz-журнал-заказов-l.title'),
              icon: 'chart line',
              children: null
            }, {
              link: 'i-i-s-probaraz-заказ-l',
              caption: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probaraz-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probaraz-заказ-l.title'),
              icon: 'paperclip',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.заказы.справочники.caption'),
            title: i18n.t('forms.application.sitemap.заказы.справочники.title'),
            children: [{
              link: 'i-i-s-probaraz-контрагент-l',
              caption: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probaraz-контрагент-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probaraz-контрагент-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-probaraz-мастер-l',
              caption: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probaraz-мастер-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probaraz-мастер-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-probaraz-номенклатура-l',
              caption: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probaraz-номенклатура-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probaraz-номенклатура-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})