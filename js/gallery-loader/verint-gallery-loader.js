fetch('assets/img/Verint/verint-images.json')
  .then(res => res.json())
  .then(images => {
    const gallery = document.getElementById("verint-gallery");

    images.forEach(path => {
      const fullPath = `assets/img/Verint/${path}`;
      const a = document.createElement("a");
      a.href = fullPath;
      a.target = "_blank";

      const img = document.createElement("img");
      img.src = fullPath;

      if (fullPath.includes("PhotoChallengeWinnerHappy2025.png")) {
        img.style.objectFit = "contain";
      }

      a.appendChild(img);
      gallery.appendChild(a);
    });
  });
