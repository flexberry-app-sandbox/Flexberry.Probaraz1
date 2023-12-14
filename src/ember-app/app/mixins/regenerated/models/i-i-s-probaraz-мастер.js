import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  кодМастера: DS.attr('number'),
  почта: DS.attr('string'),
  телефон: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-probaraz-мастер.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодМастера: {
    descriptionKey: 'models.i-i-s-probaraz-мастер.validations.кодМастера.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-probaraz-мастер.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-probaraz-мастер.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-probaraz-мастер.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МастерE', 'i-i-s-probaraz-мастер', {
    кодМастера: attr('Код мастера', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('Почта', { index: 4 })
  });

  modelClass.defineProjection('МастерL', 'i-i-s-probaraz-мастер', {
    кодМастера: attr('Код мастера', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('Почта', { index: 4 })
  });
};
