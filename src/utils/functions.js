
// This function is used to find a winner inside an array with 9 elements
export function findWinner(boxes) {
    // The following array has all the winning combinations
    // for a 3x3 Tic Tac Toe game
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // To find is our current array (boxes) is winner or not
    // we have to iterate over it looking for winning combinations
    for(let i = 0; i < rows.length; i++){
        // Get the current combination's winning rows
        const [a, b, c] = rows[i];

        // Now check if in our current array those elements
        // are from the same player
        if(boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]){
            // We have a winner!!
            // Let's return it ('x' or 'o')
            return boxes[a];
        }
    }

    // If we don't have winner, we return null
    return null;
}

// This function is used to check if all the boxes are clicked
// So every element in the given array is not null
export function areAllBoxesClicked(boxes){
    // Let's declare a var to store the current number of clicked boxes
    let count = 0;

    // Now let's iterate over every box to check them!
    boxes.forEach(function(item){
        // Check if the box is not null
        // Remember we initialized the array setting every element as null
        // So if the element is not null, a player must have clicked on it
        if(item !== null){
            // If player clicked on it, increase the count by 1
            count+=1;
        }
    });

    // Check if all boxes were clicked
    if(count === 9) {
        return true;
    }

    return false;
}