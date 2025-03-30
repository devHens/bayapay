let newObject = {
  byId: {},
  byStatus: {
    ALL: [],
    MOVING: [],
    IDLING: [],
    PARKING: [],
    DISCONNECTED: [],
  },
  allIds: [],
  listIds: [],
  //selectedId: state.selectedId,
};

const action = {
  devices: [
    {
      dvid: "A001",
      transitName: "IDLING",
      speed: 0,
      location: "KL",
    },
    {
      dvid: "A002",
      transitName: "IDLING",
      speed: 0,
      location: "PENANG",
    },
    {
      dvid: "A003",
      transitName: "MOVING",
      speed: 10,
      location: "JOHOR",
    },
  ],
};

if (action.devices && action.devices.length > 0) {
  action.devices.map((device) => {
    newObject.byId[device.dvid] = device;

    if (newObject.listIds.includes(device.dvid) === false) {
      newObject.listIds.push(device.dvid);
    }

    if (
      newObject.byStatus[device.transitName] &&
      newObject.byStatus[device.transitName].includes(device.dvid) === false
    ) {
      newObject.byStatus[device.transitName].push(device.dvid);
    }

    if (newObject.allIds.includes(device.dvid) === false) {
      newObject.allIds.push(device.dvid);
    }

    return 0;
  });
}

newObject.byStatus["ALL"] = newObject.allIds;
console.log(JSON.stringify(newObject, null, 2));

// Return the final newObject
