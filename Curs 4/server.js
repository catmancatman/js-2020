var webSocketServer = require('ws')
ws = new webSocketServer.Server({
    port: 40510
})
ws.on("connection", function(ws){
    ws.on('message', function(message){
        console.log('mesaj primit de la client: ' + message)
    })

    ws.send("asta e un mesaj din partea serverului catre client ")
    ws.send("Asta este un mesaj din partea serverului catre client")

    setInterval(
        () => ws.send("Asta este un mesaj din partea serverului catre client"), 1000
    )
})