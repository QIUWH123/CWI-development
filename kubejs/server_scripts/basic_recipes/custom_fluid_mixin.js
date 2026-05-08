ServerEvents.recipes(event => {

  function mixin(flowing,nearby,result) {
    event.custom({
      "type": "flowing_block",
      "flowing": flowing,
      "blocks_nearby": [
        nearby
      ],
      "result": {
        "type": "block",
        "block": result
      }
    })
  }

})