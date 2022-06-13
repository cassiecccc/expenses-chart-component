import datas from "./data.json";
const barTemplate = document.querySelector("#bar-template");
const graph = document.querySelector("[data-graph]");

datas.forEach(renderBarItem);

function renderBarItem(data) {
  const barTemplateItem = barTemplate.content.cloneNode(true);
  const barItem = barTemplateItem.querySelector("[data-wrapper]");
  const amount = barItem.querySelector("[data-amount]");
  amount.innerText = `$${data.amount}`;
  const bar = barItem.querySelector("[data-bar]");
  bar.dataset.bar = data.amount;
  const day = barItem.querySelector("[data-day]");
  day.innerText = data.day;
  graph.appendChild(barItem);
}

const bars = document.querySelectorAll("[data-bar]");

bars.forEach((bar) => {
  const newArray = datas.map((data) => data.amount);
  const maxAmount = Math.max(...newArray);
  if (bar.dataset.bar == maxAmount) {
    bar.style.height = "150px";
    bar.style.backgroundColor = "hsl(186, 34%, 60%)";
  } else {
    bar.style.height = `${(bar.dataset.bar / maxAmount) * 150}px`;
    bar.style.backgroundColor = "hsl(10, 79%, 65%)";
  }
});

//bar-hover-effect
bars.forEach((bar) =>
  bar.addEventListener("mouseover", () => {
    bars.forEach((bar) => {
      bar.classList.remove("hover");
    });
    bar.classList.add("hover");
  })
);

bars.forEach((bar) =>
  bar.addEventListener("mouseout", () => {
    bars.forEach((bar) => {
      bar.classList.remove("hover");
    });
    bar.classList.remove("hover");
  })
);

const barWrapper = document.querySelectorAll("[data-wrapper]");
barWrapper.forEach((wrapper) =>
  wrapper.addEventListener("click", () => {
    const tag = wrapper.querySelector("[data-tag]");
    tag.classList.toggle("hidden");
    const bar = wrapper.querySelector("[data-bar]");
    // bars.forEach((barTwo) => {
    //   barTwo.classList.remove("active");
    // });
    if (!bar.previousElementSibling.classList.contains("hidden")) {
      bar.classList.add("active");
    } else {
      bar.classList.remove("active");
    }
  })
);
