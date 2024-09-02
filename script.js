const body = document.querySelector("body")
const script = document.querySelector("script")
const gridResize = document.createElement("button")
const container = document.createElement("div")

function makeContainer() {
    container.setAttribute("class", "container")
    body.insertBefore(container, script)
}

function removeContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function createGrid(height = 16, width = 16) {
    for (let i = 1; i <= height; i++) {
        const row = document.createElement("div")
        row.setAttribute("class", "row")
        container.appendChild(row)
        for (let i = 1; i <= width; i++) {
            const column = document.createElement("div")
            column.setAttribute("class", "column")
            row.appendChild(column)
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "blue";
            })
        }
    }
}

makeContainer()
createGrid()

gridResize.textContent = "Resize grid"
body.insertBefore(gridResize, container)

gridResize.addEventListener("click", () => {
    let getHeight = prompt("Please enter height size", "limited to 100")
    while (getHeight > 100) {
        getHeight = prompt("Please enter height size", "limited to 100")
    }
    let getWidth = prompt("Please enter width size", "limited to 100")
    while (getWidth > 100) {
        getWidth = prompt("Please enter width size", "limited to 100")
    }
    if (getHeight === null && getWidth === null) {
        getHeight = 16
        getWidth = 16
    } else if (getHeight === null) {
        getHeight = 16
    } else if (getWidth === null) {
        getWidth = 16
    }
    removeContainer()
    createGrid(getHeight, getWidth)
})