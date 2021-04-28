// let list: number[] = [1, 2, 3];
// //循环遍历方式
// for(let i:number = 0;i < list.length;i++)
// {
//     console.log(list[i]);
// }
// for(let i in list){
//     console.log(list[i]);
// }
// for(let item of list){
//     console.log(item);
// }
// list.every( ( item, idx,array) =>{ 
//     console.log(array[idx]); 
//     return true;  //返回false,将会停止遍历
// });
// list.some( (item,idx,array)=>{
//     console.log(array[idx]);
//     return false;  // 返回true就会停止遍历
// })
// list.forEach((item,idx,array)=>{
//     console.log(array[idx]);
// })
// let index = 0;
// while(index < 3){
//     console.log(list[index]);
//     index = index + 1;
// };
// index = 0;
// do{
//     console.log(list[index]);
//     index = index + 1;
// }while(index < 3);
// //追加元素
// list.push(4);
// console.log(list); //[1,2,3,4]
// //弹出元素
// list.pop();
// console.log(list);  //[1,2,3]
// //元素拼接
// let strList = list.join(",")
// console.log(strList);  //1,2,3
// list.reverse();  //反转列表
// console.log(list); //[3,2,1]
// let mergeList = list.concat(list,list); //合并数组
// console.log(mergeList);
// let firstItem = list.shift();  //移除第一个元素并返回
// console.log(firstItem);  //3
// console.log(list);  //[2,1]
// let subList = list.slice(0,1);   //获取元素的子集 左闭右开区间
// console.log(subList);   //[2,1]
// list.push(1,3,65,7,9)
// //从小到大排序
// list.sort((a:number,b:number)=>{
//     if(a > b)
//         return 1;
//     else
//         return -1;
// })
// console.log(list)
// list.splice(1,1)  //指定开始位置和数量删除
// console.log(list)  //[ 1, 2, 3, 7, 9, 65 ]
// list.splice(1,2,7,9)  //指定开始位置和数量删除，并替换删除的数字
// console.log(list)  //[ 1, 7, 9, 7, 9, 65 ]
// list.unshift(0,99);// 插入数组的首位数字序列
// console.log(list)//[ 0,99,1, 7, 9, 7, 9, 65 ]
// //查找某个元素在数组中的索引,可以指定查找的开始位置,如果找到则直接返回,即使有相同的元素
// console.log("find item index = ",list.indexOf(65,0));
// console.log("find item index = ",list.indexOf(9,0));
// console.log("find item index = ",list.indexOf(9,5));
// //[TODO] 暂时不清楚为什么添加了fromIndex之后会出现查找不到的问题
// console.log("find last item idx = ",list.lastIndexOf(9))
// //将list转换成string输出
// console.log(list.toString())
// //将list转换成string输出,如果元素是obj的话,调用obj的toLocaleString
// console.log(list.toLocaleString())
// let mapInfo = {};
// mapInfo["APPLE"] = 1;
// mapInfo["BANANER"] = true;
// mapInfo["XIGUA"] = "3";
// for(let key in mapInfo){
//     console.log(key,mapInfo[key]);
// }
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log(color); // 2