function loadScript() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState !== 4 || this.status !== 200) {
            return;
        }

        setTimeout(() => renderIframe(xhttp.responseText), 0);
    }
    xhttp.withCredentials = true;
    xhttp.open('GET', 'http://b.com/get-add-url', true);
    xhttp.send();
}

function renderIframe(src) {
    const iframe = document.createElement('iframe');
    iframe.src = src;

    document.getElementById('ad-container').appendChild(iframe);
}

loadScript();