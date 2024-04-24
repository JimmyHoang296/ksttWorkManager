var pics = ["A"];
var emps = ["A", "B", "C", "D"];
var data = [
  [
    "I1",
    "Báo cáo XLVP Tháng 02/2024",
    "Hoàn thành",
    "Làm báo cáo định kỳ hàng tháng",
    "",
    "Báo cáo xử lý vi phạm toàn WCM định kỳ Tháng 2/2024",
    "Nguyễn Thị Thanh Huyền",
    "",
    "Hoàng Dương Dũng",
    "29/02/2024",
    "29/02/2024",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "I2",
    "Đề xuất XLKL DS CBNV không hoàn thành Huấn luyện ATVSTP Tháng 2/2024_Chuỗi Minimart MB",
    "",
    "P. Đào tạo & PTVH",
    "",
    "Đề xuất XLKL DS CBNV không hoàn thành Huấn luyện ATVSTP Tháng 2/2024_Chuỗi Minimart MB",
    "Hoàng Thị Thùy Linh",
    "",
    "Hoàng Dương Dũng",
    "28/02/2024",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "I3",
    "RE: DC HẢI PHÒNG - 6624 NHẬN THỪA ENSURE - KHÔNG CLAIM",
    "Đang xử lý",
    "DC Hải Phòng",
    "",
    "DC Hải Phòng phản ánh về trường hợp CH nhận hàng thừa sữa giá trị cao CH không thực hiện claim và xử lý vi phạm theo quy định.",
    "Hoàng Như Quỳnh",
    "",
    "Hoàng Dương Dũng",
    "26/02/2024",
    "29/02/2024",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "I4",
    "FW: Báo cáo sự vụ xác minh gian lận tiêu cực tại WM Thăng Long",
    "",
    "ANCS",
    "",
    "Trong quá trình kiểm soát NVTN thanh toán, BPAN có phát hiện NVTN Hoàng Thị Hoài Thu có dấu hiệu gian lận tiêu cực, chưa thực sự thành khẩn với số tiền đã gian lận.",
    "Bùi Thị Ngọc",
    "",
    "Hoàng Dương Dũng",
    "22/02/2024",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "I5",
    "FW: [GSKK] V/v Phát hiện gian lận tại CH WM+ HNI 79 Ngọc Đại",
    "Đang xử lý",
    "Giám sát kiểm kê",
    "",
    "Nhân viên Nguyễn Phương Nhung có các hành vi gian lận liên quan đến hủy giao dịch, tích điểm Vinid trên các HĐ của KH nhằm mục đích trục lợi cá nhân,",
    "Lê Thế Luật",
    "",
    "Hoàng Dương Dũng",
    "22/02/2024",
    "22/02/2024",
    "",
    "",
    "",
    "",
    "CHT phản hồi: Chị Nhung đã viết đơn xin nghỉ việc.\n CH đã nhận được 2,276,000đ. Nhưng CH chưa ra bill do CH đang có 2 người chưa check lại được. VẬY CH XIN GIA HẠN ĐẾN HẾT TUẦN SAU BÁO LẠI ANH CÁC VẤN ĐỀ TỒN KHO VÀ CHECK CÁC GIAO DỊCH TỪ THÁNG 12 NẾU CÓ PHÁT SINH CHỊ NHUNG SẼ BỒI HOÀN TIẾP Ạ",
  ],
  [
    "I6",
    "FW: Báo cáo sự vụ CH WM+ PTO Khu 5 Nông Trang",
    "",
    "",
    "",
    "",
    "",
    "",
    "Hoàng Dương Dũng",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "I7",
    "FW: xác minh vụ việc nhân viên chơi bài trong cửa hàng 2094 WM+ 210 Đội Cấn",
    "",
    "",
    "",
    "",
    "",
    "",
    "Hoàng Dương Dũng",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
];
var headers = [
  "id",
  "email",
  "status",
  "source",
  "sap",
  "summarize",
  "pic",
  "support",
  "hod",
  "startDate",
  "endDate",
  "group",
  "lossValue",
  "returnValue",
  "conclusion",
  "note",
];

var filterHeaders = ["email", "status", "pic", "startDate"];
var filterData = [];
var filterIndex = [];
filterIndex = filterHeaders.map((header) => headers.indexOf(header));

const URL =
  "https://script.google.com/macros/s/AKfycbw1QSzsLZZhEI6Qyi2JJ0SHf1WXGvbxogbzxTIan7l2qZWRCBoMZdCWmuvg-1EYgFgp/exec";

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.querySelector(".error-message");

var isNew = false;
var isChange = false;
// add event listener
document.getElementById("newBtn").addEventListener("click", handleNew);
document.getElementById("cancelBtn").addEventListener("click", handleCancel);
document.getElementById("saveBtn").addEventListener("click", handleSave);
document.getElementById("updateBtn").addEventListener("click", handleUpdate);
document.getElementById("deleteBtn").addEventListener("click", handleDelete);
document.getElementById("searchBtn").addEventListener("click", handleSearch);
document
  .getElementById("clearBtn")
  .addEventListener("click", handleClearSearch);
document
  .querySelector(".detailWork")
  .querySelectorAll("input")
  .forEach((input) => {
    input.addEventListener("change", () => {
      isChange = true;
      console.log(isChange);
    });
  });
document
  .querySelector(".detailWork")
  .querySelectorAll("select")
  .forEach((input) => {
    input.addEventListener("change", () => {
      isChange = true;
      console.log(isChange);
    });
  });
document
  .querySelector(".detailWork")
  .querySelectorAll("textarea")
  .forEach((input) => {
    input.addEventListener("change", () => {
      isChange = true;
      console.log(isChange);
    });
  });

// handle Login

async function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  const loginData = {
    type: "login",
    data: { username, password },
  };

  console.log(loginData);

  try {
    document.querySelector(".modal").classList.remove("hidden");
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(loginData),
    });

    const res = await response.json();

    if (res.success) {
      // Login successful (replace with your desired action)
      alert("Login successful!");
      document.querySelector(".modal").classList.add("hidden");
      console.log(res.data);
      data = res.data.cases;
      console.log(data);
      headers = data[1];
      data.splice(0, 2);
      emps = res.data.emps;

      if (res.data.user.role === "hod") {
        pics = emps;
      } else {
        pics = [res.data.user.name];
      }
      console.log(data, headers, emps, pics);
      document.querySelector(".login").classList.add("hidden");
      document.querySelector(".data").classList.remove("hidden");

      // render
      renderEmp();
      renderPic();
      renderTable();
      // You can redirect to another page here:
      // window.location.href = "success.html";
    } else {
      document.querySelector(".modal").classList.add("hidden");
      errorMessage.textContent = res.message || "Login failed";
      errorMessage.style.display = "block";
    }
  } catch (error) {
    document.querySelector(".modal").classList.add("hidden");
    console.error("Error:", error);
    errorMessage.textContent = "An error occurred. Please try again.";
    errorMessage.style.display = "block";
  }
}

loginForm.addEventListener("submit", handleLogin);

usernameInput.addEventListener("input", () => {
  errorMessage.style.display = "none";
});
passwordInput.addEventListener("input", () => {
  errorMessage.style.display = "none";
});

function renderEmp() {
  const picElement = document.getElementById("support");
  var innerList = "";
  emps.forEach((emp, index) => {
    innerList += `<option value=${index}>${emp}</option>`;
  });
  picElement.innerHTML += innerList;
}
function renderPic() {
  const picElement = document.getElementById("pic");
  var innerList = "";
  pics.forEach((emp, index) => {
    innerList += `<option value=${index}>${emp}</option>`;
  });
  picElement.innerHTML += innerList;
}

function renderTable() {
  const table = document.querySelector(".dataTable");
  table.innerHTML = "";
  var searchRow = "";
  var headerRow = "";
  var dataRows = "";
  filterHeaders.forEach((header) => {
    searchRow += `<td> <input type="text" class="searchItem" name=${header} /></td>`;
    headerRow += `<th type="text" > ${header} </th>`;
  });
  searchRow = `<tr id="searchList">${searchRow}</tr>`;
  headerRow = `<tr class = "header">${headerRow}</tr>`;

  data.forEach((row) => {
    var dataRow = "";
    filterIndex.forEach((index) => {
      dataRow += `<td>${row[index]}</td>`;
    });
    dataRows = `<tr class="data-row" id = ${row[0]}>${dataRow}</tr>` + dataRows;
  });

  table.innerHTML = `<table>${searchRow}${headerRow}${dataRows} <table/>`;

  // addEventListener
  // handle select row
  rows = document.querySelectorAll(".data-row");
  rows.forEach((row) => {
    handleSelectedRow(row);
  });
}

function renderData() {
  const table = document.querySelector(".dataTable");
  var rows = table.querySelectorAll(".data-row");
  var header = table.querySelector(".header");

  rows.forEach((row) => row.remove());

  filterData.forEach((row) => {
    var dataRow = "";
    filterIndex.forEach((index) => {
      dataRow += `<td>${row[index]}</td>`;
    });

    var newRow = document.createElement("tr");
    newRow.classList.add("data-row");
    newRow.innerHTML = dataRow;
    newRow.id = row[0];
    handleSelectedRow(newRow);
    header.parentNode.insertBefore(newRow, header.nextSibling);
  });


}
function handleSelectedRow(selectedRow) {
  selectedRow.addEventListener("click", (e) => {
    if (isNew) return;
    if (isChange) {
      if (
        !confirm(
          "Bạn đang sửa báo cáo hiện tại. Bạn có muốn chuyển sang báo cáo khác không?"
        )
      )
        return;
    }
    var id = selectedRow.id;
    const detail = document.querySelector(".detailWork");

    // display selected row
    var rowData = data.find((row) => row[0] === id);
    headers.forEach((header, index) => {
      if (header === "status") {
        if (rowData[index] === "Đang xử lý") {
          detail.querySelector("#" + header).value = 0;
        } else {
          detail.querySelector("#" + header).value = 1;
        }
      } else if (header === "pic") {
        console.log(pics.indexOf(rowData[index]));
        detail.querySelector("#" + header).value = pics.indexOf(rowData[index]);
      } else if (header === "support") {
        detail.querySelector("#" + header).value = emps.indexOf(rowData[index]);
      } else if (header === "startDate" || header === "endDate") {
        console.log(header);
        detail.querySelector("#" + header).value = convertDateFormat(
          rowData[index]
        );
      } else {
        detail.querySelector("#" + header).value = rowData[index];
      }
    });
    // highlight selected row
    var rows = document.querySelectorAll(".data-row");
    rows.forEach((row) => row.classList.remove("selected"));
    selectedRow.classList.add("selected");
    isChange = false;
  });
}

function handleSearch() {
  filterData = [...data];
  // var searchElement = document.getElementById("abc");
  var searchItems = document.querySelectorAll(".searchItem");
  searchItems.forEach((searchItem) => {
    if (searchItem.value) {
      var searchValue = searchItem.value;
      var searchHeader = searchItem.name;
      var searchIndex = headers.findIndex((header) => header === searchHeader);
      filterData = filterData.filter((data) =>
        data[searchIndex].toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  });
  renderData();
}

function handleClearSearch() {
  filterData = [...data];
  // var searchElement = document.getElementById("abc");
  var searchItems = document.querySelectorAll(".searchItem");
  searchItems.forEach((searchItem) => {
    searchItem.value = "";
  });
  renderData();
}

// handle new
function handleNew() {
  headers.forEach((header) => {
    console.log(header);
    var el = document.getElementById(header);
    el.value = "";
    if (header === "startDate") {
      el.value = getToday();
    }
    if (header === "pic" && pics.length === 1) {
      el.value = 0;
    }
    if(header ==="status"){
      el.value = 0
    }
  });

  isNew = true;
  document.querySelector(".groupBtn_new").classList.remove("hidden");
  document.querySelector(".groupBtn_update").classList.add("hidden");
}

// handle cancel
function handleCancel() {
  isNew = false;
  document.querySelector(".groupBtn_new").classList.add("hidden");
  document.querySelector(".groupBtn_update").classList.remove("hidden");
}
// handle save new
async function handleSave() {
  var dataItem = [];
  headers.forEach((header) => {
    console.log(header);
    var el = document.getElementById(header);
    if (header === "pic") {
      dataItem.push(pics[el.value]);
    } else if (header === "startDate" || header === "endDate") {
      dataItem.push(convertToDateString(el.value));
    } else if (header === "suppport") {
      dataItem.push(emps[el.value]);
    } else if (header === "status") {
      if (el.value === "0") {
        dataItem.push("Đang xử lý");
      } else {
        dataItem.push("Hoàn thành");
      }
    } else {
      dataItem.push(el.value);
    }
  });

  // update to dtbase
  const submitData = {
    type: "new",
    data: dataItem,
  };

  const response = await sendRequest(submitData);
  console.log(submitData);
  if (response.success) {
    // update to local
    dataItem[0] = response.data;
    data.push(dataItem);
    handleSearch();
    renderData();

    isNew = false;
    isChange = false
    document.querySelector(".groupBtn_new").classList.add("hidden");
    document.querySelector(".groupBtn_update").classList.remove("hidden");
  }
}

function handleUpdate() {
  if (!isChange) {
    alert("Chưa có thông tin nào thay đổi");
    return;
  }
  var dataItem = [];
  headers.forEach((header) => {
    console.log(header);
    var el = document.getElementById(header);
    if (header === "pic") {
      dataItem.push(pics[el.value]);
    } else if (header === "startDate" || header === "endDate") {
      dataItem.push(convertToDateString(el.value));
    } else if (header === "suppport") {
      dataItem.push(emps[el.value]);
    } else if (header === "status") {
      if (el.value === "0") {
        dataItem.push("Đang xử lý");
      } else {
        dataItem.push("Hoàn thành");
      }
    } else {
      dataItem.push(el.value);
    }
  });
  if (dataItem[0] === "") {
    return;
  }
  // update to dtbase
  const submitData = {
    type: "update",
    data: dataItem,
  };
  console.log(submitData);
  const res = sendRequest(submitData);
  console.log(res);
  // update to local data
  const index = data.map((val) => val[0]).indexOf(dataItem[0]);
  data[index] = dataItem;
  handleSearch();
  renderData();

  isChange = false;
}

function handleDelete() {
  if (confirm("Bạn muốn xóa sự vụ này")) {
    const id = document.querySelector("#id").value;
    // delete in dtbase
    const submitData = {
      type: "delete",
      data: id,
    };
    console.log(submitData);
    sendRequest(submitData);
    // delete in local
    const index = data.map((val) => val[0]).indexOf(id);
    data.splice(index, 1);

    handleSearch();
    renderData();
  } else {
    return;
  }

  isChange = false;
}

// asset
function getToday() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
  const day = String(today.getDate()).padStart(2, "0"); // Add leading zero for single-digit days

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

async function sendRequest(submitData) {
  document.querySelector(".modal").classList.remove("hidden");
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(submitData), // body data type must match "Content-Type" header
    });
    return await response.json(); // Assuming response is JSON
  } catch (error) {
    console.error("Error sending request:", error);
    document.querySelector(".modal").classList.add("hidden");
    return { success: false, error: error.message }; // Return error object
  } finally {
    document.querySelector(".modal").classList.add("hidden"); // Hide modal even on errors
  }
}

function convertDateFormat(dateString) {
  // Split the date string into day, month, and year components
  const [day, month, year] = dateString.split("/");

  // Create a new Date object with the re-arranged components
  const newDate = new Date(year, month - 1, day);

  // Check if the constructed date is valid (avoiding February 29th issues)
  if (
    newDate.getDate() === parseInt(day, 10) &&
    newDate.getMonth() === month - 1
  ) {
    // If valid, format the date object in yyyy-mm-dd
    return newDate.toISOString().slice(0, 10);
  } else {
    // If invalid, return null
    return null;
  }
}

function convertToDateString(dateValue) {
  if (dateValue === "") return "";
  // console.log (typeof dateValue)
  // const val = "2024-12-20"
  //  const year = val.split('-')(0)
  //  const month = val.split('-')(1)
  //  const date = val.split('-')(2)
  // const month = String(dateValue.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
  // const day = String(dateValue.getDate()).padStart(2, "0"); // Add leading zero for single-digit days

  const [year, month, day] = dateValue.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
