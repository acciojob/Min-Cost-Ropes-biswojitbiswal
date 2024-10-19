function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length < 2) {
        return 0;
    }
    

    const minHeap = arr.slice();
    minHeap.sort((a, b) => a - b);

    let totalCost = 0;

    while (minHeap.length > 1) {

        const first = minHeap.shift();
        const second = minHeap.shift();

        const cost = first + second;
        totalCost += cost;

        
        minHeap.push(cost);
        minHeap.sort((a, b) => a - b);

    return totalCost;
  
}

module.exports=mincost;
