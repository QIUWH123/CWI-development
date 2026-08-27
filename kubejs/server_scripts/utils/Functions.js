function random(min, max) {
    return Math.random() * (max - min) + min
}

function desaturateHex(hex, amount) {

    let num = parseInt(hex.replace("#", ""), 16)
    let r = (num >> 16) & 255
    let g = (num >> 8) & 255
    let b = num & 255

    let avg = (r + g + b) / 3

    r = Math.round(r + amount * (avg - r))
    g = Math.round(g + amount * (avg - g))
    b = Math.round(b + amount * (avg - b))

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}