// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1400140000000000000000000000000000000000000000000000000000000000000000000000000000000000060505050505050505050505050505050505050403060505050505050505050505050505050504030303060505050505050505050505050505040303030303091010101010101010101010100a0303030303030f1111111111111111111111110e0303030303030f1111111111111111111111110e0303030303030f1111111111111111111111110e0101010303030f1111111111111111111111110e0303030303030f1111111111111111111111110e0303030303030f1111111111111111111111110e0303030303030f1111111111111111111111110e0303030303030f1111111111111111111111110e0202020303030f1111111111111111111111110e0303030303030f1111111111111111111111110e0303030303030c0d0d0d0d0d0d0d0d0d0d0d0d0b030303030307050505050505050505050505050508030303070505050505050505050505050505050508030705050505050505050505050505050505050508`, img`
22222222222222222222
22222222222222222222
....................
....................
....................
...22222222222222...
...22222222222222...
...22222222222222...
...22222222222222...
...22222222222222222
...22222222222222...
...22222222222222...
...22222222222222...
...22222222222222...
...22222222222222...
...22222222222222...
...22222222222222...
....................
....................
....................
`, [myTiles.transparency16,sprites.builtin.field0,sprites.builtin.field1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.skillmap.islandTile0,sprites.skillmap.islandTile2,sprites.skillmap.islandTile8,sprites.skillmap.islandTile6,sprites.skillmap.islandTile7,sprites.skillmap.islandTile5,sprites.skillmap.islandTile3,sprites.skillmap.islandTile1,sprites.skillmap.islandTile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
