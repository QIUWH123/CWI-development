let globalTickCounter = 0

ServerEvents.tick(event => {
    globalTickCounter = (globalTickCounter + 1) % 1000
})