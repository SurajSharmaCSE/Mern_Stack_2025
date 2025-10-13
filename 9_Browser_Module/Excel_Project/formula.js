for(let i=0;i<rows;i++)
{
    for(let j=0;j<cols;j++)
    {
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener("blur", (e)=>{
            let address = addressBar.value;
            let [activeCell, cellProp] = getCellAndCellProp(address);
            let enteredData = activeCell.innerText;

            if(enteredData === cellProp.value) return;

            cellProp.value = enteredData;

            // if data modfies remove P_C relation, formula empty, update children with new hardcoded (modu) value
            cellProp.formula = "";
            updateChildrenCells(address)
        })
    }
}

let formulaBar = document.querySelector(".formula-bar");
formulaBar.addEventListener("keydown",(e)=>{
    let inputFormula = formulaBar.value;
    if(e.key === "Enter" && inputFormula)
    {
        // if change in formula, break old p-c relation, evaluate new formula, add new P-C relation
        let address = addressBar.value;
        let [cell, cellProp] = getCellAndCellProp(address);
        if(inputFormula !==cellProp.formula)
        {
            removeChildFromParent(cellProp.formula);
        }

        addChildToGraphComponent(inputFormula, address)
        //check formula is cyclic or not, then only evaluate
        // True -> cycle, false -> Not Cyclic
        let isCyclic = isGraphCyclic(graphComponentMatrix);
        if(isCyclic === true)
        {
            alert("your formula is cyclic");
            removeChildfromGraphComponent(inputFormula, address);
            return;
        }

        let evaluatedvalue = evaluateFormula(inputFormula);

       

        // To update UI and cellprop in DB
        setCellUIAndCellProp(evaluatedvalue, inputFormula, address);
        addChildParent(inputFormula);
        console.log(sheetDB);

    }
})

function addChildParent(formula)
{
    let childAddress = addressBar.value;
    let encodedFormula = formula.split(" ");

    for(let i=0;i<encodedFormula.length;i++)
    {
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if(asciiValue >=65 && asciiValue<=90)
        {
            let [parentCell, parentCellProp] = getCellAndCellProp(encodedFormula[i]);
            parentCellProp.children.push(childAddress); 
        }
    }
}
function updateChildrenCells(parentAddress) {
    let [parentCell, parentCellProp] = getCellAndCellProp(parentAddress);
    let children = parentCellProp.children;

    for (let i = 0; i < children.length; i++) {
        let childAddress = children[i];
        let [childCell, childCellProp] = getCellAndCellProp(childAddress);
        let childFormula = childCellProp.formula;

        let evaluatedValue = evaluateFormula(childFormula);
        setCellUIAndCellProp(evaluatedValue, childFormula, childAddress);
        updateChildrenCells(childAddress);
    }
}

function removeChildFromParent(formula)
{
    let childAddress = addressBar.value;
    let encodedFormula = formula.split(" ");
    for(let i=0;i<encodedFormula.length;i++)
    {
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if(asciiValue >= 65 && asciiValue <=90)
        {
            let [parentCell, parentCellProp] = getCellAndCellProp(encodedFormula[i]);
            let idx = parentCellProp.children.indexOf(childAddress);
            parentCellProp.children.splice(idx,1);
        }
    }
}

function addChildToGraphComponent(formula, childAddress)
{
    let [crid, ccid] = decodeRIDCIDAddress(childAddress);
    let encodedFormula = formula.split(" ");
    for(let i=0;i<encodedFormula.length;i++)
    {
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if(asciiValue >=65 && asciiValue<=90)
        {
            let [prid, pcid] = decodeRIDCIDAddress(encodedFormula[i])
            // B1:A1 + 10
            // rid -> i, cid -> j
            graphComponentMatrix[prid][pcid].push([crid, ccid]);
        }
    }
}

function removeChildfromGraphComponent(inputFormula, address)
{
    let [crid, ccid] = decodeRIDCIDAddress(childAddress);
    let encodedFormula = formula.split(" ");
    for(let i=0;i<encodedFormula.length;i++)
    {
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if(asciiValue >=65 && asciiValue<=90)
        {
            let [prid, pcid] = decodeRIDCIDAddress(encodedFormula[i])
            
            graphComponentMatrix[prid][pcid].pop();
        }
    }
}


function evaluateFormula(formula)
{
    let encodedFormula = formula.split(" ");
    for(let i=0;i<encodedFormula.length;i++)
    {
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if(asciiValue >=65 && asciiValue<=90)
        {
            let [cell, cellProp] = getCellAndCellProp(encodedFormula[i]);
            encodedFormula[i] = cellProp.value;
        }
    }

    let decodedFormula = encodedFormula.join(" ");
    return eval(decodedFormula);
}

function setCellUIAndCellProp(evaluatedValue, formula, address)
{
    let [cell, cellProp] = getCellAndCellProp(address);

    //UI update
    cell.innerText = evaluatedValue;
    // DB update
    cellProp.value = evaluatedValue;
    cellProp.formula = formula;



}