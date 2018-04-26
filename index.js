/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var numSites = parseInt(readline());
let sites = [];
for (var i = 0; i < numSites; i++) {
    var inputs = readline().split(' ');
    var siteId = parseInt(inputs[0]);
    var x = parseInt(inputs[1]);
    var y = parseInt(inputs[2]);
    var radius = parseInt(inputs[3]);
    printErr('siteId', siteId, 'x', x, 'y', y);
    sites[i] = { siteId, x, y, radius };
}
const diameterOfGrid = 2165;
let queenCoords = {};
let queenBuilt = false;

printErr('sites', JSON.stringify(sites));

const calcDistance = (site1Coords, site2Coords) => {
    const xDist = (site1Coords.x - site2Coords.x);
    const yDist = (site1Coords.y - site2Coords.y);
    printErr('xDist', xDist, 'yDist', yDist)
    squaredDist = xDist * xDist + yDist * yDist;
    return (Math.sqrt(squaredDist));
}

const findNearestSite = (sites, queenCoords) => {
    const closest = sites.reduce((acc, curr) => {
        const { x, y } = curr;
        const distanceFromQueen = Math.floor(calcDistance(queenCoords, { x, y }));
        printErr('distanceFromQueen', distanceFromQueen, JSON.stringify(acc));
        return distanceFromQueen < acc.distanceFromQueen ? { ...curr, distanceFromQueen } : acc;
    }, { distanceFromQueen: diameterOfGrid });
    printErr('closest', closest);
    return closest;
}

// game loop
while (true) {
    var inputs = readline().split(' ');
    var gold = parseInt(inputs[0]);
    var touchedSite = parseInt(inputs[1]); // -1 if none
    for (var i = 0; i < numSites; i++) {
        var inputs = readline().split(' ');
        var siteId = parseInt(inputs[0]);
        var ignore1 = parseInt(inputs[1]); // used in future leagues
        var ignore2 = parseInt(inputs[2]); // used in future leagues
        var structureType = parseInt(inputs[3]); // -1 = No structure, 2 = Barracks
        var owner = parseInt(inputs[4]); // -1 = No structure, 0 = Friendly, 1 = Enemy
        var param1 = parseInt(inputs[5]);
        var param2 = parseInt(inputs[6]);
    }
    var numUnits = parseInt(readline());
    for (var i = 0; i < numUnits; i++) {
        var inputs = readline().split(' ');
        var x = parseInt(inputs[0]);
        var y = parseInt(inputs[1]);
        var owner = parseInt(inputs[2]);
        var unitType = parseInt(inputs[3]); // -1 = QUEEN, 0 = KNIGHT, 1 = ARCHER
        var health = parseInt(inputs[4]);
        printErr('unitType', unitType, 'x', x, 'y', y, 'owner', owner);
        if (unitType === -1 && owner === 0) {
          queenCoords = { x, y };
        }
    }

    const nearestSite = findNearestSite(sites, queenCoords);
    printErr('nearestSite', JSON.stringify(nearestSite));
    
    if (nearestSite.siteId)
    
    if (touchedSite > -1) {
      if(queenBuilt) {
        print('WAIT');
      } else {
        queenBuilt = true;
        print(`BUILD ${nearestSite.siteId} BARRACKS-KNIGHT`);
      }
    } else {
      print(`BUILD ${nearestSite.siteId} BARRACKS-KNIGHT`);
    }

    // First line: A valid queen action
    // Second line: A set of training instructions
    print(`TRAIN ${nearestSite.siteId}`);
}