function disp4 (a: number, b: number, c: number) {
    basic.pause(a)
    for (let index = 0; index < 10; index++) {
        basic.showNumber(b)
        basic.pause(4900)
    }
}
function disp3 (d: number, e: number, f: number) {
    basic.pause(d)
    for (let index = 0; index < 10; index++) {
        basic.showNumber(e)
        basic.pause(4900)
    }
}
function disp (g: number, h: number, i: number) {
    basic.pause(g)
    for (let index = 0; index < 10; index++) {
        basic.showNumber(h)
        basic.pause(4900)
    }
}
function disp2 (j: number, k: number, l: number) {
    basic.pause(j)
    for (let index = 0; index < 10; index++) {
        basic.showNumber(k)
        basic.pause(4900)
    }
}
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
    basic.showIcon(IconNames.TShirt)
})
control.inBackground(function () {
    disp(1000, 1, 4000)
})
control.inBackground(function () {
    disp2(2000, 2, 3000)
})
control.inBackground(function () {
    disp3(3000, 3, 2000)
})
control.inBackground(function () {
    disp4(4000, 4, 1000)
})
