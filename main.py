def disp4(a: number, b: number, c: number):
    basic.pause(a)
    for index in range(10):
        basic.show_number(b)
        basic.pause(4900)
def disp3(d: number, e: number, f: number):
    basic.pause(d)
    for index2 in range(10):
        basic.show_number(e)
        basic.pause(4900)
def disp(g: number, h: number, i: number):
    basic.pause(g)
    for index3 in range(10):
        basic.show_number(h)
        basic.pause(4900)
def disp2(j: number, k: number, l: number):
    basic.pause(j)
    for index4 in range(10):
        basic.show_number(k)
        basic.pause(4900)

def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.pause(5000)
    basic.show_icon(IconNames.TSHIRT)
basic.forever(on_forever)

def on_in_background():
    disp(1000, 1, 4000)
control.in_background(on_in_background)

def on_in_background2():
    disp2(2000, 2, 3000)
control.in_background(on_in_background2)

def on_in_background3():
    disp4(4000, 4, 1000)
control.in_background(on_in_background3)

def on_in_background4():
    disp3(3000, 3, 2000)
control.in_background(on_in_background4)
