/**
 * const,let　変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// consth変数は上書き不可能
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "takumi",
//   age: 27
// };
// // console.log(val4);

// val4.name = "akiba";
// val4.address = "Nagano";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "卓見";
// const age = 27;
// // 「私の名前はtakumiです。年齢は27歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (s) => {
//   return s;
// };
// console.log(func2("func2です"));

// // 処理が1行の場合returnは省略できる
// const func4 = (str) => str;
// console.log(func4("func4です"));

// // 2つの引数を計算
// const func5 = (num1, num2) => num1 + num2;
// console.log(func5(10, 20));

/**
 * 分割代入
 */

/**
 * デフォルト値、引数など
 */
const sayHello = (name) => {
  if (name === "takumi") {
    return console.log(`こんにちは!${name}さん!`);
  } else {
    return console.log("error");
  }
};
sayHello("akiba");
const sayHello1 = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello1("");
