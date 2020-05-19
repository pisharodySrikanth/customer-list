function fetchAd() {
    var xhttp = new XMLHttpRequest();
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
    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.style.width = '100%';
    iframe.style.background = '#fff';

    document.getElementById('ad-container').appendChild(iframe);
}

window.addEventListener('load', fetchAd);
