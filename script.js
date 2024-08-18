const body = document.querySelector("body")
const script = document.querySelector("script")
const container = document.createElement("div")
container.setAttribute("class", "container")
body.insertBefore(container, script)

for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div")
    row.setAttribute("class", "row")
    container.appendChild(row)
    for (let i = 1; i <=16; i++) {
        const column = document.createElement("div")
        column.setAttribute("class", "column")
        row.appendChild(column)
    }
}

