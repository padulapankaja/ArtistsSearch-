import qs from 'query-string'
class Config {


    constructor() {
        this.host = "https://api.spotify.com/v1/";
        this.token = "BQDz9vcqZQVgwxDfIXEecnCIVDYJcO0A_tgztCV5v4-ROoYXMw6Jvo2ewxb2sEa-SinQMzaz0pcItgwJx92alLFLTuLad9O0nvfe5-VJplCFTru0rMI8i4HV-9mRLoxDma34LaJrpdo1_wM5OwSY4XXt5o1kWoE";

    }

    getUrl(path, params) {

        var uri = this.host + path;
        if (params !== null && params !== undefined) {

            var Query = qs.stringify(params);
            uri += "?" + Query;

        }
        // console.log(uri);
        return uri;


    }

    getHeaders() {
        return {


            Authorization: "Bearer " + this.token


        }
    }
}

var _config = new Config();
export default _config;