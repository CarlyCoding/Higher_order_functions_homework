const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeys = this.journeys.map((journey) => {
    return journey.startLocation
  });
  return journeys;
};

Traveller.prototype.getJourneyEndLocations = function() {
  const journeys = this.journeys.map((journey) => {
    return journey.endLocation
  });
  return journeys
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys.filter(journey => journey.transport === transport)
    return journeys
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys.filter(journey => journey.distance >= 1000)
    return journeys
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance
  }, 0);

  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // Got stuck on this one, map transport didn't meet 'unique' transport. Would make function with empty list, 
  // then use the transports that were != list and push onto list? 
};

module.exports = Traveller;
