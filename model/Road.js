export default class Road {

    constructor (id, maintenanceCost) {
        this._id = id;
        this._maintenanceCost = maintenanceCost;
    }

    // ======= GETTERS =======

    get id () { 
        return this._id; 
    }

    get maintenanceCost () { 
        return this._maintenanceCost; 
    }

    // ======= SETTERS =======

    set id (newId) { 
        this._id = newId; 
    }

    set maintenanceCost (newMaintenanceCost) { 
        this._maintenanceCost = newMaintenanceCost; 
    }
    
}