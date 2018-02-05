const testData1 = [1,2,3,4,5];
const testData2 = ['a','b','c','d','e'];

function zipList(list1, list2){
  let merged = [];
  for(let i = 0; i < list1.length; i++){
    merged.push(list1[i],list2[i]);
  }
  return merged;
}

console.log(zipList(testData1,testData2));

function zipListTheEasyWay(list1, list2){
  const merged = _.flatten(_.zip(list1,list2));
  return merged;
}

console.log(zipListTheEasyWay(testData1,testData2));