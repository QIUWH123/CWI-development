ServerEvents.tags('item', event => {
    event.add('kubejs:no_gravity_items', 'clanginghowl:extraterrestrial_energy_crystal');
});

EntityEvents.spawned('item', event => {
  let entity = event.entity;
  if (entity.item.hasTag('kubejs:no_gravity_items')) {
    entity.setNoGravity(true);
    startFloating(entity);
  }
});

function startFloating(entity) {
  if (!entity.isAlive()) return;
  entity.server.scheduleInTicks(10, function(callback) {
    if (!entity.isAlive()) return;
    entity.age = 0;
    let floatY = Math.sin(entity.tickCount * 0.1) * 0.015;
    entity.setDeltaMovement(0, floatY, 0);
    if (entity.isAlive()) {
      startFloating(entity);
    }
  });
}