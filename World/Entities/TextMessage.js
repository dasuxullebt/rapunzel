var TextMessage = function (world, tile, message) {
    PressurePlate.call(this, world, tile);
    this.type = 'TextMessage';
    this.message = message;
};
