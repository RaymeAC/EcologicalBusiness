
function sizeFrame() {
var F = document.getElementById("mainframe");
if(F.contentDocument) {
F.height = F.contentDocument.documentElement.scrollHeight+30; //FF 3.0.11, Opera 9.63, and Chrome
} else {
F.height = F.contentWindow.document.body.scrollHeight+30; //IE6, IE7 and Chrome
}
};

window.onload=sizeFrame;

    function autoIframe(mainframe){
        try{
            frame = document.getElementById(mainframe);
            innerDoc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document;

            if (innerDoc == null){
                            // Google Chrome
                frame.height = document.all[mainframe].clientHeight + document.all[mainframe].offsetHeight + document.all[mainframe].offsetTop;
            }
                    else{
                    objToResize = (frame.style) ? frame.style : frame;
                    objToResize.height = innerDoc.body.scrollHeight + 18 + "px";
                    }
        }

        catch(err){
                alert('Err: ' + err.message);
            window.status = err.message;
        }
    }

