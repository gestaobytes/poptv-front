import axios from 'axios'
import {baseApiUrlPublic} from '@/global'


export default {
    data: function () {
        return {
            banner01: '',
            banner02: '',
            banner03: '',
            banner04: '',
            banner05: '',
            banner06: '',
            banner07: '',
            banner08: '',
            banner09: '',
            banner10: '',
            banner11: '',
            banner12: '',
            banner13: '',
            banner14: '',
            banner15: '',
            banner16: '',
            banner17: '',
            banner18: '',
            banner19: '',
            banner20: '',
            banners: [],
        };
    },

    methods: {

        async loadBanners() {
            await axios.get(`${baseApiUrlPublic}/lasts-banners`).then(res => {
                if (typeof res.data.countBanners === "undefined") {
                    console.log("nao existe banners");
                } else {
                    this.banners = res.data.banners;

                    if (res.data.countBanners > 0) {
                        this.banner01 = this.banners[0];
                    }
                    if (res.data.countBanners > 1) {
                        this.banner02 = this.banners[1];
                    }
                    if (res.data.countBanners > 2) {
                        this.banner03 = this.banners[2];
                    }
                    if (res.data.countBanners > 3) {
                        this.banner04 = this.banners[3];
                    }
                    if (res.data.countBanners > 4) {
                        this.banner05 = this.banners[4];
                    }
                    if (res.data.countBanners > 5) {
                        this.banner06 = this.banners[5];
                    }
                    if (res.data.countBanners > 6) {
                        this.banner07 = this.banners[6];
                    }
                    if (res.data.countBanners > 7) {
                        this.banner08 = this.banners[7];
                    }
                    if (res.data.countBanners > 8) {
                        this.banner09 = this.banners[8];
                    }
                    if (res.data.countBanners > 9) {
                        this.banner10 = this.banners[9];
                    }
                    if (res.data.countBanners > 10) {
                        this.banner11 = this.banners[10];
                    }
                    if (res.data.countBanners > 11) {
                        this.banner12 = this.banners[11];
                    }
                    if (res.data.countBanners > 12) {
                        this.banner13 = this.banners[12];
                    }
                    if (res.data.countBanners > 13) {
                        this.banner14 = this.banners[13];
                    }
                    if (res.data.countBanners > 14) {
                        this.banner15 = this.banners[14];
                    }
                    if (res.data.countBanners > 15) {
                        this.banner16 = this.banners[15];
                    }
                    if (res.data.countBanners > 16) {
                        this.banner17 = this.banners[16];
                    }
                    if (res.data.countBanners > 17) {
                        this.banner18 = this.banners[17];
                    }
                    if (res.data.countBanners > 18) {
                        this.banner19 = this.banners[18];
                    }
                    if (res.data.countBanners > 19) {
                        this.banner20 = this.banners[19];
                    }
                }
            });
        },

    },
    mounted() {
        this.loadBanners();
    }

}
