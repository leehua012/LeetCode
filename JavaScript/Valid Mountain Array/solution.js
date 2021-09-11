var validMountainArray = function(arr) {
    var tip = 0;
    var maxN = Math.max.apply(Math, arr);
    if (arr[0]==maxN || arr[arr.length-1]==maxN){
        return false;
    }
    if (arr.length>=3){
        for(let i=0; i<arr.length-1;i++){
            if(arr[i]==arr[i+1]){
                return false;
            }
            else if(arr[i]>arr[i+1]){
                tip += 1;
            }
            if(tip>=1 && arr[i]<arr[i+1]){
                return false;
            }
        }
        if(tip>=1){
            return true;
        }
    }
    return false; 
}
