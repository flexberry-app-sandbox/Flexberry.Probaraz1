import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерТовара: DS.attr('number'),
  товар: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  номерТовара: {
    descriptionKey: 'models.i-i-s-probaraz-номенклатура.validations.номерТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-probaraz-номенклатура.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-probaraz-номенклатура.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-probaraz-номенклатура', {
    номерТовара: attr('Номер товара', { index: 0 }),
    товар: attr('Товар', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-probaraz-номенклатура', {
    номерТовара: attr('Номер товара', { index: 0 }),
    товар: attr('Товар', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });
};
