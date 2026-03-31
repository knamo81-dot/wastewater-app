let data = JSON.parse(localStorage.getItem("data") || "[]");

function save() {
  const date = document.getElementById("date").value;
  const water = document.getElementById("water").value;
  const height = document.getElementById("height").value;
  const etc = document.getElementById("etc").value;

  data.push({ date, water, height, etc });

  localStorage.setItem("data", JSON.stringify(data));
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(d => {
    const li = document.createElement("li");
    li.innerText = `${d.date} | ${d.water} | ${d.height} | ${d.etc}`;
    list.appendChild(li);
  });
}

render();
