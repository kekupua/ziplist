const testData1 = [1,2,3,4,5];
const testData2 = ['a','b','c','d','e'];

function zipList(list1, list2){
  let merged = [];
  let j = 0;
  for(let i = 0; i < list1.length; i++){
    merged[j] = list1[i];
    j++;
    merged[j] = list2[i];
    j++;
  }
  return merged;
}

console.log(zipList(testData1,testData2));

function zipListTheEasyWay(list1, list2){
  let merged = [];
  let index = 0;
  _.each(list1, function(element){
    merged.push(element);
    merged.push(list2[index]);
    index++;
  });
  return merged;
}

console.log(zipListTheEasyWay(testData1,testData2));