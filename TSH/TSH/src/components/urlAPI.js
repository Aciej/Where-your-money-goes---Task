let urlAPI = new function () {
    let self = this;
        this.url = "http://test-api.kuria.tshdev.io/",
            this.getParameters = function (_obj) {  
            let _return = "";
            let isFirst = false;
                $.each(_obj, function (index, value) {
                    if (!isFirst) {
                        _return += '?' + index + '=' + value;
                        isFirst = true;
                    }
                    else
                        _return += '&' + index + '=' + value;
                });

        return _return;
        }
        this.getList = function (_input) {
            return (this.url + _input );
        }

}


module.exports = urlAPI;