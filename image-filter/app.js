const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");

let img = new Image();
let fileName = "";

//Upload File
uploadFile.addEventListener("change", e => {
  // Get file
  const file = document.getElementById("upload-file").files[0];

  // Init FileReader
  const reader = new FileReader();

  if (file) {
    // Set File name
    fileName = file.name;
    // Read data as URL
    reader.readAsDataURL(file);

    //Add image to canvas
    reader.addEventListener(
      "load",
      () => {
        // Create image
        img = new Image();
        // Set src
        img.src = reader.result;
        //On image load, add to canvas
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          canvas.removeAttribute("data-caman-id");
        };
      },
      false
    );
  }
});
