const booksURL = "https://striveschool-api.herokuapp.com/books";

const getData = function () {
  fetch(booksURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel caricamento dati");
      }
    })
    .then((books) => {
      console.log("LIBRI RICEVUTI", books);

      const container = document.getElementById("books-container");

      books.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col-12", "col-md-4", "col-lg-3", "mb-4");

        col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${book.img}" class="card-img-top" alt="${book.title}" style="height: 300px; object-fit: cover;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title h6 text-truncate">${book.title}</h5>
        <p class="card-text fw-bold text-primary">${book.price} €</p>
        <button class="btn btn-danger btn-sm mt-auto" onclick="this.closest('.col-12').remove()">Scarta</button>
      </div>
    </div>
  `;

        container.appendChild(col);
      });
    })
    .catch((error) => console.log("ERRORE", error));
};

getData();
