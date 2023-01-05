const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  join(e);
});

function join(e) {
  e.preventDefault();
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
    confirmPw: confirmPw.value,
  };
  fetch(`http://localhost:8080/join`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        location.href = "/login"; //페이지 이동 (react의 navigate와 비슷)
      } else {
        alert(data.msg);
      }
    })
    .catch((error) => console.error(new Error("로그인 중 에러 발생"))); //console창에 에러 띄우기
}
