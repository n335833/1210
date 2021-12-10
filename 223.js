$(document).ready(function () {

    $("#jslaunch").click(function () {

        var progress = 0,

            timer = 0;

        

    	$('#loading-modal').modal('show');        

    	timer = setInterval(function () {

            progress += 10;

            if (progress < 100) {

                $('#loading-modal .progress-bar').css('width', progress + '%').attr('aria-valuenow', progress);

            } else {

                clearInterval(timer)

            }

        	

        }, 1000)

        

        setTimeout(function () {

            clearInterval(timer);

            progress = 100;

        	$('#loading-modal .progress-bar').css('width', progress + '%').attr('aria-valuenow', progress);

            setTimeout(function () {

            	$('#loading-modal').modal('hide');

            }, 1000);

            

        }, 5000);

    });

});
