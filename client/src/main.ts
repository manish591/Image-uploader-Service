import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input type="file" class="upload-file">
    <div class="uploaded-container">fh</div>
  </div>
`;

function setupUploadFile() {
  const inputFileElement: HTMLInputElement = document.querySelector('.upload-file')!;
  const uploadContainer: HTMLElement = document.querySelector('.uploaded-container')!;

  async function getUploadedData() {
    if(inputFileElement.files) {
      const myFile = inputFileElement.files[0];
      const formData = new FormData();
      formData.append('uploaded', myFile);

      const res = await fetch('http://localhost:3000/upload', {
        method: "POST",
        body: formData,
      });

      const imageData = await res.json();
      const img = document.createElement('img');
      img.src = imageData.url;

      uploadContainer.appendChild(img);
    }
  }

  inputFileElement.addEventListener('change', getUploadedData);
}

setupUploadFile();
