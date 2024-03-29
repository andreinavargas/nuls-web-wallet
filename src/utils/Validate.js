/**
* 密码验证
* Password verification
* */
export function password(str) {
  //const reg = /(?!^((\d+)|([a-zA-Z]+)|([~!@#\$%\^&\*\(\)]+))$)^[a-zA-Z0-9~!@#\$%\^&\*\(\)]{8,21}$/;
  const reg = /(?!^((\d+)|([a-zA-Z]+)|([`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]+))$)^[a-zA-Z0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]{8,20}$/;
  return reg.test(str)
}
/**
 * 地址验证
 * Address verification
 * */
export function address(str) {
  const reg = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
  return reg.test(str)
}
/**
* 小数（前后八位）
* Decimal (front and rear eight bits)
* */
export function numbers(str) {
  const reg =  /^[+-]?\d+(?:\.\d{1,8})?$/;
  return reg.test(str)
}
// 小数（后六位）
/**
 * 小数（前后八位）
 * Decimal (6 bits)
 * */
export function numbers2(str) {
  const reg =  /^[+-]?\d+(?:\.\d{1,6})?$/;
  return reg.test(str)
}
/**
 * 服务地址验证
 * Service address validation
 * */
export function serviceAddress(str) {
  // const reg =  /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
  const reg =  /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)/;
  return reg.test(str)
}
//只允许输入汉字，字母，数字
export function chinese(str) {
  // const reg =  /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
  const reg =  /[^\u4e00-\u9fa5a-zA-Z0-9]/;
  return reg.test(str)
}
