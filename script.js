function updatePlanksSlider() {
    let planks = document.getElementById('planks').value;
    document.getElementById('planksSlider').value = planks;
}

function updatePlanksInput() {
    let planksSlider = document.getElementById('planksSlider').value;
    document.getElementById('planks').value = planksSlider;
}

function updateSlabsSlider() {
    let slabs = document.getElementById('slabs').value;
    document.getElementById('slabsSlider').value = slabs;
}

function updateSlabsInput() {
    let slabsSlider = document.getElementById('slabsSlider').value;
    document.getElementById('slabs').value = slabsSlider;
}

function calculate() {
    let planks = parseInt(document.getElementById('planks').value) || 0;
    let slabs = parseInt(document.getElementById('slabs').value) || 0;

    // Calculate the total number of planks needed
    let totalPlanks = planks + Math.ceil(slabs / 2);

    // Calculate the number of tree blocks needed
    let treeBlocks = Math.ceil(totalPlanks / 4);

    // Calculate the number of stacks of tree blocks needed
    let stacks = Math.ceil(treeBlocks / 64);

    // Calculate sticks (2 planks = 4 sticks)
    let sticks = Math.floor(planks / 2) * 4;

    document.getElementById('result').innerText = `You need to cut ${stacks} stacks (${treeBlocks} tree blocks) to get ${planks} planks and ${slabs} slabs. You can also craft ${sticks} sticks.`;
}