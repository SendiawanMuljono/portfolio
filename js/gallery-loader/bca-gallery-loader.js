fetch('assets/img/BCA/bca-images.json')
  .then(res => res.json())
  .then(images => {
    const gallery = document.getElementById("bca-gallery");

    images.forEach(path => {
      const fullPath = `assets/img/BCA/${path}`;
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
