// function revealSurprise() {
//   document.getElementById("surprise").classList.remove("hidden");

//   // Confetti animation
//   const duration = 6 * 1000;
//   const end = Date.now() + duration;

//   (function frame() {
//     confetti({
//       particleCount: 6,
//       angle: 60,
//       spread: 70,
//       origin: { x: 0 },
//     });
//     confetti({
//       particleCount: 6,
//       angle: 120,
//       spread: 70,
//       origin: { x: 1 },
//     });

//     if (Date.now() < end) {
//       requestAnimationFrame(frame);
//     }
//   })();
// }

// function showPlan() {
//   document.getElementById("trip-plan").classList.remove("hidden");
// }

// function revealSurprise() {
//   document.getElementById("card2").classList.remove("hidden");

//   const duration = 3 * 1000;
//   const end = Date.now() + duration;

//   (function frame() {
//     confetti({
//       particleCount: 6,
//       angle: 60,
//       spread: 70,
//       origin: { x: 0 },
//     });
//     confetti({
//       particleCount: 6,
//       angle: 120,
//       spread: 70,
//       origin: { x: 1 },
//     });

//     if (Date.now() < end) {
//       requestAnimationFrame(frame);
//     }
//   })();
// }

// function showPlan() {
//   document.getElementById("trip-plan").classList.remove("hidden");
// }

function revealSurprise() {
  document.getElementById("card1").classList.add("hidden");
  document.getElementById("card2").classList.remove("hidden");

  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
function showPlan() {
  document.getElementById("card2").classList.add("hidden");
  document.getElementById("trip-plan").classList.remove("hidden");
}

function startOver() {
  location.reload();
}

function revealImage(imageId, buttonId) {
  const img = document.getElementById(imageId);
  const btn = document.getElementById(buttonId);
  img.classList.remove("blurred");
  btn.style.display = "none";
}
