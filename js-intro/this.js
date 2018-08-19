function data(data, transport) {
    this.data = data;
    transport.on('data', function () {
        //alert(this.data);

        console.log(this.data)
    });
}

// Mock transport object
var transport = {
    on: function(event, callback) {
        setTimeout(callback, 1000);
    }
};

// called as
