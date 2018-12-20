var line = ""; 

function click0 () {
	$("#screen").html(line += "0");
};

function click1 () {
	$("#screen").html(line += "1");
};

function click2 () {
	$("#screen").html(line += "2");
};

function click3 () {
	$("#screen").html(line += "3");
};

function click4 () {
	$("#screen").html(line += "4");
};

function click5 () {
	$("#screen").html(line += "5");
};

function click6 () {
	$("#screen").html(line += "6");
};

function click7 () {
	$("#screen").html(line += "7");
};

function click8 () {
	$("#screen").html(line += "8");
};

function click9 () {
	$("#screen").html(line += "9");
};

function clickAdd () {
	$("#screen").html(line += "+");
};

function clickSubtract () {
	$("#screen").html(line += "-");
};

function clickMultiply () {
	$("#screen").html(line += "*");
};

function clickDivide () {
	$("#screen").html(line += "/");
};

function clickBksp () {
	line = line.slice(0,line.length - 1);
	$("#screen").html(line);
};

function clickClear () {
	line = "";
	$("#screen").html(line);
};
function clickOpen () {
	$("#screen").html(line += "[");
};
function clickClose () {
	$("#screen").html(line += "]");
};
function clickPoint () {
	$("#screen").html(line += ".");
};

function clickEnter () {
	for (i = 0; i < line.length; i++) {
		if (line[i] == '[') {
			line[i] = '(';
		} if (line[i] == ']') {
			line[i] = ')';
		}
	}

	line = line + "<br>" + eval(line) + "<br>";
	$("#screen").html(line);
	line = ""

};
