const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  login(e);
});

function login(e) {
  e.preventDefault();
  const req = {
    id: id.value,
    pw: pw.value,
  };
  fetch(`http://localhost:8080/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        location.href = "/"; //페이지 이동 (react의 navigate와 비슷)
      } else {
        alert(data.msg);
      }
    })
    .catch((error) => console.error(new Error("로그인 중 에러 발생"))); //console창에 에러 띄우기
}
