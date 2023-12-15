const chart = document.getElementById('myChart');
const chartData = {
    labels: ["correct answers", "wrong answers", "not attemmpted"],
    data: [10, 20, 30],
    colors: ["green", "red", "yellow"]

};


new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: chartData.labels,
        datasets: [{
            label: "",
            data: chartData.data,
            borderColor: "#3f4653",
            backgroundColor: chartData.colors,
            borderWidth: 1,
        }]
    },
    options: {
        borderWidth: 20,
        borderRadius: 2,
        hoverBorderWidth: 4,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});


function displayEndMsg() {
    let correctAns = document.getElementById("crt-cnt").innerHTML;
    let wrongAns = document.getElementById("wrng-cnt").innerHTML;
    let unAns = document.getElementById("unans-cnt").innerHTML;

    let endMsg = document.querySelector(".end-msg");

    if (correctAns > wrongAns + unAns) {
        endMsg.innerHTML = "--- " + "You performed well !!" + " ---";
    }
    else {
        endMsg.innerHTML = "--- " + "Better luck next time" + " ---";
    }
}
displayEndMsg();