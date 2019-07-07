$(document).ready(function() {
    $('#search').click(function(){
        var code=$('#code').val();

        if(code!=""){
            $.ajax({
                url: "http://localhost:8000/api/shipping/"+code
            }).then(function(data) {
                if(data.status=='success') {
                    if(!jQuery.isEmptyObject(data.result)){
                        $('#result').text(data.result.estimated_delivery_date);
                    } else {
                        $('#result').text('Not Found!');
                    }
                } else {
                    $('#result').text('Not Found!');
                }
            });
        }
    });
});