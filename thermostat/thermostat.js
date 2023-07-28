class Thermostat {
    constructor() {
        this.temperature = 20;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        this.temperature +=1;
        if (this.powerSavingMode) {
            if (this.temperature > 25) {
                this.temperature = 25;
        }
    } else {
            if (this.temperature > 32) {
                this.temperature = 32;
        }
    }
}

    down() {
        this.temperature -=1
        if (this.temperature < 10) {
            this.temperature = 10;
        }
    }

    setPowerSavingMode(mode) {
        this.powerSavingMode = mode;
        if (this.powerSavingMode && this.temperature >25) {
            this.temperature = 25;
        }
    }

    reset() {
        this.temperature = 20;
    }

    getEnergyUsage() {
        if (this.temperature < 18) {
            return 'low-usage';
        } else if (this.temperature <= 25) {
            return 'medium-usage';
        } else {
            return 'high-usage';
        }
    }


    getPowerSavingMode() {
        return this.powerSavingMode;
    }
}
module.exports = Thermostat;