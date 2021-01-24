const { rejects } = require("assert")
const { request } = require("http")

const net = require('net')

class Request {
    constructor(option) {
        this.method = option.method || 'get'
        this.port = option.port || '80'
        this.host = option.host
        this.path = option.path || '/'
        this.body = option.body || {}
        if (!this.headers["Content-Type"]) {
            this.headers["Content-Type"] = 'application/x-www-form-urlencoded'
        }
        if (this.headers["Content-Type"] === "application/json") {
            this.bodyText = JSON.stringify(this.body)
        }else if (this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
            this.bodyText = Object.keys(thid.body).map(key => `${key}= ${encodeURIComponent(this.body[key])}`).join('&')
        }
        this.headers["Content-length"] = this.bodyText.length
    }

    send () {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser;
            resolve("")
        })
    }
}


class ResponseParser {
    constructor() {

    }
    receive(string) {
        for(let i = 0; i < string.length; i++) {
            this.receiveChar(string.charAt(i))
        }
    }
    receiveChar(char) {

    }
}
void async function() {
    let request = new Request({
        method: 'POST',
        host: '127.0.0.1',
        port: '8088',
        path: '/',
        headers: {
            ['X-Foo2']: "customed"
        },
        body: {
            name: 'wjy'
        }
    })
    let response = await request.send()
    console.log(response)
}

