import moment from 'moment';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  today: computed(function() {
    return moment().format();
  })
});
