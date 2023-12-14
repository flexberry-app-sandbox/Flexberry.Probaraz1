import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  сумма: DS.attr('decimal'),
  номенклатура: DS.belongsTo('i-i-s-probaraz-номенклатура', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-probaraz-заказ', { inverse: 'расчетЗаказа', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-probaraz-расчет-заказа.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-probaraz-расчет-заказа.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-probaraz-расчет-заказа.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-probaraz-расчет-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетЗаказаE', 'i-i-s-probaraz-расчет-заказа', {
    номенклатура: belongsTo('i-i-s-probaraz-номенклатура', 'Товар', {
      товар: attr('Товар', { index: 1, hidden: true }),
      цена: attr('Цена', { index: 2 })
    }, { index: 0, displayMemberPath: 'товар' }),
    количество: attr('Количество', { index: 3 }),
    сумма: attr('Сумма', { index: 4 })
  });
};
