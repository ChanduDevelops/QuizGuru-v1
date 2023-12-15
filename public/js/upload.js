var quizDataForm = document.querySelector("form");

quizDataForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let category = document.getElementById("category").value;
    let level = document.getElementById("level").value;
    let qsn = document.getElementById("qsn").value;
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let ans = document.getElementById("ans").value;

    if (category !== "select" &&
        level !== "select" &&
        qsn !== "" &&
        a !== "" &&
        b !== "" &&
        c !== "" &&
        d !== "" &&
        ans !== "select") {
        let currentUrl = "http://localhost:2020/admin"
        fetch(currentUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category: category,
                level: level,
                qsn: qsn,
                a: a,
                b: b,
                c: c,
                d: d,
                ans: ans
            }),
        }).then((response) => {
            if (response.ok) {
                notify("Successfully uploaded", "green")
            }
            else if (response.status === 409) {
                notify("Data already exist in the server", "orange")
            }
            else {
                notify('Error submitting form', "red")
            }
        }).catch((err) => {
            notify("Error submitting form / network error", "red")
        })

    }
    else {
        notify("Must enter all fields", "orange")
    }
})