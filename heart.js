window.addEventListener("load", () => {
    const heart = document.createElement("button");
    heart.classList.add("heart");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-heart", "heart-icon");
    heart.append(icon);

    heart.addEventListener("click", () => {
        icon.classList.toggle("active");

        if (icon.classList.contains("active")) {
            for (let i = 0; i < 4; i++) {
                const heart_sub = document.createElement("span");
                heart_sub.innerHTML = `<i class="fa-solid fa-heart" style="color:rgb(89, 157, 208);"></i>`;
                heart_sub.classList.add("heart-sub");

                heart_sub.style.left = `${Math.random() * 50 }px`;
                heart_sub.style.top = `${Math.random() * 50}px`;

                heart_sub.style.animationDelay = `${i * 0.1}s`;

                heart.appendChild(heart_sub);
            }
        }
    });

    document.body.append(heart);
});
