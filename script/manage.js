document.addEventListener("DOMContentLoaded", () => {
  const dropZone = document.querySelector("upload-div");
const browseButton = document.querySelector(".browse-file");
const fileInput = document.getElementById("fileInput")

browseButton.addEventListener("click", () =>{
fileInput.click();
});

fileInput.addEventListener('change', (event) => {
        const files = event.target.files;
        handleFiles(files);
    });

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false); // Prevent default for entire body
    });

    // Highlight drop zone when dragging over
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    // Handle dropped files
    dropZone.addEventListener('drop', handleDrop, false);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        dropZone.classList.add('highlight');
    }

    function unhighlight() {
        dropZone.classList.remove('highlight');
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    function handleFiles(files) {
        // You can add your file processing logic here.
        // For example, you might want to:
        // 1. Display file names or thumbnails
        // 2. Upload files to a server (using FormData and Fetch API/XMLHttpRequest)
        // 3. Perform client-side validation (e.g., file type, size)

        if (files.length > 0) {
            console.log('Selected files:', files);
            // Example: Displaying file names (simple)
            const fileList = document.createElement('ul');
            for (let i = 0; i < files.length; i++) {
                const listItem= document.createElement('li');
                listItem.textContent = files[i].name;
                fileList.appendChild(listItem);
            } 
            // You'd typically add this to a specific area, not directly replacing.
            // For demonstration, let's just log and you can implement where to display.
            alert(`Files selected: ${Array.from(files).map(f => f.name).join(', ')}`);
        }
    }
});