function ts(arr, target){
    let result = [];
    for(i=0;i<arr.length-1;i++){
        let i_flag = false;
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] == target){
                if(!i_flag){
                    result.push(i);
                    i_flag = true;
                }
                result.push(j);
            }
        }
    }
    return result;
}