import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probaraz-мастер', 'Unit | Serializer | i-i-s-probaraz-мастер', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probaraz-мастер',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probaraz-лица',
    'transform:i-i-s-probaraz-статус',

    'model:i-i-s-probaraz-журнал-заказов',
    'model:i-i-s-probaraz-заказ',
    'model:i-i-s-probaraz-контрагент',
    'model:i-i-s-probaraz-мастер',
    'model:i-i-s-probaraz-номенклатура',
    'model:i-i-s-probaraz-расчет-заказа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
