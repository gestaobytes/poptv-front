
import axios from 'axios'
import {baseApiUrlPublic} from '@/global'

export default {
    data: function () {
        return {
            /** */
            allPosts: [],
            allPosts01: "",
            allPosts02: "",
            allPosts03: "",
            allPosts04: "",
            allPosts05: "",
            allPosts06: "",
            allPosts07: "",
            allPosts08: "",
            allPosts09: "",
            allPosts10: "",
            allPosts11: "",
            allPosts12: "",
            allPosts13: "",
            allPosts14: "",
            allPosts15: "",
            allPosts16: "",
            allPosts17: "",
            allPosts18: "",
            allPosts19: "",
            allPosts20: "",
            allPosts21: "",
            allPosts22: "",
            allPosts23: "",
            allPosts24: "",
            allPosts25: "",
            allPosts26: "",
            allPosts27: "",
            allPosts28: "",
            allPosts29: "",
            allPosts30: "",
            allPosts31: "",
            allPosts32: "",
            allPosts33: "",
            allPosts34: "",
            allPosts35: "",
            allPosts36: "",
            allPosts37: "",
            allPosts38: "",
            allPosts39: "",
            allPosts40: "",
            allPosts41: "",
            allPosts42: "",
            allPosts43: "",
            allPosts44: "",
            allPosts45: "",
            allPosts46: "",
            allPosts47: "",
            allPosts48: "",
            allPosts49: "",
            allPosts50: "",
            allPosts51: "",
            allPosts52: "",
            allPosts53: "",
            allPosts54: "",
            allPosts55: "",
            allPosts56: "",
            allPosts57: "",
            allPosts58: "",
            allPosts59: "",
            allPosts60: "",
            allPosts61: "",
            allPosts62: "",
            allPosts63: "",
            allPosts64: "",
            allPosts65: "",
            allPosts66: "",
            allPosts67: "",
            allPosts68: "",
            allPosts69: "",
            allPosts70: "",
            allPosts71: "",
            allPosts72: "",
            allPosts73: "",
            allPosts74: "",
            allPosts75: "",
            allPosts76: "",
            allPosts77: "",
            allPosts78: "",
            allPosts79: "",
            allPosts80: "",
            allPosts81: "",
            allPosts82: "",
            allPosts83: "",
            allPosts84: "",
            allPosts85: "",
            allPosts86: "",
            allPosts87: "",
            allPosts88: "",
            allPosts89: "",
            allPosts90: "",
            allPosts91: "",
            allPosts92: "",
            allPosts93: "",
            allPosts94: "",
            allPosts95: "",
            allPosts96: "",
            allPosts97: "",
            allPosts98: "",
            allPosts99: "",
            allPosts100: "",
            allPosts101: "",
            allPosts102: "",
            allPosts103: "",
            allPosts104: "",
            allPosts105: "",
            allPosts106: "",
            allPosts107: "",
            allPosts108: "",
            allPosts109: "",
            allPosts110: "",
            /** */
            postsHighlight: [],
            postsHighlight01: "",
            postsHighlight02: "",
            postsHighlight03: "",
            postsHighlight04: "",
            postsHighlight05: "",
            postsHighlight06: "",
            postsHighlight07: "",
            postsHighlight08: "",
            postsHighlight09: "",
            postsHighlight10: "",
            postsHighlight11: "",
            postsHighlight12: "",
            itemsCarousel01: [],
            itemsCarousel02: [],
        };
    },

    methods: {
        // async loadPostsHighlight() {
        loadPostsHighlight() {
            // await axios.get(`${baseApiUrlPublic}/posts-highlight`)
            axios.get(`${baseApiUrlPublic}/posts-highlight`)
                .then((res) => {
                    this.postsHighlight = res.data;
                    if (res != "undefined") {
                        if (res.data.length > 0) {
                            this.postsHighlight01 = this.postsHighlight[0];
                        }
                        if (res.data.length > 1) {
                            this.postsHighlight02 = this.postsHighlight[1];
                        }
                        if (res.data.length > 2) {
                            this.postsHighlight03 = this.postsHighlight[2];
                        }
                        if (res.data.length > 3) {
                            this.postsHighlight04 = this.postsHighlight[3];
                        }
                        if (res.data.length > 4) {
                            this.postsHighlight05 = this.postsHighlight[4];
                        }
                        if (res.data.length > 5) {
                            this.postsHighlight06 = this.postsHighlight[5];
                        }
                        /** items carousel 01 */
                        if (res.data.length > 6) {
                            this.itemsCarousel01.push(this.postsHighlight[6]);
                        }
                        if (res.data.length > 7) {
                            this.itemsCarousel01.push(this.postsHighlight[7]);
                        }
                        if (res.data.length > 8) {
                            this.itemsCarousel01.push(this.postsHighlight[8]);
                        }
                        if (res.data.length > 9) {
                            this.itemsCarousel01.push(this.postsHighlight[9]);
                        }
                        if (res.data.length > 10) {
                            this.itemsCarousel01.push(this.postsHighlight[10]);
                        }
                        /** end - items carousel 01 */
                        if (res.data.length > 11) {
                            this.postsHighlight07 = this.postsHighlight[11];
                        }
                        if (res.data.length > 12) {
                            this.postsHighlight08 = this.postsHighlight[12];
                        }
                        if (res.data.length > 13) {
                            this.postsHighlight09 = this.postsHighlight[13];
                        }
                        if (res.data.length > 14) {
                            this.postsHighlight10 = this.postsHighlight[14];
                        }
                        if (res.data.length > 15) {
                            this.postsHighlight11 = this.postsHighlight[15];
                        }
                        if (res.data.length > 16) {
                            this.postsHighlight12 = this.postsHighlight[16];
                        }

                        /** items carousel 02 */
                        if (res.data.length > 6) {
                            this.itemsCarousel02.push(this.postsHighlight[17]);
                        }
                        if (res.data.length > 7) {
                            this.itemsCarousel02.push(this.postsHighlight[18]);
                        }
                        if (res.data.length > 8) {
                            this.itemsCarousel02.push(this.postsHighlight[19]);
                        }
                        if (res.data.length > 9) {
                            this.itemsCarousel02.push(this.postsHighlight[20]);
                        }
                        if (res.data.length > 10) {
                            this.itemsCarousel02.push(this.postsHighlight[21]);
                        }
                        /** end - items carousel 02 */
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        // console.log(error.response.status);
                    }
                });
        },
        loadAllPost() {
            axios
                .get(`${baseApiUrlPublic}/all-posts`)
                .then((res) => {
                    this.allPosts = res.data;
                    if (res != "undefined") {
                        this.allPosts01 = res.data.length > 0 ? this.allPosts[0] : "";
                        this.allPosts02 = res.data.length > 1 ? this.allPosts[1] : "";
                        this.allPosts03 = res.data.length > 2 ? this.allPosts[2] : "";
                        this.allPosts04 = res.data.length > 3 ? this.allPosts[3] : "";
                        this.allPosts05 = res.data.length > 4 ? this.allPosts[4] : "";
                        this.allPosts06 = res.data.length > 5 ? this.allPosts[5] : "";
                        this.allPosts07 = res.data.length > 6 ? this.allPosts[6] : "";
                        this.allPosts08 = res.data.length > 7 ? this.allPosts[7] : "";
                        this.allPosts09 = res.data.length > 8 ? this.allPosts[8] : "";
                        this.allPosts10 = res.data.length > 9 ? this.allPosts[9] : "";
                        this.allPosts11 = res.data.length > 10 ? this.allPosts[10] : "";
                        this.allPosts12 = res.data.length > 11 ? this.allPosts[11] : "";
                        this.allPosts13 = res.data.length > 12 ? this.allPosts[12] : "";
                        this.allPosts14 = res.data.length > 13 ? this.allPosts[13] : "";
                        this.allPosts15 = res.data.length > 14 ? this.allPosts[14] : "";
                        this.allPosts16 = res.data.length > 15 ? this.allPosts[15] : "";
                        this.allPosts17 = res.data.length > 16 ? this.allPosts[16] : "";
                        this.allPosts18 = res.data.length > 17 ? this.allPosts[17] : "";
                        this.allPosts19 = res.data.length > 18 ? this.allPosts[18] : "";
                        this.allPosts20 = res.data.length > 19 ? this.allPosts[19] : "";
                        this.allPosts21 = res.data.length > 20 ? this.allPosts[20] : "";
                        this.allPosts22 = res.data.length > 21 ? this.allPosts[21] : "";
                        this.allPosts23 = res.data.length > 22 ? this.allPosts[22] : "";
                        this.allPosts24 = res.data.length > 23 ? this.allPosts[23] : "";
                        this.allPosts25 = res.data.length > 24 ? this.allPosts[24] : "";
                        this.allPosts26 = res.data.length > 25 ? this.allPosts[25] : "";
                        this.allPosts27 = res.data.length > 26 ? this.allPosts[26] : "";
                        this.allPosts28 = res.data.length > 27 ? this.allPosts[27] : "";
                        this.allPosts29 = res.data.length > 28 ? this.allPosts[28] : "";
                        this.allPosts30 = res.data.length > 29 ? this.allPosts[29] : "";
                        this.allPosts31 = res.data.length > 30 ? this.allPosts[30] : "";
                        this.allPosts32 = res.data.length > 31 ? this.allPosts[31] : "";
                        this.allPosts33 = res.data.length > 32 ? this.allPosts[32] : "";
                        this.allPosts34 = res.data.length > 33 ? this.allPosts[33] : "";
                        this.allPosts35 = res.data.length > 34 ? this.allPosts[34] : "";
                        this.allPosts36 = res.data.length > 35 ? this.allPosts[35] : "";
                        this.allPosts37 = res.data.length > 36 ? this.allPosts[36] : "";
                        this.allPosts38 = res.data.length > 37 ? this.allPosts[37] : "";
                        this.allPosts39 = res.data.length > 38 ? this.allPosts[38] : "";
                        this.allPosts40 = res.data.length > 39 ? this.allPosts[39] : "";
                        this.allPosts41 = res.data.length > 40 ? this.allPosts[40] : "";
                        this.allPosts42 = res.data.length > 41 ? this.allPosts[41] : "";
                        this.allPosts43 = res.data.length > 42 ? this.allPosts[42] : "";
                        this.allPosts44 = res.data.length > 43 ? this.allPosts[43] : "";
                        this.allPosts45 = res.data.length > 44 ? this.allPosts[44] : "";
                        this.allPosts46 = res.data.length > 45 ? this.allPosts[45] : "";
                        this.allPosts47 = res.data.length > 46 ? this.allPosts[46] : "";
                        this.allPosts48 = res.data.length > 47 ? this.allPosts[47] : "";
                        this.allPosts49 = res.data.length > 48 ? this.allPosts[48] : "";
                        this.allPosts50 = res.data.length > 49 ? this.allPosts[49] : "";
                        this.allPosts51 = res.data.length > 50 ? this.allPosts[50] : "";
                        this.allPosts52 = res.data.length > 51 ? this.allPosts[51] : "";
                        this.allPosts53 = res.data.length > 52 ? this.allPosts[52] : "";
                        this.allPosts54 = res.data.length > 53 ? this.allPosts[53] : "";
                        this.allPosts55 = res.data.length > 54 ? this.allPosts[54] : "";
                        this.allPosts56 = res.data.length > 55 ? this.allPosts[55] : "";
                        this.allPosts57 = res.data.length > 56 ? this.allPosts[56] : "";
                        this.allPosts58 = res.data.length > 57 ? this.allPosts[57] : "";
                        this.allPosts59 = res.data.length > 58 ? this.allPosts[58] : "";
                        this.allPosts60 = res.data.length > 59 ? this.allPosts[59] : "";
                        this.allPosts61 = res.data.length > 60 ? this.allPosts[60] : "";
                        this.allPosts62 = res.data.length > 61 ? this.allPosts[61] : "";
                        this.allPosts63 = res.data.length > 62 ? this.allPosts[62] : "";
                        this.allPosts64 = res.data.length > 63 ? this.allPosts[63] : "";
                        this.allPosts65 = res.data.length > 64 ? this.allPosts[64] : "";
                        this.allPosts66 = res.data.length > 65 ? this.allPosts[65] : "";
                        this.allPosts67 = res.data.length > 66 ? this.allPosts[66] : "";
                        this.allPosts68 = res.data.length > 67 ? this.allPosts[67] : "";
                        this.allPosts69 = res.data.length > 68 ? this.allPosts[68] : "";
                        this.allPosts70 = res.data.length > 69 ? this.allPosts[69] : "";
                        this.allPosts71 = res.data.length > 70 ? this.allPosts[70] : "";
                        this.allPosts72 = res.data.length > 71 ? this.allPosts[71] : "";
                        this.allPosts73 = res.data.length > 72 ? this.allPosts[72] : "";
                        this.allPosts74 = res.data.length > 73 ? this.allPosts[73] : "";
                        this.allPosts75 = res.data.length > 74 ? this.allPosts[74] : "";
                        this.allPosts76 = res.data.length > 75 ? this.allPosts[75] : "";
                        this.allPosts77 = res.data.length > 76 ? this.allPosts[76] : "";
                        this.allPosts78 = res.data.length > 77 ? this.allPosts[77] : "";
                        this.allPosts79 = res.data.length > 78 ? this.allPosts[78] : "";
                        this.allPosts80 = res.data.length > 79 ? this.allPosts[79] : "";
                        this.allPosts81 = res.data.length > 80 ? this.allPosts[80] : "";
                        this.allPosts82 = res.data.length > 81 ? this.allPosts[81] : "";
                        this.allPosts83 = res.data.length > 82 ? this.allPosts[82] : "";
                        this.allPosts84 = res.data.length > 83 ? this.allPosts[83] : "";
                        this.allPosts85 = res.data.length > 84 ? this.allPosts[84] : "";
                        this.allPosts86 = res.data.length > 85 ? this.allPosts[85] : "";
                        this.allPosts87 = res.data.length > 86 ? this.allPosts[86] : "";
                        this.allPosts88 = res.data.length > 87 ? this.allPosts[87] : "";
                        this.allPosts89 = res.data.length > 88 ? this.allPosts[88] : "";
                        this.allPosts90 = res.data.length > 89 ? this.allPosts[89] : "";
                        this.allPosts91 = res.data.length > 90 ? this.allPosts[90] : "";
                        this.allPosts92 = res.data.length > 91 ? this.allPosts[91] : "";
                        this.allPosts93 = res.data.length > 92 ? this.allPosts[92] : "";
                        this.allPosts94 = res.data.length > 93 ? this.allPosts[93] : "";
                        this.allPosts95 = res.data.length > 94 ? this.allPosts[94] : "";
                        this.allPosts96 = res.data.length > 95 ? this.allPosts[95] : "";
                        this.allPosts97 = res.data.length > 96 ? this.allPosts[96] : "";
                        this.allPosts98 = res.data.length > 97 ? this.allPosts[97] : "";
                        this.allPosts99 = res.data.length > 98 ? this.allPosts[98] : "";
                        this.allPosts100 = res.data.length > 99 ? this.allPosts[99] : "";
                        this.allPosts101 = res.data.length > 100 ? this.allPosts[100] : "";
                        this.allPosts102 = res.data.length > 101 ? this.allPosts[101] : "";
                        this.allPosts103 = res.data.length > 102 ? this.allPosts[102] : "";
                        this.allPosts104 = res.data.length > 103 ? this.allPosts[103] : "";
                        this.allPosts105 = res.data.length > 104 ? this.allPosts[104] : "";
                        this.allPosts106 = res.data.length > 105 ? this.allPosts[105] : "";
                        this.allPosts107 = res.data.length > 106 ? this.allPosts[106] : "";
                        this.allPosts108 = res.data.length > 107 ? this.allPosts[107] : "";
                        this.allPosts109 = res.data.length > 108 ? this.allPosts[108] : "";
                        this.allPosts110 = res.data.length > 109 ? this.allPosts[109] : "";
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        // console.log(error.response.status);
                    }
                });
        },
    },
    mounted() {
        this.loadAllPost();
        this.loadPostsHighlight();
    },

}

