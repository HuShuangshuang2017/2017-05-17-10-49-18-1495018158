module.exports = function main() {
    document.write("</b>请按第一位数大于第二位数输入</b>");
	var a1=prompt("请输入第一位数:","0");
	var a2=prompt("请输入第一位数:","0");
	var qr=a1%a2;
	document.write("给定"+a1+"和"+a2+","+"返回"+qr);
};
