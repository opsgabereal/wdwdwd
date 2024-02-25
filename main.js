function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var fileList = document.getElementById('fileList');

    var file = fileInput.files[0];
    if (file) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = file.name;
        link.textContent = file.name;
        listItem.appendChild(link);
        fileList.appendChild(listItem);
    }
}
