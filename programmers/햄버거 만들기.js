function solution(ingredient) {
    let count = 0;
    let location = 0;
    for (let i = 0; i < ingredient.length - 3; i++) {
        location = ingredient.indexOf(1); 
        if (ingredient[i] == 1 && ingredient[i+1] == 2 && ingredient[i+2] == 3 && ingredient[i+3] == 1) {
            ingredient.splice(i, 4);
            count++;
            if (location == ingredient[i])
                i = i-1;
            else if (location != ingredient[i])
                i = location-1;
        }
    }
    return count;
}
//시간초과 && 실패 
