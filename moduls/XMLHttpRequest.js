function requestHttp (type, url, resolve, reject) {
const xhr = new XMLHttpRequest();
xhr.open(type, url);
xhr.send();
xhr.onload = function() {
    if (xhr.status === 200){
        resolve(xhr.responseText);
    } else {
        reject(new Error(xhr.statusText));
    }
}
};

export default requestHttp;