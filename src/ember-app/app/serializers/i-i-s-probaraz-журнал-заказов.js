import { Serializer as ЖурналЗаказовSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probaraz-журнал-заказов';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЖурналЗаказовSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
