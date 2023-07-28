const Thermostat = require('./thermostat');

test('Thermostat starts with an initial temperature of 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
});

test('Thermostat can increase the temperature with up method', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
});

test('Thermostat can decrease the temperature with down method', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
});

// test('Thermostat has power saving mode on by default', () => {
//     const thermostat = new Thermostat();
//     expect(thermostat.getPowerSavingMode()).toBe(true);
// });

test('Thermostat can set power saving mode', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    expect(thermostat.powerSavingMode).toBe(false);
});

test('If powe saving mode is on, the maximum temperature is 25 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
        thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
});

test('If power saving mode is off, the maximum temperature is 32 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 15; i++) {
        thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
});

test('Thermostat can reset the temperature to 20 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
});

test('Thermostat can determine low-usage energy', () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 5; i++) {
        thermostat.down();
    }
    expect(thermostat.getEnergyUsage()).toBe('low-usage');
});

test('Thermostat can determine medium-usage energy', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getEnergyUsage()).toBe('medium-usage');
});

test('Thermostat can determine high-usage energy', () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 10; i++) {
        thermostat.up();
    }
    expect(thermostat.getEnergyUsage()).toBe('high-usage');
});
