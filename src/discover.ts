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
        let vote = document.createElement("td")
        let title = document.createElement("td")
        let discription = document.createElement("td")
        let snipet = document.createElement("td")
        let date = document.createElement("td")
        let views = document.createElement("td")

        title.innerText = b.title
        discription.innerText = b.discription
        let s = b.snipet.slice(0, 20) + "..."
        snipet.innerText = s
        let d = new Date(b.date)
        date.innerText = d.toDateString()

        let v = b.views
        if (v == null) {
            views.innerText = "0"
        } else {
            views.innerText = v
        }

        let upvoteIcon = new Image()
        upvoteIcon.src = "images/ic_vote.png"
        upvoteIcon.width = 16
        upvoteIcon.height = 16
        let upvote = document.createElement("div")
        upvote.style.fontSize = "small"
        upvote.style.color = "lightgray"
        let vo = b.vote
        if (vo == null) {
            upvote.innerText = "0"
        } else {
            upvote.innerText = vo
        }

        vote.append(upvoteIcon)
        vote.append(upvote)

        tr.append(vote)
        tr.append(title)
        tr.append(discription)
        tr.append(snipet)
        tr.append(date)
        tr.append(views)

        addVoteEvent(upvoteIcon, upvote, vo, b._id)

        addTransitionEvent(title, v, b._id)
        addTransitionEvent(discription, v, b._id)
        addTransitionEvent(snipet, v, b._id)
        addTransitionEvent(date, v, b._id)
        addTransitionEvent(views, v, b._id)

        tBody.append(tr)
    }
}

// 遷移イベントを追加
function addTransitionEvent(elm: HTMLElement, v: number | undefined, _id: string) {
    elm.addEventListener("click", () => {

        let dv = 1
        if (v != undefined) {
            dv = v + 1
        }

        const data = {
            _id: _id,
            views: dv
        };
      
          let body = JSON.stringify(data);
      
        fetch('./api/views', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body })

        location.href = "index.html?id=" + encodeURIComponent(_id)
    })

    elm.addEventListener("mouseover", () => {
        elm.style.cursor = "pointer"
    })
}

// Voteイベントを追加
function addVoteEvent(elm: HTMLElement, textElm: HTMLElement, vote: number | undefined, _id: string) {
    elm.addEventListener("click", () => {

        let dv = 1
        if (vote != undefined) {
            dv = vote + 1
        }

        const data = {
            _id: _id,
            vote: dv
        };
      
        let body = JSON.stringify(data);
      
        let promise = fetch('./api/vote', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body })
        
        promise.then(() => {
            textElm.innerText = dv.toString()
        })
    })

    elm.addEventListener("mouseover", () => {
        elm.style.cursor = "pointer"
    })
}

function main() {

    // タイトルを押したとき
    let title = document.getElementById("title_text")
    title.addEventListener("click", () => {
        location.href = "index.html"
    })

    title.addEventListener("mouseover", () => {
        title.style.cursor = "pointer"
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