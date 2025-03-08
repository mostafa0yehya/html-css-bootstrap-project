function countImagesWithoutAlt() {
  const images = document.querySelectorAll("img");
  let count = 0;
  let imagesWithoutAlt = [];

  images.forEach((img, index) => {
    if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {
      count++;
      const lineNumber = index + 1;
      imagesWithoutAlt.push({ src: img.src, line: lineNumber });
    }
  });

  console.log("Images without alt text:", count);
  console.log("Image details:", imagesWithoutAlt);

  return { count, imagesWithoutAlt };
}

console.log(countImagesWithoutAlt());
