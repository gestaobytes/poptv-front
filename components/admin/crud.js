import { baseApiUrlAdmin, showError } from "@/global";
import axios from "axios";

export default {

    data: function () {
        return {
            dialog: false,
            pageApi: '',
            mode: "save",
            dataOfTable: {},
            registersOfTable: [],
            url: '',
            titleModal: 'ADICIONAR',
            titlePage: '',
            dateStart: "2010-01-01",
            dateFinish: "",
            /** register for pagination */
            page: 1,
            currentPage: 1,
            nextPage: 1,
            count: 0,
            limit: 0,
            paginate: 0,
            qtdRegisters: 0,
            /** pesquisa */
            searching: false,
            fieldSearch: "",
            fieldDtsSearch: "",
            fieldDtfSearch: "",
            storageGoogle: "https://storage.googleapis.com/poptvnews/",
            folderStorage: "",
        };
    },

    methods: {
        submitFS() {
            this.searching = true;
            this.fieldSearch = document.getElementById('fieldSF').value;
            this.fieldDtsSearch = document.getElementById('dtsFS').value;
            this.fieldDtfSearch = document.getElementById('dtfFS').value;
            this.page = 1;
            this.loadRegistersOfTable();
        },

        loadRegistersOfTable() {
            if (this.searching == true) {
                let q = this.fieldSearch;
                let dts = this.fieldDtsSearch;
                let dtf = this.fieldDtfSearch;
                var search = typeof q === "undefined" || q == "" ? "" : "q=" + q + "&dts=" + dts + "&dtf=" + dtf;
                this.url = `${baseApiUrlAdmin}/${this.pageApi}?${search}&page=${this.page}`;
                // console.log("query: " + search);
                // console.log("page: " + search);
            }
            else {
                this.url = `${baseApiUrlAdmin}/${this.pageApi}?page=${this.page}`;
                // console.log("sem pesquisa");
            }

            axios.get(this.url).then(res => {
                this.registersOfTable = res.data.data
                this.count = res.data.total
                this.limit = res.data.per_page
                this.paginate = Math.ceil((res.data.total) / (res.data.per_page))
                this.qtdRegisters = 0
            });
        },

        save() {
            const method = this.dataOfTable.id ? "put" : "post";
            const id = this.dataOfTable.id ? `/${this.dataOfTable.id}` : "";
            axios[method](`${baseApiUrlAdmin}/${this.pageApi}${id}`, this.dataOfTable)
                .then(() => {
                    if (method == "put") {
                        this.$swal({
                            icon: 'success',
                            title: 'Registro Alterado!',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    } else {
                        this.$swal({
                            icon: 'success',
                            title: 'Registro Inserido!',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                    this.reset();
                    this.hideModal();
                })
                .catch(showError);
        },

        remove(item) {
            this.$swal({
                title: "Deseja remover?",
                text: "Esta ação irá remover o registro da lista.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: "#ff6a00",
                cancelButtonColor: "#ffceab",
                confirmButtonText: "Remover",
                cancelButtonText: "Manter registro",
                showCloseButton: true
            }).then(result => {
                const id = item.id;
                if (result.value) {
                    axios.delete(`${baseApiUrlAdmin}/${this.pageApi}/${id}`).then(() => {
                        this.searching = false;
                        this.loadRegistersOfTable();
                    }),
                        this.$swal({
                            icon: 'success',
                            title: 'Registro removido.',
                            showConfirmButton: false,
                            timer: 2000
                        });
                } else {
                    this.$swal({
                        icon: 'warning',
                        title: 'Registro mantido.',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            });
        },

        loadRegisterSelect(item) {
            const id = item.id;
            var titleEditModal;
            this.url = `${baseApiUrlAdmin}/${this.pageApi}/${id}/details`;
            axios.get(this.url).then(res => {
                this.dataOfTable = res.data;
                if ((typeof res.data.name != "undefined") && (res.data.name != "")) {
                    titleEditModal = res.data.name;
                } else if ((typeof res.data.title != "undefined") && (res.data.title != "")) {
                    titleEditModal = res.data.title;
                } else if ((typeof res.data.slug != "undefined") && (res.data.slug != "")) {
                    titleEditModal = res.data.slug;
                } else {
                    titleEditModal = this.titlePage;
                }
                this.titleModal = titleEditModal;
            });
        },

        reset() {
            this.searching = false;
            this.titleModal = "CADASTRAR " + this.titlePage;
            this.dataOfTable = {};
            this.loadRegistersOfTable();
        },

        hideModal() {
            this.reset();
            this.dialog = false;
        },

        allowedDates: val => parseInt(val.split("-")[2], 10) % 2 === 0
    },

    watch: {
        page() {
            console.log("page: " + this.page);
            this.loadRegistersOfTable()
        },
    },

    mounted() {
        this.loadRegistersOfTable();
        var dateNow = new Date();
        var year = dateNow.getFullYear();
        var month = dateNow.getMonth() + 1;
        var day = dateNow.getDate();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        this.dateFinish = year + "-" + month + "-" + day;
    },

}