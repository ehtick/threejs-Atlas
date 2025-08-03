console.log('Atlas System React script loading...');

// Replicate original functionality from script.js, atlasHistoricalScript.js, and spaceTravel.js

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM loaded, starting System scripts...');
  
  // 1. Localization Toggle Function (from script.js)
  window.toggleLocalization = function() {
    var content = document.getElementById("localization-content");
    var button = document.querySelector(".dropdown-btn");

    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      button.textContent = "Hide Localization";
    } else {
      content.style.display = "none";
      button.textContent = "View Localization";
    }
  };

  // Hide localization content on load
  const localizationContent = document.getElementById("localization-content");
  if (localizationContent) {
    localizationContent.style.display = "none";
  }

  // 2. Stargate Animation (from script.js)
  function initStargateAnimation() {
    const stargateText = document.getElementById("stargate-text");
    const stargateButton = document.querySelector(".stargate");

    if (!stargateText || !stargateButton) {
      return;
    }

    const animationShown = sessionStorage.getItem("stargateAnimationShown");

    if (animationShown) {
      stargateText.textContent = "Stargate system aligned";
    } else {
      sessionStorage.setItem("stargateAnimationShown", "true");

      const finalMessage = "Stargate system aligned";
      let currentPhase = 0;

      function getRandomBinary(length) {
        return Array.from({ length }, () => Math.floor(Math.random() * 2)).join("");
      }

      function getRandomDecimal(length) {
        return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
      }

      function getRandomHexadecimal(length) {
        const hexChars = "0123456789ABCDEF";
        return Array.from({ length }, () => hexChars[Math.floor(Math.random() * 16)]).join("");
      }

      function getRandomAlphanumericSymbols(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
      }

      function typeBinary() {
        stargateText.textContent = getRandomBinary(32);
        currentPhase++;
        if (currentPhase < 20) {
          setTimeout(typeBinary, 40);
        } else {
          currentPhase = 0;
          setTimeout(typeDecimal, 40);
        }
      }

      function typeDecimal() {
        stargateText.textContent = getRandomDecimal(32);
        currentPhase++;
        if (currentPhase < 30) {
          setTimeout(typeDecimal, 25);
        } else {
          currentPhase = 0;
          setTimeout(typeHexadecimal, 25);
        }
      }

      function typeHexadecimal() {
        stargateText.textContent = getRandomHexadecimal(32);
        currentPhase++;
        if (currentPhase < 40) {
          setTimeout(typeHexadecimal, 20);
        } else {
          currentPhase = 0;
          setTimeout(typeAlphanumericSymbols, 20);
        }
      }

      function typeAlphanumericSymbols() {
        stargateText.textContent = getRandomAlphanumericSymbols(32);
        currentPhase++;
        if (currentPhase < 100) {
          setTimeout(typeAlphanumericSymbols, 10);
        } else {
          currentPhase = 0;
          setTimeout(typeFinalMessage, 10);
        }
      }

      function typeFinalMessage() {
        let i = 0;
        stargateText.textContent = "";
        function typeCharacter() {
          if (i < finalMessage.length) {
            stargateText.textContent += finalMessage.charAt(i);
            i++;
            setTimeout(typeCharacter, 30);
          } else {
            animateStargateButton();
          }
        }
        typeCharacter();
      }

      function animateStargateButton() {
        stargateButton.style.transition = "transform 0.3s ease";
        stargateButton.style.transform = "scale(1.1)";
        setTimeout(() => {
          stargateButton.style.transform = "scale(1)";
        }, 300);
      }

      typeBinary();
    }
  }

  // 3. Historical Data System (from atlasHistoricalScript.js)
  function initHistoricalData() {
    const coordinates = document.body.getAttribute("data-coordinates");
    const systemIndex = document.body.getAttribute("data-system-index");

    function hasVisitedPlanet(coords, systemId, planetName) {
      let viewedPlanets = JSON.parse(localStorage.getItem("atlasHistoricalData")) || {};
      return viewedPlanets[coords] && viewedPlanets[coords][systemId] && viewedPlanets[coords][systemId].includes(planetName);
    }

    // Planet marked
    const planetIndicators = document.querySelectorAll(".seen-indicator[data-planet]");

    planetIndicators.forEach((indicator) => {
      const planetName = indicator.getAttribute("data-planet");

      if (hasVisitedPlanet(coordinates, systemIndex, planetName)) {
        indicator.style.display = "block";
        indicator.style.opacity = "1";
      }
    });

    // Mark current location as viewed
    function markLocationAsViewed(coords, systemIdx) {
      let viewedPlanets = JSON.parse(localStorage.getItem("atlasHistoricalData")) || {};

      if (!viewedPlanets[coords]) {
        viewedPlanets[coords] = {};
      }

      if (systemIdx !== null) {
        const systemKey = systemIdx.toString();

        if (!viewedPlanets[coords][systemKey]) {
          viewedPlanets[coords][systemKey] = [];
        }
      }

      localStorage.setItem("atlasHistoricalData", JSON.stringify(viewedPlanets));
    }

    if (coordinates && systemIndex) {
      markLocationAsViewed(coordinates, systemIndex);
    }
  }

  // 4. Space Travel Animation (from spaceTravel.js)
  function initSpaceTravelAnimation() {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let stars = [];
    const numStars = 800;
    let centerX, centerY;
    const maxCanvasSize = 800;

    function init() {
      resizeCanvas();
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;

      for (let i = 0; i < numStars; i++) {
        let star = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          o: Math.random(),
        };
        stars.push(star);
      }

      window.requestAnimationFrame(update);
    }

    function resizeCanvas() {
      const width = Math.min(window.innerWidth, maxCanvasSize);
      const height = Math.min(window.innerHeight, maxCanvasSize);

      canvas.width = width;
      canvas.height = height;

      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    }

    let speed = 0.5;
    let decelerate = false;

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.o = Math.random();
        }

        let k = canvas.width / star.z;
        let x = (star.x - centerX) * k + centerX;
        let y = (star.y - centerY) * k + centerY;
        let r = 2 * k;
        let o = star.o;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${o})`;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
      });

      if (!decelerate && speed < 60) {
        speed += 1;
      }

      if (decelerate && speed > 2) {
        speed -= 2;
      }

      window.requestAnimationFrame(update);
    }

    window.addEventListener("resize", resizeCanvas);
    init();

    const imgElement = document.getElementById("blob-image");
    if (imgElement) {
      const highResImageUrl = imgElement.getAttribute("data-high-res-url");
      const img = new Image();
      img.src = highResImageUrl;

      img.onload = () => {
        decelerate = true;

        imgElement.src = highResImageUrl;
        imgElement.classList.add("loaded");

        canvas.classList.add("hidden");

        setTimeout(() => {
          canvas.style.display = "none";
        }, 2500);
      };
    }
  }

  // Initialize all functionality
  initStargateAnimation();
  initHistoricalData();
  initSpaceTravelAnimation();
  
  console.log('System scripts initialized successfully!');
});