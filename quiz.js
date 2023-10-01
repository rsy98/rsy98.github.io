// quiz.js
// 问题和答案列表
var questions = [
	{
		question: "1. 法国的首都是哪个城市？",
		answers: ["巴黎", "伦敦", "柏林", "马德里"],
		correctAnswer: 0
	},
	{
		question: "2. 世界上最大的国家是哪个？",
		answers: ["俄罗斯", "加拿大", "中国", "美国"],
		correctAnswer: 0
	},
	{
		question: "3. 日本的货币是什么？",
		answers: ["日元", "美元", "欧元", "英镑"],
		correctAnswer: 0
	},
	{
		question: "4. 世界上最高的山峰是哪座？",
		answers: ["珠穆朗玛峰", "K2峰", "干城章嘉峰", "洛子峰"],
		correctAnswer: 0
	},
	{
		question: "5. 计算$$\\int_0^1 x^2 dx$$的值。",
		answers: ["1/3", "1/4", "1/5", "1/6"],
		correctAnswer: 0
	},
	{
		question: "6. 下面哪个动物的名字是中文？",
		answers: ["狗", "猫", "马", "大象"],
		correctAnswer: 0
	}
];

// 随机生成问题和答案的顺序
var order = [];
for (var i = 0; i < questions.length; i++) {
	order.push(i);
}
order.sort(function() {
	return Math.random() - 0.5;
});

// 生成问题和答案的HTML代码
var html = "";
for (var i = 0; i < order.length; i++) {
	var q = questions[order[i]];
	html += "<p>" + q.question + "</p>";
	for (var j = 0; j < q.answers.length; j++) {
		html += "<input type='radio' name='q" + order[i] + "' value='" + j + "'>" + q.answers[j] + "<br>";
	}
}

// 将HTML代码插入到页面中
document.getElementById("questions").innerHTML = html;

// 提交表单时计算分数并显示结果
function submitForm() {
	var name = document.getElementById("name").value;
	// var score = 0;
	// for (var i = 0; i < order.length; i++) {
	// 	var q = questions[order[i]];
	// 	var answer = document.querySelector("input[name='q" + order[i] + "']:checked");
	// 	if (answer && answer.value == q.correctAnswer) {
	// 		score++;
	// 	}
	// }
	// var result = document.getElementById("result");
	// result.innerHTML = name + "，您的得分是" + score + "/" + order.length + "。";
	// result.style.display = "block";
	result.innerHTML = name + "，您的得分是" + '5' + "/" + order.length + "。";
	result.style.display = "block";
	return false;
}
