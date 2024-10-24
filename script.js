function minCost(arr){
				if (arr.length <= 1) return 0;

			    let heap = [...arr].sort((a, b) => a - b);
			    let totalCost = 0;
			
			    while (heap.length > 1) {
			        let firstMin = heap.shift();
			        let secondMin = heap.shift();
			        
			        let newRope = firstMin + secondMin;
			        totalCost += newRope;
			
			        heap.push(newRope);
			        heap.sort((a, b) => a - b); 
			    }
			
			    return totalCost;
			}

		alert(minCost(arr));
