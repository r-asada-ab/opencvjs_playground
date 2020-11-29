// テーブルをリセットする
function resetTable() {
    let tBody = document.getElementById("table_body")
    while (tBody.hasChildNodes()) {
        tBody.removeChild(tBody.lastChild);
    }
}

// テーブルを作成する
function createTable(body) {
    let tBody = document.getElementById("table_body")
    for (let i = 0; i < body.length; i++) {
        let b = body[i]
        let tr = document.createElement("tr")
        let title = document.createElement("td")
        let discription = document.createElement("td")
        let snipet = document.createElement("td")
        let date = document.createElement("td")

        title.innerText = b.title
        discription.innerText = b.discription
        let s = b.snipet.slice(0, 20) + "..."
        snipet.innerText = s
        let d = new Date(b.date)
        date.innerText = d.toDateString()

        tr.append(title)
        tr.append(discription)
        tr.append(snipet)
        tr.append(date)

        tr.addEventListener("click", () => {
            location.href = "index.html?id=" + encodeURIComponent(b._id)
        })

        tBody.append(tr)
    }
}

function main() {

    // タイトルを押したとき
    let title = document.getElementById("title_text")
    title.addEventListener("click", () => {
        location.href = "index.html"
    })

    // 検索ボタンを押したとき
    let searchButton = document.getElementById("search_button")
    searchButton.addEventListener("click", () => {
        let searchBox = <HTMLInputElement>document.getElementById("textbox")

        const data = {
            query: searchBox.value
        };
      
        let body = JSON.stringify(data);
      
        let promise = fetch('./api/find', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body })
    
        promise.then(async (resolve) => {
            let body = await resolve.json()
            resetTable()
            createTable(body)
        })
    })
}

main()