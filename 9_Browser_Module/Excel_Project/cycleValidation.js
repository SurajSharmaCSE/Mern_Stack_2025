// Storage -> 2D Matrix (Basic needed)
let collectedGraphComponentMatrix = [];

let graphComponentMatrix = [];

// for(let i=0;i<rows;i++)
// {
//     let row = [];
//     for(let j=0;j<cols;j++)
//     {
//         // why array -> More than 1 child relation(dependency)
//         row.push([]);
//     }
//     graphComponentMatrix.push(row);
// }

// True -> cyclic, false-> not cyclic
function isGraphCyclic(graphComponentMatrix)
{
    // Dependency -> visited, dfsVisited (2D array)
    let visited = [];  // node visit trace
    let dfsVisited = [] // stack visit trace

    for(let i=0;i<rows;i++)
    {
        let visitedRow = [];
        let dfsVisitedRow = [];
        for(let j=0;j<cols;j++)
        {
            visitedRow.push(false);
            dfsVisitedRow.push(false);
        
        }
        visited.push(visitedRow);
        dfsVisited.push(dfsVisitedRow);
    }

    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<cols;j++)
        {
            if(visited[i][j] == false)
            {
                let response = dfsCycleDetection(graphComponentMatrix, i, j, visited, dfsVisited);
                if(response === true)
                {
                    return true;
                }
            }
            
        }
    }
    return false;
}

function dfsCycleDetection(graphComponentMatrix, srcr, srcc, visited, dfsVisited)
{
    visited[srcr][srcc] = true;
    dfsVisited[srcr][srcc] = true;

    // A1 -> [ [0, 1], [1, 0], [5, 10] ]

    for(let children = 0; children<graphComponentMatrix[srcr][srcc].length;children++)
    {
        let [nbrr, nbrc] = graphComponentMatrix[srcr][srcc][children];
        if(visited[nbrr][nbrc] === false)
        {
            let response = dfsCycleDetection(graphComponentMatrix, nbrr, nbrc, visited, dfsVisited);
            if(response == true)
            {
                return true;
            }
        }
        else if(visited[nbrr][nbrc] === true && dfsVisited[nbrr][nbrc] === true)
        {
            return true;
        }
    }

    dfsVisited[srcr][srcc] = false;
    return false;
}


