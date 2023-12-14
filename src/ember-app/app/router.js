import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probaraz-журнал-заказов-l');
  this.route('i-i-s-probaraz-журнал-заказов-e',
  { path: 'i-i-s-probaraz-журнал-заказов-e/:id' });
  this.route('i-i-s-probaraz-журнал-заказов-e.new',
  { path: 'i-i-s-probaraz-журнал-заказов-e/new' });
  this.route('i-i-s-probaraz-заказ-l');
  this.route('i-i-s-probaraz-заказ-e',
  { path: 'i-i-s-probaraz-заказ-e/:id' });
  this.route('i-i-s-probaraz-заказ-e.new',
  { path: 'i-i-s-probaraz-заказ-e/new' });
  this.route('i-i-s-probaraz-контрагент-l');
  this.route('i-i-s-probaraz-контрагент-e',
  { path: 'i-i-s-probaraz-контрагент-e/:id' });
  this.route('i-i-s-probaraz-контрагент-e.new',
  { path: 'i-i-s-probaraz-контрагент-e/new' });
  this.route('i-i-s-probaraz-мастер-l');
  this.route('i-i-s-probaraz-мастер-e',
  { path: 'i-i-s-probaraz-мастер-e/:id' });
  this.route('i-i-s-probaraz-мастер-e.new',
  { path: 'i-i-s-probaraz-мастер-e/new' });
  this.route('i-i-s-probaraz-номенклатура-l');
  this.route('i-i-s-probaraz-номенклатура-e',
  { path: 'i-i-s-probaraz-номенклатура-e/:id' });
  this.route('i-i-s-probaraz-номенклатура-e.new',
  { path: 'i-i-s-probaraz-номенклатура-e/new' });
});

export default Router;
