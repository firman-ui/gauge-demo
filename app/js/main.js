$(document).ready(function(){
  // Gauge click
  //-----------------

  // Gauge value Zero
  $("#zero").click(function(){
    $("#sector-value").text("0");
    // chart summary
    $("#joint").text("99.00%");
    $("#log").text("0.01");
    $("#cases").text("11.313");
    $("#total").text("105,787,554.942");
    $("#mean").text("3,305,861.092");
    // chart 1
    $("#chart1-bar-one").css("width", "100.00%");
    $("#chart1-val-one").text("100%");
    $("#chart1-bar-two").css("width", "0.00%");
    $("#chart1-val-two").text("0.00%");
    // chart 2
    $("#chart2-bar-one").css("width", "98.13%");
    $("#chart2-val-one").text("98.13%");
    $("#chart2-bar-two").css("width", "1.45%");
    $("#chart2-val-two").text("1.45%");
    $("#chart2-bar-three").css("width", "0.42%");
    $("#chart2-val-three").text("0.42%");
    // chart 3
    $("#chart3-bar-one").css("width", "92.77%");
    $("#chart3-val-one").text("92.77%");
    $("#chart3-bar-two").css("width", "4.02%");
    $("#chart3-val-two").text("4.02%");
    $("#chart3-bar-three").css("width", "1.57%");
    $("#chart3-val-three").text("1.57%");
    $("#chart3-bar-four").css("width", "0.93%");
    $("#chart3-val-four").text("0.93%");
    $("#chart3-bar-five").css("width", "0.71%");
    $("#chart3-val-five").text("0.71%");
    // chart 4
    $("#chart4-bar-one").css("width", "99.91%");
    $("#chart4-val-one").text("99.91%");
    $("#chart4-bar-two").css("width", "0.09%");
    $("#chart4-val-two").text("0.09%");
    $("#chart4-bar-three").css("width", "0.00%");
    $("#chart4-val-three").text("0.00%");
    $("#chart4-bar-four").css("width", "0.00%");
    $("#chart4-val-four").text("0.00%");
    $("#chart4-bar-five").css("width", "0.00%");
    $("#chart4-val-five").text("0.00%");
    // chart 5
    $("#chart5-bar-one").css("width", "67.19%");
    $("#chart5-val-one").text("67.19%");
    $("#chart5-bar-two").css("width", "27.84%");
    $("#chart5-val-two").text("27.84%");
    $("#chart5-bar-three").css("width", "3.13%");
    $("#chart5-val-three").text("3.13%");
    $("#chart5-bar-four").css("width", "0.98%");
    $("#chart5-val-four").text("0.98%");
    $("#chart5-bar-five").css("width", "0.86%");
    $("#chart5-val-five").text("0.86%");
    // chart 6
    $("#chart6-bar-one").css("width", "99.47%");
    $("#chart6-val-one").text("99.47%");
    $("#chart6-bar-two").css("width", "0.47%");
    $("#chart6-val-two").text("0.47%");
    $("#chart6-bar-three").css("width", "0.04%");
    $("#chart6-val-three").text("0.04%");
    $("#chart6-bar-four").css("width", "0.02%");
    $("#chart6-val-four").text("0.02%");
    $("#chart6-bar-five").css("width", "0.01%");
    $("#chart6-val-five").text("0.01%");
    // chart 7
    $("#chart7-bar-one").css("width", "99.76%");
    $("#chart7-val-one").text("99.76%");
    $("#chart7-bar-two").css("width", "0.24%");
    $("#chart7-val-two").text("0.24%");
    // chart 8
    $("#chart8-bar-one").css("width", "23.84%");
    $("#chart8-val-one").text("23.84%");
    $("#chart8-bar-two").css("width", "76.16%");
    $("#chart8-val-two").text("76.16%");
  });

  // Gauge value Fifty
  $("#fifty").click(function(){
    $("#sector-value").text("0.5");
    // chart summary
    $("#joint").text("2.00%");
    $("#log").text("5.65");
    $("#cases").text("228");
    $("#total").text("120,421,631.024");
    $("#mean").text("3,763,175.970");
    // chart 1
    $("#chart1-bar-one").css("width", "50.00%");
    $("#chart1-val-one").text("50.00%");
    $("#chart1-bar-two").css("width", "50.00%");
    $("#chart1-val-two").text("50.00%");
    // chart 2
    $("#chart2-bar-one").css("width", "60.91%");
    $("#chart2-val-one").text("60.91%");
    $("#chart2-bar-two").css("width", "9.50%");
    $("#chart2-val-two").text("9.50%");
    $("#chart2-bar-three").css("width", "29.60%");
    $("#chart2-val-three").text("29.60%");
    // chart 3
    $("#chart3-bar-one").css("width", "52.53%");
    $("#chart3-val-one").text("52.53%");
    $("#chart3-bar-two").css("width", "11.22%");
    $("#chart3-val-two").text("11.22%");
    $("#chart3-bar-three").css("width", "11.31%");
    $("#chart3-val-three").text("11.31%");
    $("#chart3-bar-four").css("width", "7.48%");
    $("#chart3-val-four").text("7.48%");
    $("#chart3-bar-five").css("width", "17.46%");
    $("#chart3-val-five").text("17.46%");
    // chart 4
    $("#chart4-bar-one").css("width", "79.78%");
    $("#chart4-val-one").text("79.78%");
    $("#chart4-bar-two").css("width", "12.32%");
    $("#chart4-val-two").text("12.32%");
    $("#chart4-bar-three").css("width", "2.63%");
    $("#chart4-val-three").text("2.63%");
    $("#chart4-bar-four").css("width", "2.19%");
    $("#chart4-val-four").text("2.19%");
    $("#chart4-bar-five").css("width", "3.07%");
    $("#chart4-val-five").text("3.07%");
    // chart 5
    $("#chart5-bar-one").css("width", "33.59%");
    $("#chart5-val-one").text("33.59%");
    $("#chart5-bar-two").css("width", "41.12%");
    $("#chart5-val-two").text("41.12%");
    $("#chart5-bar-three").css("width", "10.78%");
    $("#chart5-val-three").text("10.78%");
    $("#chart5-bar-four").css("width", "6.19%");
    $("#chart5-val-four").text("6.19%");
    $("#chart5-bar-five").css("width", "8.32%");
    $("#chart5-val-five").text("8.32%");
    // chart 6
    $("#chart6-bar-one").css("width", "92.28%");
    $("#chart6-val-one").text("92.28%");
    $("#chart6-bar-two").css("width", "6.37%");
    $("#chart6-val-two").text("6.37%");
    $("#chart6-bar-three").css("width", "0.02%");
    $("#chart6-val-three").text("0.02%");
    $("#chart6-bar-four").css("width", "0.89%");
    $("#chart6-val-four").text("0.89%");
    $("#chart6-bar-five").css("width", "0.44%");
    $("#chart6-val-five").text("0.44%");
    // chart 7
    $("#chart7-bar-one").css("width", "93.74%");
    $("#chart7-val-one").text("93.74%");
    $("#chart7-bar-two").css("width", "6.26%");
    $("#chart7-val-two").text("6.26%");
    // chart 8
    $("#chart8-bar-one").css("width", "22.45%");
    $("#chart8-val-one").text("22.45%");
    $("#chart8-bar-two").css("width", "77.55%");
    $("#chart8-val-two").text("77.55%");
  });

  // Gauge value Seventy
  $("#seventy").click(function(){
    $("#sector-value").text("0.75");
    // chart summary
    $("#joint").text("1.33%");
    $("#log").text("6.23");
    $("#cases").text("152");
    $("#total").text("127,738,669.065");
    $("#mean").text("3,991,833.408");
    // chart 1
    $("#chart1-bar-one").css("width", "25.00%");
    $("#chart1-val-one").text("25.00%");
    $("#chart1-bar-two").css("width", "75.00%");
    $("#chart1-val-two").text("75.00%");
    // chart 2
    $("#chart2-bar-one").css("width", "42.29%");
    $("#chart2-val-one").text("42.29%");
    $("#chart2-bar-two").css("width", "13.52%");
    $("#chart2-val-two").text("13.52%");
    $("#chart2-bar-three").css("width", "44.19%");
    $("#chart2-val-three").text("44.19%");
    // chart 3
    $("#chart3-bar-one").css("width", "32.40%");
    $("#chart3-val-one").text("32.40%");
    $("#chart3-bar-two").css("width", "14.82%");
    $("#chart3-val-two").text("14.82%");
    $("#chart3-bar-three").css("width", "16.18%");
    $("#chart3-val-three").text("16.18%");
    $("#chart3-bar-four").css("width", "10.76%");
    $("#chart3-val-four").text("10.76%");
    $("#chart3-bar-five").css("width", "25.83%");
    $("#chart3-val-five").text("25.83%");
    // chart 4
    $("#chart4-bar-one").css("width", "69.71%");
    $("#chart4-val-one").text("69.71%");
    $("#chart4-bar-two").css("width", "18.44%");
    $("#chart4-val-two").text("18.44%");
    $("#chart4-bar-three").css("width", "3.95%");
    $("#chart4-val-three").text("3.95%");
    $("#chart4-bar-four").css("width", "3.29%");
    $("#chart4-val-four").text("3.29%");
    $("#chart4-bar-five").css("width", "4.61%");
    $("#chart4-val-five").text("4.61%");
    // chart 5
    $("#chart5-bar-one").css("width", "16.80%");
    $("#chart5-val-one").text("16.80%");
    $("#chart5-bar-two").css("width", "47.75%");
    $("#chart5-val-two").text("47.75%");
    $("#chart5-bar-three").css("width", "14.60%");
    $("#chart5-val-three").text("14.60%");
    $("#chart5-bar-four").css("width", "8.80%");
    $("#chart5-val-four").text("8.80%");
    $("#chart5-bar-five").css("width", "12.06%");
    $("#chart5-val-five").text("12.06%");
    // chart 6
    $("#chart6-bar-one").css("width", "88.68%");
    $("#chart6-val-one").text("88.68%");
    $("#chart6-bar-two").css("width", "9.33%");
    $("#chart6-val-two").text("9.33%");
    $("#chart6-bar-three").css("width", "0.01%");
    $("#chart6-val-three").text("0.01%");
    $("#chart6-bar-four").css("width", "1.32%");
    $("#chart6-val-four").text("1.32%");
    $("#chart6-bar-five").css("width", "0.66%");
    $("#chart6-val-five").text("0.66%");
    // chart 7
    $("#chart7-bar-one").css("width", "90.73%");
    $("#chart7-val-one").text("90.73%");
    $("#chart7-bar-two").css("width", "9.27%");
    $("#chart7-val-two").text("9.27%");
    // chart 8
    $("#chart8-bar-one").css("width", "21.75%");
    $("#chart8-val-one").text("21.75%");
    $("#chart8-bar-two").css("width", "78.25%");
    $("#chart8-val-two").text("78.25%");
  });

  // Gauge value Hundred
  $("#hundred").click(function(){
    $("#sector-value").text("1");
    // chart summary
    $("#joint").text("1.00%");
    $("#log").text("6.65");
    $("#cases").text("114");
    $("#total").text("135,055,707.106");
    $("#mean").text("4,220,490.847");
    // chart 1
    $("#chart1-bar-one").css("width", "0.00%");
    $("#chart1-val-one").text("0.00%");
    $("#chart1-bar-two").css("width", "100.00%");
    $("#chart1-val-two").text("100.00%");
    // chart 2
    $("#chart2-bar-one").css("width", "23.68%");
    $("#chart2-val-one").text("23.68%");
    $("#chart2-bar-two").css("width", "17.54%");
    $("#chart2-val-two").text("17.54%");
    $("#chart2-bar-three").css("width", "58.77%");
    $("#chart2-val-three").text("58.77%");
    // chart 3
    $("#chart3-bar-one").css("width", "12.28%");
    $("#chart3-val-one").text("12.28%");
    $("#chart3-bar-two").css("width", "18.42%");
    $("#chart3-val-two").text("18.42%");
    $("#chart3-bar-three").css("width", "21.05%");
    $("#chart3-val-three").text("21.05%");
    $("#chart3-bar-four").css("width", "14.04%");
    $("#chart3-val-four").text("14.04%");
    $("#chart3-bar-five").css("width", "34.21%");
    $("#chart3-val-five").text("34.21%");
    // chart 4
    $("#chart4-bar-one").css("width", "59.65%");
    $("#chart4-val-one").text("59.65%");
    $("#chart4-bar-two").css("width", "24.56%");
    $("#chart4-val-two").text("24.56%");
    $("#chart4-bar-three").css("width", "5.26%");
    $("#chart4-val-three").text("5.26%");
    $("#chart4-bar-four").css("width", "4.39%");
    $("#chart4-val-four").text("4.39%");
    $("#chart4-bar-five").css("width", "6.14%");
    $("#chart4-val-five").text("6.14%");
    // chart 5
    $("#chart5-bar-one").css("width", "0.00%");
    $("#chart5-val-one").text("0.00%");
    $("#chart5-bar-two").css("width", "54.39%");
    $("#chart5-val-two").text("54.39%");
    $("#chart5-bar-three").css("width", "18.42%");
    $("#chart5-val-three").text("18.42%");
    $("#chart5-bar-four").css("width", "11.40%");
    $("#chart5-val-four").text("11.40%");
    $("#chart5-bar-five").css("width", "15.79%");
    $("#chart5-val-five").text("15.79%");
    // chart 6
    $("#chart6-bar-one").css("width", "85.05%");
    $("#chart6-val-one").text("85.05%");
    $("#chart6-bar-two").css("width", "12.28%");
    $("#chart6-val-two").text("12.28%");
    $("#chart6-bar-three").css("width", "0.00%");
    $("#chart6-val-three").text("0.00%");
    $("#chart6-bar-four").css("width", "1.75%");
    $("#chart6-val-four").text("1.75%");
    $("#chart6-bar-five").css("width", "0.88%");
    $("#chart6-val-five").text("0.88%");
    // chart 7
    $("#chart7-bar-one").css("width", "87.72%");
    $("#chart7-val-one").text("87.72%");
    $("#chart7-bar-two").css("width", "12.28%");
    $("#chart7-val-two").text("12.28%");
    // chart 8
    $("#chart8-bar-one").css("width", "21.05%");
    $("#chart8-val-one").text("21.05%");
    $("#chart8-bar-two").css("width", "78.95%");
    $("#chart8-val-two").text("78.95%");
  });
});
