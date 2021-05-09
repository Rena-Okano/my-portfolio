//問題と解答
qa = new Array();
qa[0] = ["私の学校は", "慶應", "早稲田", "立教", 1];
qa[1] = [
  "私の所属サークルは",
  "バドミントン",
  "ポップスオーケストラ",
  "教育ボランティア",
  2,
];
qa[2] = ["私の飼い犬は", "トイプードル", "ダックス", "チワワ", 1];
qa[3] = ["私の大学の学部は", "経済", "法", "理工", 2];
qa[4] = ["私の担当楽器は", "フルート", "サックス", "ヴァイオリン", 3];
qa[5] = ["私の飼い犬の色は", "白", "黒", "茶", 3];

q_sel = 3; //選択肢の数

//初期設定
setReady();

function setReady() {
  count = 0; //問題番号
  answers = new Array(); //解答記録
  //最初の問題
  quiz();
}

//問題表示
function quiz() {
  //問題
  document.getElementById("text_q").innerHTML =
    count + 1 + "問目：" + qa[count][0];

  //選択肢
  s = "";
  for (n = 1; n <= q_sel; n++) {
    s +=
      "[<a href='javascript:answer(" +
      n +
      ")'>" +
      n +
      ":" +
      qa[count][n] +
      "</a>]";
  }
  document.getElementById("text_s").innerHTML = s;
}

//解答表示
function answer(num) {
  var s;
  s = count + 1 + "問目：";
  //答え合わせ
  if (num == qa[count][q_sel + 1]) {
    //正解
    s += "〇" + qa[count][num];
    answers[count] = "〇";
  } else {
    s += "×" + qa[count][num];
    answers[count] = "×";
  }
  document.getElementById("text_a").innerHTML = s;

  //次を表示
  count++;
  if (count < qa.length) {
    quiz();
  } else {
    //終了
    s = "<center><table border='2'><caption>結果</caption></center>";

    //1行目
    s += "<tr><th>question</th>";
    for (n = 0; n < qa.length; n++) {
      s += "<th>" + (n + 1) + "</th>";
    }
    s += "</tr>";
    //2行目
    s += "<tr><th>結果</th>";
    for (n = 0; n < qa.length; n++) {
      s += "<td>" + answers[n] + "</td>";
    }
    s += "</tr>";
    s += "</table>";

    //document.getElementById("text_q").innerHTML = s;
    //次の行動
    s += "[<a href='javascript:setReady()'>最初から</a>]";
    //s+="[<a href=''>次へ進む</a>]";

    document.getElementById("text_s").innerHTML = s;
  }
}
