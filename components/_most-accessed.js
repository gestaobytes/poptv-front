import axios from 'axios'
import { baseApiUrlPublic } from '@/global'

export default {
  data: function () {
    return {
      mostAccessedDay: [],
      mostAccessedWeek: [],
    };
  },

  methods: {
    loadMostAccessedDay() {
      axios.get(`${baseApiUrlPublic}/most-accessed-day`).then(res => {
        this.mostAccessedDay = res.data;
      });
    },

    loadMostAccessedWeek() {
      axios.get(`${baseApiUrlPublic}/most-accessed-week`).then(res => {
        this.mostAccessedWeek = res.data;
      });
    },
  },

  mounted() {
    this.loadMostAccessedDay();
    this.loadMostAccessedWeek();
  }

}
