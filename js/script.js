let data = [
  {
    brand: "hyundai",
    model: "i10",
    year: 2016,
    plate: "rt-gf-15",
  },
  {
    brand: "dacia",
    model: "jogger",
    year: 2018,
    plate: "15-gh-yu",
  },
];

const createB = document.querySelector("#createB");
const createForm = document.querySelector("#createForm");
const myTable = document.querySelector("#myTable");
const idCarro = 0;

let homeB = document.querySelector("#homeB");
homeB.addEventListener("click", list());

/* CREATE */

createB.addEventListener("click", () => {
  let newCar = {
    brand: $("#brand").val(),
    model: $("#model").val(),
    year: $("#year").val(),
    plate: $("#plate").val(),
  };

  data.push(newCar);
  cleanForm()

  $("#create_modal").modal("hide");

  alert("Saved Successfully");

  list();
  
});

/* ******************************* */


function cleanForm(){
    $("#brand").val("")
    $("#model").val("")
    $("#year").val("")
    $("#plate").val("")
}


/* LIST */
document.addEventListener("DOMContentLoaded", list());

function list() {
  $("#myTable").html("");

  data.forEach((element, index) => {
    myTable.insertAdjacentHTML(
      "beforeend",
      `<tr>
            <td>${element.brand}</td>
            <td>${element.model}</td>
            <td>${element.year}</td>
            <td>${element.plate}</td>
            <td>
                <button type="button" class="btn btn-warning" onclick="carEdit(${index})">
                Edit
                </button>
    
                <button class="btn btn-danger" onclick="deleteCar(${index})">Delete</button>
            </td>
        </tr>`
    );
  });
}

let getB = document.querySelector("#getB");

getB.addEventListener("click", () => {
  let select = $("#selecG").val();

  let searchInput = $("#searchG").val();

  let carSearch;

  let carIndex;

  console.log(select);
  console.log(searchInput);

  switch (select) {
    case "brand":
      data.forEach((car, index) => {
        if (car.brand == searchInput) {
          carSearch = car;
          carIndex = index;
        }
      });
      break;
    case "model":
      data.forEach((car, index) => {
        if (car.model == searchInput) {
          carSearch = car;
          carIndex = index;
        }
      });
      break;
    case "year":
      data.forEach((car, index) => {
        if (car.year == searchInput) {
          carSearch = car;
          carIndex = index;
        }
      });
      break;
    case "plate":
      data.forEach((car, index) => {
        if (car.plate == searchInput) {
          carSearch = car;
          carIndex = index;
        }
      });
      break;

    default:
      break;
  }

  if (carSearch) {
    $("#myTable").html("");
    $("#get_modal").modal("hide");

    myTable.insertAdjacentHTML(
      "beforeend",
      `<tr>
            <td>${carSearch.brand}</td>
            <td>${carSearch.model}</td>
            <td>${carSearch.year}</td>
            <td>${carSearch.plate}</td>
            <td>
                <button type="button" class="btn btn-warning" onclick="carEdit(${carIndex})">
                Edit
                </button>  

                <button class="btn btn-danger" onclick="deleteCar(${carIndex})">Delete</button>
            </td>
        </tr>`
    );
  } else {
    alert("There's no results for this search");
  }
});

function carEdit(index) {
  $("#edit_modal").modal("show");

  $("#brandE").val(data[index].brand);
  $("#modelE").val(data[index].model);
  $("#yearE").val(data[index].year);
  $("#plateE").val(data[index].plate);
  $("#hIndex").val(index); //guardei o index do objetoem um hidden input para guardá-lo e poder passá-lo para a próxima função
}

let editB = document.querySelector("#editB");

editB.addEventListener("click", () => {
  let index = $("#hIndex").val();
  console.log(index);

  data[index] = {
    brand: $("#brandE").val(),
    model: $("#modelE").val(),
    year: $("#yearE").val(),
    plate: $("#plateE").val(),
  };

  $("#edit_modal").modal("hide");

  alert("Edited Successfully.");

  list();
});

function deleteCar(index) {
  let _confirm = confirm("Are you sure yo want to delete this car?");
  if (_confirm) {
    data.splice(index, 1);
  }

  list();
  alert("Register Deleted");
}
