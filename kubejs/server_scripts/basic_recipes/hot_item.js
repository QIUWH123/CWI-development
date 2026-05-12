PlayerEvents.tick(event => {
  const { player, level } = event;
  if (player.age % 20 != 0) return;
  if (!player.isAlive() || player.isCreative() || player.isSpectator()) return;
  const hasLavaBucket = player.inventory
    .asContainer()
    .hasAnyMatching(item => item.id == "minecraft:lava_bucket");
  if (hasLavaBucket) {
    const damageSources = level.getDamageSources();
    player.attack(damageSources.onFire(), 0.5);
  }
});