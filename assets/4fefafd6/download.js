$(document).ready(function() {
     /* First Step: file upload */

    var button = $('input#importStep1'), interval;
    
    $.ajax_upload(button, {
        action : uploadActionPath,
        name : 'myfile',
        onSubmit : function(file, ext) {
            $("div#importCsvFirstStepResult").text('Loading...');
            this.disable();
        },
        onComplete : function(file, response) {
            this.enable();
            //$("input#fileName").val(file);
            $("div#importCsvFirstStepResult").html(response);
        }
    });

    /* */
    
    /* Breadcrumbs */

    $("a#importCsvA2").click(function() {
		$('html, body').animate({scrollTop:$('#content').position().top}, 'slow');
		$("div#delimiters_log").hide(500);
        $("div#importCsvFirstStep").hide(500);
        $("div#importCsvSecondStep").show(500);
        $("div#importCsvThirdStep").hide(500);
        $("span#importCsvBread2").css({"display" : "none"});
    });

    /* */
});

/* Going to Second Step*/

function toSecondStep(uploadfile, delimiterFromFile, tableFromFile, textDelimiterFromFile) {
	   $('html, body').animate({scrollTop:$('#content').position().top}, 'slow');
       $("span#importCsvForFile").text(uploadfile);
       $("input#thirdFile").val(uploadfile);
	   $("input#fileName").val(uploadfile);
       $("input#delimiter").val(delimiterFromFile);
       $("input#textDelimiter").val(textDelimiterFromFile);
       $("#table").val(tableFromFile);
       
       $("span#importCsvBread1").css({"display" : "inline"});
       $("div#importCsvSecondStep").show(500);
       $("div#importCsvFirstStep").hide(500);
}

/* Going toThird Step*/

function toThirdStep(content, delimiter, model, table, textDelimiter) {
	   $('html, body').animate({scrollTop:$('#content').position().top}, 'slow');
       $("span#importCsvForDelimiter").text(delimiter);
       $("span#importCsvForTextDelimiter").text(textDelimiter);
       $("span#importCsvForModel").text(model);
	   $("div#delimiters_log").show(500);
       $("input#thirdDelimiter").val(delimiter);
       $("input#thirdTextDelimiter").val(textDelimiter);
       $("input#thirdTable").val(table);

       $("span#importCsvBread2").css({"display" : "inline"});
       $("div#importCsvThirdStepColumns").html(content);
       $("div#importCsvThirdStep").show(500);
       $("div#importCsvSecondStep").hide(500);
}

/* Going to the end*/

function toEnd() {
	   $('html, body').animate({scrollTop:$('#content').position().top}, 'slow');
       $("div#importCsvThirdStepColumnsAndForm, div#delimiters_log").hide(500);
       $("span#importCsvBread2").css({"display" : "none"});
}