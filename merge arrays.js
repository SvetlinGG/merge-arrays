function merge(arr1,arr2){
    let mergeArr = [];
    let sum =0;
    for ( let i=0; i <arr1.length; i ++){
        let num1 = Number(arr1[i]);
        let num2 = Number(arr2[i]);
        let numStr1 = arr1[i];
        let numStr2 = arr2[i];
        if ( i % 2 ===0){
            sum = num1 + num2;
            mergeArr.push(sum);
        }else {
            sum = numStr1 + numStr2;
            mergeArr.push(sum);
            
        }
        
    }
    
        
    console.log(mergeArr.join(' - ')); 


}
merge(['5', '15', '23', '56', '35'],
     ['17', '22', '87', '36', '11']);
merge(['13', '12312', '5', '77', '4'],
      ['22', '333', '5', '122', '44']);