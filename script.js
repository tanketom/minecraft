function calculate() {
    let planks = parseInt(document.getElementById('planks').value) || 0;
    let slabs = parseInt(document.getElementById('slabs').value) || 0;

    // Calculate the total number of planks needed
    let totalPlanks = planks + Math.ceil(slabs / 2);

    // Calculate the number of tree blocks needed
    let treeBlocks = Math.ceil(totalPlanks / 4);

    // Calculate the number of stacks of tree blocks needed
    let stacks = Math.ceil(treeBlocks / 64);

    document.getElementById('result').innerText = `You need to cut ${stacks} stacks (${treeBlocks} tree blocks) to get ${planks} planks and ${slabs} slabs.`;
}
